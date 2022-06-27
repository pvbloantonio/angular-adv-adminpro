import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input() title: string = 'Sin Título';
  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [ 'Pablo', 'Gustavo', 'Victor' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FEE','#F02059'],
        hoverBackgroundColor: ['#6857E6','#009FEE','#F02059'],  }
     
    ]
  }
  public doughnutChartType: ChartType = 'doughnut';
  

  
  // public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

  // public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
  

}
