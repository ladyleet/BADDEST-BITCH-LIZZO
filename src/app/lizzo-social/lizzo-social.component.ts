import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-lizzo-social",
  templateUrl: "./lizzo-social.component.html",
  styleUrls: ["./lizzo-social.component.scss"]
})
export class LizzoSocialComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    // @ts-ignore
    twttr.widgets.load();
  }
}
