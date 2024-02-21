import React from 'react'
import { Col, Row } from 'reactstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Login() {
        const [idValue, setIdValue] = useState('');
        const [pwValue, setPwValue] = useState('');
    
        const handleInputChange = (event) => {
            setIdValue(event.target.value);
        };
        
        const onsubmit = (event) => {
            // todoLogin(idValue, pwValue)
            event.preventDefault();
        }
  return (
    <>
        <div className="content">
            <Row>
                <Col>
                <body>
            <div id="container">
                <form  style={{border : '2px solid black', padding : '10px', margin : '20px'}}>
                    <div id="login-box">
                            <div class="login-form">
                                <label for="id">이메일</label><br/>
                                <input type="text" name="id" placeholder="아이디를 입력하세요" class="form-control" id="id" value={idValue} onChange={(e)=>{setIdValue(e.target.value)}}/>
                            </div>
                            
                            <div class="login-form">
                                <label for="pw">비밀번호</label><br/>
                                <input type="password" name="pw" placeholder="비밀번호를 입력하세요" class="form-control" id="pw" value={pwValue} onChange={(e)=>{setPwValue(e.target.value)}}/>
                            </div>

                            <div style={{display:"flex", alignContent:"center"}}>
                                <div id="btn-login" style={{marginTop : '10px', display:"flex", justifyContent:"center"}}>
                                    <button type="submit" class="btn btn-success" onClick={onsubmit}>로그인</button>
                                </div>
                                <Link to={"/admin/signup"}>
                                    <div id="btn-login" style={{marginTop : '10px', display:"flex", justifyContent:"center"}}>
                                        <button type="submit" class="btn btn-success">회원가입</button>
                                    </div>
                                </Link>
                            </div>
                    </div>
                </form>
            </div>    
            </body>
                </Col>   
            </Row>        
        </div>
    </>
  )
}