import './Time.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Time = ( props) =>{
  
    return(                   //  isso e o si entao do react aqui esta sendo usado para esconder os times vazios
      props.colaboradores.length > /*ou ? */ 0 && <section className='time' style={{ backgroundColor: hexToRgba(props.cor,'0.6' )}}>
        
        <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.cor}  type='color' className='input-cor'/>
        <div className='colaboradores'>
        {props.colaboradores.map( colaborador =>  {
          return <Colaborador corDeFundo={{backgroundColor: props.cor}} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}  
          colaborador={colaborador}/>
        } )}
       </div>
      </section>
      /* : ''  que e um poerador ternario */
    )
}//   instal hex-to-rgba
export default Time 