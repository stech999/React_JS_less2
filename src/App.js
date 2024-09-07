import logo from './logo.svg';
import './App.css';
import Comment from './components/CommentsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Comment />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Нравиться молекула :)
        </p>
      </header>
    </div>
  );
}

export default App;
