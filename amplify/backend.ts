import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
// import { data } from './data/resource.js';

const backend = defineBackend({
  auth,
  // data,
});

backend.addOutput({
  API: {
    GraphQL: {
      endpoint: `https://${process.env.NEXT_PUBLIC_ENDPOINT}.appsync-api.ap-northeast-1.amazonaws.com/graphql`,
      region: 'ap-northeast-1',
      defaultAuthMode: 'apiKey',
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    }
  }
}as any);