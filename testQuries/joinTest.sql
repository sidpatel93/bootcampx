SELECT students.name as student_name, students.start_date as student_start_date, cohorts.name as cohort_name, cohorts.start_date as cohort_start_date
FROM students INNER JOIN cohorts ON cohorts.id = cohort_id
WHERE students.start_date != cohorts.start_date
ORDER BY cohort_start_date;