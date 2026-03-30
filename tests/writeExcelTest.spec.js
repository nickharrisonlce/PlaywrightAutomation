const { test, expect } = require("@playwright/test");
const path = require("path");
const ExcelJs = require('exceljs');

async function writeExcelTest(searchText, replaceText, change, filePath) {
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1');

    const output = await readExcel(worksheet, searchText);

    const cell = await worksheet.getCell(output.r, output.c + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);


}

async function readExcel(worksheet, searchText) {
    let output = { r: -1, c: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, cellNumber) => {
            if (cell.value === searchText) {
                output.r = rowNumber;
                output.c = cellNumber;
                console.log(rowNumber);
                console.log(cellNumber);
            }
        })
    })
    return output;
}

//writeExcelTest("Mango", "3.50",{rowChange: 0, colChange: 2}, "/Users/nharrison/Downloads/excel-js-test.xlsx");


test('upload download excel validation', async ({ page }, testInfo) => {

    const textSearch = "Mango";
    const updateValue = '3.50';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole("button", { name: "Download" }).click();
    await downloadPromise;


    const download = await Promise.all([
        page.waitForEvent("download"),
        page.getByRole("button", { name: "Download" }).click(),
    ]).then(([d]) => d);

    const filePath = path.join(testInfo.outputDir, "download.xlsx");
    await download.saveAs(filePath);


    writeExcelTest("Mango", updateValue, { rowChange: 0, colChange: 2 }, filePath);

    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles(filePath);

    const textLocator = await page.getByText(textSearch);
    const desiredRow = await page.getByRole('row').filter({has: textLocator});
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(updateValue);


    //await page.pause();




});