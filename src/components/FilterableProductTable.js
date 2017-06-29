import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(){
    super()
  }

  render () {
    return (
      <div>
      <h1>hello</h1>
        <SearchBar/>
        <ProductTable/>
      </div>
    )
  }
}

export default FilterableProductTable