import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import FormField from '../components/misc/FormField';
import foodService from '../services/foodService'

const VALID_URL = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/

const validators = {
  name : value => value.length > 3,
  calories : value => value >= 0,
  imageUrl : value => VALID_URL.test(value)
}

class AddFood extends  Component {
  
  state={
    shouldRedirect : false,
    data : {
      name : '',
      calories: '',
      imageUrl : ''
    },
    errors : {
      name : true,
      calories: true,
      imageUrl : true
    },
    touch : {
    }
  }

  handleChange = (e) => {
    const { name,value } = e.target
    const isValid = validators[name](value)
    

    this.setState({
      data: {
        ...this.state.data,
        [name] : value
      },
      errors: {
        ...this.state.errors,
        [name] : !isValid
      }
    })  
  }

  handleBlur = (e) => {
    console.log(this.state.touch)  
    const { name } = e.target
    this.setState({
      touch : {
        ...this.state.touch,
        [name] : true
      }
    }) 
  }

  handleSubmit = () => {
    foodService.addFood(this.state.data)
      .then(() => this.setState({ shouldRedirect : true }))
  }

  getValidationClassName = (attr) => {
    const { errors, touch } = this.state
   console.log(touch[attr])
    if (!touch[attr]) {
      return ''
    } else if (errors[attr]) {
      return 'is-invalid'
    } else {
      return 'is-valid'
    }
  }

  render () {

    if(this.state.shouldRedirect) {
      return  <Redirect to='/' />
    }

    const { data, errors, touch } = this.state

    const hasErrors = Object.values(errors).some(el => el===true)

    return(
      <form className='w-25 mt-4 ml-auto mr-auto' onSubmit = {this.handleSubmit}>

        <FormField 
          label='Name'
          name='name'
          onBlur = {this.handleBlur}
          value={data.name}
          onChange={this.handleChange}
          touch={touch.name}
          error={errors.name}
          validationClassName={this.getValidationClassName('name')}
          inputType='text'/>


        <FormField 
          label='Calories'
          name='calories'
          onBlur={this.handleBlur}
          value={data.calories}
          onChange={this.handleChange}
          touch={touch.calories}
          error={errors.calories}
          validationClassName={this.getValidationClassName('calories')}
          inputType='number'/>


        <FormField 
          label='Image'
          name='imageUrl'
          onBlur={this.handleBlur}
          value={data.imageUrl}
          onChange={this.handleChange}
          touch={touch.imageUrl}
          error={errors.imageUrl}
          validationClassName={this.getValidationClassName('imageUrl')}
          inputType='text'/>


        <button className={`btn ${hasErrors ? 'btn-danger' : 'btn-success'}`} type='submit' disabled={hasErrors}> Submit </button>
      </form>
    )
  }

}
  



export default AddFood