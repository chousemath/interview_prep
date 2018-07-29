from pprint import pprint


class Meeting:
    def __init__(self, start_time, end_time):
        self.start_time = start_time
        self.end_time = end_time


MEETINGS = [
    Meeting(0, 1),
    Meeting(3, 5),
    Meeting(4, 8),
    Meeting(10, 12),
    Meeting(9, 10)
]
UNIQUE_START_TIMES = {}

for meeting in MEETINGS:
    UNIQUE_START_TIMES[meeting.start_time] = meeting.end_time

MEETINGS = []
for meeting_key in UNIQUE_START_TIMES:
    MEETINGS.append(
        Meeting(
            meeting_key,
            UNIQUE_START_TIMES[meeting_key]
        )
    )

SORTED_MEETINGS = sorted(MEETINGS, key=lambda x: x.start_time)

RESULT = []

SKIP_INDEX = -1
for index in list(range(len(SORTED_MEETINGS) - 1)):
    if index == SKIP_INDEX:
        continue
    curr_meeting = SORTED_MEETINGS[index]
    next_meeting = SORTED_MEETINGS[index + 1]
    if curr_meeting.start_time + curr_meeting.end_time < next_meeting.start_time:
        RESULT.append(curr_meeting)
    else:
        RESULT.append(
            Meeting(
                curr_meeting.start_time,
                next_meeting.end_time
            )
        )
        SKIP_INDEX = index + 1

pprint(list(map(lambda x: (x.start_time, x.end_time), RESULT)))
