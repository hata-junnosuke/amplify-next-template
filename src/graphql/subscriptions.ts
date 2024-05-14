/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodos = /* GraphQL */ `subscription OnCreateTodos(
  $name: String
  $description: String
  $created_at: String
  $id: Int
) {
  onCreateTodos(
    name: $name
    description: $description
    created_at: $created_at
    id: $id
  ) {
    name
    description
    created_at
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodosSubscriptionVariables,
  APITypes.OnCreateTodosSubscription
>;
export const onUpdateTodos = /* GraphQL */ `subscription OnUpdateTodos(
  $name: String
  $description: String
  $created_at: String
  $id: Int
) {
  onUpdateTodos(
    name: $name
    description: $description
    created_at: $created_at
    id: $id
  ) {
    name
    description
    created_at
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodosSubscriptionVariables,
  APITypes.OnUpdateTodosSubscription
>;
export const onDeleteTodos = /* GraphQL */ `subscription OnDeleteTodos(
  $name: String
  $description: String
  $created_at: String
  $id: Int
) {
  onDeleteTodos(
    name: $name
    description: $description
    created_at: $created_at
    id: $id
  ) {
    name
    description
    created_at
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodosSubscriptionVariables,
  APITypes.OnDeleteTodosSubscription
>;
