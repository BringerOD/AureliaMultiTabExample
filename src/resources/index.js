export function configure(aurelia) {

    var resourcePaths = [
        // './operation-status',
        // './array-exclude-deleted',
        // './array-random',
        // './currency',
        // './date-format',
        // './date-day-name',
        // './date-day-number',
        // './date-normalise',
        // './date-timesince',
        // './date-year',
        // './default-value',
        // './first-item',
        // './last-item',
        // './numeric-divisibleby',
        // './numeric-filesizeformat',
        // './numeric-to-number',
        // './numeric-floatformat',
        // './numeric-tofixed.js',
        // './numeric-to-ordinal',
        // './object-entries',
        // './object-keys',
        './object-to-string'
        // './object-values',
        // './sort-array',
        // './string-capitalize',
        // './string-cut',
        // './string-to-lowercase',
        // './string-to-uppercase',
        // './string-truncate',
        // './numeric-percentage'
    ];

    aurelia.globalResources(resourcePaths);
}
