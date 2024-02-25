import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap'
import { Link, useNavigate, } from 'react-router-dom';
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';
import Cookies from 'js-cookie';
import "./Login.css"


export default function Login() {
        const navigate = useNavigate()
        const [idValue, setIdValue] = useState('');
        const [pwValue, setPwValue] = useState('');
       

        const handleLogin = async(e) => {
            e.preventDefault();
           try{
                const response = await axios.post('http://127.0.0.1:3000/api/user/login',{
                    email : idValue,
                    password : pwValue
                })
                console.log(response.data)
                console.log('로그인 성공')
                navigate(-1)
                sessionStorage.setItem("authToken",response.data.token)
                sessionStorage.setItem('nickname',response.data.nickname)

            }catch(error){
                console.error(error)
                alert('아이디나 비밀번호를 다시 입력해주세요')
            }
        }

        const handleKaKaoLogin = async(e) =>{
            try{
             window.open('http://127.0.0.1:3000/api/kakao', "_blank", "noopener, noreferrer");
           

            }catch(error){
                console.error(error)
                alert('아이디나 비밀번호를 다시 입력해주세요')
            }
        }


  return (
    <>
         <div className="content" style={{ backgroundColor: '#E7EFFD' }}>
        <Row>
            <Col>
              <body>
                <div id="container" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#E7EFFD' }}>
                <div style={{ padding: '10px', margin: '20px', width: '50%', backgroundColor: '#E7EFFD' }}>
                <div id="login-box" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#E7EFFD' }}>

                <Form.Control className="custom-input" type="text" placeholder="아이디를 입력하세요" value={idValue} onChange={(e) => { setIdValue(e.target.value) }} style={{ marginBottom: '10px', height: '40px' }} />
                <Form.Control  className="custom-input" type="password" placeholder="비밀번호를 입력하세요" value={pwValue} onChange={(e) => { setPwValue(e.target.value) }} style={{ marginBottom: '10px', height: '40px' }} />

                <div style={{ display: "flex", justifyContent: "center" , gap:"5%" }}>
                <div style={{ marginTop: '10px' }}>
                <Button type="submit" className="btn btn-success" onClick={handleLogin}>로그인</Button>
                </div>

                <Link to={"/admin/signup"} style={{ marginTop: '10px' }}>
                <Button type="submit" className="btn btn-success">회원가입</Button>
                </Link>
                </div>

                <div style={{ display: "flex", justifyContent: "center" ,marginTop: '10px' }}>
                <Button type="submit" className="btn myButton" onClick={handleKaKaoLogin}><img src="https://cdn.freebiesupply.com/logos/large/2x/kakaotalk-logo-png-transparent.png"></img>Login with Kakao</Button>

                </div>

            </div>
          </div>
        </div>
      </body>
    </Col>
  </Row>
</div>

    </>
  )
}