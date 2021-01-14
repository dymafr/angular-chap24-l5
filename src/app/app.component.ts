import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DialogComponent } from "./shared/components/dialog.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=100').pipe(map((res: {results: any[], info: any})) => {
      const users = res.results.map(user => {
        gender: user.gender,
        cell: user.cell,
        email: user.email, 
        nat: user.nat,
        phone: user.phone
      })
    })
  }

  ngOnInit() {}
}
