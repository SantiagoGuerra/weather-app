import { curry } from 'rambda';
import { createElement } from '../utils';
import Chart from 'chart.js';
import moment from 'moment';

const Hourly = curry( data => {


  const parentElement = document.querySelector('#content');

  const hourly = createElement('<div class="hourly"><h2>Hourly</h2></div>')

  const chart = createElement('<canvas id="hourly-data" class="hourly-chart"></canvas>')

  hourly.appendChild(chart)

  parentElement.appendChild(hourly)

const ctx = document.getElementById('hourly-data').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.hourly.map(d => moment(d.dt * 1000).format('LT')),
        datasets: [{
            label: 'Temperature Cº',
            data: data.hourly.map(d => d.temp),
            backgroundColor: [
                'rgba(124, 95, 255, 0.40)',
            ],
            borderColor: [
                '#7D5FFF',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        // responsive: true
    }
});

  console.log(chart)

  console.log(data.hourly)
})

export default Hourly;