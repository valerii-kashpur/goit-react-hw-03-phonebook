import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";


const BUTTON = styled.button`
&:hover{
  background-color: #3197fd;
};
border-radius:5px;
outline:none;
border:none;
background-color:teal;`;

const FORM = styled.form`
margin: 0 auto;
border: 1px solid black;
padding-left: 20px;
width: 300px;
`;

const INPUT = styled.input`
display:block;`

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getUserById = (arr, name) => arr.find((x) => x.name === name || x.number === name);

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name;
    const number = this.state.number;
    const contacts = this.props.contacts;
    (this.getUserById(contacts, name) || this.getUserById(contacts, number))
      ? alert(`${name} is alredy in contacts.`)
      : this.props.onAddContact(this.state.name, this.state.number);
  };

  render() {
    return (
      <>
        <FORM onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <INPUT
            type="text"
            onChange={this.handleChange}
            id="name"
            name="name"
          />
          <label htmlFor="number">Number</label>
          <INPUT
            type="text"
            onChange={this.handleChange}
            id="number"
            name="number"
          />
          <BUTTON type="submit">Add contact</BUTTON>
        </FORM>
      </>
    );
  }
}