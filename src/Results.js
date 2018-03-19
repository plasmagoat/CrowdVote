import React, { Component } from 'react';
import { Button, Grid, Header, Label, Form } from 'semantic-ui-react';
import { vote, creator, readyForUpdates } from './DataStore';
import { Bar } from 'react-chartjs-2';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
        vote: vote,
    }

    readyForUpdates((err, newv) => {
        this.setState({
            vote: newv
        })
    })
    

  }

  
  
  render() {
    return (
        <Form size='large'>
            <Label className='room' color='purple' ribbon='right'>{this.state.vote.joincode}</Label>
            <Header as='h2' color='teal' textAlign='center'>
                {this.state.vote.question}
            </Header>
            
            <Bar data={{
                labels: this.state.vote.options,
                datasets: [{
                    label: this.state.vote.question,
                    backgroundColor: 'rgba(128,0,128,0.2)',
                    borderColor: 'rgba(128,0,128,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(128,0,128,0.4)',
                    hoverBorderColor: 'rgba(128,0,128,1)',
                    data: this.state.vote.votes
                }]
            }} options={{
                maintainAspectRatio: true,
                responsive: true
            }} />
            {this.state.vote.joincode === creator
                ? <Grid.Column><Button onClick={this.handleJoin} color='purple' size='large'>Close Vote</Button></Grid.Column>
                : <Button onClick={this.handleBack} color='teal' size='large'>Back</Button>}

        </Form>
    );
  }
}

export default Results;
