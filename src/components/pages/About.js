import React from 'react';

export default function About() {
  return (
    <div className='container top-buffer bot-buffer about-container'>
      <h2 className='text-center'>Professional Life</h2>
      <div className='m-auto d-flex align-items-center about-section'>
        <img
          className='d-block mx-auto'
          alt="Professional Shot"
          src={require('../../images/ProfessionalCropped.jpg')}
          width="200px"
        />
        <div className="ml-3 about-text">
          <p>
            My name is John Medeiros and I am a motivated and independent software developer with a background in computer engineering.
            I am a strong problem solver with fantastic analytical skills and a drive for continuous learning and exploring new solutions.
            I have a proven ability to design, implement and validate technical solutions. I have excellent communication skills and use them to
            effectively collaborate with stakeholders and convey technical concepts. I am an adaptable team player with a track record of
            delivering commercial software.
          </p>
          <p>
            I am currently taking interest in data science and machine learning with Python and TensorFlow. My sights are set on
            passing the TensorFlow developer certification exam from Google by the Fall. I believe that data is the future.
          </p>
        </div>
      </div>
      <h2 className='text-center top-buffer'>Free Time</h2>
      <div className='m-auto d-flex align-items-center about-section'>
        <div className="mr-3 about-text">
          <p>
            In my free time you can usually find me out on the golf courses around the Burlington/Kitchener/Cambridge areas. My goal this year is to break 100.
            I enjoy hanging out with my golf buddies, having a beer on the course and trying my best to make a few pars. If I am not golfing then there is a good chance I am playing games online.
            I play quite a large variety of games, which you can read about if you are interested in the games section. (I consider myself pretty tough to take down in Smash Ultimate.)
            I also love card games, board games, ping-pong, and pool.
          </p>
        </div>
        <img
          className='d-block mx-auto'
          alt="Golf Shot"
          src={require('../../images/GolfCropped.jpg')}
          width="200px"
        />
      </div>
    </div>
  );
}
