var express=require('express');
var bodyparser=require('body-parser');
var routes=require('./routes/index');
var path=require('path');
const app=express();
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});
app.get('/form2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form2.html'));
});
app.get('/list', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'table.html'));
});
app.get('/table', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'list.html'));
});
app.get('/due', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'due.html'));
});
app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'history.html'));
});
app.use('/data',routes);
let port=3000;
app.listen(port,()=>{
    console.log(`Server running at port http//:localhost:${port}`);
})