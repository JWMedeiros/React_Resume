import React from 'react';
import {CDBBtn, CDBIcon} from 'cdbreact';

export default function Portfolio() {
  return (
    <div className='container bg-light top-buffer'>
      <h3 className='text-center'>View one or more of my recent projects!</h3>
      <div className="card row">
        <div className="card-body proj1">
          <h5 className="card-title text-center">Stay-Thicc.com</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">A website for users who want to stay fit and stay thicc</h6>
          <div className='m-auto'>
            <a href="https://keep-thicc.herokuapp.com/" class="card-link d-block mx-auto text-center">Heroku Deployment</a>
          </div>
          <CDBBtn flat color="dark" className="p-2" href='https://github.com/JWMedeiros/Stay-Thicc.com'>
            <CDBIcon fab icon="github" />
          </CDBBtn>
        </div>
      </div>
      <div className='row'>
        <div className="card col">
          <div className="card-body proj2">
            <h5 className="card-title text-center">Realtime Stock Analysis</h5>
            <h6 class="card-subtitle mb-2 text-danger text-center">Live news about stocks and results for</h6>
            <h6 class="card-subtitle mb-2 text-danger text-center">stock prices etc.</h6>
            <div className='m-auto'>
              <a href="https://jwmedeiros.github.io/Realtime_Stock_Analysis/" class="card-link d-block mx-auto text-center">Github Pages Deployment</a>
            </div>
            <CDBBtn flat color="dark" className="p-2" href='https://github.com/JWMedeiros/Realtime_Stock_Analysis'>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
        </div>
        <div className="card col">
          <div className="card-body proj3">
            <h5 className="card-title text-center">PWA Text Editor</h5>
            <h6 class="card-subtitle mb-2 text-danger text-center">A text editor that is also a progressive</h6>
            <h6 class="card-subtitle mb-2 text-danger text-center">web application.</h6>
            <div className='m-auto'>
              <a href="https://whispering-ravine-62556.herokuapp.com/" class="card-link d-block mx-auto text-center">Heroku Deployment</a>
            </div>
            <CDBBtn flat color="warning" className="p-2" href='https://github.com/JWMedeiros/PWA_Text_Editor'>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
        </div>
        <div className="card col">
          <div className="card-body proj4">
            <h5 className="card-title text-center">&nbsp;</h5>
            <h6 class="card-subtitle mb-2 text-muted text-center">&nbsp;</h6>
            <h6 class="card-subtitle mb-2 text-muted text-center">&nbsp;</h6>
            <div className='m-auto'>
              <a href="https://still-sands-64658.herokuapp.com/" class="card-link d-block mx-auto text-center">Heroku Deployment</a>
            </div>
            <CDBBtn flat color="dark" className="p-2" href='https://github.com/JWMedeiros/Note_Taker'>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className="card col">
          <div className="card-body proj5">
            <h5 className="card-title text-center">Employee-Tracker</h5>
            <h6 class="card-subtitle mb-2 text-center">A CLI that helps you manage your</h6>
            <h6 class="card-subtitle mb-2 text-center">employee databases.</h6>
            <h6 class="card-subtitle mb-2 text-center">&nbsp;</h6>
            <CDBBtn flat color="dark" className="p-2" href='https://github.com/JWMedeiros/Employee_Tracker'>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
        </div>
        <div className="card col">
          <div className="card-body proj6">
            <h5 className="card-title text-center">Social Network API</h5>
            <h6 class="card-subtitle mb-2 text-center">A NoSQL backend for a mock social network.</h6>
            <h6 class="card-subtitle mb-2 text-muted text-center">&nbsp;</h6>
            <h6 class="card-subtitle mb-2 text-muted text-center">&nbsp;</h6>
            <CDBBtn flat color="dark" className="p-2" href='https://github.com/JWMedeiros/Social_Network_API'>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
        </div>
        <div className="card col">
          <div className="card-body proj7">
            <h5 className="card-title text-center">E Commerce Backend</h5>
            <h6 class="card-subtitle mb-2 text-center">A Restful API back-end for an e-commerce mockup.</h6>
            <h6 class="card-subtitle mb-2 text-muted text-center">&nbsp;</h6>
            <h6 class="card-subtitle mb-2 text-muted text-center">&nbsp;</h6>
            <CDBBtn flat color="dark" className="p-2" href='https://github.com/JWMedeiros/E_Commerce_Backend'>
              <CDBIcon fab icon="github" />
            </CDBBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
