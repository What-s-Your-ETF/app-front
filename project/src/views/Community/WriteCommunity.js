import React, { useState } from "react";
import axios from "axios";
import instance from "lib/api/axios";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Button,
  Row,
  Col
} from "reactstrap";

function CommunityWrite() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  }

  async function postBoard(){
    try{
        const nickname = localStorage.getItem('nickname');
        const response = await instance.post('/board',{title:title, content:content, nickname : nickname});

        window.location.href = "http://localhost:3001/admin/community"
    }catch(err){
        console.error(err);
    }
  }

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <h5 className="title">글 작성하기</h5>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <label>제목</label>
                  <Input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>내용</label>
                  <Input
                    type="textarea"
                    value={content}
                    onChange={handleContentChange}
                    required
                  />
                </FormGroup>
                <Button onClick={postBoard} className="btn-fill" color="primary">
                  저장하기
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CommunityWrite;
