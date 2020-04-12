import { Component, OnInit } from "@angular/core";
import { Project, STATUS } from "src/app/models/model";
import { portfolioData } from "src/assets/data/data_portfolio";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  public projects: Array<Project>;

  constructor() {}

  ngOnInit() {
    this.projects = portfolioData.filter((p) => p.status === STATUS.PUBLISHED);
    this.projects.reverse();
  }
}
