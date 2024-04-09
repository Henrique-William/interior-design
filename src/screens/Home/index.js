import './home.css'

import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { Work } from '../../components/Work';


export const Home = () => {
    return (
      <div>
        <header>
          <Menu />
          <Header />
        </header>

        <section className='work'>
          <Work />
          <Work />
          <Work />
        </section>
        
        

        
        
      </div>      
    );
  }
  