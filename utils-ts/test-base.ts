
import {test as baseTest} from '@playwright/test';

interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
}

export const customTest = baseTest.extend<{testDataForOrder: TestDataForOrder}>(
        {
            testDataForOrder: {
                username: "nickharrisonlce@gmail.com",
                password: "Password$1",
                productName: "adidas original"
            }
        }
    )