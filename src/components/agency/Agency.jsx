import React from 'react'
import "./agency.css"
import khali from "../../assets/khali.jpeg"
import tap from "../../assets/tap.jpg"
import member from "../../assets/member.jpg"
import { Row,Col,Card,CardBody,Button,Container} from 'react-bootstrap'

const Agency = () => {
  return (
    <section id="agency">
      <Container>
      <div className="work">
        <h2>Services We Offer For Agency</h2>
        <p>Best Creative digital Agency</p>
       </div>
       <div className="salt">
        <Row mt-5>
           <Col lg={4}>
           <div className="sai">
           <Card style={{ width: '25rem' }}>
     <img src={member}  alt="" />
      <Card.Body>
        <p>Business Planning</p>
        <h3>Email Marketing</h3>
       
      </Card.Body>
    </Card>
           </div>
           </Col>
           <Col lg={4}>
           <div className="sai">
           <Card style={{ width: '25rem' }}>
     <img src={tap}  alt="" />
      <Card.Body>
        <p>Market Research</p>
        <h3>Data Analysis</h3>
       
      </Card.Body>
    </Card>
           </div>
           </Col>
           <Col lg={4}>
           <div className="sai">
           <Card style={{ width: '25rem' }}>
     <img src={khali}  alt="" />
      <Card.Body>
        <p>Marketing Strategy</p>
        <h3>Optimization</h3>
       
      </Card.Body>
    </Card>
           </div>
           </Col>


        </Row>
       </div>

      </Container>
    </section>
  )
}

export default Agency