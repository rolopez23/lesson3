import React, {Component} from 'react';

import Title from './title/Title.jsx';
import Start from './race/Start.jsx';
import Finish from './race/Finish.jsx';
import Race from './race/Race.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false,
      finished: false,
      race: '',
      runners: [],
    }
    this.startRace = this.startRace.bind(this)
  }



  startRace(race) {
    const {started} = this.state;
    this.setState({
      started: !started,
      race, 
    })
  }

  toggleFinished() {
    const {finished} = this.state;
    this.setState({
      finished: !finished, 
    })
  }

  render() {
    const {finished, started} = this.state;
    return (
    <div id='app'>
      <Title />
      {!started ? <Start start={this.toggleStart}/> : <Race finished={finished}/>}
      {finished ? <Finish /> : null}
    </div>
    )
  }


}

export default App;