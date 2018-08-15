const subdomainVisits = (cpdomains: Array<string>): Array<string> => {
  const clicks = {};
  let cpdomainArray: Array<string>;
  let cpdomainSite: Array<string>;
  let clickCount: number;
  let twoWords: string;
  for (let cpdomain of cpdomains) {
    cpdomainArray = cpdomain.split(' ');
    clickCount = parseInt(cpdomainArray[0]);
    clicks[cpdomainArray[1]] = clicks[cpdomainArray[1]] ? clicks[cpdomainArray[1]] + clickCount : clickCount;
    cpdomainSite = cpdomainArray[1].split('.');
    clicks[cpdomainSite[cpdomainSite.length - 1]] = clicks[cpdomainSite[cpdomainSite.length - 1]] ? clicks[cpdomainSite[cpdomainSite.length - 1]] + clickCount : clickCount;
    if (cpdomainSite.length === 3) {
      twoWords = cpdomainSite[1] + '.' + cpdomainSite[2]
      clicks[twoWords] = clicks[twoWords] ? clicks[twoWords] + clickCount : clickCount;
    }
  }
  const clickArray: Array<string> = [];
  for (let key in clicks) clickArray.push(clicks[key] + ' ' + key);
  return clickArray;
};
console.log(subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]));
