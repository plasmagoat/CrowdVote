import React, { Component } from 'react';
import { Button, Form, Grid, Header, Label, Icon } from 'semantic-ui-react';
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
        <div>
            
            <Form className='chooseOption' size='large'>
                <Label className='room' color='purple' ribbon='right'>{this.state.vote.joincode}</Label>

                <Header as='h2' color='teal' textAlign='center'>
                    {this.state.vote.question}
                </Header>

                {this.state.vote.options.map((option, i) => {
                    return <Form.Field key={i}>
                        {this.state.selected === i.toString()
                            ? <Button key={i} fluid color='teal' value={i} content={option} onClick={this.handleSelect} />
                            : <Button key={i} basic fluid color='teal' value={i} content={option} onClick={this.handleSelect} />}
                    </Form.Field>
                })}

                <Grid columns='equal'>
                    <Grid.Column>
                    <Button onClick={this.handleBack} color='teal' fluid size='large' icon labelPosition='left'><Icon name='home'></Icon>Back</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={this.handleSubmit} color='purple' fluid size='large'icon labelPosition='right'><Icon name='share'></Icon>Submit</Button>
                    </Grid.Column>
                </Grid>
            </Form>
        </div>
    );
  }
}

export default Vote;
