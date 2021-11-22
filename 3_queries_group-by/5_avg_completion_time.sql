SELECT students.name AS student, AVG(duration) AS average_assignment_duration 
FROM students
INNER JOIN assignment_submissions ON student_id=students.id
WHERE end_date IS NULL
GROUP BY student
ORDER BY average_assignment_duration DESC;