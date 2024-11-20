function generateMessages() {
    const baseMessage = document.getElementById('baseMessage').value;
    let variable = document.getElementById('variable').value.split(',');
    const repeatCount = parseInt(document.getElementById('repeatCount').value, 10);
    const outputMessages = document.getElementById('outputMessages');

    // 入力チェック
    if (!baseMessage || variable.length === 0 || isNaN(repeatCount)) {
        alert("メッセージ、変数、または送信回数を正しく入力してください。");
        return;
    }

    // 変数の数を200に制限
    if (variable.length > 200) {
        alert("変数の数は最大200個までです。");
        return;
    }

    // 送信回数の制限
    if (repeatCount > 200) {
        alert("送信回数は最大200回までです。");
        return;
    }

    let generatedMessages = "";

    for (let i = 0; i < repeatCount; i++) {
        const currentVariable = variable[i % variable.length]; // 繰り返し変数を利用
        generatedMessages += baseMessage.replace(/\{var\}/g, currentVariable) + "\n";
    }

    outputMessages.value = generatedMessages.trim();
}

function copyMessages() {
    const outputMessages = document.getElementById('outputMessages');
    outputMessages.select();
    document.execCommand('copy');
    alert("生成されたメッセージをコピーしました！");
}
