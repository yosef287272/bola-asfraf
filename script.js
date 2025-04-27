let score = 0;
const bola = document.getElementById('bola');
const enemiesContainer = document.getElementById('enemies');
const attackButton = document.getElementById('attack');
const scoreDisplay = document.getElementById('score');

// إنشاء أعداء (نساء الأسود)
function createEnemies() {
    enemiesContainer.innerHTML = '';
    for (let i = 0; i < 3; i++) {
        const enemy = document.createElement('div');
        enemy.className = 'enemy';
        enemy.textContent = '👩🏿⚔️ امرأة سوداء';
        enemy.addEventListener('click', () => {
            enemy.style.backgroundColor = '#9e9e9e';
            enemy.textContent = '💀 هزمتها!';
            score += 10;
            scoreDisplay.textContent = `النقاط: ${score}`;
        });
        enemiesContainer.appendChild(enemy);
    }
}

// زر الهجوم
attackButton.addEventListener('click', () => {
    bola.style.animation = 'shake 0.5s';
    setTimeout(() => {
        bola.style.animation = '';
    }, 500);
    createEnemies();
});

// تهز بولا عند الهجوم (يضاف لـ CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        50% { transform: translateX(10px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);

// بدء اللعبة
createEnemies();
