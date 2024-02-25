import React from "react";
import { Row, Col, Card, Button, CardTitle,CardHeader,CardBody } from "reactstrap";
import { useContext } from "react";
import { MyContext } from "./ETFmaker";
import {Form, Table} from 'react-bootstrap';

export default function ETFSetting3(){
    const { setContextValue } = useContext(MyContext);

    return(
        <div className="content">
        <Row>
          <Col md="12">

          <Card style={{padding:"4%"}}>
              <CardHeader>
                <CardTitle style ={{padding:"1%", textAlign:"center"}} tag="h4">ETF 종목의 투자 비중을 선택해주세요</CardTitle>

                <div style={{fontSize:"15px", padding:"4%"}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Form.Control type="text" style={{ width: "40%", marginRight: "10px" }} />
                    <Button variant="light" style={{ background: 'none', border: 'none' }}>🔍️</Button>
                    </div>
                    <div style={{marginTop: "20px"}}>투자비중 선택</div>


                

                    <div style={{justifyContent: 'flex-end', display:"flex", gap:"2%"}}>
                  
                    <Button onClick={() => setContextValue('2')}  className="d-flex flex-column justify-content-center align-items-end">이전</Button>
                    
         

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