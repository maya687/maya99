document.addEventListener("DOMContentLoaded", () => {
  const launchBtn = document.getElementById("launch-btn");
  const pathInput = document.getElementById("program-path");
  launchBtn.addEventListener("click", () => {
    const url = pathInput.value.trim();
    if (!url) {
      alert("index.html の場所を入力してください。");
      return;
    }
    // 別タブ（新しい画面）で開く
    // 発表レイアウトの画面はそのまま残る
    window.open(url, "_blank");
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