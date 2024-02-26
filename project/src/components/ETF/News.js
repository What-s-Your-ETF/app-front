import React from 'react'
export default function News({data}) {
  return (
    <a href={data.url} target="_blank">
        <div style={{border : "black solid 1px", margin:"10px 10px"}}>
            <div>Title : {data.title}</div>
            <div>Description :  {data.desc}</div>
            <div>press :  {data.press}</div>
        </div>
    </a>
  )
}