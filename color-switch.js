const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body'),
}

const colorSwitch = {
    start() {
        refs.startBtn.setAttribute('disabled', '')

        this.colorSwitchId = setInterval(() => {
            const randomIntegerFromInterval = () => {
                const max = colors.length - 1;
                const min = 0
                return Math.floor(Math.random() * (max - min + 1) + min);
            };
            const randomColor = colors[randomIntegerFromInterval()];
            const style = `background-color: ${randomColor}`;

            refs.body.setAttribute('style', style)
        }, 1000);
    },

    stop() {
        clearInterval(this.colorSwitchId);
        refs.startBtn.removeAttribute('disabled')
    }
}

refs.startBtn.addEventListener('click', () => {
    colorSwitch.start()
});

refs.stopBtn.addEventListener('click', () => {
    colorSwitch.stop()
});


