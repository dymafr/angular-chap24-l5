import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "./shared/interfaces/user.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get("https://randomuser.me/api/?results=100").pipe(
      map((res: { results: any[]; info: any }) => {
        const users = res.results.map(user => ({
          gender: user.gender,
          cell: user.cell,
          email: user.email,
          nat: user.nat,
          phone: user.phone
        }));
        return users;
      })
    );
  }

  ngOnInit() {}
}
