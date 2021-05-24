import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component{
  state={
    currentCategory: "",
    products:[],
    cart:[]
  }
  componentDidMount(){
    this.getProducts();
  }
  changeCategory = (category) => {
    this.setState({
      currentCategory: category.categoryName,
    });
    this.getProducts(category.id);
  };
 


  getProducts=(id)=>{
    let url = "http://localhost:3000/products";
    if(id){
      url+="?categoryId="+id;
    }
    fetch(url)
    .then(response=>response.json())
    .then(data=>this.setState({products:data}));
  }


  addToCart=(product)=>{
    let newCart=this.state.cart;
    var addedItem=newCart.find(c=>c.product.id===product.id);
    if(addedItem)
    {
      addedItem.quantity+=1;
    }
    else
    {
      newCart.push({product:product,quantity:1});
      
    }
    newCart.map(c=>{ if(product.id==c.product.id){
      if(c.product.unitsInStock >0)
      {

        c.product.unitsInStock -=1;
      }
    } })
    this.setState({cart:newCart});
  }



  render(){
    let productInfo={title:'Product List',name:'product'};
    let categoryInfo={title:"Category List",name:'category'};
  return (
    <div>
      <Container>
      <Navi cart={this.state.cart} />
        <Row>
          <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList addToCart={this.addToCart} products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  )
  }
}

