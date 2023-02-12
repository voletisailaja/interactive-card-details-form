import React, { useState } from 'react';

function App() {
	const [cardholderName, setCardholderName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [message, setMessage] = useState('');
	const [expiryDate, setExpiryDate] = useState('');
	const [cvc, setCvc] = useState('');
	const [confirmed, setConfirmed] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		/*setMessage(<svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
       ,"Thank You, We've added your card details!");
    setCardholderName('');
    setCardNumber('');*/
	};

	return (
		<div>
			<img
				style={{ height: '100vh', width: '25%' }}
				src={`${process.env.PUBLIC_URL}/images/bg-main-desktop.png`}
				alt='desk_img'
			/>

			<img
				style={{ position: 'absolute', top: '130px', left: '160px' }}
				src={`${process.env.PUBLIC_URL}/images/bg-card-front.png`}
				alt='front_card'
			/>
			<span
				id='a'
				style={{ position: 'absolute', top: '170px', left: '190px' }}
			>
				<svg
					width='84'
					height='47'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<ellipse cx='23.478' cy='23.5' rx='23.478' ry='23.5' fill='#fff' />
					<path
						d='M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z'
						stroke='#fff'
					/>
				</svg>
			</span>

			<h1
				style={{
					color: 'white',
					position: 'absolute',
					bottom: '26rem',
					left: '11rem',
					spacing: '2px',
				}}
			>
				{cardNumber}
			</h1>

			<span
				id='name'
				style={{
					position: 'absolute',
					color: 'white',
					bottom: '25rem',
					left: '11rem',
					right: '9rem',
				}}
			>
				{cardholderName}
			</span>

			<span id='date'>
				<span
					id='month'
					style={{
						color: 'white',
						position: 'absolute',
						bottom: '25rem',
						left: '28rem',
						right: '23rem',
					}}
				>
					{expiryDate}
				</span>

				{/*<span id="year" style={{color: "white", 
    position: "absolute", 
    bottom: "25rem", 
    left: "29rem", 
    right: "21rem"}}>{expiryDate}</span>*/}
			</span>

			<img
				style={{ position: 'absolute', left: '270px', top: '410px' }}
				src={`${process.env.PUBLIC_URL}/images/bg-card-back.png`}
				alt='back_card'
			/>

			<h5
				style={{
					position: 'absolute',
					bottom: '12rem',
					left: '40rem',
					color: 'white',
				}}
			>
				{cvc}
			</h5>

			<div
				style={{
					float: 'right',
					position: 'absolute',
					width: '50%',
					top: '15rem',
					right: '0rem',
				}}
			>
				{!confirmed && (
					<form onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor='cardholderName'
								style={{
									display: 'block',
									fontSize: '12px',
									fontWeight: 'bold',
								}}
							>
								CARDHOLDER NAME
							</label>

							<input
								type='text'
								name='cardholderName'
								id='cardholderName'
								value={cardholderName}
								placeholder='e.g. Jane Appleseed'
								onChange={(event) => setCardholderName(event.target.value)}
								required
								style={{ width: '50%', padding: '9px 12px', margin: '8px 0' }}
							/>

							<label
								htmlFor='cardNumber'
								style={{
									display: 'block',
									fontSize: '12px',
									fontWeight: 'bold',
								}}
							>
								CARD NUMBER
							</label>

							<input
								type='text'
								name='cardNumber'
								id='cardNumber'
								value={cardNumber
									.replace(/\s/g, '')
									.replace(/(\d{4})/g, '$1 ')
									.trim()}
								placeholder='e.g. 1234 5678 9123 0000'
								onChange={(event) => setCardNumber(event.target.value)}
								required
								maxLength={19}
								style={{ width: '50%', padding: '9px 12px', margin: '8px 0' }}
							/>
							<label
								htmlFor='expiryDate'
								style={{
									display: 'block',
									fontSize: '12px',
									fontWeight: 'bold',
								}}
							>
								EXP. DATE (MM/YY)
							</label>

							<input
								type='month'
								name='expiryDate'
								id='expiryDate'
								value={expiryDate}
								placeholder='MM/YY'
								onChange={(event) => setExpiryDate(event.target.value)}
								required
								style={{ width: '50%', padding: '9px 12px', margin: '8px 0' }}
							/>

							<label htmlFor='cvc' style={{ display: 'flex' }}>
								CVC
							</label>

							<input
								type='number'
								name='cvc'
								id='cvc'
								value={cvc}
								placeholder='e.g. 123'
								maxLength={3}
								onChange={(event) => setCvc(event.target.value)}
								required
							/>
						</div>
						<button
							type='submit'
							onClick={() => setConfirmed(true)}
							style={{
								display: 'block',
								margin: '14px 0',
								width: '50%',
								padding: '9px 12px',
								backgroundColor: 'hsl(278, 68%, 11%)',
								color: 'hsl(0, 0%, 100%)',
							}}
						>
							Submit
						</button>

						<h2>{message}</h2>
					</form>
				)}
				{confirmed && <ThankYou setConfirmed={setConfirmed} />}
			</div>
		</div>
	);
}

function ThankYou({ setConfirmed }) {
	return (
		<>
			<div>
				<img
					style={{
						position: 'absolute',
						height: '80px',
						width: '80px',
						left: '7rem',
					}}
					src='https://www.seekpng.com/png/detail/502-5023316_open-blue-circle-check-mark.png'
					alt='aa'
				/>

				<br />
				<br />
				<br />
				<br />
				<h1 style={{ text: 'center', left: '4rem', position: 'relative' }}>
					THANK YOU!
				</h1>
				<p style={{ left: '4rem', position: 'relative', fontSize: '15px' }}>
					We've added your card details
				</p>
				<br />
				<button
					style={{
						display: 'block',
						margin: '14px 0',
						width: '30%',
						padding: '9px 12px',
						backgroundColor: 'hsl(278, 68%, 11%)',
						color: 'hsl(0, 0%, 100%)',
						left: '3rem',
						position: 'relative',
					}}
					onClick={() => setConfirmed(false)}
				>
					Continue
				</button>
			</div>
		</>
	);
}

export default App;
