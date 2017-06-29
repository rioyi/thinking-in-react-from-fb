import React, { Component } from 'react';

class ProductRow extends Component {
  constructor (){
    super ()
  }

  render() {
    return (
      <div>
          {this.props.name}
      </div>
    );
  }
}

export default ProductRow;