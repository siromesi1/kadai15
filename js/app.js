//読み込み完了後に実行する
$(function() {
    //#btnがクリックされたとき
    $('#btn').on('click', function(){

        //入力データを取得

        $.ajax({
            //送信方法

            //リクエスト先のURLを設定

            //送信データの設定

        }).done(function(data){

            //JSONデータを解析
            let result = JSON.parse(data);

            //解析データを整形
            // result.messageとresult.timeを改行で結合
            let text = result.no + '\n' + result.score;
  
            $("#ajax_return").text(text);

        }).fail(function(data){
            //通信が失敗したときの処理
            alert("通信に失敗しました");
        });
    });
});
