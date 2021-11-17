const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    email: String!
    password: String!
  }

  type Video {
    _id: ID
    title: String!
    cloudURL: String!
    likes: Int
    dislikes: Int
    views: Int
    publishDate: String
  }

  type Genre {
    name: String!
    videos: [Video]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
   videos: [Video]!
   video(_id: ID!): Video
   users: [User]
   user(_id: ID!): User
   genres: [Genre]
   genre(_id: ID!): Genre
   me: User
  }

  type Mutation {
<<<<<<< HEAD
    uploadVideo(video: String!): Video
=======
    addVideo(title: String!, cloudURL: String!): Video
    addUser(name: String!, email: String!, password: String!): User
    login(email: String!, password: String!): Auth
>>>>>>> 4598eb4b9dceeb0ef5ec83df102af04ca355637b
  }
`;

module.exports = typeDefs;
