const bar = require('./bar');

Feature('Foo');

Scenario('test something', async (I) => {
	const data = await I.sendGetRequest('/');
	console.log(data.raw_body);
});
