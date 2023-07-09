import logo from './logo.svg';
import './App.css';
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
function App() {
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
          <Card icon={<Icon />}
            children="children props here"/>
        </a>
      </header>
    </div>
  );
}

export default App;
