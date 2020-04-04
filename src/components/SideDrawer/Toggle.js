import React from 'react';

import './ToggleButton.css'

const togglerButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />

    </button>
);

export default togglerButton