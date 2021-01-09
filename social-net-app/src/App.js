import logo from './logo.svg';
import './App.css';
import test from './test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-logo-text">
          <p>React</p>
          <p>SocialNet</p>
        </div>
      </header>
      <nav>
        <ul>
          <li><a href="#a">Profile</a></li>
          <li><a href="#a">Messages</a></li>
          <li><a href="#a">News</a></li>
          <li><a href="#a">Music</a></li>
          <li><a href="#a">Settings</a></li>
        </ul>
      </nav>
      <section>
        <div className="profile">
          <img src="#" alt="avatar" className="profile-photo" />
          <div className="profile-description"></div>
        </div>
        <div className="posts">
          <article className='post'>First post</article>
          <article className='post'>Second post</article>
          <div className ='new-posts'>
            <input type="text"></input>
            <div className="bottom-bar"></div>
            <input type="submit"></input>
          </div>
        </div>
      </section>
      <footer></footer>
      <test/>
    </div>
  );
}

export default App;
