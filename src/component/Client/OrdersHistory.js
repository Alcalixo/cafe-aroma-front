import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useAuth } from "../../service/AuthContext";

export default function OrdersHistory() {
  const [ordenes, setOrdenes] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchOrdenes = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/ordenes/admin/byUserId/${user._id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setOrdenes(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrdenes();
  }, [user]);

  const ordenesOrdenadas = ordenes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleRowClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
          <div className="table-responsive">
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-center">NRO ORDEN</th>
                  <th className="text-center">FECHA</th>
                  <th className="text-center">STATUS</th>
                  <th className="text-center">TOTAL</th>
                  <th className="text-center">ACCIÓN</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {ordenesOrdenadas.map((order, i) => (
                  <tr key={order._id} onClick={() => handleRowClick(order)}>
                    <td>{i + 1}</td>
                    <td>{order.nro_orden}</td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                    <td>{order.status}</td>
                    <td>
                      ${(order.items.reduce((acc, item) => acc + item.precio, 0) * 1.21).toFixed(2)}
                    </td>
                    <td className="text-center">
                      <Button variant="primary" onClick={() => handleRowClick(order)}>
                        Ver Detalle
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {selectedOrder && (
            <div className="mt-3 table-responsive">
              <Table bordered>
                <thead>
                  <tr>
                    <th className="text-center">IMAGEN</th>
                    <th className="text-center">NOMBRE</th>
                    <th className="text-center">CANTIDAD</th>
                    <th className="text-center">PRECIO + IVA</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((item, j) => (
                    <tr key={j}>
                      <td style={{ textAlign: "center" }}>
                        <img
                          src={item.product_id.img}
                          alt={item.product_id.name}
                          style={{ width: "50px" }}
                        />
                      </td>
                      <td>{item.product_id.name}</td>
                      <td>{item.cantidad}</td>
                      <td>${(item.precio * 1.21).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
