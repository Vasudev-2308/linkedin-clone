import './App.css';
import Sidebar from './components/AppBody/Sidebar/Sidebar';
import Header from './components/HeaderSection/Header';

function App() {
  return (
    <div className="app">
      {/* { Header Section} */}
      <Header/>
      {/* {App Body} */}
      <div className="app__body">
      <Sidebar/>

      </div>
     
      {/* {Left Section} */}
      {/* {Feed Section} */}
      {/* {Right Section} */}
    </div>
  );
}

export default App;
