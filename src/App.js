import React from 'react';
import './App.css';



function App() {
  return (
    <form>
      <div class="form-group">
        <h1> My first page </h1>
        <label>Email address </label>
        <input type="email" class="from-control" id="exempleemail"  placeholder="Enter email"></input>
      </div>
      <div class="from-group">
        <label> password</label>
        <input type="password"class="fromcontrol"id="exemplepassword" placeholder="Password"></input>
      </div>
      <div className="from-check">
        <input type="checkbox" class="from-check-input" id="exemplecheck"></input>
        <label class="from-check"for="examplecheck"> Check me out </label>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default App;



