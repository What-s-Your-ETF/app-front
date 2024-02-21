//실습5: 네이버 주식 공시리스트 가져오기
import axios from 'axios';
import * as cheerio from 'cheerio';
import iconv from 'iconv-lite';

const url = 'https://finance.naver.com/item/news_notice.naver?code=005930&page='

async function list(){

    let resp = await axios.get(url,{responseType: 'arraybuffer', responseEncoding: 'binary',
    headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'}})
    let content = iconv.decode(resp.data, 'euc-kr');
    let $ = cheerio.load(content)
    //console.log(content)

    const jjinlist = $('body > div > table.type6 > tbody.first > tr').map((i,el)=>{
        const title = $(el).find('td.title > a').text()
        const info = $(el).find('td.info').text()
        const date = $(el).find('td.date').text()


        return{
            title,
            info,
            date
        }
    }).toArray()

    const jjinlist2 = $('body > div > table.type6 > tbody.last > tr').map((i,el)=>{
        const title = $(el).find('td.title > a').text()
        const info = $(el).find('td.info').text()
        const date = $(el).find('td.date').text()


        return{
            title,
            info,
            date
        }
    }).toArray()




    console.log(jjinlist)
    console.log(jjinlist2)

}

list()