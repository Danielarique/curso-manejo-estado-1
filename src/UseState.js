import React from "react";

function UseState(props){

    const [error, setError] = React.useState(false);
    return (
        <div>
            <h2>
                Eliminar {props.name}
            </h2>

            <p>Por favor, escribe el código de seguridad.</p>
            {error && (
                <p>Error: el codigo es incorrecto</p>
            )}
            <input placeholder="Codigo de seguridad"/>
            <button onClick={()=>setError(!error)}>Comprobar</button>
        </div>
    )
}

export {UseState}