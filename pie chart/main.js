const cases = document.querySelector('.coronavirus-input');
const deaths = document.querySelector('.deaths-input');
const recovered = document.querySelector('.recovered-input');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['Active Cases', 'Deaths', 'Recovered'],
		datasets: [
			{
				label: '# of Votes',
				data: [0, 0, 0],
				backgroundColor: ['#e8371c', '#5a08bf', '#00bf39'],
				borderWidth: 1
				
			}
		]
	}
});

const updateChartValue = (input, dataOrder) => {
	input.addEventListener('change', e => {
		myChart.data.datasets[0].data[dataOrder] = e.target.value;
		myChart.update();
	});
};

updateChartValue(cases, 0);
updateChartValue(deaths, 1);
updateChartValue(recovered, 2);