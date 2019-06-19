import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    searchText : ''
  }

  handleChange = (e) => {
    this.setState( {
      [e.target.name] : e.target.value
    }, () => {
      this.props.onSearch(this.state.searchText)
    })
  }

  render() {
    return (
    <div className = 'row'>
      <form className =' col mb-5'>
        <div className ='form-group'></div>
        <input className = 'w-75'
        name='searchText'
        autoComplete ='off'
        value={this.state.searchText}
        onChange = {this.handleChange}/>
      </form>
    </div>
    )
  }
}

export default SearchBar