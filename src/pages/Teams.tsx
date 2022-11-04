import LeagueTables from '../components/LeagueTables/LeagueTables'
const Teams = (): JSX.Element => {
	return (
		<div className='page'>
			<h1>Football League Table</h1>
			<LeagueTables showButtons={false} /> 
		</div>
	);
};

export default Teams;
