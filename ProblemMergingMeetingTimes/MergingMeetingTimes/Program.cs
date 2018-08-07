using System;

namespace MergingMeetingTimes
{
    class Meeting
    {
        public int startTime { get; set; }
        public int endTime { get; set; }
        public Meeting(int _startTime, int _endTime)
        {
            startTime = _startTime;
            endTime = _endTime;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Meeting[] meetings = {
                new Meeting(0, 1),
                new Meeting(3, 6),
                new Meeting(3, 5),
                new Meeting(4, 8),
                new Meeting(10, 12),
                new Meeting(9, 10)
            };

            for (int i = 0; i < meetings.Length; i++)
            {
                Console.WriteLine($"startTime: {meetings[i].startTime}, endTime: {meetings[i].endTime}");

            }
        }
    }
}
