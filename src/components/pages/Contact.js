import React from 'react';

export default function Contact() {
  return (
    <div className='container bg-light top-buffer'>
      <h3 className='text-center top-buffer'>Contact Page</h3>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1"></label>
          <input type="text" className="form-control" id="exampleFormControlInput1" required placeholder="Name"></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1"></label>
          <input type="email" className="form-control" id="exampleFormControlInput1" required placeholder="Email"></input>
        </div>
        <div className="form-group text-center">
          <label for="exampleFormControlTextarea1"></label>
          <textarea className="form-control" id="exampleFormControlTextarea1" required placeholder="Message"></textarea>
        </div>
        <div className='row top-buffer'>
          <div className='col-sm-4'></div>
          <button type="button" className="btn btn-dark btn-lg col-sm-4">Contact</button>
          <div className='col-sm-4'></div>
        </div>
      </form>
    </div>
  );
}
