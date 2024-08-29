
async function getdetails() {
    try {
        var i=document.getElementById('Customer_ID').value;
        console.log(i);
        const response = await fetch(`/data/bill/${i}`);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
        let data1=data[0];
        var a=document.getElementById('displaydetails');
        a.innerHTML=`<div><h3>Bill Details</h3><div>
    <ul>
        <li><b>S.no:</b>${data1.id}</li>
        <li><b>Bill Number:</b>${data1.bill_number}</li>
        <li><b>Customer_ID:</b>${data1.customer_id}</li>
        <li><b>BillDate:</b>${data1.bill_date}</li>
        <li><b>Amount:</b>${data1.amount}</li>
        <li><b>Status:</b>${data1.status}</li>
        <li><b>Payment_due_date:</b>${data1.payment_due_date}</li>
        <li><b>Payment_method:</b>${data1.payment_method}</li>
    </ul>`
}catch(err)
{
    console.log(err);
}
}