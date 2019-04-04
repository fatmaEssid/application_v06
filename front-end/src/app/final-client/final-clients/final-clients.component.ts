import { Component, OnInit } from '@angular/core';
import { FinalClientService } from 'src/app/shared/final-client.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-final-clients',
  templateUrl: './final-clients.component.html',
  styles: []
})
export class FinalClientsComponent implements OnInit {

  finalClientList;
  constructor(private service: FinalClientService,
    private router:Router, private snackBar:MatSnackBar) { }

  ngOnInit() {
   this.refreshList();
  }
  refreshList(){
    this.service.getFinalClientList().then(res=>this.finalClientList = res);
  }
  openOrEdit(ID:number){
    this.router.navigate(['/final-client/edit/' + ID]);

  }
  onDeleteClient(id: number) {
    if (confirm('Vous êtes sûr  pour supprimer le client ?')) {
      this.service.deleteFinalClient(id).then(res => {
        this.refreshList();
        this.openSnackBar('CLIENT ', 'supprimé avec succès ');
      });
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 4000,
       verticalPosition: 'top',
    
    });

}

}
