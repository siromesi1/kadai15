//読み込み完了後に実行する
$(function() {
    //#btnがクリックされたとき
    $('#btn').on('click', function(){

        //入力データを取得
        let input_no = $("[name='no']").val();
        let input_score = $("[name='score']").val();
        $.ajax({
            //送信方法
            type:'POST',
            //リクエスト先のURLを設定
            url: 'api.php',
            //送信データの設定
            data : {no:input_no, score:input_score},
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
