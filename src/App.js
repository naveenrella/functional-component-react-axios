import React, { useState } from 'react';
import SignIn from "./components/SignIn.js";
import './App.css';
import SimpleTabs from "./components/Tabs.js";
import Button from '@material-ui/core/Button';

function App() {
  const [isLoggedInParent, setIsLoggedInParent] = useState(false);
  console.log("parent component logged in ", isLoggedInParent);
  const sendDataToParent = (childData) => { // the callback. Use a better name
    console.log("Showing Child Data in Parent: ", childData);
    setIsLoggedInParent(childData);
  };


  return (
    <div className="App">  
        { isLoggedInParent ? <Button variant="contained" size="medium"  onClick={() => setIsLoggedInParent(false)} className="logout-button" color="secondary"> Logout </Button> : ""}   
        { !isLoggedInParent ? <SignIn sendDataToParent= { sendDataToParent } /> : <SimpleTabs /> }        
    </div>
  );
}

export default App;
