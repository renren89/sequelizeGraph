import { GraphQLSchema } from 'graphql';
import Query from './queries/rootQuery';

const Schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation
});

export default Schema;

