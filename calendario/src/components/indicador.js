import {useState} from 'react'
import './styles.css'

function Botonera() {
    const [step,setStep] =useState(0);
    const [steps,setSteps] =useState(0);

    function nexNro(){
        setStep(step +1)
    }
    function backNro(){
        setStep(step -1)
    }
    function saltNro(){
        setSteps(steps + step)
    }
    function saltBackNro(){
        setSteps(steps - step)
    }
  return (
    <>
        <div className='indicador-container'>
            <div className='indicador-base'>
                <button onClick={backNro}>anterior</button>
                <br></br>
                <span>{step}</span>
                <button onClick={nexNro}>siguiente</button>
                <br></br>
            </div>
            <div className='indicador-actual'>
                <button onClick={saltBackNro}>anterior</button>
                <br></br>
                <span>{steps}</span>
                <button onClick={saltNro}>siguiente</button>
                <br></br>
            </div>
        </div>
    </>
  );
}

export default Botonera;
