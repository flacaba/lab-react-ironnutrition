import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FoodList from '../components/FoodList';
import foodService from '../services/foodService'
import SearchBar from '../components/SearchBar';
import TodaysFood from '../components/TodaysFood';

class Home extends Component {
  state = {
    foodData : [],
    searchFoodData : [],
    todaysFoodData:[]
  }

  

  componentDidMount() {
    foodService.getList()
      .then(
        foodData => this.setState( { foodData, searchFoodData : [...foodData] })
      )
  }

  handleSearch = (searchText) => {
    this.setState({
      searchFoodData : this.state.foodData.filter(e => e.name.toLowerCase().includes(searchText.toLowerCase()))
    })
  }

  addFoodData = (foodItem) => {
    if (this.state.todaysFoodData.filter(a => a.name === foodItem.name).length) {
      const sumTodaysFoodData = this.state.todaysFoodData.map(a => {
        if (a.name === foodItem.name) {
          const obj = Object.assign(a)
          obj.quantity = Number(foodItem.quantity) + Number(obj.quantity)
          return obj
        } else {
          return a
        }
      })
      this.setState({
        todaysFoodData : [...sumTodaysFoodData]
      })
    } else {
      this.setState({
        todaysFoodData : [...this.state.todaysFoodData,foodItem]
      })
    }
  }

  handleDelete= (foodItem) => {

  }



  render() {
    console.log(this.state.foodData)
    return(
      <div className=' mt-4 mb-4 ml-5'>
        <SearchBar onSearch = { this.handleSearch } />
        <Link className='btn btn-primary mb-5' to='/new'>Add new food</Link>
        <div className='row'>
          <div className='col-lg-8'>
            <FoodList foodList={ this.state.searchFoodData } addFoodData = { this.addFoodData }/>
          </div>
          <div className=''>
            <TodaysFood foodData= { this.state.todaysFoodData } onDelete = { this.handleDelete }/>
          </div>
        </div>

        

      </div>
    )
  }
}

export default Home

