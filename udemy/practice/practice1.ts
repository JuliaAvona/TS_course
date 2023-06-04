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


//Codewars - 8ky
function goals (laLigaGoals: number, copaDelReyGoals: number, championsLeagueGoals: number): number {
	return (laLigaGoals + copaDelReyGoals + championsLeagueGoals);
  }

console.log(goals(1,3,6));