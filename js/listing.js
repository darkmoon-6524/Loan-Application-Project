let num = localStorage.getItem('number');
let count = 0;

for (let i = 1; i <= num; i++) {
    addRow(i);
}

function addRow(ind) {
    const btn = document.createElement("button");
    btn.innerText = ind.toString();
    btn.setAttribute("id", ind);
    btn.setAttribute("class", "grid-item");
    document.getElementById("list").insertAdjacentElement("beforeend", btn);
}


$(".grid-item").click(function () {
    count++;
    display(this.id);
})

// To see which id has been selected
function display(id) {
    let retString = localStorage.getItem(id);
    let list = JSON.parse(retString);
    console.log(list);
    if(count == 1)
        createTable(id);
    else
        changeTable(id);
}

// To create a table for displaying loan applications
function createTable(id) {
    rn = 10;
    cn = 2;
    let list = ["Loan_id", "Current_Date", "Company_name", "Email_Address","Annual_Sales","Borrow_Amount","Payment_Terms","Interest","Comments","Status"]
    let retString = localStorage.getItem(id);
    let list1 = JSON.parse(retString);
    k = 0;
    document.getElementById("myTable").setAttribute("class","applicationTable");
    for (let r = 0; r < rn; r++) {
        let x = document.getElementById("myTable").insertRow();
        for (let c = 0; c < cn; c++) {
            let y = x.insertCell(); 
            if(c === 0){
                y.innerHTML = list[k];
            }
            else{
                y.innerHTML = list1[k++];
            }
        }
    }
}

// to change the contents of table
function changeTable(id){
    rn = 10;
    cn = 2;
    k=0;
    let retString = localStorage.getItem(id);
    let list1 = JSON.parse(retString);
    let x = document.getElementById("myTable");
    for (let r = 0; r < rn; r++) {
        let tr = x.rows[r];
        for (let c = 0; c < cn; c++) {
            let td = tr.cells[c];
            if(c===1){
                td.innerHTML = list1[k++];
            }
        }
    }
}

