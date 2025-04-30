import { formatDuration } from '../utils/formatDuration';

function Timer(
    gameElapsedTime: number,
    timerMutationCallbacks: Array<(newElapsedTime: number) => void>
) {
    const timerElement = document.createElement('div');
    timerElement.className = 'timer';

    timerElement.textContent = `Timer ${formatDuration(gameElapsedTime)}`;

    timerMutationCallbacks.push((newElapsedTime) => {
        timerElement.textContent = `Timer ${formatDuration(newElapsedTime)}`;
    });

    return timerElement;
}

export default Timer;
