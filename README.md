# 🐱‍🏍 Tiny React

- React 동작 원리를 구현

<br />

# 🛠 package.json

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

### 1-1) element 구조

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
      <h2>정말 동작 할까?</h2>
      <YourTitle />
      <p>잘 동작하는지 보고 싶다.</p>
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
1. prevDom, nextDom을 Diff 알고리즘으로 비교
2. 변경된 부분만 리렌더링 처리
3. 렌더링 (Recursive call)

## 3. hooks
1. 호출 원리와 함수형 컴포넌트 갯수가 같다는 전제
2. 호출 순서에 맞는 State 저장

