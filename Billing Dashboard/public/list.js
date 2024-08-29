async function fetchData() {
    try {
        const response = await fetch('/data/bill');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        var d=document.getElementById("users");
        data.forEach(user => {
            
            var e=document.createElement('tr');
            e.setAttribute('id',`${user.id}`)
            var f=document.createElement('div');
            e.innerHTML=`<td>${user.id}</td>
            <td>${user.bill_number}</td>
            <td>${user.customer_id}</td>
            <td>${user.bill_date}</td>
            <td>${user.amount}</td>
            <td>${user.status}</td>
            <td>${user.payment_due_date}</td>
            <td>${user.payment_method}</td>
            <div class="editbtns"><button id="bt1" onclick="editdata(${user.id},'${user.bill_number}')">Edit</button>
            <button id="bt2" onclick="deletedata(${user.id})">Delete</button>`
           d.appendChild(e);     
           });
}catch(err)
{
    console.log(err);
}
}
fetchData();
async function deletedata(id)
{
    let dl=confirm('Confirm to delete');
    if(dl)
    {
    let d=await fetch(`/data/bill/${id}`, {
        method: 'DELETE'
      });
      alert('deleted successfully');
    }
    else{
        alert('Not deleted');
    }
      window.location.href='/table';
}
async function editdata(id,bl) {
    var d = document.getElementById("mainbody");
    d.style.display = "none";
    const response = await fetch(`/data/bill/${bl}`);
        const data = await response.json();
        let data1=data[0];
        console.log(data1);
    var e = document.getElementById('maincontainer');
    e.innerHTML = `
        <div class="form_container">
            <div class="innerform">
                <div class="header"><h2>Update Bill</h2></div>
                <div class="form">
                    <form id="editForm">
                        <input type="hidden" id="bill_id" value="${id}">
                        <div class="bilcolumn">
                            <label for="bill_number">Bill Number</label>
                            <input type="text" id="bill_number" name="bill_number" required>
                        </div>
                        <div class="bilcolumn">
                            <label for="customer_id">Customer_ID</label>
                            <input type="text" id="customer_id" name="customer_id" required>
                        </div>
                        <div class="bilcolumn">
                            <label for="bill_date">Bill Date</label>
                            <input type="text" id="bill_date" name="bill_date" required>
                        </div>
                        <div class="bilcolumn">
                            <label for="amount">Amount</label>
                            <input type="text" id="amount" name="amount" required>
                        </div>
                        <div class="bilcolumn">
                            <label for="status">Status</label>
                            <input type="text" id="status" name="status" required>
                        </div>
                        <div class="bilcolumn">
                            <label for="payment_due_date">Payment Due Date</label>
                            <input type="text" id="payment_due_date" name="payment_due_date" required>
                        </div>
                        <div class="bilcolumn">
                            <label for="payment_method">Payment Method</label>
                            <input type="text" id="payment_method" name="payment_method" required>
                        </div>
                        <div class="submitclass">
                            <button type="button" onclick="submitEditForm()">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
    document.getElementById('bill_number').value=data1.bill_number;
    document.getElementById('customer_id').value=data1.customer_id;
    document.getElementById('payment_method').value=data1.payment_method;
    document.getElementById('payment_due_date').value=data1.payment_due_date;
    document.getElementById('status').value=data1.status;
    document.getElementById('amount').value=data1.amount;
    document.getElementById('bill_date').value=data1.bill_date;
}

async function submitEditForm() {
    const id = document.getElementById("bill_id").value;
    const form = document.getElementById("editForm");
    const formData = new FormData(form);
    
    try {
        console.log(id);
        await fetch(`/data/bill/${id}`, {
            method: 'PUT',
            body: new URLSearchParams(formData)
        });
        
        
        alert('Updated successfully');
        window.location.href = '/table';
    } catch (error) {
        console.error('Error:', error);
        alert('Update failed');
    }
}
