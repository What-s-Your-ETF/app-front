import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./ETFmaker";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Form, Table, Button } from "react-bootstrap";
import { ETFListContext } from "./ETFmaker";
import {
  fetchkospi200,
  searchkospi200,
  fetchkospi200price,
} from "lib/api/stock";
import Pagination from "react-bootstrap/Pagination";
import { convertCompilerOptionsFromJson } from "typescript";

export default function ETFSetting2() {
  const [ETFlist, setETFlist] = useState([]); //선택 종목
  const [SearchText, setSearchText] = useState(); //검색 키워드
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [list3, setList3] = useState([]);
  //불러오는 전체 리스트 (코스피, 코스피200, 코스닥)
  const { setContextValue } = useContext(MyContext); //페이지 이동
  const { etfList, setEtfList } = useContext(ETFListContext); //post데이터 저장
  const [page, setPage] = useState(1); //현재 페이지
  const [pages1, setPages1] = useState(0);
  const [pages2, setPages2] = useState(0);
  const [pages3, setPages3] = useState(0);
  //총페이지
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);
  //페이지 이동
  const [pagePrice, setPagePrice] = useState([]);

  //수익률 들고오기
  async function returntrend(list) {
    let idArray= list.map((item) => {
      return { _id: item._id };
    });

    const postData = {
      stockItems: idArray,
      duration: {
        startDate: etfList.startDate,
        endDate: etfList.endDate,
      },
    };

    let price =  await fetchkospi200price(postData);
    return price;
  }

  //리스트 들고오기
  useEffect(() => {
    const fetchData = async () => {
      // 코스피 200 데이터 가져오기
      let response = await fetchkospi200(page); // 페이지 번호를 인자로 넘깁니다.
      setList3(response.docs);
      setPages3(response.totalPages);
  
      // 선택한 페이지에 해당하는 가격 정보 가져오기
      const priceArray = await returntrend(response.docs);
      setPagePrice(priceArray);
      console.log("price Array !!! ", priceArray);
    };
  
    fetchData();
  }, [page, start, end]); // 페이지 번호가 변경될 때마다 useEffect가 다시 실행되도록 의존성 배열에 page 추가
  

  //페이지 이동
  let items = [];
  for (let number = start; number <= end; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        activeLabel=""
        onClick={() => paging(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  async function paging(id) {
    let response = await fetchkospi200(id);
    setList3(response.docs);
    setPage(id);
  }

  function pluspage(pages) {
    if (end < pages) {
      let newEnd = end + 5;
      let newStart = start + 5;
      setEnd(newEnd);
      setStart(newStart);
      paging(newStart);
    }
  }

  function minuspage() {
    if (start > 1) {
      let newEnd = end - 5;
      let newStart = start - 5;
      setEnd(newEnd);
      setStart(newStart);
      paging(newStart);
    }
  }

  //페이지 초기화
  function rr() {
    setPage(1);
    setStart(1);
    setEnd(5);
  }

  //종목 선택
  function check(item) {
    setETFlist((prev) => {
      const itemExists = prev.some((prevItem) => prevItem.stockItem === item.stockItem);
      let itemCodes;
      if (itemExists) {
        itemCodes = prev.filter((prevItem) => prevItem.stockItem !== item.stockItem);
      } else {
        itemCodes = [...prev, item];
      }
  
      // 선택된 항목들을 etfList에 저장
      setEtfList({ ...etfList, itemCodes }); // etfList를 업데이트합니다.
      
      return itemCodes;
    });
  }
  
  

  //종목검색??
  async function K(id, text) {
    let resp = await searchkospi200(id, text);
    console.log(resp);
    setList1(resp.docs);

    let respon = await searchkospi200(id, text);
    console.log(respon);
    setList1(respon.docs);

    let response = await searchkospi200(id, text);
    console.log(response);
    setList3(response.docs);
  }

  function KOSPI({ list }) {

    let pages;
    if (list == list1) {
      pages = pages1;
    } else if (list == list2) {
      pages = pages2;
    } else if (list == list3) {
      pages = pages3;
    }

    return (
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th style={{ width: '100px' }}>선택</th>
              <th style={{ width: '200px' }}>상품</th>
              <th style={{ width: '100px' }}>최종가</th>
              <th colSpan="4" style={{ width: '400px' }}>수익률</th>
            </tr>
            <tr>
              <td style={{ height: '50px' }}></td>
              <td></td>
              <td></td>
              <th style={{ width: '100px' }}>1달전</th>
              <th style={{ width: '100px' }}>3달전</th>
              <th style={{ width: '100px' }}>6달전</th>
              <th style={{ width: '100px' }}>1년전</th>
            </tr>
          </thead>
          <tbody>
            {pagePrice &&
              pagePrice.map(
                (item, index) =>
                  !item.hidden && (
                    <React.Fragment key={item.stockItem}>
                      <tr>
                        <td style={{ height: '50px' }}>
                          <input
                            type="checkbox"
                            onChange={() => check(item)}
                            checked={ETFlist.some(
                              (listItem) => listItem.stockItem === item.stockItem
                            )}
                          />
                        </td>
                        <td>{list3[index].name}</td>
                        <td>{item.endPrice}</td>
                        <td style={{ color: item.returnTrend['3'].rate > 0 ? 'red' : 'blue' }}>{item.returnTrend['3'].rate.toFixed(2)}%</td>
                        <td style={{ color: item.returnTrend['2'].rate > 0 ? 'red' : 'blue' }}>{item.returnTrend['2'].rate.toFixed(2)}%</td>
                        <td style={{ color: item.returnTrend['1'].rate > 0 ? 'red' : 'blue' }}>{item.returnTrend['1'].rate.toFixed(2)}%</td>
                        <td style={{ color: item.returnTrend['0'].rate > 0 ? 'red' : 'blue' }}>{item.returnTrend['0'].rate.toFixed(2)}%</td>
                      </tr>
                    </React.Fragment>
                  )
              )}
          </tbody>
        </Table>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2%",
            alignItems: "center",
          }}
        >
          {end === 5 ? null : (
            <Button
              onClick={() => {
                minuspage();
              }}
            >
              이전
            </Button>
          )}
          <Pagination size="sm">{items}</Pagination>
          {end > pages ? null : (
            <Button
              onClick={() => {
                pluspage(pages);
              }}
            >
              이후
            </Button>
          )}
        </div>
      </div>
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
                {/* 검색창 */}
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
                        K(page, SearchText);
                      }}
                    >
                      🔍️
                    </Button>
                  </div>
                  <div style={{ marginTop: "20px" }}>ETF 상품</div>
                  {/* 종목 보여주기 */}
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="kospi" title="코스피" onClick={rr}>
                      <KOSPI list={list1} />
                    </Tab>
                    <Tab eventKey="kospi200" title="코스피200" onClick={rr}>
                      <KOSPI list={list3} />
                    </Tab>
                    <Tab eventKey="kosdaq" title="코스닥" onClick={rr}>
                      <KOSPI list={list2} />
                    </Tab>
                  </Tabs>

                  {/* 선택종목 보여주기 */}
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
                        {item.name}
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
                    {/* 페이지 이동 */}
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
                          // if (!etfList.itemCodes) {
                          //   alert("종목을 선택하지 않았습니다");
                          // } else {
                          //   setContextValue("3");
                          // }
                          setContextValue("3");
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
