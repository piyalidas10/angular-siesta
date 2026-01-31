StartTest(t => {
    t.chain(
      { waitForSelector: 'app-root' },  
      () => {
        t.pass('Angular app loaded successfully');
      }
    );  
  });
  