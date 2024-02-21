import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
 
} from "reactstrap";

import { Form, Button} from 'react-bootstrap'



function WCommunity() {
  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Community Board</CardTitle>
               
              </CardHeader>
              <CardBody>

              <div md="2" xs="2">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control placeholder="제목을 입력해주세요" />
                </Form.Group>


              </div>




              </CardBody>
            </Card>
          </Col>
         
        </Row>
      </div>
    </>
  );
}

export default WCommunity;
