module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    title: {
      description: 'Title of post object',
      type: 'string',
      required: true
    },
    postBody: {
      description: 'Title of post object',
      type: 'string',
      required: true
    },


  },


  exits: {

  },


  fn: async function (inputs) {

    console.log("We are now insode of post/create function")

    await Post.create({title: inputs.title, body: inputs.postBody })

    
    // All done.
    return;

  }


};
