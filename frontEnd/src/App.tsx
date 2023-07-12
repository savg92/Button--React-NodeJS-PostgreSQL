import './App.css';
import Exercise from './components/Exercise';
import Results from './components/Results';

function App() {
	return (
		<>
			<main className='main flex flex-col items-center justify-center border-2 border-white rounded-md p-4 gap-3'>
				<Exercise />
				<Results />
			</main>
		</>
	);
}

export default App;
