SELECT
  assignments.id AS id,
  assignments.name AS name,
  assignments.day AS DAY,
  assignments.chapter AS chapter,
  count(assistance_requests.*) AS total_requests
FROM
  assistance_requests
  JOIN assignments ON assignments.id = assignment_id
GROUP BY
  assignments.id,
  assignments.name,
  assignments.day,
  assignments.chapter
ORDER BY
  total_requests DESC;