import { Routes, Route } from "react-router-dom";
import Default from './pages/Default';
import NoPage from './pages/NoPage';
import Header from './components/Header/Header';
import TeamProvider from './context/TeamProvider/TeamProvider';
import TournamentsProvider from './context/TournamentProvider/TournamentsProvider';
import FixturesProvider from './context/FixturesProvider/FixturesProvider';
import { defaultTournament } from './constants/constants';
import Teams from './pages/Teams';
import AddPoints from './pages/AddPoints';
import Managers from './pages/Managers';
import AddManager from './pages/AddManager';
import './styles/App.scss'

const App = (): JSX.Element => {
  return (
		<TeamProvider>
			<TournamentsProvider>
				<FixturesProvider tournamentId={defaultTournament}>
					<div className='App'>
						<Header />
						<Routes>
							<Route index element={<Default />} />
							<Route path='*' element={<NoPage />} />
							<Route path='/teams' element={<Teams />} />	
							<Route path='/addpoints' element={<AddPoints />} />
							<Route path='/managers' element={<Managers />} />		
							<Route path="/addmanager" element={<AddManager />} />
						</Routes>
					</div>
				</FixturesProvider>
			</TournamentsProvider>
		</TeamProvider>
  )
}
export default App;
