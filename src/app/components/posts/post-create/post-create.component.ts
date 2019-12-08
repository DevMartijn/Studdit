import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../../groups/group.service';
import { Group } from '../../groups/group.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  content = "";
  group: Group;

  constructor(
    private postService : PostService,
    private route: ActivatedRoute,
    private groupService: GroupService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.groupService.getGroup(params.get('id')).subscribe(
          group => {
            this.group = group;
          },
          error => {
            console.log(error)
          }
        );;
      }
    )
  }

  onSubmit() {
    this.postService.createPost(this.group._id,this.content).subscribe(
      result => {
        console.log(result);
        this.router.navigateByUrl('/dashboard', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/group/list/" + this.group._id]));
      });
  }

}
