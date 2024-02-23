import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
 
} from "reactstrap";

import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';


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
                <Form.Group className="mb-3"  controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={()=>{}} type="text" placeholder="제목을 입력해주세요" />
                </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="content" onChange={()=>{}} placeholder="내용을 입력해주세요" />
                    </Form.Group>
                <Link to={"/admin/community"}>
                    <div id="btn-login" style={{marginTop : '10px', display:"flex", justifyContent:"center"}}>
                    <Button type="submit" class="btn btn-success">글 등록하기</Button>
                    </div>
                </Link>


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
