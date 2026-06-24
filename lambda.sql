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
'From elementary schools to universities, enrich teaching methodologies and engage learners effectively across diverse educational levels.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-schools.jpg'
);


CALL AddSection(
'Corporate Training',
'Offer internal training and employee development programs, fostering continuous learning and skill enhancement among their teams.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-corporate.jpg'
);


CALL AddSection(
'Online Course Platforms',
'Elevate your online course experiences, providing a robust and adaptable learning environment for users seeking comprehensive educational resources.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/146/mod_label/intro/fp-online-courses.jpg'
);

DELIMITER $$

CREATE PROCEDURE GetSections()
BEGIN
    SELECT * FROM sections;
END $$

DELIMITER ;


CREATE TABLE features (
    id INT PRIMARY KEY AUTO_INCREMENT,
    icon VARCHAR(100),
    title VARCHAR(255),
    description TEXT,
    more_link VARCHAR(255)
);

INSERT INTO features(icon,title,description,more_link)
VALUES
('lnr-cog','Powerful Admin Settings',
'Quick and easy customization: Control style and design of your Moodle site with Lambda.',
'#'),

('lnr-laptop-phone','Flexible Layout',
'Lambda gives you the flexibility to set the preferred layout for your e-learning site.',
'#'),

('lnr-users','Multilanguage',
'100+ built-in language packs: Teach in your native language or take your courses globally.',
'#'),

('lnr-checkmark-circle','Built-in Components',
'Enhance your courses and create your own content pages easily without coding.',
'#');



CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    category VARCHAR(255),
    description TEXT,
    image VARCHAR(500),
    button_text VARCHAR(100),
    course_link VARCHAR(500)
);

INSERT INTO courses
(title, category, description, image, button_text, course_link)
VALUES

(
'Creative Writing',
'Literacy',
'This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/19/course/overviewfiles/course-02.jpg',
'Click to enter this course',
'#'
),

(
'Art History',
'Art and Media',
'This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/37/course/overviewfiles/course-01.jpg',
'Click to enter this course',
'#'
),

(
'Biology',
'Science and Mathematics',
'This is a sample course with contents and activities. You can take a look how resources and activities are displayed in a course view.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/62/course/overviewfiles/course-img.jpg',
'Click to enter this course',
'#'
),

(
'Content Components',
'Miscellaneous',
'Collection of components for the content plugins.',
'https://lambda-demo-01.redpithemes.com/pluginfile.php/86/course/overviewfiles/course-img.jpg',
'Click to enter this course',
'#'
);


DELIMITER $$

CREATE PROCEDURE sp_GetCourses()
BEGIN
    SELECT * FROM courses;
END $$

DELIMITER ;