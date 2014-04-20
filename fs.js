//fs.js

var fs = require('fs');
var datas = [
  {
  "name":"Eclipse",
  "yomi":"エクリプス",
  "class": "top",
  "content":"IDE"
},{
  "name":"AndroidManifest.xml",
  "yomi":"アンドロイドマニフェスト・ドット・エックスエムエル",
  "class": "top",
  "content":"アプリの設定、必要な権限や、使用する画面などを記述するファイル"
},{
  "name":"srcフォルダ",
  "yomi":"Source(ソース)フォルダ",
  "class": "top",
  "content":".javaファイルが入っているフォルダ。(例：MainActivity.java)"
},{
  "name":"resフォルダ",
  "yomi":"Resource(リソース)フォルダ",
  "class": "top res",
  "content":"画像(drawable)やレイアウト(layout)が入っているフォルダ"
},{
  "name":"res/layoutフォルダ",
  "yomi":"Layout(レイアウト)フォルダ",
  "class": "res",
  "content":"レイアウトファイルが入っているフォルダ(例：activity_main.xml)"
},{
  "name":"res/drawable-*dpiフォルダ",
  "yomi":"Drawable(ドローワブル)フォルダ",
  "class": "res",
  "content":"アイコンなどの画像が入っているフォルダ(例：ic_launcher.png)"
},{
  "name":"res/menuフォルダ",
  "yomi":"Menu(メニュー)フォルダ",
  "class": "res",
  "content":"メニュー用レイアウトファイルが入っているフォルダ。(例：activity_main.xml)"
},{
  "name":"res/values*フォルダ",
  "yomi":"Values(レイアウト)フォルダ",
  "class": "res",
  "content":"アプリ内で使用する文章や数値を保存するファイルが入っているフォルダ。(例：strings.xml)"
},{
  "name":"gen",
  "yomi":"Gen(Generated)フォルダ",
  "class": "top",
  "content":"自動で生成されるフォルダ（触る必要はない）"
},{
  "name":"bin",
  "yomi":"Bin(Binary)フォルダ",
  "class": "top",
  "content":"自動で生成されるフォルダ（触る必要はない）"
},{
  "name":"libs",
  "yomi":"Libs(Libraries)フォルダ",
  "class": "top",
  "content":"アプリで使用するライブラリを入れるフォルダ"
},{
  "name":"assets",
  "yomi":"Assets(アセッツ)フォルダ",
  "class": "top",
  "content":"resフォルダと似ているが、使い方などが違う（あまり触らない）"
},{
  "name":"proguard-project.txt",
  "yomi":"プロガードプロジェクト・ドット・テキスト",
  "class": "top",
  "content":"セキュリティ対策用のファイル（触る必要はない）"
},{
  "name":"project.properties",
  "yomi":"プロジェクトプロパティーズ",
  "class": "top",
  "content":"アプリのターゲットSDKなどを記述するファイル（あまり触らない）"
}];
var ws="";

for(i=0;i<datas.length;i++){
  ws += "<div class=\"" + datas[i].class + "\">\n";
  ws += "\t <div class=\"name\">"
  if (datas[i].class == "top") {
    ws += "<i class=\"fa fa-folder\"></i>"
  }
  ws += datas[i].name + "</div>\n";
  ws += "\t";
  ws += "\t <div class=\"yomi\">" + datas[i].yomi + "</div>\n";
  ws += "\t";
  ws += "\t <div class=\"content\">" + datas[i].content + "</div>\n";
  ws += "</div>\n";
}
fs.writeFile("temp.html", ws, function(err){
  console.log(err);
});
