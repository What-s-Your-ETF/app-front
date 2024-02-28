import React from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { useContext, useState, useEffect } from "react";
import { MyContext, ETFListContext } from "./ETFmaker";
import { Form, Table, Button } from "react-bootstrap";
import { Checkbox, duration } from "@mui/material";
import { postPortfolios } from "lib/api/portfolios";

export default function ETFSetting3() {
  const { etfList, setEtfList } = useContext(ETFListContext);
  const [ETFList, setETFlist] = useState([]);
  const { setContextValue } = useContext(MyContext);
  const [percentlist, setPercentlist] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
<<<<<<< HEAD

  console.log(etfList);

=======
  
>>>>>>> 9c7d83c5ee76afc830dfd9ebe6bd51dd7aed514c
  const PercentChange = (e, index) => {
    const weights = [...percentlist];
    weights[index] = e.target.value / 100;
    setPercentlist(weights);
    setEtfList({ ...etfList, weights });
  };

  function Percentavg() {
    setIsChecked(!isChecked);
    const weights = [];
    for (let i = 0; i < etfList.itemCodes.length; i++) {
      weights[i] = 1 / etfList.itemCodes.length;
    }
    setPercentlist(weights);
    setEtfList({ ...etfList, weights });
  }

  function deleteitem(id) {
    console.log(id);
    let itemCodes = [...etfList.itemCodes];
    itemCodes = itemCodes.filter((item, index) => index !== id);
    setEtfList((prev) => ({
      ...prev,
      itemCodes: itemCodes,
    }));

    //setEtfList((etfList) => etfList.filter((item, index) => index !== id));
    //console.log(etfList);
    // setEtfList((prev) => {
    //   let itemCodes;
    //   itemCodes = prev.filter((item, index) => index === id);
    //   console.log({ ...prev,itemCodes });
    //   console.log(etfList);
    //   return itemCodes;
    // });
  }

  function addportfolios() {
    const itemCodes = etfList.itemCodes.map((item) => item.stockItem.code);
    const postData = {
      name: etfList.name,
      duration: {
        startDate: etfList.startDate,
        endDate: etfList.endDate,
      },
      investAmounts: parseInt(etfList.investAmounts),
      itemCodes: itemCodes,
      weights: etfList.weights,
    };
    console.log(postData);
    postPortfolios(
      postData.name,
      postData.duration,
      postData.investAmounts,
      postData.itemCodes,
      postData.weights
    );
<<<<<<< HEAD
    
=======
>>>>>>> 9c7d83c5ee76afc830dfd9ebe6bd51dd7aed514c
  }

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card style={{ padding: "4%" }}>
            <CardHeader>
              <CardTitle
                style={{ padding: "1%", textAlign: "center" }}
                tag="h4"
              >
                ETF 종목의 투자 비중을 선택해주세요
              </CardTitle>

              <div style={{ fontSize: "15px", padding: "4%" }}>
                <div style={{ display: "flex", alignItems: "center" }}></div>
                <div style={{ marginTop: "20px" }}>투자비중 선택</div>
                <div
                  style={{ marginTop: "10px", fontSize: "12px", color: "gray" }}
                >
                  선택한 종목 각각의 투자비중은 반드시 최소 1이상 입력해야하며,
                  투자비중 총합이 100%가 되도록 입력해주세요 <br />
                  선택한 종목은 종가기준으로 적용됩니다
                </div>

                <div style={{ marginTop: "20px" }}>
                  총 {etfList.itemCodes.length}개
                </div>

                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>상품명</th>
                      <th>투자비중(%)</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    {etfList.itemCodes.map((item, id) => (
                      <React.Fragment key={item.id}>
                        <tr>
                          <td>{item.stockItem.name}</td>
                          <td>
                            {isChecked === false ? (
                              <Form.Control
                                className="custom-input"
                                type="num"
                                value={(percentlist[id] || 0) * 100}
                                onChange={(e) => {
                                  PercentChange(e, id);
                                }}
                                style={{ marginBottom: "10px", height: "40px" }}
                              />
                            ) : (
                              <div>{(1 / etfList.itemCodes.length) * 100}</div>
                            )}
                          </td>
                          <td>
                            <Button onClick={() => deleteitem(id)}>삭제</Button>
                          </td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </Table>

                <div
                  style={{
                    justifyContent: "flex-end",
                    display: "flex",
                    gap: "2%",
                  }}
                >
                  <Checkbox onClick={Percentavg}></Checkbox>
                  <Button
                    onClick={() => setContextValue("2")}
                    className="d-flex flex-column justify-content-center align-items-end"
                  >
                    이전
                  </Button>
                  <Button
                    href="/admin/myetfs"
                    className="d-flex flex-column justify-content-center align-items-end"
                    onClick={() => {
                      addportfolios();
                    }}
                  >
                    ETF 만들기
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
