import { Children, useState } from 'react';

function Contador({ Contador }) {

    let [ count, setCount ] = useState(0)
    
    const FuncionContador = () => {
        setCount(count + 1)
        if(count >= 10){
            alert("No hay este stock");
            setCount(count = 0);
        }
    }
    const FuncionRestar = () => {
        setCount(count - 1)
        if(count <= 1){
            alert("No hay este stock");
            setCount(count = 0);
        }
    }
    
    return(
        <>
            <div className="container">
                <div>
                    {Contador}
                    <button type="button" className="btn btn-dark col-md-2 p-2 mx-2"><label>{count}</label></button>
                </div>
                <div className="row">
                        <button type="button" className="btn btn-primary col-md-1 p-2 mx-2" onClick={FuncionContador}>Sumar</button>
                        <button type="button" className="btn btn-danger col-md-1 p-2 mx-2" onClick={FuncionRestar}>Restar</button>
                </div>
            </div>
        </>
    )

}


export default Contador;