import './Formulario.css'
import { useState } from 'react'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import ListaCor from '../corTimeNovo'

const Formulario = (props) =>{


const [nome, setNome]= useState('')
const [cargo, setCargo]= useState('')
const [imagem, setImagem]= useState('')
const [time, setTime]= useState('')
const [nomeTime, setNomeTime]= useState('')
const [corTime, setCorTime]= useState('')


const aoSalvar = (evento)=>{
  evento.preventDefault()
  props.aoColaboradorCadastrado({
    nome,
    cargo,
    imagem,
    time
  }
)

 
 setNome('')
 setCargo('') /** a ordem é importante  */
 setImagem('')
 setTime('')
}

const aoCadastrarTime = (evento) =>{
  evento.preventDefault()
  props.aoCadastrarTime({
     nome: nomeTime,
     cor: corTime
    })
  }

return(
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
          <h2>Prencha os dados para criar o card do colaborador</h2>
        <CampoTexto  
          label="nome"   
          placeholder ="digite seu nome" 
          obrigatorio={true}
          valor={nome}
          aoAlterado={valor => setNome(valor)}
          />
        <CampoTexto   
         label="cargo" 
          placeholder ="digite seu cargo" 
          obrigatorio={true}
          valor={cargo}
          aoAlterado={valor=> setCargo(valor)}
          />
        <CampoTexto   
         label="imagem" 
         placeholder ="digite o endereço da imagem"
         valor={imagem}
         aoAlterado={valor=> setImagem(valor)}
         />
        <ListaSuspensa
        itens={props.times} 
        obrigatorio={true}
        valor={time}
        aoAlterado={valor=> setTime(valor)}  
        />
        
        <Botao>
          Criar card
        </Botao>
        </form>
        <form onSubmit={aoCadastrarTime}>
          <h2>Prencha os dados para criar o card de time.</h2>
        <CampoTexto  
          label="nome"   
          placeholder ="digite seu nome do time." 
          obrigatorio
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
          />
       <ListaCor
       valor={corTime}
       aoAlterado={valor => setCorTime(valor)}/>
        <Botao>
          Criar time
        </Botao>
        </form>
    </section>
   )
}

export default Formulario