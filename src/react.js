const hooks = [];
let currentComponent = 0; // Functional Component count

export class Component {}

/**
 * React Hooks - useState
 */
function useState(initValue) {
  const position = currentComponent;

  if (!hooks[position]) {
    hooks[position] = initValue;
  }

  return [
    value,
    (nextValue) => {
      hooks[position] = nextValue;
    },
  ];
}

/**
 * Recursive Rendering func
 * @param {Component} vdom
 * @returns
 */
function renderRealDOM(vdom) {
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }
  if (vdom === undefined) return;
  const $el = document.createElement(vdom?.tagName);

  vdom.children.map(renderRealDOM).forEach((node) => {
    $el.appendChild(node);
  });
  return $el;
}

/**
 * React - Render func
 */
export const render = (function () {
  let prevVdom = null;

  return function (nextVdom, container) {
    if (prevVdom === null) {
      prevVdom = nextVdom;
    }

    // diff

    container.appendChild(renderRealDOM(nextVdom));
  };
})();

/**
 * React - CreateElement func
 * @param {string} tagName
 * @param {object} props
 * @param  {...Component} children
 * @returns
 */
export function createElement(tagName, props, ...children) {
  if (typeof tagName === "function") {
    if (tagName.prototype instanceof Component) {
      const instance = new tagName({ ...props, children });
      return render();
    } else {
      currentComponent++;
      tagName.apply(null, [props, ...children]);
    }
  }
  return { tagName, props, children };
}
