import React, { Component, Fragment } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap'

import './App.css';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
        console.log(this.state.contacts)
      })
      .catch(console.log)
  }

  render() {
    return (
      <Fragment>
        <CardGroup>
          {this.state.contacts.map((contact, idx) => (
            <Card key={idx}>
              <Card.Body>
                <Card.Title>{ contact.name }</Card.Title>
                <Card.Text>
                  { contact.email }
                </Card.Text>
                <Button variant="warning" size="sm" > 
                  <a href={ 'https://' + contact.website } target="_blank" rel="noopener noreferrer">{contact.website}</a>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </Fragment>
    )
  }
}

export default App;
