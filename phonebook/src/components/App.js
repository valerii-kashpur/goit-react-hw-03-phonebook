import React, { Component } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styled from "styled-components";

const H2 = styled.h2`
  text-align: center;
`;

const P = styled.p`
display:block;
text-align:center;`

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount(){
    const ghostContacts = localStorage.getItem('contacts');
   if(ghostContacts){
       this.setState({
        contacts: JSON.parse(ghostContacts)
       })
   }
}
componentDidUpdate(){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}


  addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, contact],
      };
    });
  };

  filterFN = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  removeContact = (id) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    return (
      <>
        <H2>Phonebook</H2>
        <Form onAddContact={this.addContact} contacts={contacts} />
        <H2>Contacts</H2>
        <P>Find contact by name</P>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList filterFN={this.filterFN} onRemove={this.removeContact} />
      </>
    );
  }
}

export default App;
