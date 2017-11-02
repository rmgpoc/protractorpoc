var helper = require('../lib/helper');
var trackButton = element(by.css('.track>a'));
var trackTracePage = element(by.xpath('/html/body/div[3]/section/div[2]/div[2]/div[1]/h1'));
var trackNumberInput = element(by.id('track-item'));
var trackNumberButton = element(by.id('trackdelivery-bt'));
var trackResult = element(by.xpath('//*[@id="app"]/div/trackingresults/div/div[1]/section/div/p[1]/span[2]'));

describe('Track and Trace POC', function () {

    beforeEach(function () {
        browser.get(browser.params.rmgUrl);
        helper.waitUntilReady(trackButton);
    });

    it('Track your Item', function () {
        trackButton.click();
        helper.waitUntilReady(trackTracePage);
        expect(trackTracePage.getText()).toEqual("Track and Trace - Track your Item");
        trackNumberInput.sendKeys('ML052902323GB');
        trackNumberButton.click();
        //expect(trackResult.getText()).toBe("ML05 2902 323G B");
    });
});