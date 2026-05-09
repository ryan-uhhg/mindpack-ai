const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // Convert concept.html to PDF
    console.log('Converting concept.html to 01_concept.pdf...');
    const conceptPage = await browser.newPage();
    const conceptHtmlPath = `file://${path.resolve('concept.html')}`;
    await conceptPage.goto(conceptHtmlPath, { waitUntil: 'networkidle2' });
    await conceptPage.pdf({
      path: '01_concept.pdf',
      format: 'A4',
      margin: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
      },
      printBackground: true,
      preferCSSPageSize: true
    });
    await conceptPage.close();
    console.log('✓ 01_concept.pdf created successfully');

    // Convert tracker.html to PDF
    console.log('Converting tracker.html to 02_tracker_template.pdf...');
    const trackerPage = await browser.newPage();
    const trackerHtmlPath = `file://${path.resolve('tracker.html')}`;
    await trackerPage.goto(trackerHtmlPath, { waitUntil: 'networkidle2' });
    await trackerPage.pdf({
      path: '02_tracker_template.pdf',
      format: 'A4',
      margin: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
      },
      printBackground: true,
      preferCSSPageSize: true
    });
    await trackerPage.close();
    console.log('✓ 02_tracker_template.pdf created successfully');

    await browser.close();
    console.log('\n✅ All PDF conversions completed successfully!');
    
  } catch (error) {
    console.error('Error during PDF conversion:', error);
    process.exit(1);
  }
}

convertHtmlToPdf();
