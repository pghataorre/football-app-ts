import permyImage from '../images/permy.jpg';

const Default = (): JSX.Element => {
	return (
		<div className='page'>
			<h1>PERMY.CO.UK - THIS GUY</h1>
			<img src={permyImage} alt='Welcome to Permy.co.uk' />
		</div>
	);
};

export default Default;
