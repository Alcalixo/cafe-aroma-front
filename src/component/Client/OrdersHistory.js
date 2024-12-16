import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useAuth } from "../../service/AuthContext";

function OrdersHistory() {
  const [ordenes, setOrdenes] = useState([]);
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

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-12 col-lg-8 offset-0 offset-lg-2">
          <div className="table-responsive">
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>NRO ORDEN</th>
                  <th>STATUS</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {ordenes.map((order, i) => (
                  <tr key={order._id}>
                    <td>{i + 1}</td>
                    <td>{order.nro_orden}</td>
                    <td>{order.status}</td>
                    <td>
                      ${order.items.reduce((acc, item) => acc + item.precio, 0)}
                    </td>
                    {/* <td>
                      ${new Intl.NumberFormat("es-mx").format(producto.precio)}
                    </td>
                    <td>
                      <img
                        src={producto.img}
                        alt={producto.name}
                        style={{ width: "50px" }}
                      />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersHistory;
