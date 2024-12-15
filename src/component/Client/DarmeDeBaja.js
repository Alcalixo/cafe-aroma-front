import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth } from "../../service/AuthContext";

function DarmeDeBaja() {
  const { selfDelete } = useAuth();
  const handleSelfDelete = () => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: `¿Está seguro que desea eliminar su cuenta?`,
      icon: "question",
      text: "El proceso no es reversible",
      showCancelButton: true,
      confirmButtonText: "Sí, Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        selfDelete();
        Swal.fire("Eliminado", "Su cuenta ha sido eliminada", "success");
      }
    });
  };
  return (
    <NavDropdown.Item as={Link} onClick={handleSelfDelete}>
      Darme de Baja
    </NavDropdown.Item>
  );
}

export default DarmeDeBaja;
