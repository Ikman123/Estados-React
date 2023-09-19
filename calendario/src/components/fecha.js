import './indicador'

function Fecha(steps) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + steps); 
  return (
    <>
        <span>{fecha}</span>
    </>
  );
}

export default Fecha;
