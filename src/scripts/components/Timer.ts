function Timer(
    gameElapsedTime: number,
    timerMutationCallbacks: Array<(newElapsedTime: number) => void>
) {
    const timerElement = document.createElement('div');

    timerElement.textContent = `${gameElapsedTime}`;

    timerMutationCallbacks.push((newElapsedTime) => {
        timerElement.textContent = `${newElapsedTime}`;
    });

    return timerElement;
}

export default Timer;
