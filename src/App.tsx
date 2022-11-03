import { Routes, Route } from "react-router-dom";
import Default from './pages/Default';
import NoPage from './pages/NoPage';
import Header from './components/Header/Header';
import TeamProvider from './context/TeamProvider/TeamProvider';
import TournamentsProvider from './context/TournamentProvider/TournamentsProvider';
import FixturesProvider from './context/FixturesProvider/FixturesProvider';
import { defaultTournament } from './constants/constants';
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
						</Routes>
					</div>
				</FixturesProvider>
			</TournamentsProvider>
		</TeamProvider>
  )
}

export default App;
