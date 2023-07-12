
const Exercise: React.FC = () => {
	return (
		<>
			<section className='flex flex-col items-center justify-center border-2 border-white rounded-md p-4 w-full'>
				<h1 className='text-center text-2xl'>Problema</h1>
				<p>
					Se busca crear una aplicación que sirva para contar la cantidad de
					veces que se apretaron botones.
				</p>
			</section>
			<section className='flex flex-col items-center justify-center border-2 border-white rounded-md p-4 w-full'>
				<h2 className='text-center text-2xl'>Se requiere</h2>
				<p>
					Construir una API Rest que tenga la capacidad de crear botones,
					registrar que se apretó un botón y de contar cuantas veces se apretó
					cada botón.
				</p>
				<ol className='list text-left list-decimal'>
					Construir una aplicación React que:
					<li>
						Muestre los botones creados cuyo texto el numero de botón con un
						contador de la cantidad de veces que fue apretado
					</li>
					<li>
						Tener un botón “agregar” que agregue un botón al final de la lista
						de botones
					</li>
				</ol>
			</section>
			<section className='flex flex-col items-center justify-center border-2 border-white rounded-md p-4 w-full'>
				<h3 className='text-center text-2xl'>Adicional</h3>
				<p>
					Agregar un botón con un icono alusivo a eliminar, al lado de cada
					botón. Al ser clickeado, esto eliminará el botón de la lista.
				</p>
			</section>
		</>
	);
};

export default Exercise;
