import React from "react";
import { Row, Col, Card, CardTitle,CardHeader,CardBody } from "reactstrap";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./ETFmaker";
import {Form, Table, Button} from 'react-bootstrap';
import { Checkbox } from "@mui/material";
import {ETFListContext } from "./ETFmaker";

export default function ETFSetting3(){

  const {etfList} = useContext(ETFListContext)
    const { setContextValue } = useContext(MyContext);
    const [percentlist, setPercentlist] = useState([])
    const [isChecked, setIsChecked] = useState(false)

    console.log(etfList)

    const PercentChange = (e, title) => {
      setPercentlist(prev => ({...prev, [title]: e.target.value/100}));
      console.log(percentlist)
    }

    function Percentavg(){
        setIsChecked(!isChecked);
        const newPercent = 1/ETFlist.length
        const newPercentlist = {}
        ETFlist.forEach(item => {
          newPercentlist[item.title] = newPercent;
        });
        setPercentlist(newPercentlist)
        console.log(percentlist)
    }

    const [ETFlist, setETFlist] = useState([ {
      title: "삼성그룹"
    },
    {
        title: "샘성그룹"
    },
    {
        title: "삼송그룹",
    },
      {
        title: "생성그룹",
  
    }])
      
      
    return(
        <div className="content">
        <Row>
          <Col md="12">

          <Card style={{padding:"4%"}}>
              <CardHeader>
                <CardTitle style ={{padding:"1%", textAlign:"center"}} tag="h4">ETF 종목의 투자 비중을 선택해주세요</CardTitle>

                <div style={{fontSize:"15px", padding:"4%"}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                    </div>
                    <div style={{marginTop: "20px"}}>투자비중 선택</div>
                    <div style={{marginTop: "10px" , fontSize:"12px", color:"gray"}}>선택한 종목 각각의 투자비중은 반드시 최소 1이상 입력해야하며, 투자비중 총합이 100%가 되도록 입력해주세요 <br/>
                          선택한 종목은 종가기준으로 적용됩니다
                    </div>

                    <div style={{marginTop: "20px"}}>총 {ETFlist.length}개</div>

                    <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                    <th>상품명</th>
                    <th>투자비중(%)</th>
                    <th>삭제</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ETFlist.map((item) => (
                    <React.Fragment key={item.id}>
                    <tr>
                    <td>{item.title}</td>
                    <td>{isChecked === false? 
                        <Form.Control className="custom-input" type="num" value={percentlist[item.title]* 100 } onChange={(e) => { PercentChange(e, item.title) }} style={{ marginBottom: '10px', height: '40px'}}/>
                        : <div>{1/ETFlist.length*100}</div>
                    }</td>
                    <td><Button>삭제</Button></td>


             
                    </tr>
                    </React.Fragment>
                    ))}
                    </tbody>
                    </Table>

                    <div style={{justifyContent: 'flex-end', display:"flex", gap:"2%"}}>
                    <Checkbox onClick={Percentavg}></Checkbox>
                    <Button onClick={() => setContextValue('2')}  className="d-flex flex-column justify-content-center align-items-end">이전</Button>
                    <Button href="/admin/myetfs"  className="d-flex flex-column justify-content-center align-items-end">ETF 만들기</Button>
 
                </div>
                </div>
             
                
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          
          </Col>
         
        </Row>
      </div>
    )
}