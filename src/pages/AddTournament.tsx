import AddTournamentForm from '../components/AddTournamentForm/AddTournamentForm';

const AddTournament = (): JSX.Element => {
	return (
		<div className='page'>
			<h1>Football Team Tournaments</h1>
			<p>Admin:: Add a Football Tournament</p>
			{<AddTournamentForm />}
		</div>
	);
};

export default AddTournament;
