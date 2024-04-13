import './cardProjeto.css'

export const CardProjeto = (props) => {
  return (
    <div className='card'>
      <img
        src={props.img}
        alt='cozinha moderna'
        className='card__img'
      />
      <div className='card__texto_container'>
        <div className='card__texto'>
          <p className='card__titulo'>{props.titulo}</p>
          <p className='card__subtitulo'>{props.subtitulo}</p>
        </div>
        <a href={props.link}>
          <img 
            src='/imagens/arrow_icon.png'
            alt='icone de setas'
          />
        </a>
      </div>
    </div>
  )
}
