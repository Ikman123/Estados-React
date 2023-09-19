import './indicador'

function Fecha(props) {
  const Fecha = new Date()

  console.log(Fecha);
  function obtFecha(Fecha){
    Fecha.setDate(Fecha.getDate() + props.dias)
    return
  }
  return (
    <>
      <h1>LA FECHA BUSCADA ES: </h1>
      <h1>{obtFecha}</h1>
    </>
  );
}

export default Fecha;
