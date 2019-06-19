import React, { Component } from 'react'
import TodaysFoodItem from './TodaysFoodItem';

class TodaysFood extends Component {
  state = {
    totalCalories : 0
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      totalCalories : newProps.foodData.reduce((acc,current) => {
        return acc + current.quantity * current.calories
      },0)
    })
  }

  render() {
    const { foodData } = this.props 
    console.log(foodData)
    return(
      <div>
        <h2>Today's Food</h2>
        <ul>
          {foodData.map((e,i) => <TodaysFoodItem {...e} key={i} onDelete={this.props.onDelete}/>) }
        </ul>
        <p> Total: {this.state.totalCalories} calories</p>
      </div>
    )
  }
}

export default TodaysFood