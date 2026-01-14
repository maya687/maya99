document.addEventListener(DOMContentLoaded", O =>{
const launchBtn = document.getElementById("launch-btn");
const pathInput = document.getElementById(program-path");
launchBtn.addEventListener(&quot;click&quot;, () =&gt; {
const url = pathInput.value.trim();
if (!url) {
alert(&quot;index.html の場所を入力してください。&quot;);
return;
}
// 別タブ（新しい画面）で開く
// 発表レイアウトの画面はそのまま残る
window.open(url, &quot;_blank&quot;);
});
});
④ GitHub でimages フォルダにimage.pngをアップロード
（ゲームの1画面をスクリーンショットし、ファイル名image.pngを作成している前提）
「Add file」をクリック
「Create new file」を押す
ファイル名に次を入力
images/.gitkeep
images/ と入力すると フォルダが作れる
一番下の緑ボタン「Commit new file」を押す
images フォルダの上で右クリック →「Upload…」から image.png をアップロード
（またはドラッグ＆ドロップ）