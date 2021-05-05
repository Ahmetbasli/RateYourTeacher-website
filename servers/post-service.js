const BaseService = require('./base-service.js')
const PostModel = require('../models/post.js')

class PostService extends BaseService {
    constructor(){
        super(PostModel)
    }
}

module.exports = new PostService()