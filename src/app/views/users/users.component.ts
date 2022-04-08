import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const $:any ;
import { UsersService } from 'src/app/servies/users.service';
import { Users } from 'src/app/user-interface';
//to make popUp Form
import { ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

//-- used in pagination --
//import { Subject } from 'rxjs';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit , AfterViewInit {
  //-- to make pagination and sorting --
    /* dtOptions: DataTables.Settings = {};
      dtTrigger: Subject<any> = new Subject<any>();*/
  @ViewChild('dTable',{static:false}) dataTable:any;
    @ViewChild(ModalDirective) modal!: ModalDirective;
   //-- to make pagination and sorting --
  users:Users[]=[]

  constructor(private userservies:UsersService) { }
 

  getUsers(){
    this.userservies.getUser().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.users =res
       // this.dtTrigger.next();
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  deleteuser(id:any, i:number){
    this.userservies.deleteusers(id).subscribe({
      next:(res:any)=>{
        this.users.splice(i,1)
        console.log(res)
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

 //-- to make check all --
  checked:boolean = false
  checkAll(){
    this.checked = true
  }

 

  ngOnInit(): void {
    this.getUsers()
     //-- to make pagination and sorting --
      /* this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 10
        };*/
  }
  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    $(this.dataTable.nativeElement).DataTable();
  }

 /* ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }*/

}
