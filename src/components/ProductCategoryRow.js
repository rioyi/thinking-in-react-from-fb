import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  constructor (){
    super ()
  }

  render() {
    return (
      <div>
        <h4>{this.props.category}</h4>
      </div>
    );
  }
}

export default ProductCategoryRow;