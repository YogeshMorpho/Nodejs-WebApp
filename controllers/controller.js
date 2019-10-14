var bodyParser=require('body-parser');
var express=require('express');
var fs =require('fs');
var parse=require('csv-parse');
var temp=[];

var user_list=new Object();
var user_list2=new Object();
var i;
module.exports =function(app){
    app.use(express.static('./public'));
    app.set('view engine','ejs');

    var urlencodedParser=bodyParser.urlencoded({extended:false});
        
    app.get('/',function(req,res){
        res.render('register');
    })

    app.post('/',urlencodedParser,function(req,res){
        var userid=req.body.userid;  
        var email=req.body.email;
        var username=req.body.username;
        var age=req.body.age;
        var gender=req.body.gender;
        var aadhar=req.body.aadhar;

        res.redirect('/registered');
      
        user_list[userid]={Username:username,Userid:userid,Email:email,Age:age,Gender:gender,Aadhar:aadhar};

        //registerSW();
})
app.get('/registered',function(req,res){
    res.render('registered');
    console.log(user_list);
});
// app.post('/registered',function(req,res){
    // res.redirect('/');
   
// });
var csvData=[];
var path="TRAIDATA.txt"
fs.createReadStream(path)
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      for(let i=0;i<csvData.length;i++){
        temp.push(csvData[i][0]);
      }
        console.log(csvData);
        temp=[... new Set(temp)];
        console.log(temp);
     
    });
  
    //var unique = temp.filter((item, i, ar) => ar.indexOf(item) === i);
    
};


/*async function registerSW(){
    if('serviceworker' in navigator){
        try{
            await navigator.serviceworker.register('../sw.js');
        } catch (e) {
            console.log('registration failed');
        }
    }
}
*/