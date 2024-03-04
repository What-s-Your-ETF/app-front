import React, { useEffect, useMemo } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  LineChart,
  Cell,
} from "recharts";
import { useState } from "react";
import News from "components/ETF/News";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ETFSetting from "./ETFSetting";
import axios, { Axios } from "axios";
import ETFMaker from "./ETFmaker";
import { getPortfolios } from "lib/api/portfolios";
// import Chart from "react-chartjs-2";
// import { useRef } from "react";
import { useRef } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart } from "react-chartjs-2";
import { PieChart } from "recharts";
import { Pie } from "recharts";
import instance from "lib/api/axios";
const COLORS = [
  "#40A2E3",
  "#0D9276",
  "#BBE2EC",
  "#B5C0D0",
  "#FFF6E9",
  "#CCD3CA",
  "#FB88B4",
  "#B7C9F2",
  "#98ABEE",
  "#FFCAD4",
  "#C5EBAA",
  "#A5DD9B",
  "#FF6600",
  "#6600FF",
  "#FF0099",
  "#99FF00",
  "#0099FF",
  "#FF9900",
  "#9900FF",
  "#00FF99",
];

const lineColor = ["#EE4266", "#0C359E"];

// function post() {
//   axios
//     .post(
//       "http://127.0.0.1:3000/api/portfolios",
//       {
//         name: "Yoon's Port",
//         duration: {
//           startDate: "2022-01-01",
//           endDate: "2022-12-31",
//         },
//         investAmounts: 1000000,
//         itemCodes: ["055550", "105560", "005930", "000660"],
//         weights: [0.3, 0.3, 0.3, 0.1],
//       },
//       {
//         headers: {
//           Authorization: "bearer " + localStorage.getItem("authToken"),
//         },
//       }
//     )
//     .then((resp) => console.log(resp));
// }

