import React from 'react';

export default function About() {
  return (
    <div className='container bg-light top-buffer bot-buffer'>
      <h2 className='text-center'>About Me</h2>
      <div className='m-auto'>
        <img
          className='d-block mx-auto'
          alt="My face"
          src={require('../../images/me.jpg')}
          width="200px"
        />
      </div>
      <p>
        Hello, my name is John Medeiros and I am a Full-Stack developer with a background in computer engineering. 
        I recently Earned a certificate from University of Toronto’s Coding bootcamp. 
        I have an Insatiable appetite for learning new libraries and technologies and proven ability to adapt to project needs on the fly. 
        I am a Team-oriented individual with strengths in analytical problem solving and team collaboration. 
        With each project, my aim is to best engage myaudience for an impactful and efficient user experience. 
        I applied aspects of kanban and agile development in two recent projects where I worked in teams of three to develop both a single-page
        webapp that uses promises to fetch given data from two different REST API’s, and a full MERN stack app that uses socket.IO, express,
        apollo server and graphQL to connect tic-tac-toe players to game rooms to play and chat together. I am excited to
        leverage my skills as part of a fast-paced, quality-driven team to build better applications on the web.
      </p>
    </div>
  );
}
