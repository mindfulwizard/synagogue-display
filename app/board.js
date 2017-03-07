const React = require('react');
const Entry = require('./entry')
const Clock = require('./clock');
const EditButton = require('./editButton');

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updating: false,
            times: this.get()
        };
        this.toggle = this.toggle.bind(this);
        this.toSave = this.save.bind(this);
    }
    save(title,time){
        const times = this.get();
        times[title] = time;
        localStorage.setItem('times', JSON.stringify(times));
        this.setState({times});
    }
    get(){
        return JSON.parse(localStorage.getItem('times')) || {};
    }
    toggle() {
        this.setState({
            updating: !this.state.updating
        });
    }

	render() {
        const times = this.state.times;
        const {updating} = this.state;
        return (
            <div>
                <Clock />
                <Entry updating={updating} save={this.toSave} title="Shachris">{times}</Entry>
                <Entry updating={updating} save={this.toSave} title="Mincha">{times}</Entry>
                <Entry updating={updating} save={this.toSave} title="Maariv">{times}</Entry>
                <EditButton updating={updating} handleClick={this.toggle} />
            </div> 
        )
    }
}

module.exports = Board;