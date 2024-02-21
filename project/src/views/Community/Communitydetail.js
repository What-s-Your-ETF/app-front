
import React from "react";
import {useNavigate} from "react-router-dom"
import {Form} from 'react-bootstrap'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";



function DeCommunity() {
  let navigate = useNavigate()

  let board =[
    {
      title : "집갈래",
      content : "집집집",
      author : "배별하",
      comment :[{
        content: "나도",
        author : "마우스"
      },{
        content: "나도",
        author : "키보드"
      }

      ]
    }, 
    {
      title: "피곤하다",
      content :"왕피곤",
      author : "정해인"
    }
  ]
  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          
            <Card>
              <CardHeader style={{display: "flex"}}>
                <CardTitle tag="h4">{board[0].title}</CardTitle>
                <Button onClick={() => navigate(-1)} className="d-flex flex-column justify-content-center align-items-end">
                뒤로가기
                </Button>
              </CardHeader>
              
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li> 
                        <div>{board[0].content}</div>
                  </li>
                </ul>
              </CardBody>
                
            </Card>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style ={{display:"flex"}}>
                <Form.Control placeholder="댓글을 입력해주세요"></Form.Control>
                <Button>입력</Button>
            </Form.Group>


            <Card>
              <CardHeader style={{display: "flex"}}>
            
              </CardHeader>
              
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li> 
                  <div md="2" xs="2">

                        {board[0].comment.map((el)=>{return (
                            
                         <div md="2" xs="2">
                         <div md="7" xs="7"><small>{el.author}</small></div>
                         <div md="5" xs="5">
                        <span className="text-muted">{el.content}</span>
                        </div>
                        </div>

                        )

                    })}
                    </div>
                  </li>
                </ul>
              </CardBody>
                
            </Card>
            
           

          </Col> 
        </Row>
      </div>
    </>
  );
}

export default DeCommunity;
