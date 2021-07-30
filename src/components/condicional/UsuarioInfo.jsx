import React from 'react'
import If from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{usuario.nome}</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Olá <strong>usuário</strong>!
            </If>
        </div>
    )
}