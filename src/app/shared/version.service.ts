import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  private Pversion = new BehaviorSubject(9);

  public version = this.Pversion.asObservable().pipe(
    startWith(10),
    tap(console.log)
  );
  constructor() {}

  up() {
    this.Pversion.next(this.Pversion.value + 1);
  }

  down() {
    this.Pversion.next(this.Pversion.value - 1);
  }

  add(nbr: number) {
    this.Pversion.next(nbr);
  }
}
