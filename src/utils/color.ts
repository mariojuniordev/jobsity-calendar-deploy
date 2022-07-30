export function colorPicker(value: string | undefined) {
    if (value === 'var(--green)') {
        return 'green'
    }
    if (value === 'var(--gray-blue)') {
        return 'gray blue'
    }
    if (value === 'var(--cyan)') {
        return 'cyan'
    }
    if (value === 'var(--pink)') {
        return 'pink'
    }
}