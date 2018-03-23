import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    <ul>
      <li (click)="onKlik(departement)" [class.selected]="isSelected(departement)" *ngFor="let departement of departements"> 
        <span>{{ departement.id }}</span> {{ departement.name }} ----> {{ isSelected(departement) }}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
  public departements = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Bootstap" }
  ]

  public selectedId;

  onKlik(departement){
    // this.router.navigate(['/departmentsX', departement.id]);
    this.router.navigate([departement.id], {relativeTo: this.route});
  }


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
        let id = parseInt(params.get('id'));
        this.selectedId = id;
    });
  }

  isSelected(department){
    return department.id === this.selectedId;
  }
}
