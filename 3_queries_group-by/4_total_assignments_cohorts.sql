SELECT cohorts.name as cohort, COUNT(assignment_submissions.*) AS total_submissions
FROM cohorts
INNER JOIN students ON cohort_id =cohorts.id
INNER JOIN assignment_submissions ON students.id = student_id
GROUP BY cohort
ORDER BY total_submissions DESC;