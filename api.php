<?php

$msg_no = "学籍番号： ".$_POST['no'];
$msg_score = "点数： ".$_POST['score'];

// 返却するデータを作成（PHPの連想配列）
$data = [
    'no' => $msg_no,
    'score' => $msg_score
];
// 連想配列をJSON形式の文字列に変換して出力
echo json_encode($data);
exit;

// 参考ページ
// https://codelikes.com/jquery-php-ajax/
?>
