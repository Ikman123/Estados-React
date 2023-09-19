import './indicador'

function Fecha({dias}) {

  function obtFecha(){
    const Fecha = new Date()
    Fecha.setDate(Fecha.getDate() + dias)
    const dia = Fecha.getDate()
    console.log(dia)
    return <h1>Hoy es {dia} del {Fecha.getMonth() + 1}</h1>
  }
  return (
    <>
      <h1>LA FECHA BUSCADA ES: </h1>
      <h1>{obtFecha()}</h1>
    </>
  );
}

export default Fecha;
