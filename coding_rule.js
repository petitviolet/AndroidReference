//coding_rule.js

var fs = require('fs');

var rules = [
  {
  "title":"日本語のファイル、数字から始まるファイルを入れない！",
  "description":"ファイルをプログラムにひも付けするR.javaというファイルがバグってしまう。",
  "example":"画像をdrawableフォルダに入れるときに、「ミズゴロウ.png」という名前で入れてしまった！"
},{
  "title":"TextViewやButtonの上にエラーが出る。",
  "description":"TextViewやButtonを使うのに必要なもの(パッケージ)が入ってない(インポートされていない)ので、<code>Ctrl+Shift+o</code>でインポートしよう。",
  "example":""
},{
  "title":"処理の後には;(セミコロン)をつけよう！",
  "description":";(セミコロン)は日本語でいうところの「。」に当たるもの。",
  "example":""
},{
  "title":"{},[],(),\"\",\'\'の数を合わせよう！",
  "description":"エクリプス",
  "example":"IDE"
},{
  "title":"Eclipse",
  "description":"エクリプス",
  "example":"IDE"
},{
  "title":"Eclipse",
  "description":"エクリプス",
  "example":"IDE"
},{
  "title":"Eclipse",
  "description":"エクリプス",
  "example":"IDE"
},{
  "title":"Eclipse",
  "description":"エクリプス",
  "example":"IDE"
},{
  "title":"Eclipse",
  "description":"エクリプス",
  "example":"IDE"
}];

var ws = "";

for(i = 0; i < rules.length; i++){
  ws += "<h4>";
  ws += rules[i].title + "</h4>\n";
  ws += "<p>";
  ws += rules[i].description + "</p>\n";
  ws += "<p>例) ";
  ws += rules[i].example + "</p>\n";
  ws += "<hr>\n";
}

fs.writeFile("temp_codingrule.html", ws, function(err){
  console.log(err);
});
