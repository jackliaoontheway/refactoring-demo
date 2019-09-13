function getRateing(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries() {
    return driver.numberOfLateDeliveries > 5;
}


// Refactoring ======== >>

function getRateing(aDriver) {
    return (aDriver.numberOfLateDeliveries > 5) ? 2 : 1;
}



// Demo ========= >>
function reportLines(aCustomer) {
    const lines = [];
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(out, aCustomer) {
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
}
// Refactoring ======== >>

function reportLines(aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
}