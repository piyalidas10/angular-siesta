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

## 🔍 Siesta Package
| Package                | Purpose                      |
| ---------------------- | ---------------------------- |
| `siesta`               | ❌ random npm utility        |
| `@bryntum/siesta`      | ✅ REAL UI testing framework |
| `@bryntum/siesta-lite` | ✅ Free limited version      |


## 🟢 Setup Siesta
The Siesta E2E framework is published as @bryntum/siesta.
Install bryntum Siesta
```
npm install --save-dev @bryntum/siesta
```

> “Siesta doesn’t expose a global CLI, so we invoke it directly from node_modules/siesta/bin/siesta. This avoids npx resolution issues and works reliably in CI.”

**✅ Correct harness file**

Siesta CLI loads the UI, you don’t manually load siesta.js.

Your siesta/index.html should be:
```
<!DOCTYPE html>
<html>
<head>
  <title>Angular 19 + Siesta</title>
  <script src="./helpers/angular-stability.js"></script>
</head>
<body></body>
</html>
```
👉 The CLI injects Siesta automatically.


**Folder structure**
```
sencha-basic/
 ├── siesta/
 │   ├── siesta.config.js
 │   ├── index.html
 │   └── helpers/
 │       └── angular-stability.js
```

**siesta.config.js**
```
StartTest(t => {
  t.setPageUrl('http://localhost:4200/');
  t.waitForAngular();
});
```

## ✅ Run Siesta
**package.json**  
Update your script to this 👇  
Siesta automatically loads siesta.config.js if it’s in the working directory.  
Use npx siesta (RECOMMENDED ✅). This avoids the ESM loader problem entirely.
```
"scripts": {
  "siesta": "ng build && npx siesta --project ./siesta/siesta.project.mjs --headless"
}
```
Using .mjs files and running Siesta via npx ensures paths are resolved as proper file:// URLs internally.

Make sure:
```
sencha-basic/
 ├── siesta/
 │   └── siesta.config.js
```

**🚀 What will happen next (expected)**
  - npm run siesta starts
  - Angular builds
  - Siesta launches headless browser
  - Page loads localhost:4200
  - Tests start executing