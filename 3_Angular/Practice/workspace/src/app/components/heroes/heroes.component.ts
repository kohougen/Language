import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-heroes',                 // コンポーネントのCSS要素セレクター <app-heroes></app-heroes>
  templateUrl: './heroes.component.html', // テンプレートファイルの場所
  styleUrls: ['./heroes.component.css']   // プライベートCSSスタイルの場所
})
export class HeroesComponent implements OnInit {

  // プロパティを初期化（デフォルトはpublic）
  selectedHero: Hero = {id: 0, name:''};
  heroes: Hero[] = [];

  // インスタンス化時呼ばれる
  constructor(private heroService: HeroService,          // サービスの注入
              private messageService: MessageService) {}

  // コンポーネントの初期化時呼ばれる
  ngOnInit(): void {
      // 同期化処理でデータを取得
      // this.heroes = this.heroService.getHeroes();

      //  非同期化処理でデータを取得
      this.heroService.getHeroes().subscribe(heroes => {
        this.heroes = heroes;
      });
  
      this.selectedHero = this.heroes[1];
  }

  // イベントを定義してテンプレートでバインディング
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
