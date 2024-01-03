import './Colaborador.css'
import {AiFillCloseCircle} from "react-icons/ai"

const Colaborador = (props) => {
  return (<div className='colaborador'> 
      <AiFillCloseCircle 
      size={25} 
      className='deletar' 
      onClick={() => {props.aoDeletar(props.Colaborador.id)}} 
      /*A arrow function é necessaria pois o react so executara quando realmente houver o clicar*/
      />
      <div className='cabecalho' style={props.corDeFundo}>
      <img src={props.imagem} alt={props.nome}/>
      </div>
      <div className='rodape'>
          <h4>{props.nome}</h4>
          <h5>{props.cargo}</h5>
      </div>
  </div>)
}

export default Colaborador