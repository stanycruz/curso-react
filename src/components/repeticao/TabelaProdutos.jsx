import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const produtosList = produtos.map(produto => {
        return (
            <tr key={produto._id}>
                <td>{produto._id}.</td>
                <td>{produto.nome}:</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>
            {produtosList}
        </table>
    )
}