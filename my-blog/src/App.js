import './App.css';
import Header from './components/header'
import PostPreview from './components/homepage/postPreview'
function App() {
  const name = 'Ana';
  const welcomeText = 'Welcome to My Project!';
  return (
    <div className="App">
        <Header welcomeText={welcomeText} />
        <PostPreview authorTitle={name} />
    </div>
  );
}

export default App;
