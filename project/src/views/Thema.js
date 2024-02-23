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
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
  
function Thema() {

  let upThema = [
    {
      title: "공기청정기",
      num : "11.08%"
    },
    {
      title:"2024 상반기 신규상장",
      num : "8.98%"
    },
    {
      title:"HBM(고대역폭메모리)",
      num:"5.52%",
    },
    {
      title:"황사/미세먼지",
      num:"4.97%"
    },
    {
      title:"2024 상반기 신규상장",
      num : "8.98%"
    },
    {
      title:"HBM(고대역폭메모리)",
      num:"5.52%",
    },
    {
      title:"황사/미세먼지",
      num:"4.97%"
    }
  ]
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>상승테마🔺</CardHeader>
              <CardBody>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%"}}>테마명</div>
                  <div style={{width: "50%"}}>전일대비</div>
                  </div>
                  </div>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%"}}>테마명</div>
                  <div style={{width: "50%"}}>전일대비</div>
                  </div>
                  </div>
                  </div>
                  <div style={{display: "flex", flexWrap: "wrap"}}>
                  {upThema.map((el, index) => (
                  <div key={index} style={{display: "flex", width: "50%", padding: "10px"}}>
                  <div style={{width: "50%"}}>{el.title}</div>
                  <div style={{width: "50%", color:"red"}}>{el.num}</div>
                 </div>
                  ))}
                </div>
            </CardBody>
            </Card>

            <Card>
              <CardHeader>하강테마      <img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif"></img></CardHeader>
              <CardBody>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%"}}>테마명</div>
                  <div style={{width: "50%"}}>전일대비</div>
                  </div>
                  </div>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%"}}>테마명</div>
                  <div style={{width: "50%"}}>전일대비</div>
                  </div>
                  </div>
                  </div>
                  <div style={{display: "flex", flexWrap: "wrap"}}>
                  {upThema.map((el, index) => (
                  <div key={index} style={{display: "flex", width: "50%", padding: "10px"}}>
                  <div style={{width: "50%"}}>{el.title}</div>
                  <div style={{width: "50%", color:"blue"}}>{el.num}</div>
                 </div>
                  ))}
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
