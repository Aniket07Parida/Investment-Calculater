import Inputs from './Input';
import { useState } from 'react';

export default function App() {
	const [weight, setWeight] = useState(0);
	const [height, setHeight] = useState(0);
	const [context, setContext] = useState('');

	function handleWeightChanges(event) {
		setWeight(parseFloat(event.target.value));
	}

	function handleHeightChanges(event) {
		setHeight(parseFloat(event.target.value));
	}

	function handleChanges() {
		if (weight <= 0 || height <= 0) {
			setContext('Please enter valid weight and height');
			return;
		}

		const heightInMeters = height * 0.0254; // Convert height from inches to meters
		const weightInKg = weight * 0.453592; // Convert weight from pounds to kilograms
		const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
		setContext(`Your BMI is: ${calculatedBmi.toFixed(2)}`); // Optional: format the BMI to 2 decimal places
	}

	function handleReload() {
		setWeight(0);
		setHeight(0);
		setContext('');
	}

	return (
		<>
			<div className='container'>
				<h1>BMI Calculator</h1>
				<Inputs text={'Weight (lbs)'} onChange={handleWeightChanges} value={weight} />
        <Inputs text={'Height (in)'} onChange={handleHeightChanges} value={height} />
				<button className='submit' onClick={handleChanges} type='submit'>
					Submit
				</button>
				<button className='reload' onClick={handleReload}>
					Reload
				</button>
				<h2> {context}</h2>
			</div>
		</>
	);
}