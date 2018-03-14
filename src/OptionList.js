import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class OptionList extends Component {
    render() {
      return (
        <div className='optionlist'>
          {this.props.list.map((option, i) => {
            return <Form.Input
              fluid
              key={i}
              value={option}
              onChange={(e) => this.props.update(e, i)}
              action={{ onClick: () => this.props.remove(i), icon: 'minus', color: 'purple' }}
            />
          })}
        </div>
      )
    }
  }

  export default OptionList;