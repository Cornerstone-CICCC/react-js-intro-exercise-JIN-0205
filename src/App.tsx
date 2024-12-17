import Header from "./components/Header";
import Info from "./components/Info";
import Welcome from "./components/Welcome";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header logoText="My First React App" />
      <Welcome message="Hello!" />
      <Info firstname="Jin" lastname="Nakano" age={23} isStudent={true} />
    </div>
  );
};

export default App;
