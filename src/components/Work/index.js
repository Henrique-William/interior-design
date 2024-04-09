import './work.css'

export const Work = (titulo, paragrafo, ) => {
    return (
        <section className='work__passos'>
              <div className='work__texto'>
                  <p className='work__titulo'>Project Plan</p>
                  
                  <p className='work__paragrafo'>
                      There are many variations of the passages of lorem Ipsum from 
                      available, majority.
                  </p>

                  <a href='' className='work__link'>
                    Get Started
                    <img 
                      src='/imagens/Flecha.svg'
                      alt='icone de seta'/>
                  </a>
              </div>
        </section>    
    );
  }