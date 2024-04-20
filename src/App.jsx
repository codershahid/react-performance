import "./App.css";
function App() {
  return (
    <div>
      <h1>React Performance</h1>
      <p>
        This project illustrates the uses React useMemo and useCallback hooks to
        boost performance. With useMemo, it caches expensive calculations,
        preventing unnecessary repeats and speeding up rendering. Meanwhile,
        useCallback ensures callback functions are only recreated when needed,
        minimizing unnecessary re-renders. Together, these hooks make the
        application more efficient by optimizing how resources are utilized
        during rendering.
      </p>
    </div>
  );
}

export default App;
