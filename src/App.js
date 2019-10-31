import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charles',
        job: 'Janitor'
      },
      {
        name: 'Mac',
        job: 'Bouncer'
      },
      {
        name: 'Dee',
        job: 'Aspiring Artist'
      },
      {
        name: 'Arthur',
        job: 'Software Dev'
      },
      {
        name: 'Denis',
        job: 'Bartender'
      },
    ]
    return (
      <div className="Container">
          <Table characterData={characters} />
      </div>
    )
  }
}

export default App