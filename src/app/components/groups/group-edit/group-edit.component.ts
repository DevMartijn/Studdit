import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  name = "";

  constructor(
    private groupService : GroupService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.groupService.createGroup(this.name).subscribe(result =>
      this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/group/list/"])
      ));
  }

}
