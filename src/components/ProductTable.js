import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

class ProductTable extends Component {
  constructor (){
    super ()
  }

  render () {
    return (
      <div>
        <ProductCategoryRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductCategoryRow/>
        <ProductRow/>
        <ProductRow/>
        <ProductRow/>
      </div>
    )
  }
}

export default ProductTable
