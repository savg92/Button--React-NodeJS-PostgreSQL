import { useEffect, useState } from 'react';
import { getAllActiveButtons } from '../services/services';
import { addClick, updateButton } from '../services/services';
import { createButton } from '../services/services';

interface Button {
	id: number;
	text: string;
	clicks: number;
	createdAt: string;
	updatedAt: string;
}

interface Data {
	message: string;
	buttons: Button[];
}

const Results: React.FC = () => {
	const [data, setData] = useState<Data>({
		message: '',
		buttons: [],
	});
	const [buttons, setButtons] = useState(['']);
	const [clicks, setClicks] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const result = await getAllActiveButtons();
			setData(result);
		};
		fetchData();
	}, [buttons, clicks]);

	const handleAddBtn = () => {
		createButton().catch((error) => console.log(error));
		setButtons([...buttons, '']);
	};

	const handleClick = (id:number) => {
		addClick(id).catch((error) => console.error(error));
		setClicks(clicks + 1);
	};

	const handleDelete = (id:number) => {
		updateButton(id).catch((error) => console.error(error));
		setButtons([...buttons, '']);
	};

	return (
		<>
			<section className='createButtonsSection border-2 border-white rounded-md p-4 w-full flex flex-col gap-6 justify-between'>
				<h3 className='text-center text-2xl'>Resultado</h3>
				<div className='buttonsContainer flex flex-col gap-4 justify-center'>
					{data.buttons.map((item) => (
						<div
							className='flex flex-row gap-4 justify-center'
							key={item.id}
						>
							<button
								className='button border-spacing-2 border-2 border-white rounded-md p-2 w-56 flex flex-row hover:bg-gray-700 hover:border-gray-700 transition duration-500 ease-in-out'
								onClick={() => handleClick(item.id)}
							>
								Boton Nº: {item.id} || Click's: {item.clicks}
							</button>
							<button
								className='button border-spacing-2 border-2 border-white rounded-md p-2 w-16 flex flex-row hover:bg-gray-700 hover:border-gray-700 transition duration-500 ease-in-out justify-center'
								onClick={() => handleDelete(item.id)}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
				<div className='createButtons '>
					{/* <AddBttn /> */}
					<button
						className='addButton border-spacing-2 border-2 border-white rounded-md p-2 w-40 flex flex-row hover:bg-gray-700 hover:border-gray-700 transition duration-500 ease-in-out'
						onClick={handleAddBtn}
					>
						<p className='w-full text-center flex justify-between'>
							Agregar botón
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 4.5v15m7.5-7.5h-15'
								/>
							</svg>
						</p>
					</button>
				</div>
			</section>
		</>
	);
};

export default Results;
