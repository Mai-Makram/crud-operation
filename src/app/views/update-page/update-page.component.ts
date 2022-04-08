import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/servies/users.service';
import { Users } from 'src/app/user-interface';
//-- to make popUp --
import { ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.css']
})
export class UpdatePageComponent implements OnInit {
  @ViewChild(ModalDirective) modal!: ModalDirective;

  //-- Users is interface --
  user:Users={}

  //-- FormBuilder to help you to built form(form group & form controls)--
  constructor(private fb:FormBuilder,private userservice:UsersService,private route:ActivatedRoute, private router:Router ) { }
  id:string=this.route.snapshot.params['id']

  getUpdate(){
    this.userservice.getIDUser(this.id).subscribe({
      next:(res:any)=>{
        //console.log(res)
        this.user=res
      },
      error:(err:any)=>{
        //console.log(err)
        console.log(err)
      }
    })
  }

    //-- Validators contain all validators in form -- 
  contactForm = this.fb.group({
    empId :[''],
    empName :["",[Validators.required , Validators.minLength(3)]],
    empEmail :[" ",[Validators.required , Validators.email]],
    empAddress :["",[Validators.required]],
    empPhone :["",[Validators.required]]
  })

  //-- this variable for error messages in form --
  myValues = this.contactForm.controls

  onSubmit(post:any){
    this.userservice.updateusers(this.id,post).subscribe({
      next:()=>{
        console.log(post)
        //-- to navigate to another page by URL--
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit(): void {
    this.getUpdate()
  }

}
