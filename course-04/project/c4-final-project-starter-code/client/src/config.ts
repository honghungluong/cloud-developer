// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
// https://yh4be8hmk4.execute-api.us-east-1.amazonaws.com/dev/todos
const apiId = 'yh4be8hmk4'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-8v64lnuw7rf5862s.us.auth0.com',            // Auth0 domain
  clientId: 'NNUDPu0ZB5oZgY2qLrHFvk641pp355Re',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
