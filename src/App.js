import React from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
function App() {
  let titleProduct='Product List';
  let titleCategory="Category List";
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title={titleCategory} />
          </Col>
          <Col xs="9">
            <ProductList title={titleProduct} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
