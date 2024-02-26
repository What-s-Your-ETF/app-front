import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function CommunityDetail() {
  let { id } = useParams();
  const [boardDetail, setBoardDetail] = useState(null);

  useEffect(() => {
    async function fetchBoardDetail() {
      try {
        const response = await axios.get(`/api/board/${id}`);
        setBoardDetail(response.data);
      } catch (error) {
        console.error("Failed to fetch board details", error);
        // 적절한 에러 처리 로직 추가
      }
    }

    fetchBoardDetail();
  }, [id]); // 의존성 배열에 id를 추가하여 id가 변경될 때마다 새로운 상세 정보를 불러옵니다.

  if (!boardDetail) {
    return <div>Loading...</div>; // 로딩 상태 또는 데이터가 없는 경우를 처리
  }

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h4 className="title">{boardDetail.title}</h4>
            </CardHeader>
            <CardBody>
              <div>
                <p>{boardDetail.content}</p>
                <p>작성자: {boardDetail.nickname}</p>
                <p>작성일: {boardDetail.createdAt}</p>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CommunityDetail;
