import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
import { Link } from "react-router-dom";
function BoardDetail() {
  const navigate = useNavigate();

  let { id } = useParams();
  const [boardDetail, setBoardDetail] = useState(null);

  useEffect(() => {
    console.log("useEffect");
    async function fetchBoardDetail() {
      try {
        const response = await instance.get(`/api/board/${id}`);
        setBoardDetail(response.data);
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

  //   console.log(boardDetail.nickname)
  return (
    <div className="content">
      <Button onClick={(e) => navigate(-1)}>뒤로가기</Button>
      <Link to={"/admin/community/detail/" + id + "/edit"}>
        {localStorage.getItem("nickname") === boardDetail.nickname ? (
          <Button onClick={(e) => console.log(1)}>수정하기</Button>
        ) : null}
      </Link>
      {localStorage.getItem("nickname") === boardDetail.nickname ? (
        <Button
          onClick={(e) => {
            instance
              .delete("/board/" + id)
              .then((resp) => {
                console.log(resp);
                navigate(-1);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          삭제하기
        </Button>
      ) : null}
      {/* </Link> */}
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">{boardDetail.title}</CardTitle>
            </CardHeader>
            <CardBody>
              <p>{boardDetail.content}</p>
              <div className="text-muted">작성자: {boardDetail.nickname}</div>
              <div className="text-muted">
                작성일: {boardDetail.createdAt.substring(0, 10)}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Add any additional details or components you'd like to include here */}
    </div>
  );
}

export default BoardDetail;
