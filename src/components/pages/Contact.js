import React, {useState} from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name ==='form-name'){
      return setName(value);
    } else if (name==='email'){
      return setEmail(value);
    } else{
      return setMessage(value);
    }
  };

  function validateEmail(email) {
    let re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
    return re.test(email);
  }

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)){
      alert ('Your email is invalid! Please enter a valid email address.')
    } else if(!name){
      alert('Please fill out all required fields!')
    }else{
      //Can store data in db here in the future/actually contact me
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className='container bg-light top-buffer'>
      <h3 className='text-center top-buffer'>Contact Page</h3>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1"></label>
          <input type="text" className="form-control" value ={name} onChange={handleInputChange} name ='form-name' placeholder="name (required)" required='true'></input>
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput2"></label>
          <input type="email" className="form-control" value ={email} onChange={handleInputChange} name ='email' placeholder="email (required)" required='true'></input>
        </div>
        <div className="form-group text-center">
          <label for="exampleFormControlTextarea1"></label>
          <textarea className="form-control" value = {message} onChange={handleInputChange} name='message' placeholder="message"></textarea>
        </div>
        <div className='row top-buffer'>
          <div className='col-sm-4'></div>
          <button type="button" className="btn btn-dark btn-lg col-sm-4" onClick={handleFormSubmit}>Contact</button>
          <div className='col-sm-4'></div>
        </div>
      </form>
    </div>
  );
}
