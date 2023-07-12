import axios from 'axios';

const port = 3000 || import.meta.env.PORT
const baseURL = `http://127.0.0.1`;
const url = `${baseURL}:${port}/buttons`;

interface Button {
    message: string;
    buttons: [];
    id: number;
    text: string;
    count: number;
    createdAt: string;
    updatedAt: string;
}

//get all buttons
const getAllButtons: () => Promise<Button[]> = async () => {
	const response = await axios.get<Button[]>(url);
	return response.data;
};

//get all active buttons
const getAllActiveButtons: () => Promise<Button[]> = async () => {
	const response = await axios.get<Button[]>(`${url}/active`);
	return response.data;
};

// create button
const createButton: (text?: string) => Promise<Button> = async (
	text = 'active'
) => {
	const response = await axios.post<Button>(url, {
		text,
	});
	return response.data;
};

// add a click to a button
const addClick: (id: number) => Promise<Button> = async (id) => {
	const response = await axios.put<Button>(`${url}/${id}/clicks`
	);
	return response.data;
};

// update button to inactive
const updateButton: (id: number, text?: string) => Promise<Button> = async (
	id,
	text = 'inactive'
) => {
	const response = await axios.put<Button>(`${url}/${id}`, {
		text,
	});
	return response.data;
};

// delete button
const deleteButton: (id: number) => Promise<Button> = async (id) => {
	const response = await axios.delete<Button>(`${url}/${id}`);
	return response.data;
};

export {
	getAllButtons,
	getAllActiveButtons,
	createButton,
	updateButton,
	addClick,
	deleteButton,
};
