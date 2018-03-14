import React, { Component } from 'react';
import { Button, Icon, Header, Card } from 'semantic-ui-react';
import { vote } from './DataStore';


class Created extends Component {
  constructor(props){
    super(props);

    this.handleContinue = this.handleContinue.bind(this);

    
  }

  handleContinue(e){
    this.props.view('vote');
  }
  
  render() {
    return (
        <Card className='createdCard' fluid >
            <Card.Content>
                <Card.Meta>JoinCode</Card.Meta>
                <Card.Header>
                    <Header as='h2' color='purple' textAlign='center'>
                        {vote.joincode}
                    </Header>
                </Card.Header>
            </Card.Content>

            <Card.Description>Distribute the joincode to participants</Card.Description>
            <Card.Content extra><Button basic onClick={this.handleContinue} color='purple' icon labelPosition='right'><Icon name='arrow right'></Icon>Continue</Button></Card.Content>


        </Card>
    );
  }
}

export default Created;
