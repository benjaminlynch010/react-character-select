CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path varchar(255),
	description varchar(255),
	likes integer
);

INSERT INTO gallery ("path", "description", "likes")
VALUES   
  ('images/Sol.png', 'Sol Badguy', 0 ),
  ('images/Baiken.png', 'Baiken', 0 ),
  ('images/Johnny.png', 'Johnny', 0 ),
  ('images/Chipp.png', 'Chipp Zanuff', 0 ),
  ('images/Bridget.png', 'Bridget', 0 ),
  ('images/Millia.png', 'Millia Rage', 0 ),
  ('images/Venom.png', 'Venom', 0 ),
  ('images/Zato.png', 'Zato-One / Eddie', 0 ),
  ('images/sol-explode.gif', 'Tyrant Rave', 0 );
  
  DROP TABLE gallery;