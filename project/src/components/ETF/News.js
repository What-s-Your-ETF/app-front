import React from 'react'
export default function News({data}) {
  return (
    <a href="http://naver.com" target="_blank">
        <div style={{border : "black solid 1px", margin:"10px 10px"}}>
            <div>Title : {data.title}</div>
            <div>Content : {data.content}</div>
        </div>
    </a>
  )
}