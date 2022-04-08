import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/servies/users.service';
import { Users } from 'src/app/user-interface';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  user:Users ={
    
  }

  constructor(private userservies:UsersService, private route:ActivatedRoute) { }
  id:string = this.route.snapshot.params['id']
  getID(){
    this.userservies.getIDUser(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.user=res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getID()
  }

}
