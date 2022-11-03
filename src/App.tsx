import { Routes, Route } from "react-router-dom";
import Default from './pages/Default';
import NoPage from './pages/NoPage';
import Header from './components/Header/Header';
import TeamProvider from "./context/TeamProvider/TeamProvider";

import './styles/App.scss'

const App = (): JSX.Element => {
  return (
		<TeamProvider>
			<div className='App'>
				<Header />
				<Routes>
					<Route index element={<Default />} />
					<Route path="*" element={<NoPage />} />
				</Routes>

			</div>
		</TeamProvider>
  )
}

export default App;
