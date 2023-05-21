import { Component, OnInit } from "@angular/core";

import { Chart } from "chart.js";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'First DataSet',
    data: [65, 59, 80, 81, 56, 55, 45],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    }
  }
};

// ngOnInit(): void {
//   const chart = new chart('myChart',{
//     type: 'line',
//     data: data,
//     options: options
//   });

// }

// ngOnInnit() {
//   const chart = new Chart('myChart',{
//     type: 'line',
//     data: data,
//     options: options
//   });
// }

@Component({
  selector: 'app-root',
  templateUrl: './graph.component.html',
})

export class GrapghComponent {
  title = 'graph-app';
}
