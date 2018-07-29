/*
 * Your company built an in-house calendar tool called HiCal.
 * You want to add a feature to see the times in a day when everyone is available.
*/

interface Meeting {
  startTime: number; // the number of 30-minute blocks past 9:00am
  endTime: number; // the number of 30-minute blocks past 9:00am
}

const meetings: Array<Meeting> = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];

const mergeRanges = (meetings: Array<Meeting>): Array<Meeting> => {
  const uniqueStartTimes = {};
  meetings.forEach(m => uniqueStartTimes[m.startTime.toString()] = m.endTime);
  const uniqueStartTimesArray = Object.keys(uniqueStartTimes).map(k => {
    return {
      startTime: parseInt(k, 10),
      endTime: uniqueStartTimes[k]
    }
  });
  // could try sorting by startTime
  const result = [];
  const sortedMeetings = uniqueStartTimesArray.sort((a, b) => a.startTime - b.startTime);
  for (let i = 0; i < meetings.length - 1; i++) {
    if (sortedMeetings[i].startTime + sortedMeetings[i].endTime < sortedMeetings[i + 1].startTime) {
      result.push(sortedMeetings[i]);
    } else {
      result.push({ startTime: sortedMeetings[i].startTime, endTime: sortedMeetings[i + 1].endTime });
      i++;
    }
  }
  return result;
};

console.log(mergeRanges(meetings));