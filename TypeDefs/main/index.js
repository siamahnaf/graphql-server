const {gql} = require('apollo-server-express');
const userTypeDefs = require('../UserTypeDefs');


const typeDefs = gql`
    type Query {
        _: String
    }
`;

module.exports = [
    typeDefs,
    userTypeDefs
]