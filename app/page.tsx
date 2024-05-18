"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react'

// @ts-ignore
Amplify.configure(outputs);

import * as mutations from '../src/graphql/mutations';
import * as queries from '../src/graphql/queries';

const client = generateClient();

interface Todo {
  id: number;
  name: string;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  async function listTodos() {
    const { data, errors } = await client.graphql({
      query: queries.listTodos,
    });
    const todos: any = data?.listTodos?.items ?? [];
    setTodos(todos);
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.graphql({
      query: mutations.createTodos,
      variables: {
        input: {
          name: window.prompt("Todo content")?.toString() ?? '',
        }
      }
    });
    listTodos();
  }

  function deleteTodos(id: number) {
    client.graphql({
      query: mutations.deleteTodos,
      variables: {
        input: {
          id: id,
        }
      }
    });
    listTodos();
  }


  return (
    <Authenticator>
      {({ signOut, user }) => (
      <main>
        <h1>My todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li  onClick={() => deleteTodos(todo.id)} key={todo.id}>{todo.name}</li>
            ))}
        </ul>
        <div>
          🥳 App successfully hosted. Try creating a new todo.
          <br />
          <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
            Review next steps of this tutorial.
          </a>
        </div>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
    </Authenticator>
  );
}
