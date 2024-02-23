import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import {
    ResponsiveContainer,
	ComposedChart,
	Line,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
    Area,
    LineChart
} from 'recharts';
import { useState } from "react";
import News from "components/ETF/News";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ETFss() {

    const [newsComponents, setNewsComponents] = useState([]) //전체 뉴스
    const [clickedDate, setClickedDate] = useState('')
    const [etfs, setEtfs] = useState([
        {
        title : "portfolio1",
        data : [
            {name: '`23-06-02', ETF: 400, Your_ETF: 610},
            {name: '`23-01-02', ETF: 410, Your_ETF: 520},
            {name: '`23-01-03', ETF: 420, Your_ETF: 240},
            {name: '`23-07-02', ETF: 430, Your_ETF: 660},
            {name: '`23-01-05', ETF: 440, Your_ETF: 770},
            {name: '`23-01-06', ETF: 450, Your_ETF: 880},
            {name: '`23-01-07', ETF: 460, Your_ETF: 700},
            {name: '`23-08-02', ETF: 400, Your_ETF: 610},
            {name: '`23-01-02', ETF: 410, Your_ETF: 520},
            {name: '`23-01-03', ETF: 420, Your_ETF: 240},
            {name: '`23-01-04', ETF: 430, Your_ETF: 660},
            {name: '`23-01-05', ETF: 440, Your_ETF: 770},
            {name: '`23-01-06', ETF: 450, Your_ETF: 880},
            {name: '`23-01-07', ETF: 460, Your_ETF: 700},
            {name: '`23-01-01', ETF: 400, Your_ETF: 610},
            {name: '`23-01-02', ETF: 410, Your_ETF: 520},
            {name: '`23-01-03', ETF: 420, Your_ETF: 240},
            {name: '`23-01-04', ETF: 430, Your_ETF: 660},
            {name: '`23-01-05', ETF: 440, Your_ETF: 770},
            {name: '`23-01-06', ETF: 450, Your_ETF: 880},
            {name: '`23-01-07', ETF: 460, Your_ETF: 700},
            {name: '`23-01-01', ETF: 400, Your_ETF: 610},
            {name: '`23-01-02', ETF: 410, Your_ETF: 520},
            {name: '`23-01-03', ETF: 420, Your_ETF: 240},
            {name: '`23-01-04', ETF: 430, Your_ETF: 660},
            {name: '`23-01-05', ETF: 440, Your_ETF: 770},
            {name: '`23-01-06', ETF: 450, Your_ETF: 880},
            {name: '`23-01-07', ETF: 460, Your_ETF: 700},
            {name: '`23-01-01', ETF: 400, Your_ETF: 610},
            {name: '`23-01-02', ETF: 410, Your_ETF: 520},
            {name: '`23-01-03', ETF: 420, Your_ETF: 240},
            {name: '`23-01-04', ETF: 430, Your_ETF: 660},
            {name: '`23-01-05', ETF: 440, Your_ETF: 770},
            {name: '`23-01-06', ETF: 450, Your_ETF: 880},
            {name: '`23-01-07', ETF: 460, Your_ETF: 700},
            {name: '`23-01-01', ETF: 400, Your_ETF: 610},
            {name: '`23-01-02', ETF: 410, Your_ETF: 520},
            {name: '`23-01-03', ETF: 420, Your_ETF: 240},
            {name: '`23-01-04', ETF: 430, Your_ETF: 660},
            {name: '`23-01-05', ETF: 440, Your_ETF: 770},
            {name: '`23-01-06', ETF: 450, Your_ETF: 880},
            {name: '`23-01-07', ETF: 460, Your_ETF: 700},
        ]},
        {
        title : "portfolio2",
        data : [
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
            {name: '`23-01-07', ETF: 416, Your_ETF: 200},
            {name: '`23-01-07', ETF: 516, Your_ETF: 210},
            {name: '`23-01-07', ETF: 616, Your_ETF: 260},
            {name: '`23-01-07', ETF: 316, Your_ETF: 100},
            {name: '`23-01-07', ETF: 416, Your_ETF: 290},
            {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        ]},
    ])

    // const [news]
    useEffect((()=>{
        console.log(99)
    }),[])

    // const data =


  const handleDataClick = async (data, index) => {
    try {
        const date = data.activeLabel.slice(1)
        console.log(date)
        setClickedDate(date) //클릭한 점 기준 날짜가 나온다 (23-05-02 등)
    } catch (error) {
        console.log(error)
    }
    
    const news = ([
        {title : "삼성전자 주가 사상 최고치 달성 ㄷㄷ", content : "삼성전자가 이번 실적 발표에서 역대 최대 실적을 달성한것으로 알려졌다.", _date : "23-06-02"},
        {title : "엔비디아 주가 떡상 ㄷㄷ", content : "엔비디아 짱짱맨입니다.", _date : "23-07-02"},
        {title : "하이닉스 주가 뭐냐", content : "하이닉스 하이하이요.", _date : "23-08-02"},
    ])
    
    // const news = axios.get('123.0.0.1',{}) //리턴 타이틀 컨텐트 데이트
     
    var fetchsedNews = []

    // for(let i=0;i<news.length;i++){
    //     await fetchsedNews.push(<News key={i} data={news[i]}></News>)
    // }

    var filteredNews = news.filter((elem)=>elem._date === clickedDate)
    console.log(filteredNews)

    for(let i=0;i<filteredNews.length;i++){
        await fetchsedNews.push(<News key={i} data={filteredNews[i]}></News>)
    }

    await setNewsComponents(fetchsedNews)
  };

  const getGraph = (data)=>{
    return(
    <LineChart width={730} height={250} data={data} onClick={handleDataClick} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="ETF" stroke="#8884d8" />
    <Line type="monotone" dataKey="Your_ETF" stroke="#82ca9d" />
    </LineChart>
    )
  }

    // {for(let i = 0; i<news.length; i++){
    //     return <News data={news[i]}></News>
    // }}
  
return (
    <>    
    <div className="content">           

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" onSelect={(key) => console.log(key,"selected")}>
        {etfs.map((elem,idx)=>{
            return(<Tab eventKey={elem.title} title={elem.title}>{getGraph(elem.data)}</Tab>)
        })} 
        <Tab eventKey="add" title="+">
        </Tab>
    </Tabs>
        {newsComponents.length === 0 ? null : <div>{clickedDate}일의 뉴스</div>}
        <div>
            {newsComponents}
        </div>
    </div>
    </>
  );

};
export default ETFss;
