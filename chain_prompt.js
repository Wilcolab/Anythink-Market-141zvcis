/**
 * Converts a string to Kebab Case
 * @param {string} str - The input string to convert
 * @returns {string} - The kebab-cased string
 * @throws {TypeError} - If input is not a string
 */
function toKebabCase(str) {
    // Type validation
    if (typeof str !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof str}`);
    }

    // Handle empty strings
    if (str.length === 0) {
        return '';
    }

    return str
        // Replace spaces, underscores, and dashes with spaces first
        .replace(/[\s_-]+/g, ' ')
        // Insert a dash before uppercase letters (for camelCase)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Replace any remaining spaces with dashes
        .replace(/\s+/g, '-')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing dashes
        .replace(/^-+|-+$/g, '')
        // Remove consecutive dashes
        .replace(/-+/g, '-');
}

// Example usage:
console.log(toKebabCase('HelloWorld'));           // hello-world
console.log(toKebabCase('hello world'));          // hello-world
console.log(toKebabCase('hello_world'));          // hello-world
console.log(toKebabCase('hello-world'));          // hello-world
console.log(toKebabCase('HELLO WORLD'));          // hello-world
console.log(toKebabCase('hello__world'));         // hello-world
console.log(toKebabCase('  hello  world  '));     // hello-world
console.log(toKebabCase(''));                     // ''