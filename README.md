# ๐ฑโ๐ Tiny React

- React ๋์ ์๋ฆฌ๋ฅผ ๊ตฌํ

<br />

# ๐  package.json

```javascript
{
  "name": "tiny-react",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "build": "babel src -d build -w",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "license": "MIT",
  "devDependencies": {
    "@babel/cli": "^7.16.0",
    "@babel/core": "^7.16.0",
    "@babel/preset-react": "^7.16.0"
  }
}

```

<br />

# Description

## 1. JSX

### 1-1) element ๊ตฌ์กฐ

```javascript
// example
{
    tagName: 'div',
    props: {
        id: 'root',
        className: 'container',
    },
    children: [
        {
            tagName: 'span',
            props: {},
            children: [
                'blabla'
            ]
        }
    ]
}
```

### 1-2) createElement(tagName, props, ...children)

```javascript
// Example
function Title() {
  return (
    <div>
      <h2>์ ๋ง ๋์ ํ ๊น?</h2>
      <YourTitle />
      <p>์ ๋์ํ๋์ง ๋ณด๊ณ  ์ถ๋ค.</p>
    </div>
  );
}

// Transpiling
function Title() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "\uC815\uB9D0 \uB3D9\uC791 \uD560\uAE4C?"),
    React.createElement(YourTitle, null),
    React.createElement(
      "p",
      null,
      "\uC798 \uB3D9\uC791\uD558\uB294\uC9C0 \uBCF4\uACE0 \uC2F6\uB2E4."
    )
  );
}
```

## 2. Render
1. prevDom, nextDom์ Diff ์๊ณ ๋ฆฌ์ฆ์ผ๋ก ๋น๊ต
2. ๋ณ๊ฒฝ๋ ๋ถ๋ถ๋ง ๋ฆฌ๋ ๋๋ง ์ฒ๋ฆฌ
3. ๋ ๋๋ง (Recursive call)

## 3. hooks
1. ํธ์ถ ์๋ฆฌ์ ํจ์ํ ์ปดํฌ๋ํธ ๊ฐฏ์๊ฐ ๊ฐ๋ค๋ ์ ์ 
2. ํธ์ถ ์์์ ๋ง๋ State ์ ์ฅ

