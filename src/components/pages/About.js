import React from 'react';

export default function About() {
  return (
    <div className='container bg-light top-buffer bot-buffer'>
      <h3 className='text-center'>About Me</h3>
      <div className='m-auto'>
        <img
          className='d-block mx-auto'
          alt="My face"
          src="/me.jpg"
          width="200px"
        />
      </div>
      <p>
        Hello, my name is John Medeiros and I am a Self taught Python enthusiast, and JavaScript wizard. 
        A lover of datastructures and all algorithms that sort, I believe scalability is key. I have recently 
        earned a certificate in full stack development from the
        University of Toronto Coding bootcamp, with newly developed skills in JavaScript, Express.js, 
        React.js, bootstap, Jquery, graph QL, all APIs and responsive website design.
        Known as an innovative problem solver passionate about developing apps, with a focus
        on mobile-first design and TDD. With each project, my aim is to best engage my
        audience for an impactful and efficient user experience. I applied aspects of kanban and agile 
        development in a recent projects where I worked on a of three to develop a single-page
        webapp that uses promises to fetch given data from two different REST API’s that will help
        stock traders stay up to date on stock information and current stock news. I am excited to
        leverage my skills as part of a fast-paced, quality-driven team to build better applications on the
        web.
      </p>
    </div>
  );
}
