import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';
import { Group } from '../group.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  myGroups: Group[];
  groups: Group[];

  constructor(
    private groupService : GroupService,
    private router: Router
    ) { }

  ngOnInit() {
    this.groups = [];
    this.groupService.getGroups().subscribe(
      groups => {
        console.log(groups);
        groups.forEach(group => {
          console.log(group);
          if(group.users.includes(localStorage.getItem("currentUser"))){
          }else{
            this.groups.push(group);
          }
        });
      },
      error => {
        console.log(error)
      }
    );

    this.myGroups = [];
    this.groupService.getGroups().subscribe(
      groups => {
        groups.forEach(group => {
          console.log(group);
          if(group.users.includes(localStorage.getItem("currentUser"))){
            this.myGroups.push(group);
          }
        });
      },
      error => {
        console.log(error)
      }
    );
  }

  CreateNewGroup(){
    this.router.navigate(['group/new']);
  }

  joinGroup(id : String){
    console.log("JOIN GROUP:");
    console.log(id);

    this.groupService.joinGroup(id).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error)
      }
    );
  }
}
