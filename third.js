
const form=document.getElementById('expense-form');
const tableBody=document.querySelector('#expense-table tbody');
const totalElement=document.getElementById('total');

form.addEventListener('submit',(event) => {
    event.preventDefault();

    const description=document.getElementById('expense-description').value;
    const amount=parseFloat(document.getElementById('expense-amount').value);
    const date=document.getElementById('expense-date').value;

    if(isNaN(amount)||amount<=0){
        alert('Please enter a valid amount');
        form.reset();
        return;
    }
    

    const row=document.createElement('tr');
    row.innerHTML=
    `<td>${description}</td>
    <td>${parseFloat(amount).toFixed(2)}</td>
    <td><small>(${date || 'N/A'})</small></td>
    <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    const deleteButton=row.querySelector('.delete-btn');
    deleteButton.addEventListener('click',()=>{
        row.remove();
        updateTotal();
    });

    updateTotal()

    form.reset();

});

function updateTotal(){
    const amounts=document.querySelectorAll('#expense-table tbody tr td:nth-child(2)');
    let total=0;
    amounts.forEach((amount)=>{
        total+=parseFloat(amount.textContent.replace('$','')) || 0;
    });
    totalElement.textContent=total.toFixed(2);
}