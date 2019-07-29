# nest-twitter-auth-sample

## 概要

nest.jsでpassport, passport-twitterを用いたTwitterOAuthが出来るWebアプリのサンプル

## 導入

### データベース定義

typeormに各module内の*.entity.tsを認識させORMappingを行う。

```
$ ts-node $(npm bin)/typeorm migration:generate -n Initialize
$ ts-node $(npm bin)/typeorm migration:run

```




## 参考
[nest.js docs database](https://docs.nestjs.com/techniques/database)
[typeorm README migration](https://github.com/typeorm/typeorm/blob/master/docs/using-cli.md#create-a-new-migration)
[Qiita Typescript + TypeORMセットアップ & migration世代管理 & expressへの組み込み](https://qiita.com/yuukive/items/0655f4d88187b65a8520)








