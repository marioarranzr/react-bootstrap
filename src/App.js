import React, { useState, useEffect } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap'

import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setContacts(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <CardGroup>
      {contacts.map(contact => {
        const { name, email, website } = contact;
        return (
          <Card key={`contact-${email}`}>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{email}</Card.Text>
              <Button variant="warning" size="sm">
                <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
              </Button>
            </Card.Body>
          </Card>
        )
      })}
    </CardGroup>
  );
}

export default App;
