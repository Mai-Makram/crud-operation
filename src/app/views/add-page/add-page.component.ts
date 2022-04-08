import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/servies/users.service';
import { Users } from 'src/app/user-interface';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  //-- Users is interface -- 
  user:Users[]=[]

  //-- FormBuilder to help you to built form(form group & form controls)--
  constructor(private fb:FormBuilder,private userservies:UsersService, private router:Router) { }

  //-- Validators contain all validators in form -- 
  contactForm = this.fb.group({
    empName :["",[Validators.required , Validators.minLength(3)]],
    empEmail :[" ",[Validators.required , Validators.email]],
    empAddress :["",[Validators.required]],
    empPhone :["",[Validators.required]]
  })

//-- this variable for error messages in form --
  myValues = this.contactForm.controls

  // displayStyle = "block"; 

  onSubmit(post:any){
    this.userservies.addusers(post).subscribe({
      next:(res:any)=>{
        console.log(res)
        console.log("done add")
        this.user.splice(0,0,res)
        //this.displayStyle = "none";

      //this.router.navigateByUrl('/')
      },
      error:(err:any)=>{
        console.log(err)
        //console.log("ggggg")
      }
    })
  }

  ngOnInit(): void {
  }

}
