const React = require('react');

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
    	    <div className="entry">
                <h2 className="inset">{this.props.title}: {!this.props.updating && this.state.time}
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

module.exports = Entry;