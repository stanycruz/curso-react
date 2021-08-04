import './Mega.css'
import React, { useState } from 'react'

export default props => {
    const [qtd, setQtd] = useState(props.quantidade)
    const jogos = []

    const gerarNumero = existentes => {
        let novoNumero = parseInt(Math.random() * 59, 10) + 1
        if (existentes.indexOf(novoNumero) != -1)
            novoNumero = gerarNumero(existentes)
        return novoNumero
    }

    const chaveExistente = chave => {
        let chaves = jogos.map(chv => chv.join())
        return chaves.indexOf(chave.join()) != -1
    }

    const gerarLista = () => {
        for (let i = 0; i < qtd; i++) {
            let numeros = []
            while (numeros.length < 6) {
                numeros.push(gerarNumero(numeros))
            }
            numeros = numeros.sort()
            chaveExistente(numeros) ? qtd++ : jogos.push(numeros)
        }
        return jogos
    }

    const inicial = <li>{Array(6).fill(0).join(' ')}</li>
    const final = gerarLista().map((seq, i) => {
        return (
            <li key={i}>
                {seq.join(' ')}
            </li>
        )
    })

    const [surpresinha, setSurpresinha] = useState(inicial)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <div>
                <label htmlFor="">Quantidade de jogos</label>
                <input
                    min="1"
                    max="10"
                    type="number" value={qtd}
                    onChange={e => {
                        setQtd(+e.target.value)
                        //setSurpresinha(final)
                    }}
                />
            </div>
            <button onClick={_ => setSurpresinha(final)}>Gerar Números</button>
            <ul style={{ listStyle: 'none' }}>
                {surpresinha}
            </ul>
        </div>
    )
}