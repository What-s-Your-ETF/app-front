import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { MyContext } from "./ETFmaker";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import {Form, Table} from 'react-bootstrap';

    let list = [
        {
          title: "삼성그룹",
          gijun : "9,326", //선택일자 마지막일 종가
          suickpersent_1month: "9.32",  //선택일자 마지막일 종가 / (선택일자-1달)종가
          suickpersent_3month:"5.79",
          suickpersent_6month:"2.73",
          suickpersent_1year:"4.84",
      

        },
        {
            title: "샘성그룹",
            gijun : "9,326",
            suickpersent_1month: "9.32",
            suickpersent_3month:"5.79",
            suickpersent_6month:"2.73",
            suickpersent_1year:"4.84",
      
  
          },
          {
            title: "삼송그룹",
            gijun : "9,326",
            suickpersent_1month: "9.32",
            suickpersent_3month:"5.79",
            suickpersent_6month:"2.73",
            suickpersent_1year:"4.84",
      
          },
          {
            title: "생성그룹",
            gijun : "9,326",
            suickpersent_1month: "9.32",
            suickpersent_3month:"5.79",
            suickpersent_6month:"2.73",
            suickpersent_1year:"4.84",
       
  
          },
          {
            title: "샘송그룹",
            gijun : "9,326",
            suickpersent_1month: "9.32",
            suickpersent_3month:"5.79",
            suickpersent_6month:"2.73",
            suickpersent_1year:"4.84",
   
  
          },
          {
            title: "상성그룹",
            gijun : "9,326",
            suickpersent_1month: "9.32",
            suickpersent_3month:"5.79",
            suickpersent_6month:"2.73",
            suickpersent_1year:"4.84",

  
          },
          {
            title: "삼상그룹",
            gijun : "9,326",
            suickpersent_1month: "9.32",
            suickpersent_3month:"5.79",
            suickpersent_6month:"2.73",
            suickpersent_1year:"4.84",

  
          },
    ]

  


export default function ETFSetting2() {
    const [ETFitem, setETFitem] = useState("")
    const [ETFlist, setETFlist] = useState([])
    const { setContextValue } = useContext(MyContext);

    function check(title){

        setETFlist(prev => {
            if (prev.includes(title)) {
                return prev.filter(item => item !== title);
            } else {
                return [...prev, title];
            }
        });

        console.log(ETFlist)

    }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">

          <Card style={{padding:"4%"}}>
              <CardHeader>
                <CardTitle style ={{padding:"1%", textAlign:"center"}} tag="h4">ETF 종목을 선택해주세요</CardTitle>

                <div style={{fontSize:"15px", padding:"4%"}}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Form.Control type="text" style={{ width: "40%", marginRight: "10px" }} />
                    <Button variant="light" style={{ background: 'none', border: 'none' }}>🔍️</Button>
                    </div>
                    <div style={{marginTop: "20px"}}>ETF 상품</div>

                    <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                    <th>선택</th>
                    <th>상품</th>
                    <th>기준</th>
                    <th colSpan="4">수익률</th>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <th>1달</th>
                    <th>3달</th>
                    <th>6달</th>
                    <th>1년</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((item) => (
                    <React.Fragment key={item.id}>
                    <tr>
                    <td>
                    <input type="checkbox" onChange={() => check(item.title)}/>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.gijun}</td>
                    <td>{item.suickpersent_1month}</td>
                    <td>{item.suickpersent_3month}</td>
                    <td>{item.suickpersent_6month}</td>
                    <td>{item.suickpersent_1year}</td>
             
                    </tr>
                    </React.Fragment>
                    ))}
                    </tbody>
                    </Table>


                    <div style={{ display: "flex" }}>
                        {ETFlist.map((item, index) => (
                        <div style={{ marginRight: "10px" }}>{item}</div>
                        ))}
                    </div>


                

                    <div style={{justifyContent: 'flex-end', display:"flex", gap:"2%"}}>
                    <Link>
                    <Button onClick={() => setContextValue('1')}  className="d-flex flex-column justify-content-center align-items-end">이전</Button>
                    </Link>
                    <Link to={"/admin/myetfs/setting2"}>
                    <Button className="d-flex flex-column justify-content-center align-items-end">다음</Button>
                    </Link>

                </div>
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

