import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

  constructor( private toaster: ToastrService) {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable.subscribe(
     {
       next: (data) => {
         this.toaster.info('' + data);
       },
       complete: () => {
         this.toaster.warning('le flux de données est terminé');
       }
     }
    )
  }

  ngOnInit(): void {
  }

}
