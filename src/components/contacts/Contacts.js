import React, {Component} from 'react'
import Contact from './Contact'
import {Consumer} from '../../context'
import { Header, Segment } from 'semantic-ui-react'
class Contacts extends Component {

  render() {

    return (<Consumer>
      {
        value => {
          const {contacts} = value;
          return (<React.Fragment>
            <Header as='h1' inverted="inverted" color='red'>
              Contact List
            </Header>
            {value.contacts.map(contact => (<Contact key={contact.id} contact={contact}/>))}
          </React.Fragment>)
        }
      }
    </Consumer>)
  }
}

export default Contacts;
