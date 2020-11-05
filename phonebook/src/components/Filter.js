import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const INPUT = styled.input`
display:block;
margin: 0 auto;`

const Filter = ({value, onChangeFilter}) => {
    return (
        <div>
            <INPUT type="text" value={value} onChange={e => onChangeFilter(e.target.value)}/>
        </div>
    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,

  };