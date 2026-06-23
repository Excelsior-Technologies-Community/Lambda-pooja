CREATE DATABASE lambda_db;

USE lambda_db;


CREATE TABLE sliders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(500),
    title VARCHAR(255),
    description TEXT,
    button_text VARCHAR(100),
    status TINYINT DEFAULT 1
);

INSERT INTO sliders
(image,title,description,button_text)
VALUES

(
'https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/slideshow_image_1/1758302184/slide-01.jpg',
'CREATIVE. POWERFUL. CUSTOMIZABLE.',
'Lambda gives you creative freedom for your e-learning website.',
'Learn More'
),

(
'https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/slideshow_image_2/1758302184/slide-02b.jpg',
'Online learning you can access anywhere',
'Transform your Moodle site into the perfect learning platform.',
'Learn More'
),

(
'https://lambda-demo-01.redpithemes.com/pluginfile.php/1/theme_lambda2/slideshow_image_3/1758302184/slide-03.jpg',
'Teaching with Moodle',
'Create effective online teaching and learning experiences in a collaborative, private environment.',
'Learn More'
);
select * from sliders;
DELETE FROM sliders
WHERE id IN (4,5,6);



CREATE TABLE sections(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image VARCHAR(500)
);

DELIMITER $$

CREATE PROCEDURE AddSection(
    IN p_title VARCHAR(255),
    IN p_description TEXT,
    IN p_image VARCHAR(500)
)
BEGIN
    INSERT INTO sections(title, description, image)
    VALUES(p_title, p_description, p_image);
END $$

DELIMITER ;


CALL AddSection(
'Educational Institutions',
'From elementary schools to universities, enrich teaching methodologies and engage learners effectively.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-schools.jpg'
);


CALL AddSection(
'Corporate Training',
'Offer internal training and employee development programs, fostering continuous learning.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-corporate.jpg'
);


CALL AddSection(
'Online Course Platforms',
'Elevate your online course experience with a robust learning environment.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-online-courses.jpg'
);