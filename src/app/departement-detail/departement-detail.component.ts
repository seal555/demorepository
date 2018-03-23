import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-departement-detail',
  template: `
    <p>
      Anda sebelumnya meng-klik id : {{ departmentId }}
    </p>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>

    <div>
      <button (click)="goToDepartment()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartementDetailComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.departmentId = id;
    });
  }

  goPrevious(){
    let previousId = this.departmentId - 1;

    if(previousId > 0){
      this.router.navigate(['/departments', previousId]);
    }
    else{

    }
  }

  goNext(){
    let nextId = this.departmentId + 1;
    if(nextId <= 4){
      this.router.navigate(['/departments', nextId]);
    }
    else{

    }
  }

  goToDepartment(){
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departmentsX', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }
}
