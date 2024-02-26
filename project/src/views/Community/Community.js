import React,{useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import axios from "axios";

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
  let navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  useEffect(()=>{
    async function getBoard(){
      const response = await axios.get('/api/board');
      setBoardList(response.data)
    }
    getBoard();
  },[])
  
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h4>Community Board</h4>
                <Link to={"/admin/community/write"}>
                  <Button>글 작성하기</Button>
                </Link>
              </div>
            </CardHeader>
            <CardBody>
              {boardList.map((el) => (
                <div key={el.id} onClick={() => navigate(`/admin/community/detail/${el.id}`)} style={{ cursor: "pointer" ,border: "1px solid #ddd", borderRadius: "5px", padding: "10px", margin: "10px 0"}}>
                  <Row>
                  <Col md="9">
                    <strong style={{fontSize: "16px"}}>{el.title}</strong>
                    <p className="text-muted">
                      <small>
                        {el.content.length > 50 ? `${el.content.substring(0, 60)}...` : el.content}
                      </small>
                    </p>
                  </Col>
                    <Col md="3" className="text-right" >
                      <div style={{display : "flex", justifyContent : "end", alignItems:"flex-end" , height: "100%"}}>
                        작성자 : {el.nickname} <br/>
                        {el.createdAt.substring(0,10)}
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Community;
