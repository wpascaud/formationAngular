import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/shared/version.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = { username: '', password: '' };

  constructor(private versionService: VersionService) {}

  ngOnInit() {}
  up() {
    this.versionService.up();
  }

  down() {
    this.versionService.down();
  }

  register(){
    console.log(this.user);
  }
}
