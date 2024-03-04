import React, { useState, useContext } from "react";
import { Col, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          email: idValue,
          password: pwValue,
        }
      );
      console.log(response.data);
      console.log("로그인 성공");
      navigate(-1);

      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("nickname", response.data.nickname);
      localStorage.setItem("loginType", response.data.loginType);
    } catch (error) {
      console.error(error);
      alert("아이디나 비밀번호를 다시 입력해주세요");
    }
  };

  let popup = null;

  const handleKaKaoLogin = async (e) => {
    e.preventDefault();

    // 팝업 창을 열어 카카오 로그인 페이지를 표시하기.
    popup = window.open(
      `${process.env.REACT_APP_API_URL}/kakao`,
      "_blank",
      "width=800, height=600, top=100, left=100"
    );
    window.addEventListener("message", handleMessage, false);
  };

  const handleMessage = (event) => {
    // 신뢰할 수 있는 출처에서 온 메시지인지 확인
    if (event.origin !== "https://kjh-portfolio.com:3000/api/kakao/callback") {
      return; // 출처가 일치하지 않으면 처리하지 않음
    }

    if (typeof event.data === "string") {
      try {
        const userData = JSON.parse(event.data);
        if (userData.message === "success") {
          // 로그인 성공 처리
          localStorage.setItem("authToken", userData.authToken);
          localStorage.setItem("nickname", userData.nickname);
          localStorage.setItem("loginType", userData.loginType);
          navigate("/admin/dashboard");

          if (popup) {
            popup.close(); // 팝업 창 닫기
          }
          // 이벤트 리스너를 제거합니다.
          window.removeEventListener("message", handleMessage);
        }
      } catch (error) {
        console.error("Parsing error:", error);
      }
    }
  };
  /*
  // 메시지 이벤트 리스너를 추가하여, 팝업 창으로부터 메시지를 받기.
  const handleMessage = (event) => {
    if(event.data.message === "success"){
      const userData = event.data; // 이게 response 값입니다. 이거 사용하시면 돼용.
      localStorage.setItem("authToken", userData.authToken);
      localStorage.setItem("nickname", userData.nickname);
      localStorage.setItem("loginType", userData.loginType);
      navigate("/admin/dashboard");

      if (popup) {
      popup.close();
      }
    }
    
    // 이벤트 리스너를 제거합니다.
    window.removeEventListener("message", handleMessage);
  };
  */

  return (
    <>
      <div className="content" style={{ backgroundColor: "#E7EFFD" }}>
        <Row>
          <Col>
            <body>
              <div
                id="container"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#E7EFFD",
                }}
              >
                <div
                  style={{
                    padding: "10px",
                    margin: "20px",
                    width: "50%",
                    backgroundColor: "#E7EFFD",
                  }}
                >
                  <div
                    id="login-box"
                    style={{
                      padding: "20px",
                      borderRadius: "10px",
                      backgroundColor: "#E7EFFD",
                    }}
                  >
                    <Form.Control
                      className="custom-input"
                      type="text"
                      placeholder="이메일을 입력하세요"
                      value={idValue}
                      onChange={(e) => {
                        setIdValue(e.target.value);
                      }}
                      style={{ marginBottom: "10px", height: "40px" }}
                    />
                    <Form.Control
                      className="custom-input"
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      value={pwValue}
                      onChange={(e) => {
                        setPwValue(e.target.value);
                      }}
                      style={{ marginBottom: "10px", height: "40px" }}
                    />

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5%",
                      }}
                    >
                      <div style={{ marginTop: "10px" }}>
                        <Button
                          type="submit"
                          className="btn btn-success"
                          onClick={handleLogin}
                        >
                          로그인
                        </Button>
                      </div>

                      <Link to={"/admin/signup"} style={{ marginTop: "10px" }}>
                        <Button type="submit" className="btn btn-success">
                          회원가입
                        </Button>
                      </Link>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        src="https://developers.kakao.com/tool/resource/static/img/button/kakaosync/complete/ko/kakao_login_medium_narrow.png"
                        onClick={handleKaKaoLogin}
                        style={{ width: "180px", height: "40px" }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </body>
          </Col>
        </Row>
      </div>
    </>
  );
}
