export const localSate = () => {
  try {
    const serializedSate = localStorage.getItem("reduxState");
    if (serializedSate === null) return undefined;
    return JSON.parse(serializedSate);
  } catch (error) {
    return undefined;
  }
};
export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // ignore write errors
  }
};
