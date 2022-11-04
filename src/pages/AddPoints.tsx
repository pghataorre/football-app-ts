import LeagueTables from '../components/LeagueTables/LeagueTables';

const AddPoints = () => {
	return (
		<div className='page'>
			<h1>Admin:: Set points for teams</h1>
			<p>Please use the buttons to add points for wins / draws / losses</p>
			<LeagueTables showButtons />
		</div>
	);
};

export default AddPoints;
