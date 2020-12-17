import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Hero } from '../components/heroes/hero';
import { HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructorメソッド
  constructor(private messageService: MessageService) {}

  // 同期化処理
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // 非同期化処理
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES).pipe(delay(1000));
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: hero id=${id}`);
    return of(HEROES[id-1]);
  }
}
