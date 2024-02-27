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
// import Chart from "react-chartjs-2";
// import { useRef } from "react";
import { useRef } from "react";
// import { Pie } from "react-chartjs-2";
// import { Chart } from "react-chartjs-2";
import { PieChart } from "recharts";
import { Pie } from "recharts";

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
        // stockItems : {
        // //  name : 
        // },
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


    
    useEffect(()=>{
        // console.log(localStorage.getItem('authToken'))

        // axios.post("http://127.0.0.1:3000/api/portfolios", 
        // {
        //     name: "My Portfolio1",
        //     duration: {
        //         startDate: "2022-01-01",
        //         endDate: "2022-12-31"
        //     },
        //     investAmounts: 1000000,
        //     itemCodes: ["005930", "000660", "006400"],
        //     weights: [0.3, 0.3, 0.4]
        // },{headers : {Authorization : "bearer "+localStorage.getItem('authToken')}})
        // .then(resp=>
        //     console.log(resp))

        // getPortfolios({
        //     name: "My Portfolio1",
        //     duration: {
        //         startDate: "2022-01-01",
        //         endDate: "2022-12-31"
        //     },
        //     investAmounts: 1000000,
        //     itemCodes: ["005930", "000660", "006400"],
        //     weights: [0.3, 0.3, 0.4]
        // }).then(resp=>{
        //     console.log(resp)
        // })

        var loadEtfs = []
        axios.get('http://127.0.0.1:3000/api/portfolios',{headers : {Authorization: "Bearer "+localStorage.getItem('authToken')}}).then(async resp=>{
            console.log(resp.data)
            // setEtfs(resp.data)
            
            for(var i =0;i<resp.data.length;i++){ //포트폴리오 개수에 대해서 처리
                // console.log(resp.data[i])
                // console.log("i", i)
                // console.log(resp.data[i])
                const returnedPort = await processData(resp.data[i])
                
                // setEtfs( etfs.push(returnedPort) )
                loadEtfs.push(returnedPort)
                // console.log(etfs)
            }
            // loadEtfs = appendComp()  //ETF
            setEtfs(loadEtfs)
        })
    },[])
  //데이터 옆에 쌓기 함수
//   const appendComp = async()=>{
//     let tempEtfs = 
//     for(let i=0;i<comparegroup.length();i++){

//     })
//   })

  //포르폴리오 1개당 데이터 처리하기
  const processData = async (data) =>{
    var totalData = {} //title : "", data : [] 오브젝트 타입으로 들어간다
    totalData.title = data.name //title넣음 => 일별로 data만 넣어주면 된다

    totalData.stockItems = data.stockItems
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
    
    const date = data.activeLabel
    try {
        console.log(date.slice(0,2), date.slice(3,5),date.slice(6,8))
        setClickedDate(date) //클릭한 점 기준 날짜가 나온다 (23-05-02 등)
    } catch (error) {
      console.log(error);
    }
    
    const news = ([
        {title : "삼성전자 주가 사상 최고치 달성 ㄷㄷ", content : "삼성전자가 이번 실적 발표에서 역대 최대 실적을 달성한것으로 알려졌다.", _date : "23-06-02"},
        {title : "엔비디아 주가 떡상 ㄷㄷ", content : "엔비디아 짱짱맨입니다.", _date : "23-07-02"},
        {title : "하이닉스 주가 뭐냐", content : "하이닉스 하이하이요.", _date : "23-08-02"},
    ])
    const inputDate = "20"+date.slice(0,2)+"."+date.slice(3,5)+"."+date.slice(6,8)
    const inputKeyword = []
    
    var fetchedNews = []

    axios.post("/api/news/getnews",{ "keywordArray" : ["삼성전자", "LG", "SK"], "day" : inputDate}).then(resp=>{
        console.log(resp.data)
        for(const key in resp.data  ){
            resp.data[key].map((elem2,idx)=>{
                fetchedNews.push(elem2)
                // console.log(elem2)
            })
        }
        var returnNews = []
        for(let i=0;i<fetchedNews.length;i++){
            console.log(i)
            returnNews.push(<News key={i} data={fetchedNews[i]}></News>)
        }
    
        setNewsComponents(returnNews)
    }).catch((err)=>{
        console.log(err)
    })
   
  };

  const getGraph = (data)=>{
    // console.log(Object.keys(data[0]))
    const keys = Object.keys(data[0])
    return(
    <>
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
    </>
    )
  }

//   const PieChart3 = () => {
//     var stockList = []
//     var stockWeight = []
//     // for(let i=0;i<stockItems.length;i++){
//     //     stockList.push(stockItems.name)
//     //     stockWeight.push(stockItems.weight)
//     // }
//     const {isLoading} = useSelector(state => state.tableReducer);
    
//     const canvasRef = useRef(null);
//     const ctx = canvasRef.current.getContext('2d');
//     // const ctx = document.getElementById('myChart').getContext('2d');
// 	// const ctx = document.getElementById('myChart').getContext('2d');
// 	const labels= ['Pizza 🍕', 'Taco 🌮', 'Hot Dog🌭', 'Sushi🍣']

//     const chart = new Chart(ctx, {
//     	type: 'pie', // bar, pie, line, doughnut, polarArea
//         data: {
//         	datasets: [{
//             	data: [35.82,19.23,9.9,100],
//                 backgroundColor: ['#FB3640', '#EFCA08', '#43AA8B', '#253D5B']
//             }],
//             labels: labels
//             },
//             options: {
//             responsive: true,      
//             legend: {position: 'bottom'},
//             plugins: {
//                datalabels: {
//                    color: ['#fff', '#fff', '#fff', '#fff'],
//                    borderWidth: 2,
//                    borderColor: ['#fff', '#fff', '#fff', '#fff'],
//                    borderRadius : 25,
//                    anchor: 'center',
//                    	formatter: function(value, context) {
//                     	return (value > 10) ? value+ "%" : null //data가 10 미만이면 숫자 값은 출력되지 않습니다.
//                     }
//                 },
//             }
//         }
//     });

//     return  chart
//   }

  const PieChart2 = () =>{
    var data01 = []
    // etfs.stockItems.map((elem,idx)=>{
    //     data01.push({name : elem.name, value : elem.weight})
    // })
    data01 = [{name : "샘숭", value : 10},{name : "하닉", value : 20},{name : "짱비디아", value : 30}];
    console.log(etfs)
    return(
    <PieChart width={730} height={250}>
        {/* <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
    </PieChart>
    )
  }

    return (
        <>    
            <div className="content" >           
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" onSelect={(key) => console.log(key,"selected")}>
                {etfs.map((elem,idx)=>{
                    // console.log(elem.data)
                    return(<Tab eventKey={elem.title} title={elem.title}>{getGraph(elem.data)}</Tab>)
                })} 
                
                <Tab eventKey="add" title="+">
                    <ETFMaker></ETFMaker>
                </Tab>
            </Tabs>
            
            <PieChart2 />
            <div>
                
            </div>
                {newsComponents.length === 0 ? null : <div>{clickedDate}일의 뉴스</div>}
                <div>
                    {newsComponents}
                </div>
            </div>
        </>
    );

};

export default ETFss;