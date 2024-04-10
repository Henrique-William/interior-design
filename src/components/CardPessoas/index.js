import './cardpessoas.css'

export const CardPessoas = (props) => {
  return (
    <div className='card_pessoas__container'>
        <div className='card__perfil'>
            <img 
                src={props.img}
                alt='Foto de perfil'
            />
            <div className='card__perfil__texto'>
                <p className='card__nome'>{props.nome}</p>
                <p className='card__localidade'>{props.local}</p>
            </div>
        </div>
        
        <p className='card__comentario'>{props.comentario}</p>
    </div>
  )
}
