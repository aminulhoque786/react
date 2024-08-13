import React from 'react'
import "./experience.css"
import { Container,Row,Col,Accordion } from 'react-bootstrap'
import kosto from "../../assets/kosto.png"
import haat from "../../assets/haat.png"
const Experience = () => {
  return (
    <section id="experience">
  <Container>
<Row>
<Col lg={6}>
<div className="right">
    <h2>25 Years Of Experience We Provide Solutions</h2>
</div>
<Row>
<Col lg={2}>
<div className="kosto">
<img src={kosto} alt="" />
</div>
</Col>
<Col lg={6}>
<div className="man">
    <h3>Professional Agency</h3>
    <p>If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.</p>
</div>
</Col>
</Row>
<Row>
<Col lg={2}>
<div className="kosto">
<img src={haat} alt="" />
</div>
</Col>
<Col lg={6}>
<div className="man">
    <h3>Best Solutions Provider</h3>
    <p>We know more about digital direct response than virtually any digital marketing agency in the industry.</p>
</div>
</Col>
</Row>


</Col>
<Col lg={6}>
<div className="luck">
<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <div className="jik"><h6>- We improve your online presence.</h6></div>  </Accordion.Header>
        <Accordion.Body>
        If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <div className="jik"><h6>+ the trusted digital creative agency.</h6></div>   </Accordion.Header>
        <Accordion.Body>
        If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header> <div className="jik"><h6>+ powerful potential in digital marketing.</h6></div>  </Accordion.Header>
        <Accordion.Body>
        If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> <div className="jik"><h6>+ why we are digital agency..</h6></div>    </Accordion.Header>
        <Accordion.Body>
        If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
</div>
</Col>

</Row>

  </Container>

    </section>
  )
}

export default Experience