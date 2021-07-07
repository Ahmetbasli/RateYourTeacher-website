const test = require('ava')
const request = require('supertest')
const app = require('../app.js')



test('List all people in database', async t => {
    t.plan(4)
    //Creating people to see in the list-
    //for the case database is empty
    const personToSaveInOrderToListAtLeastOne = {
        name: 'Ahmet basli',
        age: 34,
        postsCommented: [],
        postsShared: []
      }

      const _ = await request(app)
        .post('/person')
        .send(personToSaveInOrderToListAtLeastOne)
  

      // get people with in render view
      const res = await request(app)
        .get('/person/all')

    // check if sever respons
    t.is(res.status, 200)

    // get people with json format
    const jsonRes = await request(app).get('/person/all/json')
    // check if sever respons 
    t.is(jsonRes.status, 200)
     
      
      // check the response whether it is an array
    t.true(Array.isArray(jsonRes.body), 'Body should be an array')
    // check the response whether at least there is 1 element
    t.true(jsonRes.body.length > 0)
})


test('Create new person ', async t => {
    t.plan(3)
    const personToCreate = {
        name: 'Ahmet basli',
        age: 34,
        postsCommented: [],
        postsShared: []
      }
      //adding to database
      const res = await request(app)
        .post('/person')
        .send(personToCreate)
      
      // checking for server response status success
      t.is(res.status, 200)
      
      // comparing the created person's data
      t.is(res.body.name, personToCreate.name)
      t.is(res.body.age, personToCreate.age)
})
test('Find one person ', async t => {
    t.plan(3)
    const personToCreate = {
        name: 'Ahmet basli',
        age: 34,
        postsCommented: [],
        postsShared: []
      }
      //adding to database
      const ahmet = await request(app)
        .post('/person')
        .send(personToCreate)
        // checking for server response status success
        t.is(ahmet.status, 200)


        // find the person we created above
        const ahmetFinded = await request(app)
        .get(`/person/${ahmet.body._id}`)
        
         // checking for server response status success
        t.is(ahmetFinded.status, 200)
      
      // comparing 
      t.deepEqual(ahmetFinded.body, ahmet.body)
})

test('Delete a person ', async t => {
    t.plan(2)
    const personToCreate = {
        name: 'Ahmet basli',
        age: 34,
        postsCommented: [],
        postsShared: []
      }
      //adding to database
      const ahmet = await request(app)
        .post('/person')
        .send(personToCreate)

         // deleting from database
         const deleteRes = await request(app)
        .delete(`/person/${ahmet.body._id}`)
         // checking for server response status success
        t.is(deleteRes.status, 200)
        t.is(deleteRes.ok, true)
    
    
})
test('Find peers over 20 ', async t => {
    t.plan(2)
    const personToCreate = {
        name: 'Ahmet basli',
        age: 34,
        postsCommented: [],
        postsShared: []
      }
      //adding to database
      const ahmet = await request(app)
        .post('/person')
        .send(personToCreate)
     


    const personToCreate2 = {
        name: 'Aslı Demir',
        age: 19,
        postsCommented: [],
        postsShared: []
    }
    //adding to database
    const aslı = await request(app)
        .post('/person')
        .send(personToCreate2)
  


     res = await request(app)
        .get(`/person/${aslı.body._id}/find-peers-over-20`)
        // checking for server response status success
        t.is(res.status, 200)

    // Cheks if there is any under 20
    var ageError = true
    res.body.forEach(person => {if (person.age < 20 && res.body.length) ageError = false} )
    
    t.true(ageError, 'ageError should be true to find peers over 20')
      
})
