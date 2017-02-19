declare module '*.css' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '*.html' {
  const content: any;
  export default content;
}

interface ShadowRoot {
  getElementById(elementId: string): Element;
}
