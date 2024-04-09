import './home.css'

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { Work } from '../../components/Work';

const link1 = 'https://www.youtube.com/';

const texto = 'There are many variations of the passages of lorem Ipsum from available, majority.';

export const Home = () => {
    return (
      <div>
        <header>
          <Menu />
          <Header />
        </header>
  
        <section className='work'>
          <Work 
            titulo='Project Plan'
            paragrafo={texto}
            link={link1}
          />
          <Work 
            titulo='Interior Work'
            paragrafo={texto}
            link={link1}
          />
          <Work 
            titulo='Realization'
            paragrafo={texto}
            link={link1}
          />
        </section>
        
        

        
        
      </div>      
    );
  }
  