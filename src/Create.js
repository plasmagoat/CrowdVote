import React, { Component } from 'react';
import { Button, Form, Grid } from 'semantic-ui-react';
import OptionList from './OptionList';
import Main from './Main';
import { onCreate } from './DataStore';


class Create extends Component {
  constructor(props){
    super(props);

    this.state = {
      question: '',
      options: [],
      votes:[],
      newOption: ''
    }

    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.updateNewOption = this.updateNewOption.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateOption = this.updateOption.bind(this);
  }

  handleAddOption(e){
    if(this.state.newOption !== ''){
      this.setState((state) => ({
        options: state.options.concat([state.newOption]),
        newOption: ''
      }));
    }
    
  }

  handleRemoveOption(index){
    let newlist = this.state.options;
    newlist.splice(index, 1);
    let newvotes = this.state.votes;
    newvotes.pop();
    this.setState((state) => ({
      options: newlist,
      votes: newvotes
    }));
  }

  updateNewOption(e){
    this.setState({
      newOption: e.target.value
    })
  }

  updateQuestion(e){
    this.setState({
      question: e.target.value
    })
  }

  updateOption(e, i){
    let opt = this.state.options;
    opt[i] = e.target.value;
    this.setState({
      question: opt
    })
  }

  handleCreate(e){
    if(this.state.question !== '' && this.state.options.length > 0){
      this.setState({
        loading: true
      });
      let { options, question } = this.state;
      onCreate({options, question}, (err, joincode) => {
        this.props.view('created');
      });
    }
    
  }

  handleBack(e){
    this.props.view('main');
    
  }

  render() {
    let create = <Form.Button onClick={this.handleCreate} color='teal' fluid size='large'>Create!</Form.Button>
    if(this.state.loading === true){
      create = <Form.Button loading color='teal' fluid size='large'>Create!</Form.Button>
    }
    return (
      <Form size='large'>
        <Form.Input
          fluid
          icon='question'
          iconPosition='left'
          placeholder='Question'
          onChange={this.updateQuestion}
        />
        <OptionList list={this.state.options} remove={this.handleRemoveOption} update={this.updateOption}></OptionList>
        <Form.Input
          fluid
          icon='options'
          iconPosition='left'
          value={this.state.newOption}
          onChange={this.updateNewOption}
          action={{ onClick: this.handleAddOption, icon: 'plus', color: 'teal' }}
          placeholder='Option'
        />

        

        <Grid columns='equal'>
          <Grid.Column>
            <Button onClick={this.handleBack} color='purple' fluid size='large'>Go Back</Button>
          </Grid.Column>
          <Grid.Column>
            {create}
          </Grid.Column>
        </Grid>
      </Form>
    );
  }
}

export default Create;
