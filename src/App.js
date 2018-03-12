import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';
import Create from './Create';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">


        <div className='login-form'>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                Crowd Vote
              </Header>
              <Main></Main>
              <Create></Create>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
