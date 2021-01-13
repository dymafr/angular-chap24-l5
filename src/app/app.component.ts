import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DialogComponent } from "./shared/components/dialog.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  public chips: string[] = ["chip 1", "chip 2", "chip 3"];

  constructor(private dialog: MatDialog, private snack: MatSnackBar) {}

  toggle(event) {
    console.log(event);
  }

  removeChip(event, chip: string) {
    this.chips = this.chips.filter(el => el !== chip);
  }

  openDialog() {
    const ref = this.dialog.open(DialogComponent, {
      width: "800px",
      height: "400px",
      data: "Des données"
    });

    ref.afterClosed().subscribe(data => console.log(data));
  }

  openSnack() {
    const ref = this.snack.open("Sauvegarde effectuée", "annuler", {
      duration: 2000
    });

    ref.afterDismissed().subscribe(() => console.log("done"));

    ref.onAction().subscribe(() => console.log("action cliqué"));
  }

  ngOnInit() {}
}
