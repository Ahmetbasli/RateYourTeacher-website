const test = require('ava')
const request = require('supertest')
const app = require('../app.js')



test('List all teachers in database', async t => {
    t.plan(4)
    const teacherToCreate = {
      name: 'Dr. Ahmet Basli',
      universityName: 'Uludag',
      commenters: [],
      facultyName:'Makine Müh.'
    }
    //adding to database
    const _ = await request(app)
      .post('/post')
      .send(teacherToCreate)
     

      // get people with in render view
      const res = await request(app)
        .get('/post/all')
    // check if sever respons
    t.is(res.status, 200)

    // get people with json format
    const jsonRes = await request(app).get('/post/all/json')
    // check if sever respons 
    t.is(jsonRes.status, 200)

      // check the response whether it is an array
    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
    // check the response whether at least there is 1 element
    t.true(jsonRes.body.length > 0)
})



test('Create new teacher', async t => {
    t.plan(4)
    const teacherToCreate = {
        name: 'Dr. Ahmet Basli',
        universityName: 'Uludag',
        commenters: [],
        facultyName:'Makine Müh.'
      }
      //adding to database
      const sameTeacherFromDatabase = await request(app)
        .post('/post')
        .send(teacherToCreate)
      // check if server response status success
      t.is(sameTeacherFromDatabase.status, 200)
        
      // comparing the created person's data
      t.is(sameTeacherFromDatabase.body.name, teacherToCreate.name)
      t.is(sameTeacherFromDatabase.body.universityName, teacherToCreate.universityName)
      t.deepEqual(sameTeacherFromDatabase.body.commenters, teacherToCreate.commenters)
})



test('Find one teacher ', async t => {
    t.plan(2)
    const teacherToCreate = {
      name: 'Dr. Ahmet Basli',
      universityName: 'Uludag',
      commenters: [],
      facultyName:'Makine Müh.'
    }
    //adding to database
    const sameTeacherFromDatabase = await request(app)
      .post('/post')
      .send(teacherToCreate)
     
      
        // find the teacher we created above
        const teacherFinded = await request(app)
        .get(`/post/${sameTeacherFromDatabase.body._id}`)
         // checking for server response status success
        t.is(teacherFinded.status, 200)
      
      // comparing 
      t.deepEqual(teacherFinded.body, sameTeacherFromDatabase.body)
})

test('Delete a teacher ', async t => {
    t.plan(3)
    const teacherToCreate = {
      name: 'Dr. selim Basli',
      universityName: 'Uludag',
      commenters: [],
      facultyName:'Makine Müh.'
    }
    //adding to database
    const sameTeacherFromDatabase = await request(app)
      .post('/post')
      .send(teacherToCreate)
        
         // deleting from database
         const deleteRes = await request(app)
        .delete(`/post/${sameTeacherFromDatabase.body._id}`)
         // checking for server response status success
        t.is(deleteRes.status, 200)
        t.is(deleteRes.ok, true)
       
        // trying to fetch the teacher if still in the database
         const teacherFetched = await request(app)
        .get(`/post/${sameTeacherFromDatabase.body._id}`)
        t.is(teacherFetched.body.status,undefined)
    
})

test('Make a comment', async t => {
  t.plan(1)
  // create teacher
  const teacherToCreate = {
      name: 'Dr. Ahmet Basli',
      universityName: 'Uludag',
      commenters: [],
      facultyName:'Makine Müh.'
    }
    //adding to database
    const sameTeacherFromDatabase = await request(app)
      .post('/post')
      .send(teacherToCreate)

  // create person
  const personToCreate = {
    name: 'Selim şanlı',
    age: 23,
    postsShared: [],
    postsCommented:[]
  }
  //adding to database
  const samePersonFromDatabase = await request(app)
    .post('/person')
    .send(personToCreate)

    // person make comment request
    const res = await request(app)
    .post(`/post/${sameTeacherFromDatabase.body._id}`)
    .send({person_id: samePersonFromDatabase.body._id,
       comment: 'What a proffessor!' })


  // Fetching commented teacher to test
    const teacherFetched = await request(app)
    .get(`/post/${sameTeacherFromDatabase.body._id}`)

    // Fetching commenter person to test
    const personFetched = await request(app)
    .get(`/person/${samePersonFromDatabase.body._id}`)

    t.is(teacherFetched.body.commenters[0].comment, teacherFetched.body.commenters[0].comment )
    

})