

fetchData();
async function deletedata(id)
{
    let d=await fetch(`/data/bill/${id}`, {
        method: 'DELETE'
      });
      alert('deleted successfully')
      window.location.href='/';
}
function editdata(id)
{
    let a=document.getElementById('mainbody');
    let u=document.getElementById('add');
    a.style.display='none';
    let b=document.createElement('div');
    b.innerHTML=`<div class="form">
    <form action="/data/bill/${id}" method="put">
        <div class="bilcolumn">
        <label for="bill_number">Bill Number</label>
        <br>
        <input type="text" id="bill_number" name="bill_number" required>
    </div>
    <div class="bilcolumn">
        <label for="customer_id">Customer_ID</label>
        <br>
        <input type="text" id="customer_id" name="customer_id" required>
    </div>
    <div class="bilcolumn">
        <label for="bill_date">BillDate</label>
        <br>
        <input type="text" id="bill_date" name="bill_date" required>
    </div>
    <div class="bilcolumn">
        <label for="amount">Amount</label>
        <br>
        <input type="text" id="amount" name="amount" required>
    </div>
    <div class="bilcolumn">
        <label for="status">Status</label>
        <br>
        <input type="text" id="status" name="status" required>
    </div class="bilcolumn"><div>
        <label for="payment_due_date">Payment due date</label>
        <br>
        <input type="text" id="payment_due_date" name="payment_due_date" required>
    </div>
    <div class="bilcolumn"><label for="payment_method">Payment method</label>
        <br>
        <input type="text" id="payment_method" name="payment_method" required></div>
        <div class="bilcolumn">
            <input type="submit">
        </div>
    </form>
</div>`
u.appendChild(b);
// window.location.href='/';
}

