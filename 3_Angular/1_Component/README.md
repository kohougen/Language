## 主な構成要素

1. 構成図

    ![alt text](https://github.com/kohougen/Language/blob/main/3_Angular/Pictures/Angular_Framework.PNG)

1. モジュール(NgModule)は、コンポーネントをサービスなどの関連コードとまとめて、機能単位を形成できます。

1. コンポーネントは、アプリケーションデータとロジックを含むクラスを定義し、HTMLテンプレートに関連付けられます。

   * コンポーネントのメタデータは、コンポーネントとそのビューを作成し表示するために必要な主要なビルディングブロックを取得する場所をAngularに通知します。

1. テンプレート(DOM)は、HTML要素を表示する前に変更できるAngularマークアップを組み合わせています。

1. バインディングマークアップは、テンプレート(DOM)とコンポーネント間の通信を定義
   * イベントバインディング

      ```html
      <!-- (event)="handler"でイベントをDOMにバインディング -->
      <li (click)="selectHero(hero)"></li>
      ```

   * プロパティバインディング

      ```html
      <!-- {{property}}でプロパティをDOMにバインディング -->
      <li>{{hero.name}}</li>

      <!-- [property]="value"でプロパティに値を渡す -->
      <app-hero-detail [hero]="selectedHero"></app-hero-detail>

      <!-- [(ngModel)]="property"で双方向データバインディング app.module.tsにFormsModuleをインポートする必要がある -->
      <input [(ngModel)]="hero.name">
      ```

1. パイプは、テンプレートHTMLの表示値変換を宣言できます。

        ```html
        <p>The date is {{today | date:'fullDate'}}</p>
        <p>{{name | uppercase}}</p>
        ```

1. ディレクティブ(Directive)は、プログラムロジックを提供する
   * 構造ディレクティブは、DOMの要素を追加、削除、置換することによってレイアウトを変更します。

      ```html
      <li *ngFor="let hero of heroes"></li>
      <app-hero-detail *ngIf="selectedHero"></app-hero-detail>
      ```

   * 属性ディレクティブは、既存の要素の外観や動作を変更します。 

      ```html
      <input [(ngModel)]="hero.name">
      ```