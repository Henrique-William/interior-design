import { CardProjeto } from '../CardProjeto'
import './projeto.css'

export const Projeto = () => {
  return (
    <div className='projeto'>
        <div className='projeto__texto'>
            <h2 className='projeto__titulo'>Follow Our Projects</h2>
            <p className='projeto__subtitulo'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        </div>

        <div className='projeto__cards'>
          <div className='projeto__cards_fileira'>
            <CardProjeto 
              img='/imagens/pcard1.png'
              titulo='Modern Kitchan'
              subtitulo='Decor / Artchitecture'
              link='https://github.com/Henrique-William'
            />
            <CardProjeto 
              img='/imagens/pcard2.png'
              titulo='Modern Kitchan'
              subtitulo='Decor / Artchitecture'
              link='https://github.com/Henrique-William'
            />
          </div>

          <div className='projeto__cards_fileira'>
          <CardProjeto 
              img='/imagens/pcard3.png'
              titulo='Modern Kitchan'
              subtitulo='Decor / Artchitecture'
              link='https://github.com/Henrique-William'
            />
            <CardProjeto 
              img='/imagens/pcard4.png'
              titulo='Modern Kitchan'
              subtitulo='Decor / Artchitecture'
              link='https://github.com/Henrique-William'
            />
          </div>

        </div>
    </div>
  )
}
