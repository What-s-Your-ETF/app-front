import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";
import instance from "lib/api/axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "react-bootstrap";
function BoardDetailEdit({ content }) {
  const navigate = useNavigate();
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");

  let { id } = useParams();
  const [boardDetail, setBoardDetail] = useState(null);

  useEffect(() => {
    console.log(id);
    async function fetchBoardDetail() {
      try {
        const response = await instance.get(`/board/${id}`);
        setBoardDetail(response.data);
        setBoardTitle(response.data.title);
        setBoardContent(response.data.content);
      } catch (error) {
        console.error("Error fetching board detail:", error);
        // Handle error (e.g., showing an error message)
      }
    }

    fetchBoardDetail();
  }, [id]);

  if (!boardDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <Button onClick={(e) => navigate(-1)}>뒤로가기</Button>

      <Row md="12">
        <Col md="12">
          <Card>
            <CardHeader>
              {/* <CardTitle tag="h4">{boardDetail.title}</CardTitle> */}
              {/* <h1><input type='text' value={boardTitle} onChange={(e)=>setBoardTitle(e.target.value)}/></h1> */}
              <FormLabel>제목</FormLabel>
              <FormControl
                style={{ fontSize: "25px" }}
                value={boardTitle}
                onChange={(e) => setBoardTitle(e.target.value)}
              ></FormControl>
            </CardHeader>
            <CardBody>
              {/* <p>{boardDetail.content}</p> */}
              {/* <input type='text' value={boardContent} onChange={(e)=>setBoardContent(e.target.value)}/> */}

              <FormLabel>내용</FormLabel>
              <textarea
                className="form-control"
                rows={3}
                value={boardContent}
                onChange={(e) => setBoardContent(e.target.value)}
              ></textarea>

              <div className="text-muted">작성자: {boardDetail.nickname}</div>
              <div className="text-muted">
                작성일: {boardDetail.createdAt.substring(0, 10)}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Button
        onClick={(e) => {
          console.log(
            boardTitle,
            boardContent,
            localStorage.getItem("nickname")
          );
          instance
            .put("board/" + id, {
              title: boardTitle,
              content: boardContent,
              nickname: localStorage.getItem("nickname"),
            })
            .then((resp) => {
              console.log(resp);
            })
            .catch((err) => {
              console.log(err);
            });
          navigate(-1);
        }}
      >
        제출하기
      </Button>
      {/* Add any additional details or components you'd like to include here */}
    </div>
  );
}

export default BoardDetailEdit;
