/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    const split1 = word1.split('')
    const split2 = word2.split('');
    let merged = '';

    const bigger = split1.length > split2.length ? split1.length : split2.length

    for (let i = 0; i < bigger; i++) {
        merged += word1[i] ?? '';
        merged += word2[i] ?? '';
    }

    return merged;
};

