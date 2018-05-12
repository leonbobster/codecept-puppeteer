const bar = require('./bar');

Feature('Foo');

Scenario('test something', async (I) => {
	const data = await I.sendGetRequest('http://app:3000');
	console.log(data.raw_body);
});
