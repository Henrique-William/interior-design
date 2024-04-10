import './home.css'

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { Work } from '../../components/Work';
import { Sobre } from '../../components/Sobre';
import { Comentarios } from '../../components/Comentarios';
import { LogoCliente } from '../../components/LogoCliente';

const link1 = 'https://www.youtube.com/';
const texto = 'There are many variations of the passages of lorem Ipsum from available, majority.';

export const Home = () => {
    return (
      <div>
        <header className='header'>
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
        
        <section className='sobre'>
          <Sobre />
        </section>

        <section className='comentarios'>
          <Comentarios />
        </section>
        
        <section className='logo_cliente'>
          <LogoCliente />
        </section>

      </div>      
    );
  }
  