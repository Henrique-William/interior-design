import './work.css'

export const Work = (props) => {
    console.log(props);
    return (
        <section className='work__passos'>
              <div className='work__texto'>
                  <p className='work__titulo'>{props.titulo}</p>
                  <p className='work__paragrafo'>{props.paragrafo}</p>

                  <a href={props.link} target='new' className='work__link'>
                    Get Started
                    <img 
                      src='/imagens/Flecha.svg'
                      alt='icone de seta'/>
                  </a>
              </div>
        </section>    
    );
  }

