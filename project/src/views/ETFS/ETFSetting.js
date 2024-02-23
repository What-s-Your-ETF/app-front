import React, {useState} from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
  Tab
} from "reactstrap";
import Form from 'react-bootstrap/Form';

 import { LocalizationProvider } from "@mui/x-date-pickers";
 import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
 import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
 import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export default function ETFSetting() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] =useState(null)
  const [money, setMoney] = useState(null)
  const [comp, setComp] = useState("1")

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
  

  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">

          <Card style={{padding:"4%"}}>
              <CardHeader>
                <CardTitle style ={{padding:"1%", textAlign:"center"}} tag="h4">투자 금액과 기간을 입력해주세요</CardTitle>

              
                {/* <Button onClick={() => navigate('write')} className="d-flex flex-column justify-content-center align-items-end">
                글 작성하기
                </Button> */}
                <div style={{fontSize:"15px", padding:"4%"}}>
                <div>투자기간
                <div style ={{display:"flex", gap:"2%"}}>
                <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        dateFormats={datePickerUtils}>
                        <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="시작일을 선택해주세요"
                        slotProps={{textField: {size: "small",},}}
                        format="YYYY / MM / DD"
                        value={startDate}
                        onChange={(e) => {setstartDateValue(e);}}
                        />
                        </DemoContainer>
              </LocalizationProvider>
            
              <LocalizationProvider
                        dateAdapter={AdapterDayjs}
                        dateFormats={datePickerUtils}>
                        <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="종료일을 선택해주세요"
                        slotProps={{textField: {size: "small",},}}
                        format="YYYY / MM / DD"
                        value={endDate}
                        onChange={(e) => {setendDateValue(e);}}
                        />
                        </DemoContainer>
              </LocalizationProvider>

              </div>
              </div>

              <div style={{marginTop: "20px"}}>투자금액</div>
              <Form.Label htmlFor="inputPassword5"></Form.Label>
              <div style={{display: "flex", alignItems: "center"}}>
                  <Form.Control 
                  style={{width: "20%", marginRight: "10px"}} 
                  type="money" value={money} onChange={(e)=>{setMoney(e.target.value)}} />
                  <Button onClick={(e)=>{setMoney(e.target.value)}} >설정</Button>
              </div>

              <Link to={"/admin/myetfs/setting2"} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button className="d-flex flex-column justify-content-center align-items-end">
              다음
              </Button>
              </Link>


              </div>

             
                
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          
          </Col>
         
        </Row>
      </div>
    </>
  );
}

