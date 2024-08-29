const db=require('../models/index');

let getBills=(req,res)=>{
    let query1='select * from bill';
    db.query(query1,(err,data)=>{
        if(err)
        {
            throw err;
        }
        res.send(data);
    })

}
let getBillById=(req,res)=>{
    let Id=req.params.id;
    let query1='select * from bill where bill_number=?'
    db.query(query1,[Id],(err,data)=>{
        if(err)
        {
            throw err;
        }
        res.send(data);
    })
}
let postBills=(req,res)=>{
    let Bill=req.body;
    let query1=`insert into bill(bill_number,customer_id,bill_date,amount,status,payment_due_date,payment_method) values('${Bill.bill_number}','${Bill.customer_id}','${Bill.bill_date}',${Bill.amount},'${Bill.status}','${Bill.payment_due_date}','${Bill.payment_method}')`;
    db.query(query1,(err,data)=>{
        if(err)
        {
            res.status(500).send({status:"Bill not added"});
            throw err;
        }
        res.redirect('/');
    })
}
let EditBills=(req,res)=>{
    let Id=Number(req.params.id);
    let Bill=req.body;
    Bill.bill_date=Bill.bill_date.slice(0,10);
    let query1='update bill set ? where id=?';
    db.query(query1,[Bill,Id],(err,data)=>{
        if(err)
        {
           return res.status(500).json({status:"Bill not updated"});
        }
        res.redirect('/table');
    })
}
let DeleteBill=(req,res)=>{
    let Id=Number(req.params.id);
    let query1='delete from bill where id=?';
    db.query(query1,[Id],(err,data)=>{
        if(err)
        {
            return res.status(500).json({status:"Bill not deleted"});
        }
        res.status(200).json({status:"Bill deleted"});
    })
}
let getBillsDue = (req, res) => {
    let query = 'SELECT * FROM bill WHERE status = "due"';
     // or get this value dynamically from req.query or req.params if needed
    db.query(query, (err, data) => {
        if (err) {
            // Handle error properly in production code
            console.error('Error querying bills:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.send(data);
    });
};
let getBillsCompleted = (req, res) => {
    let query = 'SELECT * FROM bill WHERE status = "completed"';
     // or get this value dynamically from req.query or req.params if needed
    db.query(query, (err, data) => {
        if (err) {
            // Handle error properly in production code
            console.error('Error querying bills:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.send(data);
    });
};


module.exports={getBills,getBillById,postBills,EditBills,DeleteBill,getBillsDue,getBillsCompleted};