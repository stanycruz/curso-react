import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>
    <div id="app">
        <Aleatorio
            min={1}
            max={60}
        />
        <h1>Fundamentos React (Arrow _)</h1>
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Stany Cruz" nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
