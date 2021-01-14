import { Component, OnInit } from "@angular/core";
import { User } from "./shared/interfaces/user.interface";
import { UserService } from "./shared/services/user.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}
