import Botao from '../Botao';
import './sobre.css'

export const Sobre = () => {

    const linkBotao = 'https://www.youtube.com/' 
    return (
        <section className='work__passos'>
            
            <div className='sobre__texto_container'>

                <div className='sobre__texto'>
                    <div className='sobre__titulo'>We Create The Art Of Stylish Living Stylishly</div>
                    <div className='sobre__paragrafo'>
                        It is a long established fact that a reader will be distracted by the of readable content of a page 
                        when lookings at its layouts the points of using 
                        that it has a more-or-less normal.
                    </div>
                </div>

                <div className='sobre__botoes'>
                    <div className='sobre__card_telefone'>
                        <img 
                            src='/imagens/Call Icon.png'
                            alt='Icone de telefone'
                        />
                        <div className='sobre__fone_container'>
                            <p className='sobre__fone'>012345678</p>
                            <p className='sobre__fone_sub'>Call Us Anytime</p>
                        </div>
                    </div>
                    <Botao 
                        conteudo='Get Free Estimate'
                        link={linkBotao}
                    />
                </div>
            </div>
            
            <img 
                src='/imagens/Cozinha.png'
                alt='Foto de cozinha'
            />
        </section>    
    );
  }