import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { Parallax, Background } from 'react-parallax';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
	      Hello World!
      </Button>
        <Parallax strength={300}>

	              <div>Use the background component for custom elements</div>

	              <Background className="custom-bg">

	                  <img src="http://www.fillmurray.com/500/320" alt="fill murray" />

	              </Background>

	          </Parallax>
    </div>
  );
}

export default App;
