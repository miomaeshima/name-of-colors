## db 用意

Sequelize を使う
まず、mkdir でレポジトリを作る。
さらに server フォルダーを作る。
cd server で入って、yarn init

yarn add sequelize sequelize-cli pg

node_modules/.bin/sequelize init
で、db 接続のためのファイルがいくつかできる。
作成された config.json を編集。

1.  config.json→config.js に変更
2.  yarn add dotenv
3.  config.js の一番上に、
    　　 require("dotenv").config();の一行を足す。
    　　さらに
    module.exports = {
        development: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASS,
            database: process.env.DB_DATABASE,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "postgres",
        },
    };
    に直す。
4. model/index.jsの中のconfig.jsonをconfig.jsに直す
5. .envを作成。
```
DATABASE_URL='postgres://postgres:kobekobe@localhost:5432/color_names'

DB_USERNAME='postgres'
DB_PASS='kobekobe'
DB_DATABASE='color_names'
DB_HOST='localhost'
DB_PORT=5432
```

新規テーブルのためのひな型(マイグレーションのためのファイル）を作成―まだマイグレーションはしていない。

node_modules/.bin/sequelize model:create --name [name of the table] --attributes [name:string,age:integerなど]

migrationフォルダー内にxxxxxx-create-[table name].jsというファイルができている。
必要に応じて、モデルを整える。（例えば作成日などがいらなければ削る）

マイグレーションを実行―これでテーブルの外側ができる。
yarn sequelize db:migrate ---env development

ロールバック
yarn sequelize db:migrate-undo --env development

既存テーブルへのカラム追加など
yarn sequelize migration:generate --name [tablename];
できたマイグレーションファイルに加筆

## csvファイルからデータをポスグレに入れるためのファイルを作成

dbpopulate.jsを作る。
参考にしたサイト：　https://bezkoder.com/node-js-csv-postgresql/
　　　　　　　　　　pool connectについては　https://node-postgres.com/api/pool
さらにこのファイルを実行するスクリプトを用意。`yarn seed`
将来、dbやテーブルを作り直すときはこのスクリプトを使える。