function ETFss() {
  const [currentPortNum, setCurrentPortNum] = useState(0);
  const [newsComponents, setNewsComponents] = useState([]); //전체 뉴스
  const [clickedDate, setClickedDate] = useState("");
  const [Kospi, setKospi] = useState([]);
  const [etfs, setEtfs] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function startETF() {
      var loadEtfs = [];
      try {
        const loginType = localStorage.getItem("loginType");
        console.log(loginType);
        let resp = null;

        if (loginType === "kakao") {
          resp = await instance.get("/portfolios", {
            headers: {
              Authorization: localStorage.getItem("authToken"),
              logintype: localStorage.getItem("loginType"),
            },
          });
        } else {
          resp = await instance.get("/portfolios", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("authToken"),
              logintype: loginType,
            },
          });
        }

        //   console.log()

        for (var i = 0; i < resp.data.length; i++) {
          //포트폴리오 개수에 대해서 처리
          const returnedPort = await processData(resp.data[i]);
          console.log(returnedPort);
          // setEtfs( etfs.push(returnedPort) )
          loadEtfs.push(returnedPort);
        }
        // loadEtfs = appendComp()  //ETF
        console.log(loadEtfs);
        setEtfs(loadEtfs);
      } catch (err) {
        console.error(err);
      }
    }

    startETF();
    // console.log(etfs)
  }, []);

  //   포르폴리오 1개당 데이터 처리하기

  const processData = async (data) => {
    var totalData = {}; //title : "", data : [] 오브젝트 타입으로 들어간다
    totalData.title = data.name; //title넣음 => 일별로 data만 넣어주면 된다
    totalData._id = data._id;

    totalData.stockItems = data.stockItems;
    var dailyDate = [];

    // console.log(data)
    for (var i = 0; i < data.returnRates.length; i++) {
      const elem = data.returnRates[i];
      // console.log(elem.date.slice(2,10))
      var tempData = {};
      tempData.name = elem.date.slice(2, 10);
      tempData[data.name] = elem.rate.$numberDecimal * 100;
      //   tempData.KOSPI = kospiData[i]
      dailyDate.push(tempData);
    }
    totalData.data = dailyDate;

    console.log("rd", totalData.title);

    var kospiData = [];
    await instance
      .get("/portfolios/" + totalData._id + "/kospi-index", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("authToken"),
          logintype: localStorage.getItem("loginType"),
        },
      })
      .then((resp) => {
        // console.log(resp.data[0])
        kospiData = resp.data;
        //console.log(kospiData);
        kospiData = kospiData.map((elem, idx) => {
          // console.log(elem)
          return {
            name: elem.date.slice(2, 10),
            KOSPI: (elem.endPrice / kospiData[0].endPrice - 1) * 100,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("KD",kospiData)
    // // 두 배열에서 'name'을 기준으로 매핑된 객체 생성
    const kospiIndex = {};
    kospiData.forEach((data) => (kospiIndex[data.name] = data.KOSPI));

    const etfIndex = {};
    totalData.data.forEach(
      (data) => (etfIndex[data.name] = data[totalData.title])
    );
    console.log("TT", etfIndex);
    // // 공통된 'name' 찾기
    const commonNames = Object.keys(kospiIndex).filter((name) =>
      etfIndex.hasOwnProperty(name)
    );
    // console.log(commonNames)
    // // 공통된 'name'에 해당하는 값을 출력 또는 저장

    var TotalData = [];
    commonNames.forEach((name) => {
      const kospiValue = kospiIndex[name];
      const etfValue = etfIndex[name];
      // console.log(`Name: ${name}, KOSPI: ${kospiValue}, ${totalData.title}: ${etfValue}`);
      TotalData.push({ Name: name, KOSPI: kospiValue, ETF: etfValue });
    });
    // console.log("TotalData",TotalData)
    // console.log("totalData", totalData)
    totalData.data = TotalData;
    return totalData; // 1개의 ETF에 대해 전처리 완
  };

  const handleDataClick = async (data, index) => {
    const date = data.activeLabel;
    try {
      setClickedDate(date); //클릭한 점 기준 날짜가 나온다 (23-05-02 등)
    } catch (error) {
      console.log(error);
    }

    const inputDate =
      "20" + date.slice(0, 2) + "." + date.slice(3, 5) + "." + date.slice(6, 8);

    var inputKeyword = [];
    // console.log(999,etfs)
    for (let key in etfs[currentPortNum].stockItems) {
      inputKeyword.push(etfs[currentPortNum].stockItems[key]["name"]);
      // console.log(etfs[currentPortNum].stockItems[key]['name'])
    }
    var fetchedNews = [];

    instance
      .post("/news/getnews", { keywordArray: inputKeyword, day: inputDate })
      .then((resp) => {
        console.log("response", resp.data);
        setNews(resp.data);
        for (const key in resp.data) {
          resp.data[key].map((elem2, idx) => {
            fetchedNews.push(elem2);
            // console.log(elem2)
          });
        }
        var returnNews = [];
        for (let i = 0; i < fetchedNews.length; i++) {
          // console.log(i)
          returnNews.push(<News key={i} data={fetchedNews[i]}></News>);
        }
        setNewsComponents(returnNews);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CustomizedDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;

    if (value > 2500) {
      return (
        <svg
          x={cx}
          y={cy}
          width={2}
          height={2}
          fill="red"
          viewBox="0 0 1024 1024"
        >
          <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
        </svg>
      );
    }

    return (
      <svg
        x={cx}
        y={cy}
        width={2}
        height={2}
        fill="green"
        viewBox="0 0 1024 1024"
      >
        <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
      </svg>
    );
  };

  const getGraph = (data) => {
    const keys = Object.keys(data[0]);
    // console.log(keys)
    return (
      <div style={{ display: "flex" }}>
        <LineChart
          width={730}
          height={350}
          data={data}
          onClick={handleDataClick}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {keys.map((elem, idx) => {
            if (idx >= 1)
              return (
                <Line
                  type="monotone"
                  dataKey={elem}
                  stroke={lineColor[idx]}
                  dot={<CustomizedDot />}
                />
              );
          })}
          {/* <Line type="monotone" dataKey="Kospi" stroke="#ffc658" /> */}
        </LineChart>
        {currentPortNum === 0 ? null : PieChart2}
      </div>
    );
  };

  const handlePieClick = async (data, index) => {
    const stockName = data.name; //누른 주식 이름
    var tempNews = [];

    console.log(998);
    for (let idx in news) {
      console.log(1234, idx);
      console.log(4321, news[idx]);
      if (idx === stockName) {
        for (let i = 0; i < news[idx].length; i++) {
          console.log(news[idx][i]);
          tempNews.push(<News key={i} data={news[idx][i]}></News>);
        }
        break;
      }
    }
    setNewsComponents(tempNews);
  };

  const PieChart2 = useMemo(() => {
    var data01 = [];
    etfs[currentPortNum]?.stockItems.map((elem, idx) => {
      data01.push({
        name: elem.name,
        value: parseFloat(elem.weight["$numberDecimal"]),
      });
    });
    return (
      <PieChart width={300} height={250} style={{ margin: "50px" }}>
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Tooltip />
        {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          onClick={handlePieClick}
          label
          stroke="none"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    );
  }, [etfs, currentPortNum, handlePieClick]);

  return (
    <>
      <div className="content">
        <div>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            onSelect={(key) => {
              setCurrentPortNum(key);
              // console.log(etfs)
              // console.log(Kospi)
            }}
          >
            {etfs.map((elem, idx) => {
              // console.log(idx)
              return (
                <Tab
                  eventKey={idx}
                  title={
                    <div>
                      {elem.title}
                      <button
                        value={idx}
                        style={{
                          border: "1px solid",
                          backgroundColor: "transparent",
                          marginLeft: "2px",
                        }}
                        onClick={(e) => {
                          const etfIdx = e.target.value;
                          const etfId = etfs[etfIdx]._id;
                          console.log("delete", etfId);
                          instance
                            .delete("/portfolios/" + etfId)
                            .then((resp) => {
                              console.log(resp);
                            });

                          const newEtfs = etfs.filter((value, index) => {
                            console.log(index, etfIdx);
                            return index != etfIdx;
                            console.log(index);
                          });
                          console.log(etfs, newEtfs);
                          setEtfs(newEtfs);
                        }}
                      >
                        X
                      </button>
                    </div>
                  }
                >
                  {getGraph(elem.data)}
                </Tab>
              );
            })}

            <Tab eventKey="add" title="+">
              <ETFMaker></ETFMaker>
            </Tab>
          </Tabs>
          <div></div>
        </div>
        <div style={{ margin: "0px 75px 0px 0px" }}>
          {newsComponents.length === 0 ? null : <h3>{clickedDate}일의 뉴스</h3>}
          {newsComponents}
        </div>
      </div>
    </>
  );
}
export default ETFss;

// axios.post("http://127.0.0.1:3000/api/portfolios",
// {
//     name: "My Portfolio1",
//     duration: {
//         startDate: "2022-01-01",
//         endDate: "2022-12-31"
//     },
//     investAmounts: 1000000,
//     itemCodes: ["005930", "000660", "006400"],
//     weights: [0.3, 0.3, 0.4]
// },{headers : {Authorization : "bearer "+localStorage.getItem('authToken')}})
// .then(resp=>
//     console.log(resp))

// getPortfolios({
//     name: "My Portfolio1",
//     duration: {
//         startDate: "2022-01-01",
//         endDate: "2022-12-31"
//     },
//     investAmounts: 1000000,
//     itemCodes: ["005930", "000660", "006400"],
//     weights: [0.3, 0.3, 0.4]
// }).then(resp=>{
//     console.log(resp)
// })