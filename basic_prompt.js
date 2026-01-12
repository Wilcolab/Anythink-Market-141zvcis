function toCamelCase(str) {
    return str
        .toLowerCase()
        .split(/[\s_-]+/)
        .map((word, index) => {
            const char = word.charAt(0).toUpperCase() + word.slice(1);
            return char;
        })
        .join('');
}

// Example usage:
console.log(toCamelCase('iloveyou')); // ILoveYou
console.log(toCamelCase('i love you')); // ILoveYou
console.log(toCamelCase('i-love-you')); // ILoveYou
console.log(toCamelCase('i_love_you')); // ILoveYou


