const React = require('react');
const ReactDOM = require('react-dom');

class Entry extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            time: localStorage.getItem((this.props.title + 'Time')) || ''
        };
        this.updateTime = this.updateTime.bind(this);
    }
    updateTime(e) {
        if(!this.props.updating) {
            return null;
        }
        localStorage.setItem((this.props.title + 'Time'), e.target.value);
        this.setState({
            time: e.target.value
        });
    } 
    render(props) {
  	    return (
    	    <div>
                <h2>{this.props.title}: {!this.props.updating && this.state.time}
                    {this.props.updating &&
                        <input 
                            type="text"
                            value={this.state.time}
                            placeholder="enter time"
                            onChange={this.updateTime}
                        />
                    }
                </h2>
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
                className="btn btn-default btn-lg"
            />
        )
    }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
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