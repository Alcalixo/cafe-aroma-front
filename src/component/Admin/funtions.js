import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Función para mostrar alertas
export function show_alerta(mensaje, icono, foco = '') {
  onfocus(foco);
  const mySwal = withReactContent(Swal);
  mySwal.fire({
    title: mensaje,
    icon: icono
  });
}

// Función para enfocar un elemento específico
function onfocus(foco) {
  if (foco !== '') {
    document.getElementById(foco).focus();
  }
}
