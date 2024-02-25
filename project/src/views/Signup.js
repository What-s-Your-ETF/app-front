import React from 'react'
import { Col, Row } from 'reactstrap'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
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
                const response = await axios.post('http://127.0.0.1:3000/api/user/signup',{
                    
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
                <div className="content" style={{ backgroundColor: '#E7EFFD' }}>
                    <Row>
                        <Col>
                            <div id="container" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#E7EFFD' }}>
                                <div style={{ padding: '10px', margin: '20px', width: '50%', backgroundColor: '#E7EFFD' }}>
                                    <div id="login-box" style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#E7EFFD' }}>
                                        <Form.Control className="custom-input" type="text" placeholder="사용자의 이름을 입력해주세요" value={name} onChange={(e)=>{setName(e.target.value)}} style={{ marginBottom: '10px', height: '40px' }} />
                                        <Form.Control className="custom-input" type="text" placeholder="사용자의 닉네임을 입력해주세요" value={Nickname} onChange={(e)=>{setNickname(e.target.value)}} style={{ marginBottom: '10px', height: '40px' }} />
                                        <Form.Control className="custom-input" type="text" placeholder="아이디를 입력해주세요" value={idValue} onChange={(e)=>{setIdValue(e.target.value)}} style={{ marginBottom: '10px', height: '40px' }} />
                                        <Form.Control className="custom-input" type="password" placeholder="비밀번호를 입력해주세요" value={pwValue} onChange={(e)=>{setPwValue(e.target.value)}} style={{ marginBottom: '10px', height: '40px' }} />
                                        <Form.Control className="custom-input" type="password" placeholder="비밀번호를 다시입력해주세요" value={pwValue2} onChange={(e)=>{setPwValue2(e.target.value)}} style={{ marginBottom: '10px', height: '40px' }} />
                                        <div style={{display:"flex", justifySelf:"center", marginTop : '10px'}}>
                                                <button type="submit" class="btn btn-success" onClick={onsubmit}>가입하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>   
                    </Row>        
                </div>
            </>
        )
}