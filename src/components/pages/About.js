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
        I graduated from the University of Waterloo with a degree in Psychology and HRM, graduated from Conestoga College with a Computer Engineering advanced diploma,
        and have also earned a certificate from the University of Toronto's continuing education full stack bootcamp.
        I am currently learning game development using the Unity engine and refreshing my C# skills. 
        I have an Insatiable appetite for learning new libraries and technologies and proven ability to adapt to project needs on the fly. 
        I am a also Team-oriented individual with strengths in analytical problem solving and team collaboration. 
        With each project, my aim is to best engage my audience for an impactful and efficient user experience, while also not sacrificing backend functionality. 
        At my previous contract job at RevStar Consulting group, I worked as part of a  team to develop an enterprise level OAuth2 file system integration for a client.
        Once a user has authenticated, made a connection and chosen a folder to connect with, a second application then keeps the two connected folders synchronized using a background task.
        These projects were written in NestJS using Typescript and TypeORM.
        The current OAuth integrations include Microsoft OneDrive/Sharepoint, Dropbox and GoogleDrive.
        I am excited to leverage my skills as part of a fast-paced, quality-driven team to build better applications on the web.
      </p>
    </div>
  );
}
