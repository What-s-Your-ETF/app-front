import React from "react";
import { Row, Col, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
import { useContext, useState,} from "react";
import { MyContext, ETFListContext } from "./ETFmaker";
import { Form, Table, Button } from "react-bootstrap";
import { Checkbox} from "@mui/material";
import { postPortfolios } from "lib/api/portfolios";

export default function ETFSetting3() {
  const { etfList, setEtfList } = useContext(ETFListContext); //post데이터 저장
  const { setContextValue } = useContext(MyContext);  // 페이지 데이터
  const [percentlist, setPercentlist] = useState([]); // 종목 비중
  const [isChecked, setIsChecked] = useState(false);  //1/n 버튼 클릭 여부

  // 종목 비중 수정 및 추가
  const PercentChange = (e, index) => {
    const weights = [...percentlist];
    weights[index] = e.target.value / 100;  //50 입력시 0.5로 저장되야함
    setPercentlist(weights);
    setEtfList({ ...etfList, weights });
  };

  //체크 눌렀을 때 종목 비중 1/n로
  function Percentavg() {
    setIsChecked(!isChecked);
    const weights = [];
    for (let i = 0; i < etfList.itemCodes.length; i++) {
      weights[i] = 1 / etfList.itemCodes.length;
    }
    setPercentlist(weights);
    setEtfList({ ...etfList, weights });
  }

  // 삭제버튼 눌렀을 때 item 삭제
  function deleteitem(id) {
    console.log(id);
    let itemCodes = [...etfList.itemCodes];
    itemCodes = itemCodes.filter((index) => index !== id);
    setEtfList((prev) => ({
      ...prev,
      itemCodes: itemCodes,
    }));
  }

  // 포트폴리오 등록
  function addportfolios() {
    const itemCodes = etfList.itemCodes.map((item) => item.code);  //etfList에 저장된 itemCodes
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
    postPortfolios(      //post
      postData.name,
      postData.duration,
      postData.investAmounts,
      postData.itemCodes,
      postData.weights
    );
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
                          <td>{item.name}</td>
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
