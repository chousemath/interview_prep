class Meeting
  def initialize(start_time, end_time)
    @start_time = start_time
    @end_time = end_time
  end

  def start_time
    @start_time
  end

  def end_time
    @end_time
  end
end

meetings = [
  Meeting.new(0, 1),
  Meeting.new(3, 6),
  Meeting.new(3, 5),
  Meeting.new(4, 8),
  Meeting.new(10, 12),
  Meeting.new(9, 10)
]

unique_start_times = {}
meetings.each do |meeting|
  if unique_start_times[meeting.start_time].nil? || unique_start_times[meeting.start_time] < meeting.end_time
    unique_start_times[meeting.start_time] = meeting.end_time
  end
end

puts unique_start_times