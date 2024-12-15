import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function DarmeDeBaja() {
  const MySwal = withReactContent(Swal);
  return MySwal.fire({
    title: `¿Está seguro que desea eliminar su cuenta?`,
    icon: "question",
    text: "El proceso no es reversible",
    showCancelButton: true,
    confirmButtonText: "Sí, Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      //   dispatch(deleteProducto(_id));
      Swal.fire("Eliminado", "Su cuenta ha sido eliminada", "success");
      //   dispatch(fetchProductos());
    }
  });
}

export default DarmeDeBaja;
