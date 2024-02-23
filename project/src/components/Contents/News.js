import React from 'react'

export default function News({data}) {
  return (
    <div style={{border : "black solid 1px", margin:"10px 10px"}}>
        <div>Title : {data.title}</div>
        <div>Content : {data.content}</div>
    </div>
  )
}