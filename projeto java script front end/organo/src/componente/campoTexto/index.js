
import './campoTexto.css'

const CampoTexto = (props)=>{  
  const nomeCaixa = `${props.placeholder}...`

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
  }


    return(
      <div className="campo-texto">
          <label>{props.label}</label>
          <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={nomeCaixa}/>
      </div>
      
    )
}

export default CampoTexto