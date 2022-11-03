import NoPageImage from '../images/kicks.jpg';

const Default = (): JSX.Element => {
	return (
		<div className='page'>
			<h1>Sorry no page available</h1>
			<img src={NoPageImage} alt='No page found' />
		</div>
	);
};

export default Default;
