# kadai5-2
サードパーティークッキーを理解する  
◆サードパーティサイト  

## 実行方法
1. ローカルにクローン
2. クローンフォルダに移動
3. npm install
※以降は先にkadai5-2を起動後に実施してください※
5. 下記コマンド実行
```
$ node ./bin/www
```
6. ngrokをインストールする  
参考：https://qiita.com/hirokisoccer/items/7033c1bb9c85bf6789bd
7. ターミナルから以下のコマンドを実行  
　 表示されるhttpのURLを控えておく（kadai5-1で使用します）
```
$ ngrok http localhost:3001
```
