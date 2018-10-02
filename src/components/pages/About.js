import React from 'react'
import {Header, Icon, Container} from 'semantic-ui-react'

export default () => {
  return (
    <Container fluid="fluid">
    <Header as='h2' icon="icon">
      <Icon name='settings'/> About Contacts
      <Header.Subheader>Simple app to manage contacts</Header.Subheader>
    </Header>
    <p>Version 1.0.0</p>
  </Container>
)
}
