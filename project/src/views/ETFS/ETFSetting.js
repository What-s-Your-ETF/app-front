import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";



export default function ETFSetting() {
  

  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          
            <Card>
              <CardHeader>
              <CardTitle style={{textAlign:"center"}} tag="h4">투자 금액과 기간을 입력해주세요</CardTitle>


                {/* <Button onClick={() => navigate('write')} className="d-flex flex-column justify-content-center align-items-end">
                글 작성하기
                </Button> */}
                
                <Link to={"/admin/community/write"}><Button className="d-flex flex-column justify-content-center align-items-end">
                글 작성하기
                </Button></Link>

              </CardHeader>
              <CardBody>
              
              </CardBody>
            </Card>
          </Col>
         
        </Row>
      </div>
    </>
  );
}

