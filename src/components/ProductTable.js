import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  constructor (){
    super ()
  }

  render () {
    let rows = []
    let last_category = null

    if (this.props.products != null) {
      this.props.products.forEach((product) => {
        if(product.category != last_category)
          rows.push(<ProductCategoryRow category = { product.category } key = { product.category } />)
        rows.push(<ProductRow name = {product.name} key={product.name} />)
        
      })
    } else {
      rows.push(<h1>Loading</h1>)
    }


    return (
      <div>
        { rows }
      </div>
    )
  }
}

export default ProductTable
