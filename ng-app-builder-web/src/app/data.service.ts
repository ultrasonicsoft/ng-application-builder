import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfiguration } from './models/app-config.model';
import { environment } from 'src/environments/environment';
import { ApiRoutes } from './models/api-routes';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  generateApp(config: AppConfiguration) {
    console.log(JSON.stringify(config));

    const url = environment.baseUrl + ApiRoutes.StackBlitzApp;
    // return this.httpClient.post(url, config, {
    //     responseType: 'blob'
    // });
    return this.httpClient.post(url, config);
  }

  downloadApp(config: AppConfiguration) {
    const url = environment.baseUrl + ApiRoutes.DownloadApp;
    return this.httpClient.post(url, config, {
      responseType: 'blob'
    });
    // return this.httpClient.post(url, config);
  }
}
