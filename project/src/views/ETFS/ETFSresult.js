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
import News from "components/Contents/News";
function ETFS() {
    const [newsComponents, setNewsComponents] = useState([])
    // const [news]
    useEffect((()=>{
        console.log(99)
        setNewsComponents(<News data={{title : 'hi', content : "hihi"}}></News>)
    }),[])

    const data = [
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
    ];


  const handleDataClick = (data, index) => {
    console.log("Clicked data:", data);

    const news = ([
        {title : "삼성전자 주가 사상 최고치 달성 ㄷㄷ", content : "삼성전자가 이번 실적 발표에서 역대 최대 실적을 달성한것으로 알려졌다.", _date : "23-05-02"},
        {title : "엔비디아 주가 떡상 ㄷㄷ", content : "엔비디아 짱짱맨입니다.", _date : "23-05-02"},
        {title : "하이닉스 주가 뭐냐", content : "하이닉스 하이하이요.", _date : "23-05-02"},
    ])
    
    // const news = axios.get('123.0.0.1',{}) //리턴 타이틀 컨텐트 데이트

    const fetchsedNews = []
    for(let i=0;i<news.length;i++){
        fetchsedNews.push(<News data={news[i]}></News>)
    }
    setNewsComponents(fetchsedNews)
  };
  const graph = (
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

    // {for(let i = 0; i<news.length; i++){
    //     return <News data={news[i]}></News>
    // }}
  
return (
    <>    
    <div className="content">                            
        {graph}
        <div>
            {newsComponents}
        </div>
    </div>
    </>
  );

};
export default ETFS;