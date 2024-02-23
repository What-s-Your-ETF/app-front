const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');

const url = 'https://finance.naver.com/sise/theme.naver';

async function themalist(){

    let resp = await axios.get(url,{responseType: 'arraybuffer', responseEncoding: 'binary',
    headers:{'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0'}})
    let content = iconv.decode(resp.data, 'euc-kr');
    let $ = cheerio.load(content);
 
    const jjinlist = $('table.type_1.theme > tbody > tr').filter((i, el) => (i >= 3 && i < 8) || (i >= 11 && i < 16)).map((i,el)=>{
        const thema = $(el).find('td.col_type1>a').text();
        const num = $(el).find('td.number.col_type2>span').text().trim();
       
        return{
            thema,
            num
        }
    }).toArray();

    console.log(jjinlist)
    return jjinlist

}


themalist();
