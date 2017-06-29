import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (){
    super ()
  }

  render () {
    return (
      <div>
        <input type="text"/>
        <input type="checkbox"/>      
      </div>
    )
  }
}

export default SearchBar