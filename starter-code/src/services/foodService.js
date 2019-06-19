import FoodList from '../data/foods.json'

let foodList = FoodList

foodList.forEach( a => {
  a.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
})

const getList = () => Promise.resolve(foodList)

const addFood = (foodItem) => {
  return new Promise((resolve,reject) => {
    foodList = [...foodList,foodItem]
    resolve(foodItem)
  })
}

export default { 
  getList,
  addFood 
}