import {
  graphql,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'Root Query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => {
        return 'world';
      }
    },
  })
});

export default Query;