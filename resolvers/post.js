const { gql } = require('apollo-server-express');
const {posts} = require("../temp");

const newPost = (_, args, context)=>{
    const post ={
      id: posts.length+1,
      title:args.title,
      description:args.description
    }

    posts.push(post)
    return post
}


module.exports = {
Query: {
    totalStudents:()=>400,
    totalPosts:()=>posts.length,
    allPosts:()=>posts
  },
 Mutation:{
   newPost
 } 
}