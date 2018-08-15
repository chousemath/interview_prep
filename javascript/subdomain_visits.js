var subdomainVisits = function (cpdomains) {
    var clicks = {};
    var cpdomainArray;
    var cpdomainSite;
    var clickCount;
    var twoWords;
    for (var _i = 0, cpdomains_1 = cpdomains; _i < cpdomains_1.length; _i++) {
        var cpdomain = cpdomains_1[_i];
        cpdomainArray = cpdomain.split(' ');
        clickCount = parseInt(cpdomainArray[0]);
        clicks[cpdomainArray[1]] = clicks[cpdomainArray[1]] ? clicks[cpdomainArray[1]] + clickCount : clickCount;
        cpdomainSite = cpdomainArray[1].split('.');
        clicks[cpdomainSite[cpdomainSite.length - 1]] = clicks[cpdomainSite[cpdomainSite.length - 1]] ? clicks[cpdomainSite[cpdomainSite.length - 1]] + clickCount : clickCount;
        if (cpdomainSite.length === 3) {
            twoWords = cpdomainSite[1] + '.' + cpdomainSite[2];
            clicks[twoWords] = clicks[twoWords] ? clicks[twoWords] + clickCount : clickCount;
        }
    }
    var clickArray = [];
    for (var key in clicks)
        clickArray.push(clicks[key] + ' ' + key);
    return clickArray;
};
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
