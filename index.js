function arrayConvert(input) {
    if (typeof input === 'undefined' || input === null || isNaN(input) || (typeof input === 'string' && !input)) {
        return [];
    }
    
    if (Array.isArray(input)) {
        return input;
    }

    return [ input ];
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = arrayConvert;
}