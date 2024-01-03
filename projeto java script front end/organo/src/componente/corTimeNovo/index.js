import "./CorTimeNovo.css"

const ListaCor =(props)=>{

  const mudarCorDoTime = (evento) =>{
    props.aoAlterado(evento.target.value)
}

return(
  <section>
    <p>Insira a cor desejada</p>
    <input type='color' className='cor' onChange={mudarCorDoTime} value={props.corTime}/>
  </section>
)
}

export default ListaCor