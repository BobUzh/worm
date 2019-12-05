import React, {Component} from 'react';
import Start from './Start';
import Worm from './Worm';

import './App.css';


export default class App extends Component {
  state= {
    start:true
  }

start = ()=>{
  this.setState((state) =>{
    return({
      start:!state.start
    })
  })
}

  render() {

    const view = this.state.start ? <Start start={this.start} /> 
                                  : <Worm start={this.start} />
    return (
      <div className="app">
        {view}
      </div>
    )
  };
}

