import React from 'react'
import "./footer.css"
import { Col, Container,Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <section id="footer">
<Container>
    <Row>
<Col lg={5}>
<div className="tank">

<img src={logo} alt="" />
<p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
</div>
</Col>
<Col lg={6}>
<Row>
<Col lg={4}>
<div className="ugu">

<h4>Features</h4>
 
 <p>Home</p>
 <p>About</p>
 <p>Benifit</p>
 <p>Pricing</p>
 <p>Blog</p>
</div>

</Col>
<Col lg={4}>
<div className="ugu">

<h4>Products</h4>
<p>Task Management</p>
<p>Company growth
</p>
  <p>Time tracking</p>
</div>
</Col>
<Col lg={4}>
<div className="ugu">

<h4>Support</h4>
<p>Customer service</p>
<p>Accessibility</p>
<p>Contact us</p>
</div>
</Col>
</Row>
</Col>
    </Row>
    <Row>
     <Col lg={4}>
     <div className="pus">
      <h3>@20201 Innovate.All rights reserved.</h3>
     </div>
     
     </Col>
<Col lg={6}>
<Row>
  <Col lg={6}>
  <div className="gud">

  <h3>Privacy policy</h3>
  </div>
  </Col>
  <Col lg={6}>
  <div className="gud">

  <h3>Terms & condition</h3>
  </div>
  </Col>
</Row>
</Col>

    </Row>
</Container>
    </section>
  )
}

export default Footer