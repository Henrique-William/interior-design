import { CardPessoas } from '../CardPessoas'
import './comentarios.css'

export const Comentarios = () => {
  return (
    <div className='comentarios__conteudo'>
      <div className='comentarios__container'>
        <h2 className='comentarios__titulo'>
        What the People Thinks <br/>About Us
        </h2>
        <div className='card__pessoas'>
          <CardPessoas
            img='/imagens/Perfil_img.png' 
            nome='Nattasha Mith'
            local='Sydney, USA'
            comentario='Lorem Ipsum is simply dummy 
            text of the typesetting industry. 
            Ipsum has been.'
          />
          <CardPessoas
            img='/imagens/Perfil_img2.png' 
            nome='Raymond Galario'
            local='Sydney, Australia'
            comentario='Lorem Ipsum is simply dummy 
            text of the typesetting industry. 
            Ipsum has been scrambled it 
            to make a type book.'
          />
          <CardPessoas
            img='/imagens/Perfil_img3.png' 
            nome='Benny Roll'
            local='Sydney, New York'
            comentario='Lorem Ipsum is simply dummy 
            text of the typesetting industry. 
            Ipsum has been scrambled.'
          />
        </div>
      </div>
    </div>
  );
};