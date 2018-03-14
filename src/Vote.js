import React, { Component } from 'react';
import { Button, Icon, Form, Grid, Checkbox, Header } from 'semantic-ui-react';
import { vote, onVote } from './DataStore';

class Vote extends Component {
  constructor(props){
    super(props);
    this.state = {
        vote: vote,
        selected: '-1'
    }


    this.handleBack = this.handleBack.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBack(e){
    this.props.view('main');
  }

  handleSelect(e) {
      this.setState({
          selected: e.target.value
      })
  }
  
  handleSubmit(e) {
      onVote(this.state.selected, (v) => {
          this.props.view('results');
      });
  }
  
  render() {
    return (
        <Form className='chooseOption' size='large'>
        {this.state.value}
        <Header as='h2' color='teal' textAlign='center'>
            {this.state.vote.joincode}
        </Header>
        <Header as='h4' color='purple'>
            {this.state.vote.question}
        </Header>
        
        {this.state.vote.options.map((option, i) => {
            let opt = <Button key={i} basic fluid color='teal' value={i} content={option} onClick={this.handleSelect} />
            if(this.state.selected === i.toString()){
                opt = <Button key={i} fluid color='teal' value={i} content={option} onClick={this.handleSelect} />
            }
            return <Form.Field key={i}>
                    {opt}
                </Form.Field>
          })}

        <Grid columns='equal'>
            <Grid.Column>
                <Button onClick={this.handleBack} color='teal' fluid size='large'>Cancel</Button>
            </Grid.Column>
            <Grid.Column>
            <Button onClick={this.handleSubmit} color='purple' fluid size='large'>Submit</Button>
            </Grid.Column>
        </Grid>
    </Form>
    );
  }
}

export default Vote;
