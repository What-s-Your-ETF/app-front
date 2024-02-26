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
  LineChart,
} from "recharts";
import { useState } from "react";
import News from "components/ETF/News";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ETFSetting from "./ETFSetting";
import axios, { Axios } from "axios";
import ETFMaker from "./ETFmaker";
import { getPortfolios } from "lib/api/portfolios";
function ETFss() {
    const [ comparegroup, setComparegroup] = useState([ 
        {
        title : "Kospi",
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
        title : "kosdaq",
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
        ]},])

    const [newsComponents, setNewsComponents] = useState([]) //전체 뉴스
    const [clickedDate, setClickedDate] = useState('')
    const [etfs, setEtfs] = useState([
        // {
        // title : "portfolio1",
        // data : [
        //     {name: '`23-06-02', ETF: 400, Your_ETF: 610},
        //     {name: '`23-01-02', ETF: 410, Your_ETF: 520},
        //     {name: '`23-01-03', ETF: 420, Your_ETF: 240},
        //     {name: '`23-07-02', ETF: 430, Your_ETF: 660},
        //     {name: '`23-01-05', ETF: 440, Your_ETF: 770},
        //     {name: '`23-01-06', ETF: 450, Your_ETF: 880},
        //     {name: '`23-01-07', ETF: 460, Your_ETF: 700},
        //     {name: '`23-08-02', ETF: 400, Your_ETF: 610},
        //     {name: '`23-01-02', ETF: 410, Your_ETF: 520},
        //     {name: '`23-01-03', ETF: 420, Your_ETF: 240},
        //     {name: '`23-01-04', ETF: 430, Your_ETF: 660},
        //     {name: '`23-01-05', ETF: 440, Your_ETF: 770},
        //     {name: '`23-01-06', ETF: 450, Your_ETF: 880},
        //     {name: '`23-01-07', ETF: 460, Your_ETF: 700},
        //     {name: '`23-01-01', ETF: 400, Your_ETF: 610},
        //     {name: '`23-01-02', ETF: 410, Your_ETF: 520},
        //     {name: '`23-01-03', ETF: 420, Your_ETF: 240},
        //     {name: '`23-01-04', ETF: 430, Your_ETF: 660},
        //     {name: '`23-01-05', ETF: 440, Your_ETF: 770},
        //     {name: '`23-01-06', ETF: 450, Your_ETF: 880},
        //     {name: '`23-01-07', ETF: 460, Your_ETF: 700},
        //     {name: '`23-01-01', ETF: 400, Your_ETF: 610},
        //     {name: '`23-01-02', ETF: 410, Your_ETF: 520},
        //     {name: '`23-01-03', ETF: 420, Your_ETF: 240},
        //     {name: '`23-01-04', ETF: 430, Your_ETF: 660},
        //     {name: '`23-01-05', ETF: 440, Your_ETF: 770},
        //     {name: '`23-01-06', ETF: 450, Your_ETF: 880},
        //     {name: '`23-01-07', ETF: 460, Your_ETF: 700},
        //     {name: '`23-01-01', ETF: 400, Your_ETF: 610},
        //     {name: '`23-01-02', ETF: 410, Your_ETF: 520},
        //     {name: '`23-01-03', ETF: 420, Your_ETF: 240},
        //     {name: '`23-01-04', ETF: 430, Your_ETF: 660},
        //     {name: '`23-01-05', ETF: 440, Your_ETF: 770},
        //     {name: '`23-01-06', ETF: 450, Your_ETF: 880},
        //     {name: '`23-01-07', ETF: 460, Your_ETF: 700},
        //     {name: '`23-01-01', ETF: 400, Your_ETF: 610},
        //     {name: '`23-01-02', ETF: 410, Your_ETF: 520},
        //     {name: '`23-01-03', ETF: 420, Your_ETF: 240},
        //     {name: '`23-01-04', ETF: 430, Your_ETF: 660},
        //     {name: '`23-01-05', ETF: 440, Your_ETF: 770},
        //     {name: '`23-01-06', ETF: 450, Your_ETF: 880},
        //     {name: '`23-01-07', ETF: 460, Your_ETF: 700},
        // ]},
        // {
        // title : "portfolio2",
        // data : [
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 200},
        //     {name: '`23-01-07', ETF: 516, Your_ETF: 210},
        //     {name: '`23-01-07', ETF: 616, Your_ETF: 260},
        //     {name: '`23-01-07', ETF: 316, Your_ETF: 100},
        //     {name: '`23-01-07', ETF: 416, Your_ETF: 290},
        //     {name: '`23-01-07', ETF: 816, Your_ETF: 340},
        // ]},
    ])

    // useEffect((()=>{
    //     console.log(localStorage.getItem('authToken'))

    //     // axios.post("http://127.0.0.1:3000/api/portfolios", 
    //     // {
    //     //     name: "My Portfolio2",
    //     //     duration: {
    //     //         startDate: "2022-01-01",
    //     //         endDate: "2022-12-31"
    //     //     },
    //     //     investAmounts: 1000000,
    //     //     itemCodes: ["005930", "000660", "006400"],
    //     //     weights: [0.3, 0.3, 0.4]
    //     // },{headers : {Authorization : "bearer "+localStorage.getItem('authToken')}})
    //     // .then(resp=>
    //     //     console.log(resp))

    //     // getPortfolios({
    //     //     name: "My Portfolio1",
    //     //     duration: {
    //     //         startDate: "2022-01-01",
    //     //         endDate: "2022-12-31"
    //     //     },
    //     //     investAmounts: 1000000,
    //     //     itemCodes: ["005930", "000660", "006400"],
    //     //     weights: [0.3, 0.3, 0.4]
    //     // }).then(resp=>{
    //     //     console.log(resp)
    //     // })
    //     var loadEtfs = []
    //     axios.get('http://127.0.0.1:3000/api/portfolios',{headers : {Authorization: "Bearer "+localStorage.getItem('authToken')}}).then(async resp=>{
    //         console.log(resp.data)
    //         // setEtfs(resp.data)
            
    //         for(var i =0;i<resp.data.length;i++){ //포트폴리오 개수에 대해서 처리
    //             // console.log(resp.data[i])
    //             // console.log("i", i)
    //             // console.log(resp.data[i])
    //             const returnedPort = await processData(resp.data[i])
                
    //             // setEtfs( etfs.push(returnedPort) )
    //             loadEtfs.push(returnedPort)
    //             // console.log(etfs)
    //         }
    //         // loadEtfs = appendComp()  //ETF
    //         setEtfs(loadEtfs)
    //     })
    // }),[])
  //데이터 옆에 쌓기 함수
