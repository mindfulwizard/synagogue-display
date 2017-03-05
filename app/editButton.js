const React = require('react');

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.toggleEditing = this.toggleEditing.bind(this);
    }

    toggleEditing() {
        this.props.handleClick();
    }

	render() {
  	    return (
            <input 
                type="button"
                value={this.props.updating ? "click when done editing" : "click to start editing"}
                onClick={this.toggleEditing}
                className="btn btn-default btn-lg"
            />
        )
    }
}

module.exports = EditButton;