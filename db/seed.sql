\c journal_dev;

INSERT INTO activities (title, description, mood_rating, is_veteran_specific)
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

INSERT INTO entries (date, mood, description, service_related_notes, custom_activity, activity_rating, activity_id)
VALUES 
('2023-03-01', 5, 'Feeling optimistic, had a good start to the month.', NULL, 'Morning meditation', 4, NULL),
('2023-03-02', 2, 'Felt stressed due to work.', 'Anxiety about upcoming reunion', NULL, NULL, 3),
('2023-03-03', 4, 'Today was better, managed to finish my tasks.', NULL, 'Evening yoga session', 5, NULL),
('2023-03-04', 3, 'Average day, nothing much to report.', 'Missed my old unit', NULL, NULL, 6),
('2023-03-05', 4, 'Productive and positive day.', NULL, 'Cooked a new recipe', 4, NULL),
('2023-03-06', 1, 'Struggled with some personal issues.', 'Had a tough therapy session', NULL, NULL, 7),
('2023-03-07', 5, 'Great day with family.', NULL, 'Family hiking trip', 5, NULL),
('2023-03-08', 3, 'Normal day, work was fine.', NULL, 'Read a new book', 3, NULL),
('2023-03-09', 2, 'Feeling a bit low today.', 'Had some flashbacks', NULL, NULL, 8),
('2023-03-10', 4, 'Feeling better, met an old friend.', NULL, 'Went for a walk in the park', 4, NULL),
('2023-03-11', 3, 'Normal day, nothing special.', NULL, 'Tried painting', 3, NULL),
('2023-03-12', 5, 'Really good day, felt energetic and happy.', NULL, 'Participated in a community event', 5, NULL);
