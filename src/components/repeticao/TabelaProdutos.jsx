import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const produtosList = produtos.map((produto, i) => {
        return (
            <tr key={produto._id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto._id}.</td>
                <td>{produto.nome}:</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosList}
                </tbody>

            </table>
        </div>
    )
}