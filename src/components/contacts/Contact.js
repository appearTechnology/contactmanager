import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context'
import { Link } from 'react-router-dom'
import axios from 'axios';

class Contact extends Component {

  state = {
    showContactInfo: false
  };

  OnDeleteClick = async (id, dispatch) => {
    try{
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id});
  } catch(e) {
    console.log("failed")
    dispatch({ type: 'DELETE_CONTACT', payload: id});
  }

  }

  render() {
    const {name, email, phone, id} = this.props.contact;
    const {showContactInfo} = this.state;

    return (<Consumer>
      {
        value => {
          const { dispatch } = value;
          return (<div className="card card-body mb-3">
            <h4>{name}
              <i onClick={() => this.setState({
                  showContactInfo: !this.state.showContactInfo
                })} className="fas fa-sort-down" style={{
                  cursor: 'pointer'
                }}/>
              <i className="fas fa-times" style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'red'
                }} onClick={this.OnDeleteClick.bind(this, id, dispatch)}/>
              <Link to={`contact/edit/${id}`} >
              <i class="pencil icon" style={{
                  cursor: 'pointer',
                  float: 'right',
                  color: 'bue',
                  marginRight: '1rem'
                }}></i>
             </Link>
            </h4>
            {
              showContactInfo
                ? (<ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>)
                : null
            }

          </div>)
        }
      }

    </Consumer>
  );
 }
}

Contact.propTypes = {
contact: PropTypes.object.isRequired
}

export default Contact;
