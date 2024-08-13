import React from 'react'
import tyson from "../../assets/tyson.jpg"
import { Col, Container, Row } from 'react-bootstrap'
import "./work.css"
const Work = () => {
  return (
   <section id="work">
<Container>
<div className="process">
    <h2>Working Process</h2>
    <h5>Best Creative digital Agency</h5>
</div>
<div className="service">
    <Row>
<Col lg={6}>

<div className="high">
<Row>
<Col lg={3}>
<div className="fus">
<h3>1</h3>
</div>
</Col>
<Col lg={7}>
<div className="inform">
    <h3>Welcome To Innovate</h3>
</div>
</Col>

</Row>
</div>
<div className="juk">
<Row>
<Col lg={3}>
<div className="fus">
<h3>2</h3>
</div>
</Col>
<Col lg={7}>
<div className="inform">
    <h3>Choose Your Services</h3>
</div>
</Col>

</Row>
</div>
<div className="huk">
<Row>
<Col lg={3}>
<div className="fus">
<h3>3</h3>
</div>
</Col>
<Col lg={8}>
<div className="inform">
    <h3>Get Final Results</h3>
</div>
</Col>

</Row>
</div>

</Col>
<Col lg={6}>
<div className="ku">
    <img src={tyson} alt="" />
</div>

</Col>

    </Row>
</div>
</Container>
   </section>
  )
}

export default Work