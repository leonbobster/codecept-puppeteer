
Feature('Test trivago.de');

BeforeSuite(() => {
    console.log('__before_suite__');
});

Scenario('test main page', (I) => {
    I.amOnPage('http://trivago.de');
    I.see('Suchen');
});

Scenario('test 2', () => {
    console.log('tes 2');
});
