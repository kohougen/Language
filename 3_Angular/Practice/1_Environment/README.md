# Angularフロントエンドサーバー

## 環境構築

   1. Angular CLIを利用してサーバーを立ち上げる

      ```
      # ワークスペースと初期アプリケーションを作成（数分かかる）
      ng new Practice-Angular

      # コンポーネントを作成
      ng generate component components/heroes
      ng generate component components/hero-detail
      ng generate component components/messages
      ng generate component components/dashboard

      # サービスを作成
      ng generate service services/hero
      ng generate service services/message

      # サーバーを起動
      cd Practice-Angular
      ng serve --open
      ```

   1. Compileが完了した後、ブラウザを自動的に http://localhost:4200/ に開きます

      ![alt text](https://github.com/kohougen/Language/blob/main/3_Angular/Pictures/Angular_Welcome.PNG)

   1. 生成したプロジェクトの構成（一部は手動で追加/変更）

      ```Javascript
      .
      ├── e2e
      │   └── 
      ├── node_modules           // アプリに必要なNode.jsのパッケージ置き場(npm installを実行したら自動的に生成される)
      │   ├─（中略）
      ├── src                    // 静的ファイル置き場。Webアプリ開発では使うが、API開発では使わない
      │   ├── app
      │   │   ├──components      // コンポーネントフォルダ
      │   │   │  ├──heros
      │   │   │  │  ├──heroes.component.css       // private CSSスタイル
      │   │   │  │  ├──heroes.component.html      // テンプレート(ビュー、DOM)
      │   │   │  │  ├──heroes.component.spec.ts   // Unitテストコード
      │   │   │  │  └──heroes.component.ts        // 個別コンポーネント
      │   │   │  │
      │   │   │  │──hero-detail
      │   │   │  │  ├──heroes.component.css
      │   │   │  │  ├──heroes.component.html
      │   │   │  │  ├──heroes.component.spec.ts
      │   │   │  │  └──heroes.component.ts
      │   │   │  │
      │   │   │  └──messages
      │   │   │     ├──messages.component.css
      │   │   │     ├──messages.component.html
      │   │   │     ├──messages.component.spec.ts
      │   │   │     └──messages.component.ts
      │   │   │
      │   │   ├──services        // サービスフォルダ
      │   │   │   ├── hero.service.spec.ts      // Unitテストコード
      │   │   │   ├── hero.service.ts           // 個別サービス
      │   │   │   ├── message.service.spec.ts   // Unitテストコード
      │   │   │   └── message.service.ts        // 個別サービス
      │   │   │
      │   │   ├── app-routing.module.ts         // ルート構成の定義場所
      │   │   ├── app.component.css             // APP CSSスタイル
      │   │   ├── app.component.html            // APPテンプレート(ビュー、DOM)
      │   │   ├── app.component.ts              // APPコンポーネント
      │   │   └── app.module.ts                 // モジュール
      │   │
      │   │── main.ts            // アプリのメインファイル
      │   └── styles.css         // global CSSスタイル
      ├── package-lock.json      // 詳しいバージョン情報を保持(npm installを実行したら自動的に生成される)
      └── package.json           // アプリに必要なNode.jsのパッケージ情報等を記載する
      ```

   1. [app.component.htmlの説明](https://github.com/kohougen/Language/tree/main/3_Angular/Practice/workspace/src/app/app.component.html)
