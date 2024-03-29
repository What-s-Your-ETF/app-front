import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { MyContext, ETFListContext } from "./ETFmaker";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { Form, Button } from "react-bootstrap";
//날짜 선택에 필요한 것들
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ETFSetting() {
  const [startDate, setStartDate] = useState(null);  //시작일
  const [endDate, setEndDate] = useState(null); //종료일
  const [investAmounts, setinvestAmounts] = useState(null);  //투자금액
  const [name, setName] = useState(null); //포트폴리오 이름
  const { setContextValue } = useContext(MyContext); // 페이지 이동
  const { setEtfList } = useContext(ETFListContext); //post데이터 저장

  //선택 날짜 형식
  const datePickerFormat = "YYYY-MM-DD";
  const datePickerUtils = {
    format: datePickerFormat,
    parse: (value) => dayjs(value, datePickerFormat, true).toDate(),
    // You can add other utils as needed, such as `isValid`, etc.
  };

  //시작일 state
  const setstartDateValue = (date) => {
    const formattedDate = dayjs(date).format(datePickerFormat);
    setStartDate(formattedDate);
  };

  //종료일 state
  const setendDateValue = (date) => {
    const formattedDate = dayjs(date).format(datePickerFormat);
    setEndDate(formattedDate);
  };

  // 다음 페이지로 이동시 넘겨줄 data
  const page1 = () => {
    setContextValue("2");
    setEtfList({ name, startDate, endDate, investAmounts });
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
                  포트폴리오 이름과 투자 금액, 기간을 입력해주세요
                </CardTitle>

                <div style={{ fontSize: "15px", padding: "4%" }}>
                  <div style={{ marginTop: "20px" }}>포트폴리오 이름</div>
                  <div style={{fontSize:"10px", color:"gray"}}>이름은 숫자를 제외한 문자열로 작성해주세요</div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Form.Control
                      style={{ width: "20%", marginRight: "4px" }}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <Button
                      onClick={() => {
                        setName(name);
                      }}
                    >
                      설정
                    </Button>
                  </div>
                  

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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Form.Control
                      style={{ width: "20%", marginRight: "4px" }}
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
                      className="d-flex flex-column justify-content-center align-items-end"
                      onClick={(e) => {
                        console.log(startDate, endDate, investAmounts);
                        const sdate = new Date(startDate);
                        const edate = new Date(endDate);
                        if (sdate >= edate) {
                          alert(
                            "날짜를 다시 입력해주세요 (시작일은 종료일보다 빨라야합니다)"
                          );
                        } else if (
                          startDate !== null &&
                          endDate !== null &&
                          investAmounts !== null
                        )
                          page1();
                        else {
                          alert("빈칸이 있습니다 다시 입력해주세요");
                        }
                      }}
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
