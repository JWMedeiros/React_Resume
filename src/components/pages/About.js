import React from 'react';

export default function About() {
  return (
    <div className='container top-buffer bot-buffer'>
      <h2 className='text-center'>About Me</h2>
      <div className='m-auto'>
        <img
          className='d-block mx-auto'
          alt="My face"
          src={require('../../images/me.jpg')}
          width="200px"
        />
      </div>
      <p className='text-center'>
        My name is John Medeiros and I am a motivated and independant software developer with a background in computer engineering.
        I am a strong problem solver with fantastic analytical skills and a drive for continuous learning  and exploring new solutions.
        I have a proven ability to design, implement and validate technical solutions. I have excellent communication skills and use them to
        effectively collaberate with stakeholders and convey technical concepts. I am an adaptable team player with a track record of
        delivering commercial software.
      </p>
      <p className='text-center'>
        I am currently taking interest in data science and machine learning with python and TensorFlow. My sights are set on
        passing the TensorFlow developer certification exam from Google by the fall. I believe that data is the future.
      </p>
    </div>
  );
}
