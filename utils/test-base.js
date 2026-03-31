const { test: base } = require('@playwright/test');

exports.customTest = base.test.extend(
        {
            testDataForOrder: {
                username: "nickharrisonlce@gmail.com",
                password: "Password$1",
                productName: "adidas original"
            }
        }
    )