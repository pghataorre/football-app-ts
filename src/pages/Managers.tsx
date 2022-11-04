import ManagerSelection from "../components/ManagerSelection/ManagerSelection";

const Managers = (): JSX.Element => {
	return (
		<div className='page'>
			<h1>Football Team Managers</h1>
			<>Please select the team you would like to see the managers for:</>
			{<ManagerSelection />}
		</div>
	);
};

export default Managers;
