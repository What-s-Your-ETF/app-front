import React from 'react'
import { Col, Row } from 'reactstrap'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function Signup() {
        const [idValue, setIdValue] = useState('');
        const [pwValue, setPwValue] = useState('');
        const [pwValue2, setPwValue2] = useState('');
        const[name, setName] = useState('')
        const [Nickname, setNickname] = useState('')
        const navigate = useNavigate()
       
        
        const onsubmit = async(e) => {
            e.preventDefault();
            if(pwValue !== pwValue2){
                alert('비밀번호가 일치하지 않습니다')
            }

            try{
                const response = await axios.post('http://127.0.0.1:3000/api/users/signup',{
                    
                    email : idValue,
                    password : pwValue,
                    name : name,
                    nickname:Nickname,
                           
                })
                console.log(response.data)
                console.log('회원가입 성공')
                navigate(-1)
    
            }catch(error){
                console.error(error)
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
                                <label for="name">이름</label><br/>
                                <input type="text" name="id" placeholder="사용자의 이름을 입력해주세요" class="form-control" id="id" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                            </div>
                            
                            <div class="login-form">
                                <label for="pw">닉네임</label><br/>
                                <input type="password" name="pw" placeholder="사용자의 닉네임을 입력해주세요" class="form-control" id="pw" value={Nickname} onChange={(e)=>{setNickname(e.target.value)}}/>
                            </div>
                        
                            <div class="login-form">
                                <label for="id">이메일</label><br/>
                                <input type="text" name="id" placeholder="아이디를 입력해주세요" class="form-control" id="id" value={idValue} onChange={(e)=>{setIdValue(e.target.value)}}/>
                            </div>
                            
                            <div class="login-form">
                                <label for="pw">비밀번호</label><br/>
                                <input type="password" name="pw" placeholder="비밀번호를 입력해주세요" class="form-control" id="pw" value={pwValue} onChange={(e)=>{setPwValue(e.target.value)}}/>
                            </div>
                            <div class="login-form">
                                <label for="pw">비밀번호 재입력</label><br/>
                                <input type="password" name="pw" placeholder="비밀번호를 다시입력해주세요" class="form-control" id="pw" value={pwValue2} onChange={(e)=>{setPwValue2(e.target.value)}}/>
                            </div>


                            <div style={{display:"flex", alignContent:"center"}}>
                                <div id="btn-login" style={{marginTop : '10px', display:"flex", justifyContent:"center"}}>
                                    <button type="submit" class="btn btn-success" onClick={onsubmit}>가입하기</button>
                                </div>
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