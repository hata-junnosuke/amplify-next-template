/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodosInput = {
  name: string,
  description?: string | null,
  created_at?: string | null,
  id?: number | null,
};

export type Todos = {
  __typename: "Todos",
  name: string,
  description?: string | null,
  created_at?: string | null,
  id: number,
};

export type UpdateTodosInput = {
  name?: string | null,
  description?: string | null,
  created_at?: string | null,
  id: number,
};

export type TableTodosConditionInput = {
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  and?: Array< TableTodosConditionInput | null > | null,
  or?: Array< TableTodosConditionInput | null > | null,
  not?: Array< TableTodosConditionInput | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type DeleteTodosInput = {
  id: number,
};

export type TableTodosFilterInput = {
  name?: TableStringFilterInput | null,
  description?: TableStringFilterInput | null,
  created_at?: TableStringFilterInput | null,
  id?: TableIntFilterInput | null,
  and?: Array< TableTodosFilterInput | null > | null,
  or?: Array< TableTodosFilterInput | null > | null,
  not?: Array< TableTodosFilterInput | null > | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
};

export type OrderByTodosInput = {
  name?: ModelSortDirection | null,
  description?: ModelSortDirection | null,
  created_at?: ModelSortDirection | null,
  id?: ModelSortDirection | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type TodosConnection = {
  __typename: "TodosConnection",
  items?:  Array<Todos | null > | null,
  nextToken?: string | null,
};

export type CreateTodosMutationVariables = {
  input: CreateTodosInput,
};

export type CreateTodosMutation = {
  createTodos?:  {
    __typename: "Todos",
    name: string,
    description?: string | null,
    created_at?: string | null,
    id: number,
  } | null,
};

export type UpdateTodosMutationVariables = {
  input: UpdateTodosInput,
  condition?: TableTodosConditionInput | null,
};

export type UpdateTodosMutation = {
  updateTodos?:  {
    __typename: "Todos",
    name: string,
    description?: string | null,
    created_at?: string | null,
    id: number,
  } | null,
};

export type DeleteTodosMutationVariables = {
  input: DeleteTodosInput,
  condition?: TableTodosConditionInput | null,
};

export type DeleteTodosMutation = {
  deleteTodos?:  {
    __typename: "Todos",
    name: string,
    description?: string | null,
    created_at?: string | null,
    id: number,
  } | null,
};

export type GetTodosQueryVariables = {
  id: number,
};

export type GetTodosQuery = {
  getTodos?:  {
    __typename: "Todos",
    name: string,
    description?: string | null,
    created_at?: string | null,
    id: number,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: TableTodosFilterInput | null,
  limit?: number | null,
  orderBy?: Array< OrderByTodosInput | null > | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "TodosConnection",
    items?:  Array< {
      __typename: "Todos",
      name: string,
      description?: string | null,
      created_at?: string | null,
      id: number,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodosSubscriptionVariables = {
  name?: string | null,
  description?: string | null,
  created_at?: string | null,
  id?: number | null,
};

export type OnCreateTodosSubscription = {
  onCreateTodos?:  {
    __typename: "Todos",
    name: string,
    description?: string | null,
    created_at?: string | null,
    id: number,
  } | null,
};

export type OnUpdateTodosSubscriptionVariables = {
  name?: string | null,
  description?: string | null,
  created_at?: string | null,
  id?: number | null,
};

export type OnUpdateTodosSubscription = {
  onUpdateTodos?:  {
    __typename: "Todos",
    name: string,
    description?: string | null,
    created_at?: string | null,
    id: number,
  } | null,
};

export type OnDeleteTodosSubscriptionVariables = {
  name?: string | null,
  description?: string | null,
  created_at?: string | null,
  id?: number | null,
};

export type OnDeleteTodosSubscription = {
  onDeleteTodos?:  {
    __typename: "Todos",
    name: string,
    description?: string | null,
    created_at?: string | null,
    id: number,
  } | null,
};
