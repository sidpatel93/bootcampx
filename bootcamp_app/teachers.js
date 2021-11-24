const {Pool} = require('pg');

const config = {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  databse: 'bootcampx'
}

const pool = new Pool(config)
const cohortName = process.argv[2];
console.log(cohortName)

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohortName || 'JUL02'}'
ORDER BY teacher;`)
.then(res => {
  res.rows.forEach((result) => {
    console.log(`${result.cohort}: ${result.teacher}`);
  });
})
.catch((err)=> {
  console.error('query error', err.stack)
})

