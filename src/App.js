import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container} from 'reactstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CampGround from './components/CampGround'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Container fluid={true}>
          <br/>
          <h1 className='text-center digital'>Hipcamp</h1>
          <br/>
          <CampGround />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
