import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";



const BUTTON = styled.button`
&:hover{
  background-color: #3197fd;
};
border-radius:5px;
outline:none;
border:none;
background-color:teal;`

const LI = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ContactListItem = ({id, name, number, onRemove }) => {
    return (
        <LI>
        <p>{name}:</p>
        <span>{number}</span>
        <BUTTON
          type="button"
          onClick={()=>onRemove(id)}
        >
          Delete
        </BUTTON>
      </LI>
    );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
