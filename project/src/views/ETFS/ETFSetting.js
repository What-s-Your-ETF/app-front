import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { MyContext, ETFListContext } from "./ETFmaker";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Tab,
} from "reactstrap";
import Form from "react-bootstrap/Form";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ETFSetting() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [investAmounts, setinvestAmounts] = useState(null);
  const { setContextValue } = useContext(MyContext);
  const { setEtfList } = useContext(ETFListContext);

  const datePickerFormat = "YYYY-MM-DD";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
    // You can add other utils as needed, such as `isValid`, etc.
  };

  const setstartDateValue = (date) => {
    const formattedDate = dayjs(date).format(datePickerFormat);
    setStartDate(formattedDate);
  };

  const setendDateValue = (date) => {
    const formattedDate = dayjs(date).format(datePickerFormat);
    setEndDate(formattedDate);
  };

  const page1 = () => {
    setContextValue("2");
    setEtfList({ startDate, endDate, investAmounts });
  };

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
                  투자 금액과 기간을 입력해주세요
                </CardTitle>

                {/* <Button onClick={() => navigate('write')} className="d-flex flex-column justify-content-center align-items-end">
                글 작성하기
                </Button> */}
                <div style={{ fontSize: "15px", padding: "4%" }}>
                  <div>
                    투자기간
                    <div style={{ display: "flex", gap: "2%" }}>
                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        dateFormats={datePickerUtils}
                      >
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="시작일을 선택해주세요"
                            slotProps={{ textField: { size: "small" } }}
                            format="YYYY / MM / DD"
                            value={startDate}
                            onChange={(e) => {
                              setstartDateValue(e);
                            }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>

                      <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        dateFormats={datePickerUtils}
                      >
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker
                            label="종료일을 선택해주세요"
                            slotProps={{ textField: { size: "small" } }}
                            format="YYYY / MM / DD"
                            value={endDate}
                            onChange={(e) => {
                              setendDateValue(e);
                            }}
                          />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                  </div>

                  <div style={{ marginTop: "20px" }}>투자금액</div>
                  <Form.Label htmlFor="inputPassword5"></Form.Label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Form.Control
                      style={{ width: "20%", marginRight: "10px" }}
                      value={investAmounts}
                      onChange={(e) => {
                        setinvestAmounts(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        setinvestAmounts(investAmounts);
                      }}
                    >
                      설정
                    </Button>
                  </div>

                  <Link style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      onClick={page1}
                      className="d-flex flex-column justify-content-center align-items-end"
                    >
                      다음
                    </Button>
                  </Link>
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
