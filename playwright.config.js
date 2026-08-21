// @ts-check
const  { defineConfig } = require ('@playwright/test');
// import { trace } from 'node:console';
// import { TIMEOUT } from 'node:dns';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports=defineConfig({
  testDir: './tests',
  timeout: 20 * 1000,
  expect:
  {
   timeout : 30 * 1000
  },
 reporter : "html",
  use: {
    //baseURL:"https://restful-booker.herokuapp.com",
    //extraHTTPHeaders:{Accept:"application/json","Content-Type":"application/json"},
    browserName : "chromium",
    headless : false,
    screenshot : 'off'
  },

  
    

 
});



