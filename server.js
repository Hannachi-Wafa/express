const express=require('express')
const app =express()
app.use(date = (req, res, next) => {
    let curentday=new Date().getDay();
    let curenthour= new Date().getHours();
    if ((curentday >=1&& curentday<=5)&&(curenthour >= 9 && curenthour <= 17))
    {
        next()
    } else {
      res.send('Our office is not open now');
}


  
})
app.use(express.static(__dirname + '/public'))
const port =5000;
app.listen(port,(err)=>{
    err? console.log(err): console.log('the server is running on port 5000')
})






