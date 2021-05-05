
class CommentService{
    constructor(){

    }
    async createComment(person,teacher,comment){
        console.log('this massage from CommentService')
        teacher.commenters.push( {person: person, comment:comment}  )
        person.postsCommented.push({teacher: teacher, comment:comment})
        await teacher.save()
        await person.save() 
    }

}
module.exports = new CommentService()
