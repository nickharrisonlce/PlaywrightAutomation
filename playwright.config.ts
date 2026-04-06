import { defineConfig, devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  retries: 2,
  timeout: 20 * 1000,
  expect : {
     timeout: 5*1000,
  },
  reporter: 'html',
  
  use: {
  
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'on', // or 'off' or 'on'
    
  },



});
module.exports = config
