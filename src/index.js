import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable.js';


// ReactDOM es el pegamento entre React y el DOM. A menudo, sólo lo
// utilizará para una sola cosa: el montaje con ReactDOM.render(). 
// Otra característica útil de ReactDOM es ReactDOM.findDOMNode()
// que puede utilizar para obtener acceso directo a un elemento DOM. 
// (Algo que debes usar con moderación en las aplicaciones de React, 
// pero puede ser necesario). Si tu aplicación es "isomorfa", también
// usarías ReactDOM.renderToString () en tu código de fondo.

//const app = getElementById('app');
// ReactDOM.render(
//   <h1>hi</h1>,document.getElementById('app')
// );


ReactDOM.render(
  <FilterableProductTable/>,
  document.getElementById('app')
);
