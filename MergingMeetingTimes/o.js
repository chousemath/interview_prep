/*
 * Your company built an in-house calendar tool called HiCal.
 * You want to add a feature to see the times in a day when everyone is available.
*/
var meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
];
var mergeRanges = function (meetings) {
    var uniqueStartTimes = {};
    meetings.forEach(function (m) { return uniqueStartTimes[m.startTime.toString()] = m.endTime; });
    var uniqueStartTimesArray = Object.keys(uniqueStartTimes).map(function (k) {
        return {
            startTime: parseInt(k, 10),
            endTime: uniqueStartTimes[k]
        };
    });
    // could try sorting by startTime
    var result = [];
    var sortedMeetings = uniqueStartTimesArray.sort(function (a, b) { return a.startTime - b.startTime; });
    for (var i = 0; i < meetings.length - 1; i++) {
        if (sortedMeetings[i].startTime + sortedMeetings[i].endTime < sortedMeetings[i + 1].startTime) {
            result.push(sortedMeetings[i]);
        }
        else {
            result.push({ startTime: sortedMeetings[i].startTime, endTime: sortedMeetings[i + 1].endTime });
            i++;
        }
    }
    return result;
};
console.log(mergeRanges(meetings));
