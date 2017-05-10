export function Reverse() {
    return function(input) {
        if (typeof input !== 'string') return;

        return input.split("").reverse().join("");
    };
}
