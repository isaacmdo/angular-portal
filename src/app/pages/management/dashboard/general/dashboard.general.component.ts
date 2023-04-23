import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/api/models/appconfig';
import { ConfigService } from 'src/app/service/app.config.service';
 
@Component({
    templateUrl: './dashboard.general.component.html',
})
export class DashboardGeneralComponent implements OnInit {

    items: MenuItem[];

    chartData: any;

    chartOptions: any;

    subscription: Subscription;

    config: AppConfig;

    constructor(public configService: ConfigService) {}

    ngOnInit() {          
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: '#2f4860',
                    borderColor: '#2f4860',
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: '#00bb7e',
                    borderColor: '#00bb7e',
                    tension: .4
                }
            ]
        };
    }

}
