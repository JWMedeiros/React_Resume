import React from 'react';
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='bot-buffer top-buffer'>
      <div className="row justify-content-center">
      <h2 className='text-center'>WebDev Projects</h2>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/phrases.png')} alt="PositivePhrases"/>
              <figcaption>Positive Phrases</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>React</p>
            <p>Express</p>
            <p>NodeJS</p>
            <p>NodeMailer</p>
            <p>MySQL</p>
            <p>Sequelize</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/quote.jpg')} alt="positivequote"/>
            </figure>

            <a href='https://github.com/JWMedeiros/positive_phrases'>
              <button>Github</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/Explosive.jpg')} alt="Explosive Tic-Tac-Toe"/>
              <figcaption>Explosive-Tic-Tac-Toe</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>MERN stack</p>
            <p>Socket.IO</p>
            <p>Apollo Server + GraphQL</p>
            <p>Material UI + Bootstrap</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/explosive2.jpg')} alt="Chatbox"/>
            </figure>

            <a href='https://github.com/RichardZhang01/explosive-tic-tac-toe'>
              <button>Github</button>
            </a>
            <a href='https://explosive-tic-tac-toe.herokuapp.com/'>
              <button className='top-buffer'>Deployed Application</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">

          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/realtime.jpg')} alt="Realtime-Stock Analysis"/>
              <figcaption>Realtime Stock Analysis</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>HTML5 + JavaScript</p>
            <p>Bootstrap</p>
            <p>Web API's</p>
            <p>Third Party API's</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/realtime2.jpg')} alt="Stuff"/>
            </figure>

            <a href='https://github.com/JWMedeiros/Realtime_Stock_Analysis'>
              <button>Github</button>
            </a>
            <a href='https://jwmedeiros.github.io/Realtime_Stock_Analysis/'>
              <button className='top-buffer'>Deployed Application</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">

          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/JATE2.jpg')} alt="JATE front"/>
              <figcaption>PWA Text Editor</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>NodeJS + ExpressJS</p>
            <p>Bootstrap</p>
            <p>Webpack</p>
            <p>openDB (browser database)</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/JATE.jpg')} alt="JATE back"/>
            </figure>

            <a href='https://github.com/JWMedeiros/PWA_Text_Editor'>
              <button>Github</button>
            </a>
            <a href='https://whispering-ravine-62556.herokuapp.com/'>
              <button className='top-buffer'>Deployed Application</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">

          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/notes.jpg')} alt="Note-Taker"/>
              <figcaption>Note Taker</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>NodeJS + ExpressJS</p>
            <p>Express Router</p>
            <p>Restful API</p>
            <p>FS</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/notes2.jpg')} alt="Note-Taker back"/>
            </figure>

            <a href='https://github.com/JWMedeiros/Note_Taker'>
              <button>Github</button>
            </a>
            <a href='https://still-sands-64658.herokuapp.com/'>
              <button className='top-buffer'>Deployed Application</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">

          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/social.jpg')} alt="Social Front"/>
              <figcaption>Social Network API</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>NodeJS + ExpressJS</p>
            <p>MongoDB and Mongoose</p>
            <p>MVC methodology</p>
            <p>Restful API</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/social.jpg')} alt="Social Back"/>
            </figure>

            <a href='https://github.com/JWMedeiros/Social_Network_API'>
              <button>Github</button>
            </a>
            <a href='https://watch.screencastify.com/v/Q1WpdpLDR5wVo0WVvEiM'>
              <button className='top-buffer'>Video Walkthrough</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      </div>
      <div className="row justify-content-center">
      <h2 className='text-center'>Data Science/ML Projects</h2>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/bitpredict.png')} alt="BitPredict"/>
              <figcaption>BitPredict</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>Python</p>
            <p>TensorFlow</p>
            <p>Forecasting</p>
            <p>Numpy</p>
            <p>Pandas</p>
            <p>Matplotlib</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/demand-forecasting.jpg')} alt="FV2"/>
            </figure>

            <a href='https://colab.research.google.com/drive/1NK3rb99J-yvcTEDOzlkpXJUYf-v8YUPj?usp=sharing'>
              <button>Link to Colab notebook</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/SkimLit.jpg')} alt="SkimLit"/>
              <figcaption>SkimLit</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>Python</p>
            <p>TensorFlow</p>
            <p>Natural Language Processing</p>
            <p>Numpy</p>
            <p>Pandas</p>
            <p>Matplotlib</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/sl2.jpg')} alt="skimlit2"/>
            </figure>

            <a href='https://colab.research.google.com/drive/1mDeczIo4xMHmrnY-LxUlxFS6bytWgxBt?usp=sharing'>
              <button>Link to Colab notebook</button>
            </a>
            <a href='https://arxiv.org/abs/1612.05251'>
              <button className='top-buffer'>Original SkimLit Paper</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/FoodVision.jpg')} alt="Food Vision"/>
              <figcaption>Food Vision</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>Python</p>
            <p>TensorFlow</p>
            <p>Image Classification</p>
            <p>Numpy</p>
            <p>Pandas</p>
            <p>Matplotlib</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/FoodVision.jpg')} alt="FV2"/>
            </figure>

            <a href='https://colab.research.google.com/drive/1hYjZupJ2I-Qz-9LzE3sQhbVZzZhvD3qJ?usp=sharing'>
              <button>Link to Colab notebook</button>
            </a>
            <a href='https://data.vision.ee.ethz.ch/cvl/datasets_extra/food-101/static/bossard_eccv14_food-101.pdf'>
              <button className='top-buffer'>Original Food101 Paper</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/NLP.jpg')} alt="NLP"/>
              <figcaption>A Study of NLP Fundamentals</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>Python</p>
            <p>TensorFlow</p>
            <p>Natural Language Processing</p>
            <p>Numpy</p>
            <p>Pandas</p>
            <p>Matplotlib</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/NLP.jpg')} alt="nlp2"/>
            </figure>

            <a href='https://colab.research.google.com/drive/19hRGH4_cMkotESpTlEA4meykEU9Xhmvl?usp=sharing'>
              <button>Link to Colab notebook</button>
            </a>
            <a href='https://tensorboard.dev/experiment/Ni99Ikj8TmarzNakAh02Sw/#scalars&runSelectionState=eyJtb2RlbF8xX2RlbnNlLzIwMjMwNzA1LTE4NDA1OS90cmFpbiI6dHJ1ZSwibW9kZWxfMl9MU1RNLzIwMjMwNzA1LTE4NDEyMy90cmFpbiI6ZmFsc2UsIm1vZGVsXzNfR1JVLzIwMjMwNzA1LTE4NDI1MS90cmFpbiI6ZmFsc2UsIm1vZGVsXzRfQmlkaXJlY3Rpb25hbC8yMDIzMDcwNS0xODQ0MjQvdHJhaW4iOmZhbHNlLCJtb2RlbF81X0NvbnYxRC8yMDIzMDcwNS0xODQ2NTgvdHJhaW4iOmZhbHNlfQ%3D%3D'>
              <button className='top-buffer'>Results on TensorBoard</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
      </div>



      <div className="row justify-content-center">
      <h2 className='text-center'>GameDev Projects</h2>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/BoostRocket.png')} alt="Boost Rocket"/>
              <figcaption>Boost Rocket</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>Unity Version 2021.3.18f1</p>
            <p>C#</p>
            <p>OOP</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/Boost2.png')} alt="Boost Rocket2"/>
            </figure>

            <a href='https://sharemygame.com/@jon0908776/boostrocket'>
              <button>Play it here!</button>
            </a>
            <a href='https://github.com/JWMedeiros/Unity_Games/tree/master/BoostRocket/Assets'>
              <button className='top-buffer'>Asset Library</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>

        </div>
      </div>
      <div class="flip-card-container">
        <div class="flip-card">
          <div class="card-front">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/GunGame.png')} alt="Gun Game"/>
              <figcaption>GunGame</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>Unity Version 2021.3.18f1</p>
            <p>C#</p>
            <p>OOP</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/Gun2.jpg')} alt="GunGame2"/>
            </figure>

            <a href='https://sharemygame.com/@jon0908776/gungame-1-0'>
              <button>Play it here!</button>
            </a>
            <a href='https://github.com/JWMedeiros/Unity_Games/tree/master/GunGame/Assets'>
              <button className='top-buffer'>Asset Library</button>
            </a>

            <div class="design-container">
              <span class="design design--1"></span>
              <span class="design design--2"></span>
              <span class="design design--3"></span>
              <span class="design design--4"></span>
              <span class="design design--5"></span>
              <span class="design design--6"></span>
              <span class="design design--7"></span>
              <span class="design design--8"></span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
