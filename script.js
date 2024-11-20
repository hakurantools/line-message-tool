function generateMessages() {
    const baseMessage = document.getElementById('baseMessage').value;
    const variable = document.getElementById('variable').value.split(',');
    const repeatCount = parseInt(document.getElementById('repeatCount').value, 10);
    const outputMessages = document.getElementById('outputMessages');

    if (!baseMessage || !variable.length || isNaN(repeatCount)) {
        alert("メッセージ、変数、または送信回数を正しく入力してください。");
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
