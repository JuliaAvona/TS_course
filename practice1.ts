//Practice 1
const currRate: string = "1.05";

const fetchCurr = (response: string): number => {
	const data = JSON.parse(response);
	return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number): void {
	if (available) {
		let res: number = fetchCurr(currRate) * amount * commission;
		console.log(res);
	} else {
		console.log("Сейчас обмен недоступен");
	}
}

transferEurToUsd(true, 500, 1.05);