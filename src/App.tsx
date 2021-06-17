import Message from './components/Message';
import React, { Component } from 'react'
import './App.css';

const initialState = {
  name: "Akhmadjon",
  message: "Typescript is cool!!"
}

type State = Readonly<typeof initialState>

export default class App extends Component <any, State>{
  readonly state: State= initialState
  render() {
    return (
      <div>

        <Message name={this.state.name} message={this.state.message} />

      </div>
    )
  }
}
