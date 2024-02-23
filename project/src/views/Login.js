import React, { useState, useContext } from 'react';
import { Col, Row } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { TockenContext,NicknameContext } from 'lib/context/AuthContext';

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
                sessionStorage.setItem("token",response.data.token)
                sessionStorage.setItem('nickname',response.data.nickname)
            }catch(error){
                console.error(error)
                alert('아이디나 비밀번호를 다시 입력해주세요')
            }
        }

        const handleKaKaoLogin = async(e) =>{
            try{
                const response = await axios.get('http://127.0.0.1:3000/api/kakao')
                console.log(response.data)
                console.log('로그인 성공')
                navigate(-1)
            }catch(error){
                console.error(error)
                alert('아이디나 비밀번호를 다시 입력해주세요')
            }
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
                                    <button type="submit" class="btn btn-success" onClick={handleLogin}>로그인</button>
                                </div>
                                <div id="btn-login" style={{marginTop : '10px', display:"flex", justifyContent:"center"}}>
                                    <Button type="submit" class="btn btn-success" onClick={handleKaKaoLogin}>Login with Kakao</Button>
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