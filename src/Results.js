import React, { Component } from 'react';
import Responsive, { Button, Icon, Form, Grid, Checkbox, Header } from 'semantic-ui-react';
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
    let close;
    console.log(vote.joincode);
    console.log(creator);
    if(this.state.vote.joincode === creator){
        close = <Button onClick={this.handleJoin} color='purple' size='large'>Close Vote</Button>
    }
    return (
        <div>
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
            {close}
        </div>
    );
  }
}

export default Results;
