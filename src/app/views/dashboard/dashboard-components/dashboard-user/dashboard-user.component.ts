import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { TEXTS } from '../../dashboardTexts';
import { ManageAccountService } from 'src/app/store/services/manage-account.service';
import { ACCOUNT_DETAILS_DATA } from 'src/app/Models/manage-account.model';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss'],
})
export class DashboardUserComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public inexpuchartOptions: Partial<inexpuchartOptions>;
  accounts: number = 0;
  texts = TEXTS;

  constructor(private manageAccountService: ManageAccountService) {
    this.inexpuchartOptions = {
      series: [
        {
          name: '',
          data: [1.1, 1.4, 1.1, 0.9, 1.9, 1, 0.3, 1.1],
        },
      ],
      chart: {
        type: 'bar',
        height: 90,
        fontFamily: 'Poppins,sans-serif',
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        borderColor: 'rgba(0,0,0,.2)',
        strokeDashArray: 3,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%',
          // endingShape: 'flat'
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      },

      legend: {
        show: false,
      },
      fill: {
        colors: ['rgba(255, 255, 255, 0.5)'],
        opacity: 1,
      },
      tooltip: {
        theme: 'light',
        fillSeriesColor: false,
        marker: {
          show: true,
          fillColors: ['#fff'],
        },
        x: {
          show: false,
        },
      },
    };
  }
  ngOnInit(): void {
    this.manageAccountService.fetchAccounts();
    this.refresh();
  }
  refresh() {
    setTimeout(() => {
      this.accounts = ACCOUNT_DETAILS_DATA.length;
    }, 1000);
  }
}

export interface inexpuchartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
}
