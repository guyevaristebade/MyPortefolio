import React from 'react'
import Typewriter from 'typewriter-effect'
import Moi from '../imgaes/moi.jpg'
class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          words: ["Etudiant en 2ème année d'informatique", 'Grand rêveur', 'Amoureux de la vie', 'Travailleur acharné'],
          loop: true,
          pause : 2000,
          autoStart : true,
        }
    }

    render() {
        return (
            <section className='home-container'>
                <div className='home-content'>
                    <div className='home-left'>
                        <div className='home-title'>
                            <h1 className='salut'>
                                Salut<span id="home-wave" role="img" aria-label="hand wave"> 👋🏻</span></h1>
                            <h1 className='me'>
                                Je suis  
                                <span id="home-my-name"> Guy Evariste Bade,</span>
                            </h1>
                        </div>
                        <Typewriter id='home-typewriter'
                            options={{
                                strings:this.state.words,
                                autoStart: this.state.autoStart,
                                loop: this.state.loop,
                                pauseFor : this.state.pause
                            }}
                        />
                    </div>
                    <div className='home-right'>
                        <div className='home-img-container'>
                            <img className='home-img' src={Moi} alt='home-img'/>
                            <div className='spinner'></div>
                        </div>
                    </div>
                   
                </div>
                <div className="btn-container">
                    <a className='home-btn-cv' href='#' download>Mon CV</a>
                </div>
            </section>
        )
    }
}

export default Home