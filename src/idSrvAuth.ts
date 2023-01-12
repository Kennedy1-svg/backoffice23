import { User } from 'oidc-client'
import { createOidcAuth, SignInType, LogLevel } from './vue-oidc-client'
// import { createOidcAuth, SignInType, LogLevel } from 'vue-oidc-client/vue3'
import { zoho_client_id, zoho_scope, base_url, oidc_authority } from './config'

const loco = window.location
const appRootUrl = `${loco.protocol}//${loco.host}/`
// const appRootUrl = 'localhost:5500/'
const provider:any = 'Zoho'

  console.log(`Creating OIDC client for ${appRootUrl}`)
  const authCallbackPath = 'index.html?auth-callback=1';
  const logoutCallbackPath = 'index.html?logout-callback=1';
  const prompt= 'login'
  // const backendUri = `${oidc_authority}`
  // const redirectUri = `https://localhost:5500/${authCallbackPath}`;
  const redirectUri = `${base_url}${authCallbackPath}`;
  const scopes = 'offline_access';
  const logoutRedirectUri = `${oidc_authority}${logoutCallbackPath}`;
  console.log(`Creating OIDC client for ${redirectUri}`)

const idsrvAuth = createOidcAuth(
  'main',
  SignInType.Popup,
  appRootUrl,
  {
    authority: oidc_authority,
    client_id: zoho_client_id,
    redirect_uri: redirectUri,
    post_logout_redirect_uri: logoutRedirectUri,
    response_type: 'code',
    filterProtocolClaims: true,
    loadUserInfo: false,
    scope: zoho_scope,
    extraQueryParams: { scope: zoho_scope, prompt: prompt, provider: provider }
    // extraTokenParams: {scope: scopes},
  },
  console,
  LogLevel.Debug
)

// const clientSettings = {
//   authority: oidc_authority,
//   client_id: zoho_client_id,
//   redirect_uri: redirectUri,
//   post_logout_redirect_uri: logoutRedirectUri,
//   response_type: 'code',
//   filterProtocolClaims: true,
//   loadUserInfo: false,
//   scope: scopes,
//   extraTokenParams: {scope: scopes},
// };

// const userManager = new Oidc.UserManager(clientSettings);

// if (window.location.href.includes('auth-callback')) {
//   idsrvAuth.signIn(clientSettings)
// } else if (window.location.href.includes('logout-callback')) {
//   idsrvAuth.signOut(clientSettings)
// }

// handle events
idsrvAuth.events.addAccessTokenExpiring(function() {
  // eslint-disable-next-line no-console
  console.log('access token expiring')
})

idsrvAuth.events.addAccessTokenExpired(function() {
  // eslint-disable-next-line no-console
  console.log('access token expired')
})

idsrvAuth.events.addSilentRenewError(function(err: Error) {
  // eslint-disable-next-line no-console
  console.error('silent renew error', err)
})

idsrvAuth.events.addUserLoaded(function(user: User) {
  // eslint-disable-next-line no-console
  console.log('user loaded', user)
})

idsrvAuth.events.addUserUnloaded(function() {
  // eslint-disable-next-line no-console
  console.log('user unloaded')
})

idsrvAuth.events.addUserSignedOut(function() {
  // eslint-disable-next-line no-console
  console.log('user signed out')
})

idsrvAuth.events.addUserSessionChanged(function() {
  // eslint-disable-next-line no-console
  console.log('user session changed')
})

export default idsrvAuth