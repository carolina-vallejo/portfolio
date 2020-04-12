import { Component, OnInit, Input } from "@angular/core";
import { Project } from "src/app/models/model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  @Input()
  public project: Project;

  constructor() {}

  ngOnInit() {}
}
