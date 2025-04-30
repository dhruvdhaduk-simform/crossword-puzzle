export function formatDuration(duration: number): string {
    let seconds = Math.floor(duration / 1000);

    const minutes = Math.floor(seconds / 60);

    seconds = seconds - 60 * minutes;

    return `${minutes}:${seconds}`;
}
