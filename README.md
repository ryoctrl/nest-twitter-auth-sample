# nest-twitter-auth-sample

## 概要

nest.jsでpassport, passport-twitterを用いたTwitterOAuthが出来るWebアプリのサンプル

## 導入

### init

```
$ git clone https://github.com/ryoctrl/nest-twitter-auth-sample.git
$ cd nest-twitter-auth-sample
$ yarn install
```

### データベース定義

typeormに各module内の*.entity.tsを認識させORMappingを行う。

```
$ mysql -u xxx -p
$ CREATE DATABASE nset_twitter_auth_sample
$ ts-node $(npm bin)/typeorm migration:run

# 以下は必要なし entityに追加・変更があった場合のみmigrationファイルを作成する
$ ts-node $(npm bin)/typeorm migration:generate -n Initialize
```

### 認証

`@nestjs/passport`と`passport-twitter`を用いて実装






### 認可




## 参考
[nest.js docs database](https://docs.nestjs.com/techniques/database)
[typeorm README migration](https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#create-a-new-migration)
[Qiita Typescript + TypeORMセットアップ & migration世代管理 & expressへの組み込み](https://qiita.com/yuukive/items/0655f4d88187b65a8520)
[nest.js docs authentication](https://docs.nestjs.com/techniques/authentication)









