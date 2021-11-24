const {Pool} = require('pg');

const config = {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  databse: 'bootcampx'
}

const pool = new Pool(config);
const cohortName = process.argv[2];
const limit = process.argv[3];

pool.query(`
select students.id, students.name, cohorts.name as cohort_name
from students
join cohorts on cohorts.id=cohort_id
where cohorts.name like '${cohortName}%'
limit ${limit}`)
.then(res => {
  res.rows.forEach( user => {
    console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_name} cohort`)
  })
})
.catch((err)=> {
  console.error('query error', err.stack)
})

