export function structuredClonePolyfill() {
  if (typeof structuredClone === 'undefined') {
    function structuredClone(obj: any) {
      return JSON.parse(JSON.stringify(obj));
    }
  }
}
