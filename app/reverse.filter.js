export function ReverseFilter() {
    return function(input) {
        if (typeof input === 'string') {
            return input.split("").reverse().join("");
        } else if (angular.isArray(input)) {
            // à deboguer !
            const res = angular.copy(input);
            return res.reverse();
        }


    };
}
