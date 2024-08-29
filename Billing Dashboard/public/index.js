var e=document.getElementById('payment');
e.style.display="none";
async function getDetailsByBillNumber() {
    const id = document.getElementById('billNumber').value;
try {
const response = await fetch(`/data/bill/${id}`);
if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
}
const data = await response.json();

if(data.length<=0){
    alert("Bill number does not exists");
}
console.log(data);
let data1=data[0];
console.log(data1);
e.style.display='block';
e.innerHTML=`
<ul >
    <li><b>Bill_Number:</b>${data1.bill_number}</li>
    <li><b>Customer_ID:</b>${data1.customer_id}</li>
    <li><b>Bill_Date:</b>${data1.bill_date}</li>
    <li><b>Amount:</b>${data1.amount}</li>
    <li><b>Status:</b>${data1.status}</li>
    <li><b>Payment_Due_Date:</b>${data1.payment_due_date}</li>
    <li><b>Payment Method:</b>${data1.payment_method}</li>
    
    </ul>
    <div id="pt"><button onclick="display()"> Close</button></div>
`;
}catch(err)
{
console.log(err);
}
}

function display(){
e.style.display="none";
}
