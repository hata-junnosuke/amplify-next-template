/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodos = /* GraphQL */ `mutation CreateTodos($input: CreateTodosInput!) {
  createTodos(input: $input) {
    name
    description
    created_at
    id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodosMutationVariables,
  APITypes.CreateTodosMutation
>;
export const updateTodos = /* GraphQL */ `mutation UpdateTodos(
  $input: UpdateTodosInput!
  $condition: TableTodosConditionInput
) {
  updateTodos(input: $input, condition: $condition) {
    name
    description
    created_at
    id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodosMutationVariables,
  APITypes.UpdateTodosMutation
>;
export const deleteTodos = /* GraphQL */ `mutation DeleteTodos(
  $input: DeleteTodosInput!
  $condition: TableTodosConditionInput
) {
  deleteTodos(input: $input, condition: $condition) {
    name
    description
    created_at
    id
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodosMutationVariables,
  APITypes.DeleteTodosMutation
>;
