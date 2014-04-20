//fs.js

var fs = require('fs');
var datas = [
  {
  "name":"Eclipse",
  "yomi":"エクリプス",
  "class": "file",
  "content":"IDE"
},{
  "name":"AndroidManifest.xml",
  "yomi":"アンドロイドマニフェスト・ドット・エックスエムエル",
  "class": "file",
  "content":"アプリの設定、必要な権限や、使用する画面などを記述するファイル"
},{
  "name":"srcフォルダ",
  "yomi":"Source(ソース)フォルダ",
  "class": "dir",
  "content":".javaファイルが入っているフォルダ。(例：MainActivity.java)"
},{
  "name":"resフォルダ",
  "yomi":"Resource(リソース)フォルダ",
  "class": "dir res",
  "content":"画像(drawable)やレイアウト(layout)が入っているフォルダ"
},{
  "name":"res/layoutフォルダ",
  "yomi":"Layout(レイアウト)フォルダ",
  "class": "dir res_content",
  "content":"レイアウトファイルが入っているフォルダ(例：activity_main.xml)"
},{
  "name":"res/drawable-*dpiフォルダ",
  "yomi":"Drawable(ドローワブル)フォルダ",
  "class": "dir res_content",
  "content":"アイコンなどの画像が入っているフォルダ(例：ic_launcher.png)"
},{
  "name":"res/menuフォルダ",
  "yomi":"Menu(メニュー)フォルダ",
  "class": "dir res_content",
  "content":"メニュー用レイアウトファイルが入っているフォルダ。(例：activity_main.xml)"
},{
  "name":"res/values*フォルダ",
  "yomi":"Values(レイアウト)フォルダ",
  "class": "dir res_content",
  "content":"アプリ内で使用する文章や数値を保存するファイルが入っているフォルダ。(例：strings.xml)"
},{
  "name":"gen",
  "yomi":"Gen(Generated)フォルダ",
  "class": "dir top",
  "content":"自動で生成されるフォルダ（触る必要はない）"
},{
  "name":"bin",
  "yomi":"Bin(Binary)フォルダ",
  "class": "dir top",
  "content":"自動で生成されるフォルダ（触る必要はない）"
},{
  "name":"libs",
  "yomi":"Libs(Libraries)フォルダ",
  "class": "dir top",
  "content":"アプリで使用するライブラリを入れるフォルダ"
},{
  "name":"assets",
  "yomi":"Assets(アセッツ)フォルダ",
  "class": "dir top",
  "content":"resフォルダと似ているが、使い方などが違う（あまり触らない）"
},{
  "name":"proguard-project.txt",
  "yomi":"プロガードプロジェクト・ドット・テキスト",
  "class": "file top",
  "content":"セキュリティ対策用のファイル（触る必要はない）"
},{
  "name":"project.properties",
  "yomi":"プロジェクトプロパティーズ",
  "class": "file top",
  "content":"アプリのターゲットSDKなどを記述するファイル（あまり触らない）"
}];

var ws = "<div id=\"about_eclipse\">\n";

for(i = 0; i < datas.length; i++){
  var data_class = datas[i].class;
  ws += "<div class=\"" + data_class + "\">\n";
  ws += "\t <div class=\"name\">";
  ws += "<a class=\"nojump\" href=\"#\">";
  if (data_class.indexOf("dir") != -1) {
    ws += "<i class=\"fa fa-folder\"></i> ";
  } else if (data_class.indexOf("file") != -1) {
    ws += "<i class=\"fa fa-file-text\"></i> ";
  }
  ws += "</a>";
  ws += "<a class=\"nojump\" href=\"#\">" + datas[i].name + "</a></div>\n";
  ws += "\t";
  ws += "\t <div class=\"description\">\n<div class=\"yomi\">" + datas[i].yomi + "</div>\n";
  ws += "\t";
  ws += "\t <div class=\"content\">" + datas[i].content + "</div>\n";
  ws += "</div>\n</div>\n";
}
ws += "</div>\n";
fs.writeFile("temp.html", ws, function(err){
  console.log(err);
});
>>>>>>> kom
