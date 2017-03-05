const React = require('react');

function EditButton(props) {
    return (
        <input 
            type="button"
            value={props.updating ? "click when done editing" : "click to start editing"}
            onClick={props.handleClick}
            className="btn btn-default btn-lg"
        />
    )
}

module.exports = EditButton;