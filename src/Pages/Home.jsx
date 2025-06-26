import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Bienvenue sur FocusBoost</h1>
      <Link to="/timer">
        <button className="start-btn">Commencer</button>
      </Link>
    </div>
  );
}

export default Home;
