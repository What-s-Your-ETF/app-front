import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Button
} from 'reactstrap';

function BoardDetail() {
  let { id } = useParams();
  const [boardDetail, setBoardDetail] = useState(null);

  useEffect(() => {
    async function fetchBoardDetail() {
      try {
        const response = await axios.get(`/api/board/${id}`);
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

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">{boardDetail.title}</CardTitle>
            </CardHeader>
            <CardBody>
              <p>{boardDetail.content}</p>
              <div className="text-muted">작성자: {boardDetail.nickname}</div>
              <div className="text-muted">작성일: {boardDetail.createdAt.substring(0, 10)}</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Add any additional details or components you'd like to include here */}
    </div>
  );
}

export default BoardDetail;
