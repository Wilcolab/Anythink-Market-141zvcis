

/**
 * Converts a given string to camel case format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @throws {Error} Throws an error if the input string is empty.
 * @throws {Error} Throws an error if the input string contains invalid characters (only letters, spaces, hyphens, and underscores are allowed).
 * @returns {string} The converted string in camel case format.
 *
 * @example
 * console.log(convertToCamelCase('iloveyou')); // ILoveYou
 * console.log(convertToCamelCase('i love you')); // ILoveYou
 * console.log(convertToCamelCase('i-love-you')); // ILoveYou
 * console.log(convertToCamelCase('i_love_you')); // ILoveYou
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string.
 * @throws {Error} Throws an error if the input string is empty.
 * @throws {Error} Throws an error if the input string contains invalid characters (only letters, spaces, hyphens, and underscores are allowed).
 * @returns {string} The converted string in dot.case format.
 *
 * @example
 * console.log(convertToDotCase('iloveyou')); // iloveyou
 * console.log(convertToDotCase('i love you')); // i.love.you
 * console.log(convertToDotCase('i-love-you')); // i.love.you
 * console.log(convertToDotCase('i_love_you')); // i.love.you
 */
// Prompt refining for errors

function convertToCamelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    if (str.trim() === '') {
        throw new Error('Input string cannot be empty');
    }
    if (!/^[a-zA-Z\s_-]+$/.test(str)) {
        throw new Error('Input string can only contain letters, spaces, hyphens, and underscores');
    }

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
console.log(convertToCamelCase('iloveyou')); // ILoveYou
console.log(convertToCamelCase('i love you')); // ILoveYou
console.log(convertToCamelCase('i-love-you')); // ILoveYou
console.log(convertToCamelCase('i_love_you')); // ILoveYou
console.log(convertToCamelCase(123)); // Throws error



// Convert string to dot.case format
function convertToDotCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    if (str.trim() === '') {
        throw new Error('Input string cannot be empty');
    }
    if (!/^[a-zA-Z\s_-]+$/.test(str)) {
        throw new Error('Input string can only contain letters, spaces, hyphens, and underscores');
    }

    return str
        .toLowerCase()
        .split(/[\s_-]+/)
        .join('.');
}

// Example usage:
console.log(convertToDotCase('iloveyou')); // iloveyou
console.log(convertToDotCase('i love you')); // i.love.you
console.log(convertToDotCase('i-love-you')); // i.love.you
console.log(convertToDotCase('i_love_you')); // i.love.you
console.log(convertToDotCase(123)); // Throws error



