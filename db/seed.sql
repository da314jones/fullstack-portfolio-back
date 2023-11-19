/c journal_dev;

INSERT INTO ActivitySuggestions (title, description, moodRating)
VALUES 
('Take a Walk', 'A short walk in nature can boost your mood.', 3, false),
('Read a Book', 'Reading is a great way to escape and relax.', 4, true),
('Meditation', 'Try a 10-minute meditation to clear your mind.', 2, false),
('Yoga', 'Engage in a relaxing yoga session.', 3, false),
('Veteran Community Meetup', 'Meet and share experiences with other veterans.', 3, true),
('Journaling', 'Write down your thoughts to understand them better.', 4, true),
('Listen to Music', 'Listen to your favorite calming music.', 2, false),
('Gardening', 'Spending time with plants can be very therapeutic.', 3, false),
('Cook a Meal', 'Cooking something you love can be a great mood lifter.', 4, false),
('Exercise', 'Engaging in physical exercise can boost your mood.', 4, true),
('Painting', 'Express yourself through painting or drawing.', 3, false);

INSERT INTO JournalEntries (date, mood, description)
VALUES 
('2023-03-01', 5, 'Felt quite good today.', 'Felt a sense of camaraderie at the veteran meeting.'),
('2023-03-02', 3, 'Today was challenging.', 'Reminded of service times.'),
('2023-03-03', 4, 'Better than yesterday, had a nice walk.', ''),
('2023-03-04', 2, 'Feeling down, not a great day.', 'Struggling with service memories.'),
('2023-03-05', 5, 'Very productive and positive day.', ''),
('2023-03-06', 4, 'Content and calm.',''),
('2023-03-07', 1, 'Struggled a lot today.', 'Had a tough therapy session, but it was necessary.'),
('2023-03-08', 2, 'A bit low, but managed to get some work done.', ''),
('2023-03-09', 3, 'Average day, nothing special.'), '',
('2023-03-10', 4, 'Feeling good, had a good conversation with a friend.', 'Talked to an old service buddy.');


