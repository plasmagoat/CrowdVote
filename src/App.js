import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { Grid, Header, Segment } from 'semantic-ui-react';
import './App.css';
import Create from './Create';
import Main from './Main';
import Join from './Join';
import DataStore from './DataStore'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid
          textAlign='center'
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450, marginTop: '10em' }}>
            <Header as='h1' color='teal' textAlign='center'>
              Crowd Vote
              </Header>
            <Segment stacked>
              <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/join' render={(props) => <Join {...props}/>} />
                <Route path='/create' render={(props) => <Create create={DataStore.onCreate} {...props}/>} />
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
