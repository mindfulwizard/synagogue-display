const React = require('react');
const ReactDOM = require('react-dom');

class Entry extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        };
        this.updateTime = this.updateTime.bind(this);
    }
    updateTime(e) {
        if(!this.props.updating) {
            return null;
        }
        this.setState({
            time: e.target.value
        });
    } 
    render(props) {
  	    return (
    	    <div>
                <h2>{this.props.title}</h2>
                <h2>{this.state.time}</h2>
                {this.props.updating &&
                    <input 
                        type="text" 
                        value={this.state.time}
                        placeholder="enter time"
                        onChange={this.updateTime}
                    />
                }
    	    </div>
 	    );
  }
}

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
            />
        )
    }
}

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