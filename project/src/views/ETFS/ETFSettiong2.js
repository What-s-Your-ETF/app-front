import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext, ETFListContext } from "./ETFmaker";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Pagination,
} from "reactstrap";
import { Form, Button, Tab, Tabs } from "react-bootstrap";
import {
  fetchkospi200,
  searchkospi200,
  fetchkospi200price,
} from "lib/api/stock";
import KOSPI from "./ETFSetting2_list";

export default function ETFSetting2() {
  const [ETFlist, setETFlist] = useState([]); //선택 종목
  const [SearchText, setSearchText] = useState(); //검색 키워드
  const [list_kospi200, setList] = useState([]);
  //불러오는 전체 리스트 (코스피200)
  const { setContextValue } = useContext(MyContext); // 설정 페이지 이동
  const { etfList, setEtfList } = useContext(ETFListContext); //post데이터 저장
  const [page, setPage] = useState(1); //현재 페이지
  const [pages_kospi200, setPages] = useState(0);
  //총페이지
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);
  //종목 페이지 이동
  const [pagePrice, setPagePrice] = useState([]); // 종목 가격 list

  //수익률 들고오기
  async function returntrend(list) {
    let idArray = list.map((item) => {
      return { _id: item._id };
    });

    const postData = {
      stockItems: idArray,
      duration: {
        startDate: etfList.startDate,
        endDate: etfList.endDate,
      },
    };

    let price = await fetchkospi200price(postData);
    return price;
  }

  //리스트 들고오기
  useEffect(() => {
    const fetchData = async () => {
      // 코스피 200 데이터 가져오기
      let response = await fetchkospi200(page); // 페이지 번호를 인자로 넘깁니다.
      setList(response.docs);
      setPages(response.totalPages);

      // 선택한 페이지에 해당하는 가격 정보 가져오기
      const priceArray = await returntrend(response.docs);
      setPagePrice(priceArray);
      console.log("price Array !!! ", priceArray);
    };

    fetchData();
  }, [page, start, end]); // 페이지 번호가 변경될 때마다 useEffect가 다시 실행되도록 의존성 배열에 page 추가

  //종목 페이지 이동
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

  //페이지별 종목 들고오기
  async function paging(id) {
    let response = await fetchkospi200(id);
    setList(response.docs);
    setPage(id);
  }

  //종목 페이지 이동 (이전, 이후)
  function pluspage() {
    let newEnd = end + 5;
    let newStart = start + 5;
    setEnd(newEnd);
    setStart(newStart);
    paging(newStart);
  }

  function minuspage() {
    let newEnd = end - 5;
    let newStart = start - 5;
    setEnd(newEnd);
    setStart(newStart);
    paging(newStart);
  }

  //선택 종목 리스트 만들기
  function check(item) {
    setETFlist((prev) => {
      const itemExists = prev.some(
        (prevItem) => prevItem.name === item.stockItem.name
      );
      let itemCodes;
      if (itemExists) {
        itemCodes = prev.filter((prevItem) => prevItem !== item.stockItem);
      } else {
        itemCodes = [...prev, item.stockItem];
      }

      // 선택된 종목 코드를 전역변수인 etfList에 저장
      setEtfList({ ...etfList, itemCodes });
      return itemCodes;
    });
  }

  //종목검색
  async function K(id, text) {
    let response = await searchkospi200(id, text);
    setList(response.docs);
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
                  {/* 코스피 200종목 보여주기 */}
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="kospi200" title="코스피200">
                      <KOSPI
                        list_kospi200={list_kospi200}
                        pagePrice={pagePrice}
                        ETFlist={ETFlist}
                        check={check}
                      />
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
                        {end > pages_kospi200 ? null : (
                          <Button
                            onClick={() => {
                              pluspage();
                            }}
                          >
                            이후
                          </Button>
                        )}
                      </div>
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
                          if (!etfList.itemCodes) {
                            alert("종목을 선택하지 않았습니다");
                          } else {
                            setContextValue("3");
                          }
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
