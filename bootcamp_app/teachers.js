const {Pool} = require('pg');

const config = {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  databse: 'bootcampx'
}

const pool = new Pool(config)
const cohortName = process.argv[2];
const values = [cohortName]

pool.query(`SELECT teachers.name as teacher, cohorts.name as cohort 
from teachers  
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id 
JOIN students ON students.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teachers.name;`, values)
.then(res => {
  res.rows.forEach((result) => {
    console.log(`${result.cohort}: ${result.teacher}`);
  });
})
.catch((err)=> {
  console.error('query error', err.stack)
})

