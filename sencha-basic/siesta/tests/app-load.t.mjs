StartTest(t => {
  t.it('Angular app loads', async t => {
    await t.waitForSelector('app-root');
    t.pass('App loaded successfully');
  });
});
