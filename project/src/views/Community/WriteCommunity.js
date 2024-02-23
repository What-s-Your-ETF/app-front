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
import { useNavigate } from "react-router-dom/dist";

function WCommunity() {
    const navigate = useNavigate()

    return (
        <>
        <div className="content">
            <Row>
                <Col md="12">
                    <Button onClick={() => navigate(-1)} className="d-flex flex-column justify-content-center align-items-end">
                        뒤로가기
                    </Button>
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
