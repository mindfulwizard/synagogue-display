const React = require('react');
const Entry = require('./entry')
const Clock = require('./clock');
const EditButton = require('./editButton');
require("../css/board.css");

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

/*function Board() {
    let updating = localStorage.getItem('updating') || 'false';

    function toggle() {
        updating = localStorage.getItem('updating') === 'true' ? 'false' : 'true';
        localStorage.setItem('updating', updating);
    }

    return (
        <div>
            <Clock />
            <Entry updating={updating} title="Shachris" />
            <Entry updating={updating} title="Mincha" />
            <Entry updating={updating} title="Maariv" />
            <EditButton updating={updating} handleClick={toggle} />
        </div> 
    )
}*/

module.exports = Board;