import { Injectable } from '@nestjs/common';
import {User} from './user.model';

@Injectable()
export class UserService {
   private users: Map<number,User> = new Map<number,User>();
   private email:string;
   private password:string;

   constructor(){
      this.populate();
   }

   getAll(){
      var populatedData=[];
      for(const user of this.users.values()){
         populatedData.push(user.toJson());
      }
      return populatedData;
   }

   populate(){
     this.users.set(1,new User(1,"James",18,"james@email.com","123456"));
     this.users.set(2,new User(2,"Mike",18,"magicMike@email.com","742545"));
     this.users.set(3,new User(3,"Sova",18,"hunterArrows@email.com","452893"));
     this.users.set(4,new User(4,"Brim",18,"smokeyBrim@email.com","897450"));
   }

   deleteUser(id:number){
      if(this.users.has(id))
      this.users.delete(id);
      else console.log(id+" does not exist in database!");
    }

    getUser(id:number){
      return this.users.get(id).toJson();
    }

    replaceUser(id:number, user:any){
      var newUser: User; 
      newUser = new User(user?.id,user?.name, user?.age, user?.email,user?.password);
      this.users.set(id, newUser);
      this.logAllUser();
    }

    registerUser(user:any){
      var newUser: User; 
      newUser = new User(user?.id,user?.name, user?.age, user?.email,user?.password);
      this.users.set(user.id, newUser);
      this.logAllUser();
   }

   logAllUser(){
    for(const [key,user] of this.users.entries()){
      console.log(key);
      user.log();
    }
   }

   loginUser(email:string,password:string){
     
     if(email===this.email && password===this.password) console.log("Success!");
     else console.log("Invalid!");
   }

   searchUser(id:number){
     for(var x=1;id<=x;x++){
      return console.log(id);
     }
     console.log("Not Found.");
   }

   

}
