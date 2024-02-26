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

import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import axios from "axios";

function Thema() {
  const [upThema, setUpThema] = useState([]);
  const [donwThema, setDownThema] = useState([]);

  useEffect(() => {
    async function getThema() {
      const response = await axios.get('/api/stocks/themes/rank?ordering=desc');
      setUpThema(response.data);
      const response2 = await axios.get('/api/stocks/themes/rank?ordering=asc');
      setDownThema(response2.data);
    }
    getThema();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader style={{fontSize: "16px", fontWeight: "bold"}}>상승테마🔺</CardHeader>
              <CardBody>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%", fontWeight: "bolder"}}>테마명</div>
                  <div style={{width: "50%", fontWeight: "bolder"}}>전일대비</div>
                  </div>
                  </div>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%", fontWeight: "bolder"}}>테마명</div>
                  <div style={{width: "50%", fontWeight: "bolder"}}>전일대비</div>
                  </div>
                  </div>
                  {upThema.map((el, index) => (
                    <div key={index} style={{display: "flex", width: "50%", padding: "10px"}}>
                      <div style={{width: "50%", fontSize : "16px", fontWeight: "600"}}>{el.name} <br/>
                        <div style={{fontSize: "11px", fontWeight: "bold", marginTop: "5px"}}>
                          
                          <span style={{
                              backgroundColor: "mistyrose", // 배경색
                              color: "#333", // 글자색
                              borderRadius: "5px", // 모서리 둥글게
                              padding: "2px 5px", // 내부 여백
                              marginRight: "5px", // 오른쪽 마진
                              display: "inline-block" // 인라인 블록으로 표시
                            }}>
                              #{el.lead1}
                            </span>

                            <span style={{
                              backgroundColor: "mistyrose", // 배경색
                              color: "#333", // 글자색
                              borderRadius: "5px", // 모서리 둥글게
                              padding: "2px 5px", // 내부 여백
                              marginRight: "5px", // 오른쪽 마진
                              display: "inline-block" // 인라인 블록으로 표시
                            }}>
                              #{el.lead2}
                            </span>

                          </div>
                      </div>
                      
                      <div style={{width: "50%", color: "red"}}>+{el.volatility} %</div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card>
              <CardHeader style={{fontSize: "16px", fontWeight: "bold"}}>하락테마 <img src="https://ssl.pstatic.net/imgstock/images/images4/ico_down.gif" style={{height : "9px"}}></img></CardHeader>
              <CardBody>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%", fontWeight: "bolder"}}>테마명</div>
                  <div style={{width: "50%", fontWeight: "bolder"}}>전일대비</div>
                  </div>
                  </div>
                  <div style={{width: "50%", padding: "10px"}}>
                  <div style={{display: "flex"}}>
                  <div style={{width: "50%", fontWeight: "bolder"}}>테마명</div>
                  <div style={{width: "50%", fontWeight: "bolder"}}>전일대비</div>
                  </div>
                  </div>
                  {donwThema.map((el, index) => (
                    <div key={index} style={{display: "flex", width: "50%", padding: "10px"}}>
                      <div style={{width: "50%", fontSize : "16px", fontWeight: "600"}}>{el.name} <br/>
                        <div style={{fontSize: "11px", fontWeight: "bold", marginTop: "5px"}}>
                          
                          <span style={{
                              backgroundColor: "lavender", // 배경색
                              color: "#333", // 글자색
                              borderRadius: "5px", // 모서리 둥글게
                              padding: "2px 5px", // 내부 여백
                              marginRight: "5px", // 오른쪽 마진
                              display: "inline-block" // 인라인 블록으로 표시
                            }}>
                              #{el.lead1}
                            </span>

                            <span style={{
                              backgroundColor: "lavender", // 배경색
                              color: "#333", // 글자색
                              borderRadius: "5px", // 모서리 둥글게
                              padding: "2px 5px", // 내부 여백
                              marginRight: "5px", // 오른쪽 마진
                              display: "inline-block" // 인라인 블록으로 표시
                            }}>
                              #{el.lead2}
                            </span>

                          </div>
                      </div>
                      
                      <div style={{width: "50%", color: "blue"}}>{el.volatility} %</div>
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
