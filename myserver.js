var http=require('http')
var fs=require('fs')
http.createServer(
	function(req,res){
	fs.readFile('myserver.html',function(err,data){
	res.writeHead(200,{'conent-type':'text/html'})
res.write(data);
return res.end();

});
	
	
}
)
.listen(7480)