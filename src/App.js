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
          <h3 className='text-left digital'>Hipcamp Challenge</h3>
          <br/>
          <CampGround />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
