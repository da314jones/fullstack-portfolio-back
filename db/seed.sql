\c journal_dev;

INSERT INTO activities (title, description, mood_rating, is_veteran_specific) VALUES
('Hiking', 'Exploring nature trails and enjoying the outdoors.', 4, false),
('Photography', 'Capturing moments and scenes to express creativity.', 3, false),
('Cooking Class', 'Learning new recipes and cooking techniques.', 4, false),
('Volunteering', 'Giving back to the community through volunteer work.', 5, true),
('Bird Watching', 'Observing wildlife and enjoying the tranquility of nature.', 3, false),
('Cycling', 'Biking through different terrains for fitness and fun.', 4, false),
('Art Therapy', 'Using art to express feelings and boost mental health.', 4, true),
('Book Club', 'Reading and discussing books with a group.', 3, false),
('Museum Visit', 'Exploring history and culture at a museum.', 3, false),
('Fishing', 'Relaxing by the water and practicing patience.', 3, false),
('Woodworking', 'Creating and building with wood.', 4, false),
('Music Lessons', 'Learning to play a musical instrument.', 4, false),
('Stargazing', 'Observing the night sky and learning about astronomy.', 3, false),
('Kayaking', 'Paddling in the water for adventure and relaxation.', 4, false),
('Rock Climbing', 'Challenging oneself with indoor or outdoor climbing.', 5, false);

INSERT INTO moods (adjective) VALUES 
('Anxious'), 
('Calm'), 
('Energetic'), 
('Excited'),
('Happy'), 
('Irritated'), 
('Optimistic'), 
('Relaxed'), 
('Sad'), 
('Stressed');

INSERT INTO entries (date, mood_adjective_id, mood, description, service_related_notes, custom_activity, activity_rating, activity_id) VALUES
('2023-03-23', (SELECT id FROM moods WHERE adjective = 'Stressed'), 1, 'Health issues caused anxiety.', 'Health worries', NULL, NULL, NULL),
('2023-03-24', (SELECT id FROM moods WHERE adjective = 'Energetic'), 3, 'Joined a dance class.', NULL, 'Dancing', 4, NULL),
('2023-03-25', (SELECT id FROM moods WHERE adjective = 'Relaxed'), 4, 'Listened to my favorite music.', NULL, 'Music listening', 3, (SELECT id FROM activities WHERE title = 'Listen to Music')),
('2023-03-26', (SELECT id FROM moods WHERE adjective = 'Anxious'), 2, 'Nervous about an upcoming interview.', 'Job interview anxiety', NULL, NULL, NULL),
('2023-03-27', (SELECT id FROM moods WHERE adjective = 'Happy'), 5, 'Cooked a special meal for friends.', NULL, 'Cooking', 4, (SELECT id FROM activities WHERE title = 'Cook a Meal')),
('2023-03-28', (SELECT id FROM moods WHERE adjective = 'Calm'), 3, 'Spent the day journaling my thoughts.', NULL, 'Journaling', 3, (SELECT id FROM activities WHERE title = 'Journaling')),
('2023-03-29', (SELECT id FROM moods WHERE adjective = 'Optimistic'), 4, 'Went hiking and enjoyed the scenery.', NULL, 'Hiking', 4, (SELECT id FROM activities WHERE title = 'Hiking')),
('2023-03-30', (SELECT id FROM moods WHERE adjective = 'Irritated'), 2, 'Difficult day at work.', 'Work stress', NULL, NULL, NULL),
('2023-03-31', (SELECT id FROM moods WHERE adjective = 'Excited'), 5, 'Started a new hobby, feeling enthusiastic.', NULL, 'Photography', 4, (SELECT id FROM activities WHERE title = 'Photography')),
('2023-04-01', (SELECT id FROM moods WHERE adjective = 'Sad'), 1, 'Reflecting on some past events.', 'Personal reflection', NULL, NULL, NULL),
('2023-04-02', (SELECT id FROM moods WHERE adjective = 'Energetic'), 3, 'Went cycling, felt energized.', NULL, 'Cycling', 4, (SELECT id FROM activities WHERE title = 'Cycling')),
('2023-04-03', (SELECT id FROM moods WHERE adjective = 'Relaxed'), 4, 'Enjoyed a day of bird watching.', NULL, 'Bird Watching', 3, (SELECT id FROM activities WHERE title = 'Bird Watching')),
('2023-04-04', (SELECT id FROM moods WHERE adjective = 'Anxious'), 2, 'Worried about a family member.', 'Family concern', NULL, NULL, NULL),
('2023-04-05', (SELECT id FROM moods WHERE adjective = 'Happy'), 5, 'Had a fun day learning to cook new dishes.', NULL, 'Cooking Class', 4, (SELECT id FROM activities WHERE title = 'Cooking Class')),
('2023-04-06', (SELECT id FROM moods WHERE adjective = 'Calm'), 3, 'Volunteered at a local event, felt fulfilled.', NULL, 'Volunteering', 5, (SELECT id FROM activities WHERE title = 'Volunteering')),
('2023-04-07', (SELECT id FROM moods WHERE adjective = 'Optimistic'), 4, 'Engaged in art therapy, felt positive.', NULL, 'Art Therapy', 4, (SELECT id FROM activities WHERE title = 'Art Therapy'));
