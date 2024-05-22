import { defineAuth } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        // @ts-ignore
        clientId: process.env.GOOGLE_CLIENT_ID,
        // @ts-ignore
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      callbackUrls: [
        'http://localhost:3001',
      ],
      logoutUrls: ['http://localhost:3001/'],
    }
  },
});
