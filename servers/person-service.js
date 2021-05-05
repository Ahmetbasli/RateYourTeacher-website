const BaseService = require('./base-service')
const PersonModel = require('../models/person.js')

class PersonService extends BaseService {
    constructor(){
        super(PersonModel)
    }
}

module.exports = new PersonService()