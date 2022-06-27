import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  doughnutChartLabels1: string[] = ['Parachoque', 'Espejo', 'Radiador'];
  public data1:ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [
      { data: [ 15, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
        hoverBackgroundColor: ['#6857E6','#009FEE','#F02059'],  }
     
    ]
  }
  
}


