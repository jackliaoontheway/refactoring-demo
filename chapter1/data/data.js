function getPlaysData() {
    return {
        "hamlet": {
            "name": "Hamlet",
            "type": "tragedy"
        },
        "as-like": {
            "name": "AS you like it",
            "type": "comedy"
        },
        "othello": {
            "name": "Othello",
            "type": "tragedy"
        }
    };
}

function getInvoicesData() {
    return {
        "customer": "BigCo",
        "performances": [
            {
                "playID": "hamlet",
                "audience": 55
            },
            {
                "playID": "as-like",
                "audience": 35
            },
            {
                "playID": "othello",
                "audience": 40
            }
        ]
    };
}