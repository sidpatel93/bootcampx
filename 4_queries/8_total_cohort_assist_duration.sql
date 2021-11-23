SELECT
  cohorts.name AS name,
  SUM(
    assistance_requests.completed_at - assistance_requests.started_at
  ) AS total_duration
FROM
  cohorts
  JOIN students ON students.cohort_id = cohorts.id
  JOIN assistance_requests ON student_id = students.id
GROUP BY
  cohorts.name
ORDER BY
  total_duration;