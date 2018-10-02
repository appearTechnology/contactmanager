import React, {Component} from 'react'
import {Button, Input, Form, Divider, Segment} from 'semantic-ui-react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {

    }
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //Check for errors
    if (name === '') {
      this.setState({errors: {name: 'Name is required'}})
      return
    }

    if (email === '') {
      this.setState({errors: {email: 'Email is required'}})
      return
    }

    if (phone === '') {
      this.setState({errors: {phone: 'Phone is required'}})
      return
    }

    const newContact = {
      name,
      email,
      phone,
      errors: {}
    }

    const res = await axios.post('http://jsonplaceholder.typicode.com/users', newContact)

    dispatch({type: 'ADD_CONTACT', payload: res.data})


    //Clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
    });

    this.props.history.push('/');
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(

            <Segment padded>
            <Form onSubmit={this.onSubmit.bind(this, dispatch)}>
              <TextInputGroup label="Name" name="name" placeholder="Enter your name..." value={name} onChange={this.onChange} error={errors.name}/>
              <TextInputGroup label="Email" name="email" placeholder="Enter your email..." value={email} onChange={this.onChange} error={errors.email}/>
              <TextInputGroup label="Phone" name="phone" placeholder="Enter your phone..." value={phone} onChange={this.onChange} error={errors.phone}/>
            <button type="submit" class='ui fluid button' role='button'>
                Add Contact
              </button>
            </Form>
          </Segment>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
