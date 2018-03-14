import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { Grid, Header, Segment } from 'semantic-ui-react';
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
    let view;
    if(this.state.view === 'main') {
      view = <Main view={this.changeView} />
    } else if (this.state.view === 'join'){
      view = <Join view={this.changeView}/>
    } else if (this.state.view === 'create'){
      view = <Create view={this.changeView} />
    } else if (this.state.view === 'vote'){
      view = <Vote view={this.changeView} />
    } else if (this.state.view === 'created'){
      view = <Created view={this.changeView} />
    } else if (this.state.view === 'results'){
      view = <Results view={this.changeView} />
    }

    return (
      <div className="App">
        <Grid
          textAlign='center'
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450, marginTop: '10em' }}>
            <Header as='h1' color='teal' textAlign='center' onClick={() => this.changeView('main')}>
              Crowd Vote
              </Header>
            <Segment color='teal' raised>
              {view}
              {/* <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/join' render={(props) => <Join {...props}/>} />
                <Route path='/create' render={(props) => <Create create={onCreate} {...props}/>} />
              </Switch> */}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
