import React from 'react';
import Header from './Header';
import Mew from './assets/images/mew.svg';
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3333'
});

function App() {    
  const [pokemon, setPokemon] = React.useState();
  const [contador, setContador] = React.useState(0);

  React.useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(contador + 1);
    }, 500);    
    return () => clearInterval(intervalo);
  }, [contador]);

  return (
    <>
      <Header />
      <main class="main-legendaries">
        <h1>Legendaries</h1>
        <div class="legendarie-details">        
            <img src={Mew} alt="Mew Picture" />
            <div>
                <h2>{contador}</h2>
                <p></p>
                <div class="legendarie-stats">
                    <div>
                        <p>Health Points</p>
                        <p></p>
                        <div class="progress-bar">
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <p>Attack</p>
                        <p></p>
                        <div class="progress-bar">
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <p>Special Attack</p>
                        <p></p>
                        <div class="progress-bar">
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <p>Experience</p>
                        <p></p>
                        <div class="progress-bar">
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <p>Defense</p>
                        <p></p>
                        <div class="progress-bar">
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <p>Special Defense</p>
                        <p></p>
                        <div class="progress-bar">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>          
          </div>
      </main>
    </>   
  );
}

export default App;
