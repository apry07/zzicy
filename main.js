let isRunning = false;
let intervalId;

function startAutoSimulation() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(runSimulation, 1000); // 1초마다 실행
    }
}

function stopAutoSimulation() {
    clearInterval(intervalId);
    isRunning = false;
}

function runSimulation() {
    const numTrials = 1000;
    const numQuestions = 20;
    let accuracyList = [];

    for (let t = 0; t < numTrials; t++) {
        let correct = 0;

        for (let q = 0; q < numQuestions; q++) {
            const answer = Math.floor(Math.random() * 5) + 1;
            const guess = Math.floor(Math.random() * 5) + 1;
            if (answer === guess) {
                correct++;
            }
        }

        const accuracy = correct / numQuestions;
        accuracyList.push(accuracy);
    }

    const avg = (accuracyList.reduce((a, b) => a + b) / numTrials) * 100;
    const min = Math.min(...accuracyList) * 100;
    const max = Math.max(...accuracyList) * 100;

    const resultDiv = document.getElementById('result');
    const newResult = document.createElement('div');
    newResult.innerHTML = `
        <hr>
        <p>평균 정답률: <b>${avg.toFixed(2)}%</b></p>
        <p>최소 정답률: <b>${min.toFixed(2)}%</b></p>
        <p>최대 정답률: <b>${max.toFixed(2)}%</b></p>
    `;
    resultDiv.appendChild(newResult);
}