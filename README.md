# blockle-router

npm version prerelease --preid=alpha
npm publish --tag next --access public

## Get started

Install with yarn

```bash
yarn add @blockle/ui
```

Install with npm

```bash
npm install --save @blockle/ui
```

### Basic example

```tsx
import '@blockle/ui/dist/blockle-ui.css';
```

```tsx
import { Router, Route, Link } from '@blockle/router';
import { createHashHistory } from 'history';

render(
  <Router history={createHashHistory}>
    <Route path="/" exact>
      Home
      <Link to="/contact">Contact</Link>
    </Route>
    <Route path="/contact">
      Contact
      <Link to="/">Home</Link>
    </Route>
  </Router>
);
```
