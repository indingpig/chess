import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const filterText = this.props.filterText;
    return (
      <div>
        <input type="text" value={filterText}
          onInput={this.props.onHandleInput}/>
        <label>
          <input type="checkBox" onChange={this.props.onStockChange}/>
          Only show products in stock
        </label>
      </div>
    )
  }
}

function ProductTable (props) {
  const tabData = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];
  return (
    <div>
      <div>Name</div>
      <div>Price</div>
      <div>
        <ProductCategoryRow />
        <ProductRow />
      </div>
    </div>
  )
}

function ProductCategoryRow(props) {
  return (
    <div>
      <h3>{props.category}</h3>
      {/* <ProductRow /> */}
    </div>
  )
}

function ProductRow (props) {
  return (
    <div>
      
    </div>
  )
}
class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }
  handleInput(e) {
    this.setState({
      filterText: e.target.value
    })
  }
  handleStockChange(e) {
    this.setState({
      inStockOnly: e.target.checked
    })
  }
  render() {
    const filterText = this.state.filterText;
    const inStockOnly = this.state.inStockOnly;
    return (
      <div>
        {/* <div>{this.state.filterText}</div> */}
        {/* <div>{JSON.stringify({inStockOnly})}</div> */}
        <SearchBar filterText={filterText}
          inStockOnly={inStockOnly}
          onHandleInput={(e) => this.handleInput(e)}
          onStockChange={e => this.handleStockChange(e)}
          />
        <ProductTable />
      </div>
    )
  }
}


ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById('root')
);
