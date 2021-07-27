import React from 'react'

export default props => {
    const { min, max } = props

    return (
        <div>
            Número aleatório entre { min } e { max } é
            <strong> { Math.floor(Math.random() * (max - min) + min) }</strong>
        </div>
    )
}