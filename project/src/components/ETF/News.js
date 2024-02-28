import React from 'react'
export default function News({data}) {
  return (
    <a href={data.url} target="_blank">
        <div style={{border : "black solid 1px", margin:"10px 10px", backgroundColor:"white", borderRadius:"20px", border :"2px solid"}}>
            <div style={{display:"flex", alignContent:"center"}}>
                <h5 style={{fontWeight : "bold",margin:"10px 0px 1px 10px"}}>{data.title}</h5>
                <div style={{margin:"15px 0px 1px 10px"}}>{data.press}</div>
            </div>
            <div style={{margin:"10px 0px 10px 10px"}}>{data.dsc}</div>
        </div>
    </a>
  )
}