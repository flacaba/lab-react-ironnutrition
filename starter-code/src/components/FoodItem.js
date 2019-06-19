import React, { Component } from 'react'

class FoodItem extends Component {
  state = {
    quantity : 1
  }

  handleQuantity = (e) => {
    this.setState({
      [e.target.name] : [e.target.value]
    })
  }

  addFoodData = () => {
    this.props.addFoodData({ name: this.props.name, calories: this.props.calories, quantity: this.state.quantity, id:this.props.id})
  }
 
  render() {

    const { name,calories,image } = this.props
    return(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={ image } alt={ name } />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{ name }</strong> <br />
                <small>{`${ calories } calories`}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input text-right"
                  type="number" 
                  value={ this.state.quantity }
                  name='quantity'
                  onChange = { this.handleQuantity }
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick = { this.addFoodData }>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
      )
  }
}

export default FoodItem