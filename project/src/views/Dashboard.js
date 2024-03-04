import React from "react";
import { Line, Pie } from "react-chartjs-2";
import StartETFS from "./ETFS/ETFSstart";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import {
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import "./Dash.css";
import { useNavigate } from "react-router-dom";

const cardInfo = [
  {
    backgroundColor: "#558FFF",
    imgSrc: "/dash1.png",
    category: "지금 핫한 테마는?",
    stats: "🔺상승테마 보러가기",
    href: "/admin/thema",
  },
  {
    backgroundColor: "#C285FF",
    imgSrc: "/dash2.png",
    category: "다른 사람들은?",
    stats: "📌 게시판 보러가기",
    href: "/admin/community",
  },
  {
    backgroundColor: "#FF74B7",
    imgSrc: "/dash3_1.png",
    category: "나의 ETF 수익률은?",
    stats: "📁 포트폴리오 보러가기",
    href: "/admin/myetfs",
  },
  {
    backgroundColor: "#FFD64F",
    imgSrc: "/dash4.png",
    category: "고객문의",
    stats: "📞 개발자 연락",
    href: "admin/etf",
  },
  {
    backgroundColor: "#558FFF",
    imgSrc: "/dash1.png",
    category: "지금 핫한 테마는?",
    stats: "🔺상승테마 보러가기",
    href: "/admin/thema",
  },
  {
    backgroundColor: "#C285FF",
    imgSrc: "/dash2.png",
    category: "다른 사람들은?",
    stats: "📌 게시판 보러가기",
    href: "/admin/community",
  },
  {
    backgroundColor: "#FF74B7",
    imgSrc: "/dash3_1.png",
    category: "나의 ETF 수익률은?",
    stats: "📁 포트폴리오 보러가기",
    href: "admin/myetfs",
  },
  {
    backgroundColor: "#FFD64F",
    imgSrc: "/dash4.png",
    category: "고객문의",
    stats: "📞",
    href: "admin/etf",
  },
];

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <div className="content">
        <Row>
          <div className="slider">
            <div class="slide-track">
              {cardInfo.map((info, index) => (
                <Col key={index} lg="3" md="6" sm="6">
                  <Card
                    className="card-stats"
                    style={{ backgroundColor: info.backgroundColor }}
                    onClick={() => navigate(info.href)}
                  >
                    <CardBody>
                      <Row>
                        <Col md="4" xs="5">
                          <div className="icon-big text-center icon-warning">
                            <img
                              style={{ width: "80%", height: "80%" }}
                              src={info.imgSrc}
                            />
                          </div>
                        </Col>
                        <Col md="8" xs="7" style={{ padding: "3%" }}>
                          <div className="numbers">
                            <p
                              className="card-category"
                              style={{ color: "white" }}
                            >
                              {info.category}
                            </p>
                            <p />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <div className="stats" style={{ color: "white" }}>
                        {info.stats}
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              ))}
            </div>
          </div>
        </Row>
        <StartETFS></StartETFS>
        {/* <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
        <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
