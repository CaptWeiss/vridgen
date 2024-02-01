# Verifiable Random ID Generator

[![npm version](https://badge.fury.io/js/vridgen.svg)](https://badge.fury.io/js/vridgen)
![npm bundle size (version)](https://img.shields.io/bundlephobia/min/vridgen/0.2.2)

A random ID generator. [**Try it out on CodeSandbox**](https://codesandbox.io/s/verifiable-random-id-generator-ws1l6r).

## Installation

Install with npm:

```bash
npm install vridgen
```

or yarn:

```bash
yarn add vridgen
```

## Usage

Import functions from vridgen

```javascript
import { generateId, isIdValid } from 'vridgen';
```

Use in jsx

```jsx
import { generateId, isIdValid } from 'vridgen';

function App() {
  //Use generateId without passing any argument
  const vrid = generateId();
  //Use generateId with arguments ("day" and/or "randomizer")
  const vrid2 = generateId(24, 20221);

  // User's given Id
  const userVrid = '23563';
  const userVrid2 = '24563579';
  const userVrid3 = '92617153';

  // use isIDValid to check validity of generated id
  const isVridValid = isIdValid(vrid);
  const isVridValid2 = isIdValid(vrid2);
  // check validity of user's id
  const userVridValid = isIdValid(userVrid);
  const userVridValid2 = isIdValid(userVrid2);
  const userVridValid3 = isIdValid(userVrid3);

  return (
    <div className="App">
      <h1>Verifiable Random ID Generator</h1>
      <p>
        <a href="https://github.com/CaptWeiss/vridgen">
          <strong>View Github docs</strong>
        </a>
      </p>
      <hr />

      <h2>Generate Id without passing any argument</h2>
      <p>
        Id: <strong>{vrid}</strong>
      </p>
      <p>
        ValidityStatus: The generated Id <strong>{vrid}</strong> is <strong>{isVridValid.message}</strong>.
      </p>
      <hr />

      <h2>Generate Id with arguments</h2>
      <p>
        Id: <strong>{vrid2}</strong>
      </p>
      <p>
        ValidityStatus: The generated Id <strong>{vrid2}</strong> is <strong>{isVridValid2.message}</strong>.
      </p>
      <hr />

      <h2>Generate Id with arguments</h2>
      <p>
        Id: <strong>{userVrid}</strong>
      </p>
      <p>
        ValidityStatus: The generated Id <strong>{userVrid}</strong> is <strong>{userVridValid.message}</strong>
      </p>
      <hr />

      <h2>Generate Id with arguments</h2>
      <p>
        Id: <strong>{userVrid2}</strong>
      </p>
      <p>
        ValidityStatus: The generated Id <strong>{userVrid2}</strong> is <strong>{userVridValid2.message}</strong>
      </p>
      <hr />

      <h2>Generate Id with arguments</h2>
      <p>
        Id: <strong>{userVrid3}</strong>
      </p>
      <p>
        ValidityStatus: The generated Id <strong>{userVrid3}</strong> is <strong>{userVridValid3.message}</strong>
      </p>
    </div>
  );
}
```
