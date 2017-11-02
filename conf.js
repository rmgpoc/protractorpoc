// An example configuration file.
exports.config = {
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // multiCapabilities: [{
    //     browserName: 'firefox'
    // }, {
    //     browserName: 'chrome'
    // }],
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    params: {
        rmgUrl: 'https://www.royalmail.com/'
    },
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['testcases/rmgHome.spec.js'],

    onPrepare: function () {
        browser.ignoreSynchronization = true;
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