//   const appendComp = async()=>{
//     let tempEtfs = 
//     for(let i=0;i<comparegroup.length();i++){

//     }
//   }

  //포르폴리오 1개당 데이터 처리하기
  const processData = async (data) =>{
    var totalData = {} //title : "", data : [] 오브젝트 타입으로 들어간다
    totalData.title = data.name //title넣음 => 일별로 data만 넣어주면 된다
    
    var dailyDate = []
    // console.log(data)
    for(var i=0;i<data.returnRates.length;i++){
        const elem = data.returnRates[i]
        // console.log(elem.date.slice(2,10))
        var tempData = {}
        tempData.name = elem.date.slice(2,10)
        tempData[data.name] = elem.rate.$numberDecimal*100
        dailyDate.push(tempData)
    }
    totalData.data = dailyDate

    return totalData // 1개의 ETF에 대해 전처리 완
  }
  const handleDataClick = async (data, index) => {
    try {
        const date = data.activeLabel.slice(1)
        // console.log(date)
        setClickedDate(date) //클릭한 점 기준 날짜가 나온다 (23-05-02 등)
    } catch (error) {
      console.log(error);
    }

    const news = [
      {
        title: "삼성전자 주가 사상 최고치 달성 ㄷㄷ",
        content:
          "삼성전자가 이번 실적 발표에서 역대 최대 실적을 달성한것으로 알려졌다.",
        _date: "23-06-02",
      },
      {
        title: "엔비디아 주가 떡상 ㄷㄷ",
        content: "엔비디아 짱짱맨입니다.",
        _date: "23-07-02",
      },
      {
        title: "하이닉스 주가 뭐냐",
        content: "하이닉스 하이하이요.",
        _date: "23-08-02",
      },
    ];

    // const news = axios.get('123.0.0.1',{}) //리턴 타이틀 컨텐트 데이트

    var fetchsedNews = [];

    var filteredNews = news.filter((elem) => elem._date === clickedDate);
    console.log(filteredNews);

    for (let i = 0; i < filteredNews.length; i++) {
      await fetchsedNews.push(<News key={i} data={filteredNews[i]}></News>);
    }

    await setNewsComponents(fetchsedNews);
  };

  const getGraph = (data)=>{
    // console.log(Object.keys(data[0]))
    const keys = Object.keys(data[0])
    return(
    <LineChart width={730} height={250} data={data} onClick={handleDataClick} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        {/* <Line type="monotone" dataKey="ETF" stroke="#8884d8" /> */}
        {/* <Line type="monotone" dataKey="My Portfolio1" stroke="#82ca9d" /> */}

        {keys.map((elem,idx)=>{
            if(idx>=1)
                return (<Line type="monotone" dataKey={elem} stroke="#82ca9d" />)
        })}
        {/* <Line type="monotone" dataKey="Kospi" stroke="#ffc658" /> */}
    </LineChart>
    )
  }

return (
    <>    
    <div className="content">           

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" onSelect={(key) => console.log(key,"selected")}>
        {etfs.map((elem,idx)=>{
            console.log(elem.data)
            return(<Tab eventKey={elem.title} title={elem.title}>{getGraph(elem.data)}</Tab>)
        })} 
        <Tab eventKey="add" title="+">
            <ETFMaker></ETFMaker>
          </Tab>
        </Tabs>
        {newsComponents.length === 0 ? null : <div>{clickedDate}일의 뉴스</div>}
        <div>{newsComponents}</div>
      </div>
    </>
  );
}
export default ETFss;
