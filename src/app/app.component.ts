import { Component, OnInit } from '@angular/core';
import { AppHttpInterceptorService } from './core/app-http-interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Open-PlanB';
  isLoading: boolean;

  constructor(private interc: AppHttpInterceptorService) {}

  ngOnInit() {
    this.interc.getProgres().subscribe((status) => {
      console.log(status);
      this.isLoading = status;
    }, (error) => {
      console.log(error);
    });
  }
}
