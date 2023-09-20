import './styles.css'

function Hora(props) {
    function obtHora(){
        const hora = new Date()
        if(hora.getHours() >= 6 && hora.getHours() <=20){
            return <img src='https://cdn-icons-png.flaticon.com/128/495/495976.png'></img>
        }
        else{
          return <img src='https://cdn-icons-png.flaticon.com/128/547/547433.png'></img>
        }
    }
    return (
      <>
        <i className='container-img'>{obtHora()}</i>
      </>
    );
  }
  
  export default Hora;
  