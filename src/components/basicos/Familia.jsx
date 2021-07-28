import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Diva" sobrenome={props.sobrenome} />
            <FamiliaMembro nome="José" {...props} />
            <FamiliaMembro nome="Stany" sobrenome="Cruz" />
        </div>
    )
}