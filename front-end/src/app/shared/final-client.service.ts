import { Injectable } from '@angular/core';
import { FinalClient } from './final-client.model';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinalClientService {
  formData : FinalClient;
 

  constructor(private http : HttpClient) { }

  getFinalClientList() {
    return this.http.get(environment.apiURL+'/Final_client').toPromise();
   }
   getFinalClientsList(id: number){
    return this.http.get(environment.apiURL+'/Final_client/'+id).toPromise();
   }

  saveOrUpdateOrder(){
   return this.http.post(environment.apiURL+'/Final_client', this.formData);
}
deleteFinalClient(id:number) {
  return this.http.delete(environment.apiURL + '/Final_client/'+id).toPromise();
}

}