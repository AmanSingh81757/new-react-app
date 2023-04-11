// import logo from './logo.svg';
import './App.css';
import AddVideos from './components/AddVideos';

function App() {
  return (
    <div className="App">
      <AddVideos></AddVideos>
      <div className='Video'>
        <img style={{height: '200px', width: '300px' }} src='https://images.unsplash.com/photo-1680925723180-ff3cb559c9b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'></img>
        <div>Channel Name 1M ago 100Views
        </div>
      </div>
    </div>
  );
}

export default App;
