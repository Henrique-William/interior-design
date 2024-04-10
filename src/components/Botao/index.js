import './botao.css'

const Botao = (props) => {
  return (
    <div>
      <a className='header__botao'
            href={props.link} 
            target='new'
          >
            {props.conteudo}
            <img 
              src='/imagens/Flecha.svg'
              alt='Seta de link'
            />
          </a>
    </div>
  )
}

export default Botao;
