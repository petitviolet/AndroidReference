//coding_rule.js

var fs = require('fs');

var rules = [
  {
  "title":"日本語のファイル、数字から始まるファイルを入れない！",
  "description":"ファイルをプログラムにひも付けするR.javaというファイルがバグってしまう。",
  "example":"画像をdrawableフォルダに入れるときに、「ミズゴロウ.png」という名前で入れてしまった！"
},{
  "title":"Eclipse",
  "description":"エクリプス",
  "example":"IDE"
},{
  "title":"",
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
},{
  "title":"Eclipse",
  "description":"エクリプス",
  "example":"IDE"
}];

var ws = "";

for(i = 0; i < rules.length; i++){
  ws += "<h4>\n\t";
  ws += rules[i].title + "</h4>\n";
  ws += "\t<p>";
  ws += rules[i].description + "</p>\n";
  ws += "\t<p>";
  ws += rules[i].example + "</p>\n";
  ws += "<hr>\n";
}

fs.writeFile("temp_codingrule.html", ws, function(err){
  console.log(err);
});
