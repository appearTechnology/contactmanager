import React from 'react'
import { Container, Icon } from 'semantic-ui-react'

export default () => {
  return(
    <Container fluid>
      <Icon loading name='spinner' size='big' />
      <h1>404 Error</h1>
      <h2>Sorry this page does not exist</h2>
    </Container>
  )
}
