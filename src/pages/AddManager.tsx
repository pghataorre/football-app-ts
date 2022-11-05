import AddManagerForm from '../components/AddManagerForm/AddManagerFrom';

const AddManager = (): JSX.Element => {
	return (
		<div className='page'>
			<h1>Football Team Managers</h1>
			<p>Admin:: Add a Football team manager</p>
			{<AddManagerForm />}
		</div>
	);
};

export default AddManager;
