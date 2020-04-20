import React, {Component} from 'react';

class Start extends Component{
  constructor(props) {
    super(props);
    this.state = {
      race: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const {race} = this.state;
    return ( 
      <div id='start'>
        <label>What is the Race?
          <input className="input" name="race" value ={race} type='text' onChange={this.handleChange}></input>
        </label>
        <button className="button" onClick={()=>{this.pros}}>Start</button>
      </div>
    )
  }
}

export default Start;