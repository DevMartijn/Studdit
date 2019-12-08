import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../group.service';
import { Group } from '../group.model';
import { PostService } from '../../posts/post.service';
import { Post } from '../../posts/post.model';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.css']
})
export class GroupDetailComponent implements OnInit {

  selectedId: String;
  group: Group;
  posts: Post[];
  admin = false;
  joined = false;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private postService: PostService,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.groupService.getGroup(params.get('id')).subscribe(
          group => {
            
            this.group = group;
            
            if(group.admin == localStorage.getItem("currentUser")){
              this.admin = true;
            }

            if(group.users.includes(localStorage.getItem("currentUser"))){
              this.joined = true;
            }
            
            this.postService.getPostsByGroup(this.group._id).subscribe(
              posts => {
                this.posts = posts;
                this.posts.forEach(post => {
                  this.groupService.getUsername(post.user).subscribe(
                    result => {
                      post.user = result.username;
                    });
                });
                console.log(posts);
              },
              error => {
                console.log(error)
              }
            );
          },
          error => {
            console.log(error)
          }
        );;
      }
    )
  }

  deleteGroup(){
    if(confirm("Are you sure to delete " + this.group._id)) {
      this.groupService.deleteGroup(this.group._id).subscribe(
        result => {
          console.log(result);
          this.router.navigate(['/group/list']);
        }
      );
    }
  }

}
