var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer');


router.get('/', function(req, res, next){
  puppeteer.launch({
    headless: true
  }).then(browser => {
    browser.newPage().then(async page => {
      await page.goto('http://localhost:8080/', {waitUntil: 'networkidle0'}); //Navigate to template endpoint
      //await page.emulateMedia('screen');
      console.log("Creando pdf...");
      await page.pdf({
        path: 'prueba.pdf',
        format: 'A4'
      });
      browser.close();
    });
  });
   res.redirect('/');
});

module.exports = router;
