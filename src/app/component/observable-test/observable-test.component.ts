import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {filter, map} from "rxjs/operators";

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
    observable
      .pipe(
        // 5 4 3 2 1
        map( data => data * 3),
        // 15 12 9 6 3
        filter( value => value % 2 == 0)
        // 12 6
      )
      .subscribe(
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
