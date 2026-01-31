# angular-siesta
Angular UI Regression Testing

Siesta (the Sencha / Bryntum Siesta testing framework) is mainly used for end-to-end (E2E) and UI automation in JavaScript apps—especially Angular, ExtJS, React, and plain JS apps.  
```
Siesta (E2E Layer)
 ├── Runs in real browser
 ├── Loads built Angular app
 ├── Simulates real user events
 └── Asserts DOM + behavior
```
👉 Siesta does NOT replace Jasmine/Jest  
👉 It replaces Protractor / flaky E2E  


Below are real-time, practical use cases you’ll actually see in projects and interviews 👇

#### 1️⃣ Angular UI Regression Testing (Most Common)

Use case: Catch UI breakages after feature releases.

Example
  -  User login → dashboard load → sidebar navigation
  -  Verify Angular routing + lazy modules load correctly
  -  Assert DOM changes after Signals / Observables update state

Why Siesta?
  -  Runs inside the browser
  -  Understands async flows (Promises, RxJS, Signals)
  -  Strong Angular compatibility

Real scenario
> After upgrading Angular 17 → 19, validate that standalone routes + guards + resolvers still work.

#### 2️⃣ Realtime User Interaction Simulation

Use case: Test real user behavior, not just clicks.

Examples
  -  Drag & drop cards (Kanban, dashboards)
  -  Keyboard shortcuts (Ctrl+S, Esc, Arrow keys)
  -  Mouse hover tooltips
  -  Touch gestures (mobile)
```
t.chain(
  { click : '#addUserBtn' },
  { type  : 'Piyali', target : '#username' },
  { type  : '[ENTER]' }
);
```

Why not Jasmine/Karma?
  -  Jasmine ≠ real browser events
  -  Siesta simulates native browser input events

#### 3️⃣ Micro-Frontend (MFE) Testing

Use case: Validate shell + remote apps integration.

Real scenario
  -  Shell loads remote admin MFE
  -  Route change triggers remote module load
  -  Shared auth token flows correctly

What you test
  -  Remote entry loaded
  -  Navigation between MFEs
  -  Shared state isolation
```
t.waitForSelector('.admin-dashboard');
```
🔥 Very useful for Module Federation / Native Federation setups.

## ⚡ Siesta vs Cypress vs Playwright
| Feature               | Siesta       | Cypress  | Playwright |
| --------------------- | ------------ | -------- | ---------- |
| Runs inside browser   | ✅           | ❌      | ❌         |
| True event simulation | ✅           | ⚠️      | ✅         |
| Angular-friendly      | ✅           | ⚠️      | ⚠️         |
| Legacy app support    | ✅           | ❌      | ⚠️         |
| Best for complex UI   | ⭐⭐⭐⭐   | ⭐⭐⭐  | ⭐⭐⭐⭐ |

## ✅ Run Siesta
> “Siesta doesn’t expose a global CLI, so we invoke it directly from node_modules/siesta/bin/siesta. This avoids npx resolution issues and works reliably in CI.”

Siesta’s executable lives here:
```
node_modules/siesta/bin/siesta
```
So you must run that binary directly.

**package.json**  
Update your script to this 👇
```
"scripts": {
  "siesta": "ng build && node node_modules/siesta/bin/siesta siesta/siesta.config.js --headless"
}
```