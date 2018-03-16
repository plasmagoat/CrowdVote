import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { Grid, Header, Segment, Transition } from 'semantic-ui-react';
import './App.css';
import Create from './Create';
import Main from './Main';
import Join from './Join';
import Vote from './Vote';
import Created from './Created';
import Results from './Results';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      view: 'main'
    }
    this.changeView = this.changeView.bind(this);

  }

  changeView(v) {
    this.setState({
      view: v
    })
  }

  render() {
    return (
      <div className="App">
        <Grid
          textAlign='center'
          verticalAlign='middle'
        >
        
          <Grid.Column style={{ maxWidth: 450, marginTop: '10em', marginLeft: '20px', marginRight: '20px' }}>
            <Header as='h1' color='teal' textAlign='center' onClick={() => this.changeView('main')}>
              Crowd Vote
              </Header>
            
            
            <Transition.Group duration={{hide: 0, show: 500}} animation={'fly down'}>
              {this.state.view === 'main' && <Segment color='teal' raised><Main view={this.changeView} /></Segment>}
            </Transition.Group>
            <Transition.Group duration={{hide: 0, show: 600}} animation={'fly right'}>
              {this.state.view === 'join' && <Segment color='teal' raised><Join view={this.changeView} /></Segment>}
            </Transition.Group>
            <Transition.Group duration={{hide: 0, show: 600}} animation={'fly left'}>
              {this.state.view === 'create' && <Segment color='teal' raised><Create view={this.changeView} /></Segment>}
            </Transition.Group>
            <Transition.Group duration={{hide: 0, show: 500}} animation={'fly up'}>
              {this.state.view === 'vote' && <Segment color='teal' raised><Vote view={this.changeView} /></Segment>}
            </Transition.Group>
            <Transition.Group duration={{hide: 0, show: 500}} animation={'fly up'}>
              {this.state.view === 'created' && <Segment color='teal' raised><Created view={this.changeView} /></Segment>}
            </Transition.Group>
            <Transition.Group duration={{hide: 0, show: 300}} animation={'scale'}>
              {this.state.view === 'results' && <Segment color='teal' raised><Results view={this.changeView} /></Segment>}
            </Transition.Group>
            
                {/* <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/join' render={(props) => <Join {...props}/>} />
                <Route path='/create' render={(props) => <Create create={onCreate} {...props}/>} />
              </Switch> */}
              
            
            

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
