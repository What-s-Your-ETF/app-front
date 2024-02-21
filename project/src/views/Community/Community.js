import React from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

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



function Community() {
  let navigate = useNavigate()

  let board =[
    {
      title : "집갈래",
      content : "집집집",
      author : "배별하"
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
              <CardHeader>
                <CardTitle tag="h4">Community Board</CardTitle>

                {/* <Button onClick={() => navigate('write')} className="d-flex flex-column justify-content-center align-items-end">
                글 작성하기
                </Button> */}
                
                <Link to={"/admin/community/write"}><Button className="d-flex flex-column justify-content-center align-items-end">
                글 작성하기
                </Button></Link>

              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <div>

                      <div md="2" xs="2">
                        {board.map((el)=>{
                          return (
                            <div md="2" xs="2">
                            <div md="7" xs="7">{el.title}</div>
                            <div md="5" xs="5">
                              <span className="text-muted"> <small>{el.content}</small></span>
                              <div className="d-flex flex-column justify-content-center align-items-end">
                                <div>{el.author}</div>
                                </div>
                            </div>
                            </div>
                  
                          )
                        
                        })}
                        
                      </div>  
                     
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

export default Community;
