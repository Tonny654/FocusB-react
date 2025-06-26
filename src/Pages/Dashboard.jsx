import RewardCard from '../components/RewardCard';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <RewardCard title="Sessions Terminées" value="5" />
      <RewardCard title="Donuts Gagnés" value="5 🍩" />
      <RewardCard title="Temps Total de Concentration" value="2h 05min" />
    </div>
  );
}

export default Dashboard;
