import allureReporter from '@wdio/allure-reporter';

export const config = {
    runner: 'local',
    specs: ['test/AppAPIDemos.test.js'],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'e51290360201',
            'appium:platformVersion': '11',
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage': 'io.appium.android.apis',
            'appium:appActivity': 'io.appium.android.apis.ApiDemos',
            'appium:noReset': true
        }
    ],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],
    hostname: 'localhost',
    port: 4723,
    path: '/',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (_, __, { passed }) {
        // ambil screenshot setiap test
        const screenshot = await browser.takeScreenshot();
        // attach ke Allure
        allureReporter.addAttachment(
            'Screenshot', 
            Buffer.from(screenshot, 'base64'), 
            'image/png'
        );
    }
};
