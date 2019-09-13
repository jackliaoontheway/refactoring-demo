function printOwing(invoice) {

    console.log("********************");
    console.log("*** Customer Owes***");
    console.log('********************');

    let outstanding = 0;
    // calculate outstanding
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    // record due date 
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    //print details
    console.log(`name : ${invoice.customer}`);
    console.log(`amount : ${outstanding}`);
    console.log(`due : ${invoice.dueDate.toLocaleDateString()}`);
}


// Refactoring ======== >>

function printOwing(invoice) {
    // 无局部变量的 提炼函数
    printBanner(); 
    
    // 有局部变量 并赋值 使用返回值赋值 
    const outstanding = calculateOutstanding(invoice);

    // 有局部变量的 提炼函数 将变量作为参数传递
    recordDueDate(invoice);
    // 有局部变量的 提炼函数 将变量作为参数传递
    printDetails(invoice, outstanding);
}

function printBanner() {
    console.log("********************");
    console.log("*** Customer Owes***");
    console.log('********************');
}

function calculateOutstanding(invoice) {
    let result = 0;
    for (const o of invoice.orders) {
        result += o.amount;
    }
    return result;
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function printDetails(invoice, outstanding) {
    console.log(`name : ${invoice.customer}`);
    console.log(`amount : ${outstanding}`);
    console.log(`due : ${invoice.dueDate.toLocaleDateString()}`);
}