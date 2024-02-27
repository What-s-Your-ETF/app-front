import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";

import { dashboard24HoursPerformanceChart } from "variables/charts.js";

import Button from "react-bootstrap/Button";

export default function StartETFS() {

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card style={{ padding: "4%" }}>
              <CardHeader>
                <CardTitle
                  style={{ padding: "1%", fontWeight: "bold" }}
                  tag="h3"
                >
                  Making My ETFS
                  <Link to={"/admin/myetfs"}>
                    <Button
                      style={{
                        fontSize: "15px",
                        borderRadius: "100px",
                        background: "linear-gradient(#88B7FF,#418DFF)",
                      }}
                      className="d-flex flex-column justify-content-center align-items-end"
                    >
                      나만의 ETF 만들기📈
                    </Button>
                  </Link>
                </CardTitle>

              
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardHeader>
              <CardBody></CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
