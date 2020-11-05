import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactListItem from "./ContactListItem";
import styled from 'styled-components';
import PropTypes from "prop-types";

const UL = styled.ul`
list-style:none;
width: 300px;
margin: 0 auto;
`

const ContactList = ({ filterFN, onRemove }) => {
  return (
    <UL>
    {filterFN().map(({id, name, number}) => (
      <ContactListItem
      key={uuidv4()}
      id={id}
      name={name}
      number={number}
      onRemove={onRemove}
      />
    ))}
  </UL>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterFN: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
