const React = require('react');
const ReactDOM = require('react-dom');
const Entry = require('./entry')
const Clock = require('./clock.js');
const EditButton = require('./editButton');

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            updating: !this.state.updating
        });
    }
    
	render() {
        return (
            <div>
                <Clock />
                <Entry updating={this.state.updating} title="Shachris" />
                <Entry updating={this.state.updating} title="Mincha" />
                <Entry updating={this.state.updating} title="Maariv" />
                <EditButton updating={this.state.updating} handleClick={this.toggle} />
            </div> 
        )
    }
}

ReactDOM.render(
	<Board />, 
	document.getElementById('app')
);