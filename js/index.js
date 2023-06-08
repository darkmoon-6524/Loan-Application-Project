localStorage.clear();

let Loan_id = 1;
let count = 0;

// Interest Calculation
document.getElementById("interest_calc").addEventListener("click", function () {
    count++;
    let b_amt = document.getElementById("borrow_amt").value;
    let p_terms = document.getElementById("terms").value;
    let interest = b_amt * p_terms / 12 * 4;
    interest = Math.round(interest);
    if (count === 1) {
        let x = document.createElement("p");
        x.setAttribute("id", "interest");
        x.innerText = "Interest is: " + interest;
        document.getElementById("interest_calc").insertAdjacentElement("afterend", x);
    }
    else {
        document.getElementById("interest").innerText = "Interest is: " + interest;
    }
});

if (localStorage) {
    document.getElementById("subm").addEventListener("click", function () {
        if(validate() && valid_email())
            store();
    })
};

// to store the values of all inputs
function store() {
    const list = [];
    let str = Loan_id.toString();
    let curr_date = new Date();
    let Company_name = document.getElementById("cname").value;
    let Email_address = document.getElementById("email").value;
    let Annual_sales = document.getElementById("sales").value;
    let borrow_amount = document.getElementById("borrow_amt").value;
    let payment_terms = document.getElementById("terms").value;
    let comments = document.getElementById("comments").value;
    let interest = borrow_amount * payment_terms / 12 * 4;
    interest = Math.round(interest);
    let status = "Pending";

    // list is an array containing all the related info regarding application
    list.push(Loan_id);
    list.push(curr_date);
    list.push(Company_name);
    list.push(Email_address);
    list.push(Annual_sales);
    list.push(borrow_amount);
    list.push(payment_terms);
    list.push(interest);
    list.push(comments);
    list.push(status);
    console.log(list);

    let string = JSON.stringify(list);
    localStorage.setItem(str, string);  // info of application

    localStorage.setItem('number', Loan_id);    // no of applications
    Loan_id++;

    alert("Your Application has been processed");
    reset();
}

// Reset the values
function reset() {
    document.getElementById("cname").value = null;
    document.getElementById("email").value = null;
    document.getElementById("sales").value = null;
    document.getElementById("borrow_amt").value = null;
    document.getElementById("terms").value = null;
    document.getElementById("comments").value = null;
}

// To validate the inputs
function validate(){
    let x = ["","","","",""];
    x[0] = document.getElementById("borrow_amt").value;
    x[1] = document.getElementById("terms").value;
    x[2] = document.getElementById("cname").value;
    x[3] = document.getElementById("email").value;
    x[4] = document.getElementById("sales").value;
    for(let i of x){        // ES6 feature
        if(i == ""){
            alert("All fields have to be filled");
            return false;
        }
    }
    return true;
}

// to validate if the email id input is correct
function valid_email(){
    let email = document.getElementById("email").value;
    if(email.includes("@") && email.includes(".com"))
        return true;
    alert("Email has to contain @, .com");
    return false;
}