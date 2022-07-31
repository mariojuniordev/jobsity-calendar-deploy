export function convertFromCelsiusToFarenheit(value: number | undefined) {
    if (!value) {
        return;
    }

    const tempInFarenheit = (value*9/5) + 32

    return `${tempInFarenheit.toFixed(2)} °F`;
}