/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/



import React from "react";
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

  
function Thema() {

    
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>상승테마🔺</CardHeader>
              <CardBody style={{display: "flex"}}>
                <div style={{display: "flex"}}>
                <div style={{display: "flex", margin: "10px", marginRight: "150px"}}>테마명</div>
                <div style={{display: "flex", margin:"10px" ,  marginRight: "150px"}}>전일대비</div>
                </div>

                <div style={{display: "flex"}}>
                <div style={{display: "flex", margin:"10px", marginRight: "150px"}}>테마명</div>
                <div style={{display: "flex", margin:"10px", marginRight: "150px"}}>전일대비</div>
                </div>
                </CardBody>


            </Card>

            <Card>
            <CardHeader>하강테마🔻</CardHeader>
              <CardBody style={{display: "flex"}}>
                <div style={{display: "flex"}}>
                <div style={{display: "flex", margin: "10px", marginRight: "150px"}}>테마명</div>
                <div style={{display: "flex", margin:"10px" ,  marginRight: "150px"}}>전일대비</div>
                </div>

                <div style={{display: "flex"}}>
                <div style={{display: "flex", margin:"10px", marginRight: "150px"}}>테마명</div>
                <div style={{display: "flex", margin:"10px", marginRight: "150px"}}>전일대비</div>
                </div>
                </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Thema;
