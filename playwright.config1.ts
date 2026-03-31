import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({  
  testDir: './tests',
  retries:  1,
  workers: 3,
  timeout: 15 * 1000,
  expect: {
    timeout: 5 * 1000,
  },
  reporter: 'html',
  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'off',
        trace: 'on',
        ...devices["iPhone 11"],
      }
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHTTPSErrors: true,
        permissions:['geolocation'],
        trace: 'on',
        //...devices["Galaxy Note II"],
        //viewport : {width: 720, height: 720},
      }
    }
  ],
});

module.exports = config;