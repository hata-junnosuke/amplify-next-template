/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodos = /* GraphQL */ `query GetTodos($id: Int!) {
  getTodos(id: $id) {
    name
    description
    created_at
    id
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodosQueryVariables, APITypes.GetTodosQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: TableTodosFilterInput
  $limit: Int
  $orderBy: [OrderByTodosInput]
  $nextToken: String
) {
  listTodos(
    filter: $filter
    limit: $limit
    orderBy: $orderBy
    nextToken: $nextToken
  ) {
    items {
      name
      description
      created_at
      id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
