module.exports = {


    friendlyName: 'Delete',
  
  
    description: 'Delete post.',
  
  
    inputs: {
  
      postId: {
        type: 'string',
        require: true
      }
  
    },
  
  
    exits: {
  
      invalid: {
        description: 'This was an invalid post to delete'
      }
  
    },
  
  
    fn: async function (inputs) {
  
      console.log("We're in delete post action")
  
      console.log("Trying to delete post with id: " + inputs.postId)
      //throw('invalid')
  
      const record = await Post.destroy({id: inputs.postId}).fetch()
  
      console.log(record)
      if(record.length == 0) {
        throw({invalid: {error: "Record does not exist"}})
      }
  
  
      return record;
  
    }
  
  
  };
  