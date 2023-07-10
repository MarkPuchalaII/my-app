import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Card({icon, children}) {
  return (
    <>
    {icon}
    <div>{children}</div>
    </>
  )
}
function Icon() {
  return "🔥 icon props here";
}
function LoadingButton({loading, onClick, label}) {
  return (
    <button onClick={onClick}>
      {loading ? "Loading..." : label}
    </button>
  )
}
function App() {
  const [loading, setLoading] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Card icon={<Icon />}
          children="children props here"/>
        <LoadingButton
          loading={loading}
          onClick={ () => setLoading(!loading) }
          label="Click me" />
      </header>
    </div>
  );
}

export default App;
