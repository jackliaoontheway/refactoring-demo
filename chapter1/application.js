const plays = getPlaysData();
const invoice = getInvoicesData();

function statement(invoice) {
    let result = `Statement for ${invoice.customer}\n`;
    for (let perf of invoice.performances) {
        // print line for this order;
        result += ` ${playFor(perf).name}:${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
    }
    // print line for this order
    result += `Amount owed is ${usd(totalAmount() / 100)}\n`
    result += `You earned ${totalVolumeCredits()} credits\n`;
    return result;
}

function totalAmount() {
    let result = 0;
    for (let perf of invoice.performances) {
        result += amountFor(perf);
    }
    return result;
}

function totalVolumeCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
        result += volumeCreditsFor(perf);
    }
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(aNumber);
}

function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).name.type) {
        result += Math.floor(aPerformance.audience / 5);
    }
    return result;
}

function playFor(aPerformance) {
    return plays[aPerformance.playID];
}

function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
        case "tragedy":
            result = 40000;
            if (aPerformance.audience > 30) {
                result += 1000 * (aPerformance.audience - 30);
            }
            break;
        case "comedy":
            result = 30000;
            if (aPerformance.audience > 20) {
                result += 10000 + 500 * (aPerformance.audience - 20);
            }
            result += 300 * aPerformance.audience;
            break;
        default:
            throw new Error(`unkonw type : ${play.type}`);
    }
    return result;
}

function main() {
    var result = statement(invoice);
    console.log(result);
}
main();
