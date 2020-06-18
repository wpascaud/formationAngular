import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { VersionService } from 'src/app/shared/version.service';
import {  Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version:Observable<number>;

  constructor(private versionService: VersionService) { }


  public date = moment().format();

  ngOnInit(): void {
    this.version = this.versionService.version.pipe(
      filter(v=> v % 2 === 0)
    );
  }

}
