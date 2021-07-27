import React from 'react'

export default props => {
    const max = props.max
    const min = props.min

    return (
        <div>
            Número aleatório entre 1 e 10 é
            <strong> { Math.floor(Math.random() * (max - min) + min) }</strong>
        </div>
    )
}