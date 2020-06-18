import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  version:number;
  constructor(private versionService: VersionService) {

  }

  ngOnInit(): void {

    this.versionService.version
    //pipe (map(v => v * 10))
    .subscribe(
      (data)=>this.version = data
    );
  }

  //ndestroy ngOndestroys



}
