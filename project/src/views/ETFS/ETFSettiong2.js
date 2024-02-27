import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./ETFmaker";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Form, Table, Button } from "react-bootstrap";
import { ETFListContext } from "./ETFmaker";

let list = [
  {
    title: "삼성그룹",
    gijun: "9,326", //선택일자 마지막일 종가
    suickpersent_1month: "9.32", //선택일자 마지막일 종가 / (선택일자-1달)종가
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "1000", //종목번호
  },
  {
    title: "샘성그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "1001", //종목번호
  },
  {
    title: "삼송그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "1002", //종목번호
  },
  {
    title: "생성그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "1003", //종목번호
  },
  {
    title: "샘송그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "1004", //종목번호
  },
  {
    title: "상성그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "1005", //종목번호
  },
  {
    title: "삼상그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "1006", //종목번호
  },
];

let list2 = [
  {
    title: "키켓그룹",
    gijun: "9,326", //선택일자 마지막일 종가
    suickpersent_1month: "9.32", //선택일자 마지막일 종가 / (선택일자-1달)종가
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "2000", //종목번호
  },
  {
    title: "초콜릿그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "2001", //종목번호
  },
  {
    title: "찰리그룹",
    gijun: "9,326",
    suickpersent_1month: "9.32",
    suickpersent_3month: "5.79",
    suickpersent_6month: "2.73",
    suickpersent_1year: "4.84",
    num: "2002", //종목번호
  },
];

export default function ETFSetting2() {
  const [ETFlist, setETFlist] = useState([]);
  const [SearchText, setSearchText] = useState();
  const [Searchlist, setSearchlist] = useState([]);
  const [Searchlist2, setSearchlist2] = useState([]);
  const { setContextValue } = useContext(MyContext);
  const { etfList, setEtfList } = useContext(ETFListContext);

  function check(checked) {
    setETFlist((prev) => {
      let itemCodes;
      if (prev.includes(checked)) {
        itemCodes = prev.filter((item) => item !== checked);
      } else {
        itemCodes = [...prev, checked];
      }
      setEtfList({ ...etfList, itemCodes });
      return itemCodes;
    });
  }

  function K(text) {
    list.forEach((item) => {
      item.hidden = item.title.includes(text) ? false : true;
    });

    list2.forEach((item) => {
      item.hidden = item.title.includes(text) ? false : true;
    });

    setSearchlist([...list]);
    setSearchlist2([...list2]);
  }

  function KOSPI({ list }) {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>선택</th>
            <th>상품</th>
            <th>기준</th>
            <th colSpan="4">수익률</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>1달</th>
            <th>3달</th>
            <th>6달</th>
            <th>1년</th>
          </tr>
        </thead>
        <tbody>
          {list.map(
            (item) =>
              !item.hidden && (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        onChange={() => check(item)}
                        checked={ETFlist.includes(item)}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.gijun}</td>
                    <td>{item.suickpersent_1month}</td>
                    <td>{item.suickpersent_3month}</td>
                    <td>{item.suickpersent_6month}</td>
                    <td>{item.suickpersent_1year}</td>
                  </tr>
                </React.Fragment>
              )
          )}
        </tbody>
      </Table>
    );
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card style={{ padding: "4%" }}>
              <CardHeader>
                <CardTitle
                  style={{ padding: "1%", textAlign: "center" }}
                  tag="h4"
                >
                  ETF 종목을 선택해주세요
                </CardTitle>

                <div style={{ fontSize: "15px", padding: "4%" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Form.Control
                      type="text"
                      style={{ width: "40%", marginRight: "10px" }}
                      onChange={(e) => setSearchText(e.target.value)}
                    />
                    <Button
                      variant="light"
                      style={{ background: "none", border: "none" }}
                      onClick={() => {
                        K(SearchText);
                      }}
                    >
                      🔍️
                    </Button>
                  </div>
                  <div style={{ marginTop: "20px" }}>ETF 상품</div>

                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="home" title="코스피">
                      <KOSPI list={list} />
                    </Tab>
                    <Tab eventKey="profile" title="코스닥">
                      <KOSPI list={list2} />
                    </Tab>
                  </Tabs>

                  <div style={{ display: "flex", marginTop: "3%" }}>
                    {ETFlist.map((item) => (
                      <div
                        style={{
                          marginRight: "2%",
                          background: "linear-gradient(#DAF4FF,#C2EDFF)",

                          padding: "10px",
                          borderRadius: "100px",
                        }}
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      justifyContent: "flex-end",
                      display: "flex",
                      gap: "2%",
                    }}
                  >
                    <Link>
                      <Button
                        onClick={() => setContextValue("1")}
                        className="d-flex flex-column justify-content-center align-items-end"
                      >
                        이전
                      </Button>
                    </Link>
                    <Link>
                      <Button
                        onClick={() => {
                          if (!etfList.itemCodes) {
                            alert("종목을 선택하지 않았습니다");
                          } else {
                            setContextValue("3");
                          }
                        }}
                        className="d-flex flex-column justify-content-center align-items-end"
                      >
                        다음
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
