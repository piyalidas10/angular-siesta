import { Project } from '@bryntum/siesta';

export default new Project({
  title : 'Angular 19 Siesta',

  // MUST be a running dev server
  pageUrl : 'http://localhost:4200',

  tests : [
    './tests/app-load.t.mjs'
  ],

  browser : 'chromium'
});
