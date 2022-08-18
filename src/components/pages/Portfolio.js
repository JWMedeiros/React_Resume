import React from 'react';
import './Portfolio.css'

export default function Portfolio() {
  return (
    <div className='bot-buffer'>
      <div className="row justify-content-center">
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
              <img src={require('../../images/thiccproj.jpg')} alt="Explosive Tic-Tac-Toe"/>
              <figcaption>Stay-Thicc.com</figcaption>
            </figure>

            <h3>Technologies:</h3>
            <p>ExpressJS + NodeJS</p>
            <p>MySQL and Sequelize</p>
            <p>Handlebars + Mustache</p>
            <p>SessionJS, ESlint, .env</p>
          </div>

          <div class="card-back">
            <figure>
              <div class="img-bg"></div>
              <img src={require('../../images/thiccproj2.jpg')} alt="Stuff"/>
            </figure>

            <a href='https://github.com/JWMedeiros/Stay-Thicc.com'>
              <button>Github</button>
            </a>
            <a href='https://keep-thicc.herokuapp.com/'>
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
    </div>
  );
}
