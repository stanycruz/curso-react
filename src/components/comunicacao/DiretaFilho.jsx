import React from 'react'

export default props => {
    return (
        <div>
            <spam>{props.nome} </spam>
            <spam><strong>{props.idade}</strong> </spam>
            <spam>{props.nerd ? 'Verdadeiro' : 'Falso'}!</spam>
        </div>
    )
}