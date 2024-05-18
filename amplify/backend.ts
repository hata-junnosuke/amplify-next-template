import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
// import { data } from './data/resource.js';

const backend = defineBackend({
  auth,
  // data,
});

backend.addOutput({
  data: {
    url: `https://${process.env.NEXT_PUBLIC_ENDPOINT}.appsync-api.ap-northeast-1.amazonaws.com/graphql`,
    aws_region: 'ap-northeast-1',
    default_authorization_type: 'API_KEY',
    api_key: process.env.NEXT_PUBLIC_API_KEY,
  }
}as any);