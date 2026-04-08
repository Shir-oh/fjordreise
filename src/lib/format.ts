export function formatDuration(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (remainingMinutes === 0) {
        return `${hours}t`;
    }
    return `${hours}t ${remainingMinutes}m`;
}