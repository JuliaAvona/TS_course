const currRate = "1.05";

const fetchCurr = (response) => {
	const data = JSON.parse(response);
	return data;
};

console.log(fetchCurr(typeof currRate));