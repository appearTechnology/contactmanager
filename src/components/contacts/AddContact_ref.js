import React, {Component} from 'react'
import {Button, Input} from 'semantic-ui-react'

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();


  }


  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }

    console.log(contact)
  }

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '777 777 777'
  }


  render() {
    const { name, email, phone } = this.props;
    return (
      <div class='ui segment'>
      <form class='ui form' onSubmit={this.onSubmit}>
        <div class='field'>
          <label>Name</label>
          <input defaultValue={name}  type="text" name="name" ref={this.nameInput} placeholder='Please enter name'/>
        </div>
        <div class='field'>
          <label>Email</label>
          <input defaultValue={email}  type="email" name="email" ref={this.emailInput} placeholder='Please enter email'/>
        </div>
        <div class='field'>
          <label>Phone</label>
          <input defaultValue={phone} type="text" name="phone" ref={this.phoneInput} placeholder='Please enter your phone'/>
        </div>
        <button type="submit" class='ui fluid button' role='button'>
          Add Contact
        </button>
      </form>
    </div>
  );
  }
}

export default AddContact;
