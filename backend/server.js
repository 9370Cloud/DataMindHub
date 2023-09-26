const express = require('express');
const app = express();
const dbPool = require('./dbConfig'); // mySQL 연결이 필요한 파일에서 호출

app.listen(8080, function() {
    console.log('listening on 8080')
})

dbPool.query('select now()',(err,result)=>{
    if(err) throw err;
    console.log(result);
})