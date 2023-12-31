"use strict";
(self["webpackChunkpractice1"] = self["webpackChunkpractice1"] || []).push([[25],{

/***/ 7874:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@angular/fire/node_modules/@firebase/auth-compat/dist/index.esm2017.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app-compat */ 6101);
/* harmony import */ var _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/auth/internal */ 9439);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ 4859);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/util */ 2090);





var name = "@firebase/auth-compat";
var version = "0.4.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const CORDOVA_ONDEVICEREADY_TIMEOUT_MS = 1000;

function _getCurrentScheme() {
  var _a;

  return ((_a = self === null || self === void 0 ? void 0 : self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
/**
 * @return {boolean} Whether the current environment is http or https.
 */


function _isHttpOrHttps() {
  return _getCurrentScheme() === 'http:' || _getCurrentScheme() === 'https:';
}
/**
 * @param {?string=} ua The user agent.
 * @return {boolean} Whether the app is rendered in a mobile iOS or Android
 *     Cordova environment.
 */


function _isAndroidOrIosCordovaScheme(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getUA)()) {
  return !!((_getCurrentScheme() === 'file:' || _getCurrentScheme() === 'ionic:' || _getCurrentScheme() === 'capacitor:') && ua.toLowerCase().match(/iphone|ipad|ipod|android/));
}
/**
 * @return {boolean} Whether the environment is a native environment, where
 *     CORS checks do not apply.
 */


function _isNativeEnvironment() {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isReactNative)() || (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isNode)();
}
/**
 * Checks whether the user agent is IE11.
 * @return {boolean} True if it is IE11.
 */


function _isIe11() {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIE)() && (document === null || document === void 0 ? void 0 : document.documentMode) === 11;
}
/**
 * Checks whether the user agent is Edge.
 * @param {string} userAgent The browser user agent string.
 * @return {boolean} True if it is Edge.
 */


function _isEdge(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getUA)()) {
  return /Edge\/\d+/.test(ua);
}
/**
 * @param {?string=} opt_userAgent The navigator user agent.
 * @return {boolean} Whether local storage is not synchronized between an iframe
 *     and a popup of the same domain.
 */


function _isLocalStorageNotSynchronized(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.getUA)()) {
  return _isIe11() || _isEdge(ua);
}
/** @return {boolean} Whether web storage is supported. */


function _isWebStorageSupported() {
  try {
    const storage = self.localStorage;

    const key = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._generateEventId();

    if (storage) {
      // setItem will throw an exception if we cannot access WebStorage (e.g.,
      // Safari in private mode).
      storage['setItem'](key, '1');
      storage['removeItem'](key); // For browsers where iframe web storage does not synchronize with a popup
      // of the same domain, indexedDB is used for persistent storage. These
      // browsers include IE11 and Edge.
      // Make sure it is supported (IE11 and Edge private mode does not support
      // that).

      if (_isLocalStorageNotSynchronized()) {
        // In such browsers, if indexedDB is not supported, an iframe cannot be
        // notified of the popup sign in result.
        return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIndexedDBAvailable)();
      }

      return true;
    }
  } catch (e) {
    // localStorage is not available from a worker. Test availability of
    // indexedDB.
    return _isWorker() && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIndexedDBAvailable)();
  }

  return false;
}
/**
 * @param {?Object=} global The optional global scope.
 * @return {boolean} Whether current environment is a worker.
 */


function _isWorker() {
  // WorkerGlobalScope only defined in worker environment.
  return typeof global !== 'undefined' && 'WorkerGlobalScope' in global && 'importScripts' in global;
}

function _isPopupRedirectSupported() {
  return (_isHttpOrHttps() || (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isBrowserExtension)() || _isAndroidOrIosCordovaScheme()) && // React Native with remote debugging reports its location.protocol as
  // http.
  !_isNativeEnvironment() && // Local storage has to be supported for browser popup and redirect
  // operations to work.
  _isWebStorageSupported() && // DOM, popups and redirects are not supported within a worker.
  !_isWorker();
}
/** Quick check that indicates the platform *may* be Cordova */


function _isLikelyCordova() {
  return _isAndroidOrIosCordovaScheme() && typeof document !== 'undefined';
}

function _isCordova() {
  return _isCordova2.apply(this, arguments);
}

function _isCordova2() {
  _isCordova2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    if (!_isLikelyCordova()) {
      return false;
    }

    return new Promise(resolve => {
      const timeoutId = setTimeout(() => {
        // We've waited long enough; the telltale Cordova event didn't happen
        resolve(false);
      }, CORDOVA_ONDEVICEREADY_TIMEOUT_MS);
      document.addEventListener('deviceready', () => {
        clearTimeout(timeoutId);
        resolve(true);
      });
    });
  });
  return _isCordova2.apply(this, arguments);
}

function _getSelfWindow() {
  return typeof window !== 'undefined' ? window : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const Persistence = {
  LOCAL: 'local',
  NONE: 'none',
  SESSION: 'session'
};
const _assert$3 = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;
const PERSISTENCE_KEY = 'persistence';
/**
 * Validates that an argument is a valid persistence value. If an invalid type
 * is specified, an error is thrown synchronously.
 */

function _validatePersistenceArgument(auth, persistence) {
  _assert$3(Object.values(Persistence).includes(persistence), auth, "invalid-persistence-type"
  /* exp.AuthErrorCode.INVALID_PERSISTENCE */
  ); // Validate if the specified type is supported in the current environment.


  if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isReactNative)()) {
    // This is only supported in a browser.
    _assert$3(persistence !== Persistence.SESSION, auth, "unsupported-persistence-type"
    /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );

    return;
  }

  if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isNode)()) {
    // Only none is supported in Node.js.
    _assert$3(persistence === Persistence.NONE, auth, "unsupported-persistence-type"
    /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );

    return;
  }

  if (_isWorker()) {
    // In a worker environment, either LOCAL or NONE are supported.
    // If indexedDB not supported and LOCAL provided, throw an error
    _assert$3(persistence === Persistence.NONE || persistence === Persistence.LOCAL && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_4__.isIndexedDBAvailable)(), auth, "unsupported-persistence-type"
    /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    );

    return;
  } // This is restricted by what the browser supports.


  _assert$3(persistence === Persistence.NONE || _isWebStorageSupported(), auth, "unsupported-persistence-type"
  /* exp.AuthErrorCode.UNSUPPORTED_PERSISTENCE */
  );
}

function _savePersistenceForRedirect(_x) {
  return _savePersistenceForRedirect2.apply(this, arguments);
}

function _savePersistenceForRedirect2() {
  _savePersistenceForRedirect2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
    yield auth._initializationPromise;
    const session = getSessionStorageIfAvailable();

    const key = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._persistenceKeyName(PERSISTENCE_KEY, auth.config.apiKey, auth.name);

    if (session) {
      session.setItem(key, auth._getPersistence());
    }
  });
  return _savePersistenceForRedirect2.apply(this, arguments);
}

function _getPersistencesFromRedirect(apiKey, appName) {
  const session = getSessionStorageIfAvailable();

  if (!session) {
    return [];
  }

  const key = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._persistenceKeyName(PERSISTENCE_KEY, apiKey, appName);

  const persistence = session.getItem(key);

  switch (persistence) {
    case Persistence.NONE:
      return [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence];

    case Persistence.LOCAL:
      return [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence];

    case Persistence.SESSION:
      return [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence];

    default:
      return [];
  }
}
/** Returns session storage, or null if the property access errors */


function getSessionStorageIfAvailable() {
  var _a;

  try {
    return ((_a = _getSelfWindow()) === null || _a === void 0 ? void 0 : _a.sessionStorage) || null;
  } catch (e) {
    return null;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const _assert$2 = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;
/** Platform-agnostic popup-redirect resolver */

class CompatPopupRedirectResolver {
  constructor() {
    // Create both resolvers for dynamic resolution later
    this.browserResolver = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getInstance(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserPopupRedirectResolver);
    this.cordovaResolver = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getInstance(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.cordovaPopupRedirectResolver); // The actual resolver in use: either browserResolver or cordovaResolver.

    this.underlyingResolver = null;
    this._redirectPersistence = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence;
    this._completeRedirectFn = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getRedirectResult;
    this._overrideRedirectResult = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._overrideRedirectResult;
  }

  _initialize(auth) {
    var _this = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.selectUnderlyingResolver();
      return _this.assertedUnderlyingResolver._initialize(auth);
    })();
  }

  _openPopup(auth, provider, authType, eventId) {
    var _this2 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.selectUnderlyingResolver();
      return _this2.assertedUnderlyingResolver._openPopup(auth, provider, authType, eventId);
    })();
  }

  _openRedirect(auth, provider, authType, eventId) {
    var _this3 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.selectUnderlyingResolver();
      return _this3.assertedUnderlyingResolver._openRedirect(auth, provider, authType, eventId);
    })();
  }

  _isIframeWebStorageSupported(auth, cb) {
    this.assertedUnderlyingResolver._isIframeWebStorageSupported(auth, cb);
  }

  _originValidation(auth) {
    return this.assertedUnderlyingResolver._originValidation(auth);
  }

  get _shouldInitProactively() {
    return _isLikelyCordova() || this.browserResolver._shouldInitProactively;
  }

  get assertedUnderlyingResolver() {
    _assert$2(this.underlyingResolver, "internal-error"
    /* exp.AuthErrorCode.INTERNAL_ERROR */
    );

    return this.underlyingResolver;
  }

  selectUnderlyingResolver() {
    var _this4 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.underlyingResolver) {
        return;
      } // We haven't yet determined whether or not we're in Cordova; go ahead
      // and determine that state now.


      const isCordova = yield _isCordova();
      _this4.underlyingResolver = isCordova ? _this4.cordovaResolver : _this4.browserResolver;
    })();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function unwrap(object) {
  return object.unwrap();
}

function wrapped(object) {
  return object.wrapped();
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function credentialFromResponse(userCredential) {
  return credentialFromObject(userCredential);
}

function attachExtraErrorFields(auth, e) {
  var _a; // The response contains all fields from the server which may or may not
  // actually match the underlying type


  const response = (_a = e.customData) === null || _a === void 0 ? void 0 : _a._tokenResponse;

  if ((e === null || e === void 0 ? void 0 : e.code) === 'auth/multi-factor-auth-required') {
    const mfaErr = e;
    mfaErr.resolver = new MultiFactorResolver(auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.getMultiFactorResolver(auth, e));
  } else if (response) {
    const credential = credentialFromObject(e);
    const credErr = e;

    if (credential) {
      credErr.credential = credential;
      credErr.tenantId = response.tenantId || undefined;
      credErr.email = response.email || undefined;
      credErr.phoneNumber = response.phoneNumber || undefined;
    }
  }
}

function credentialFromObject(object) {
  const {
    _tokenResponse
  } = object instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError ? object.customData : object;

  if (!_tokenResponse) {
    return null;
  } // Handle phone Auth credential responses, as they have a different format
  // from other backend responses (i.e. no providerId). This is also only the
  // case for user credentials (does not work for errors).


  if (!(object instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError)) {
    if ('temporaryProof' in _tokenResponse && 'phoneNumber' in _tokenResponse) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.credentialFromResult(object);
    }
  }

  const providerId = _tokenResponse.providerId; // Email and password is not supported as there is no situation where the
  // server would return the password to the client.

  if (!providerId || providerId === _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.PASSWORD) {
    return null;
  }

  let provider;

  switch (providerId) {
    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.GOOGLE:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider;
      break;

    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.FACEBOOK:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.FacebookAuthProvider;
      break;

    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.GITHUB:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GithubAuthProvider;
      break;

    case _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ProviderId.TWITTER:
      provider = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.TwitterAuthProvider;
      break;

    default:
      const {
        oauthIdToken,
        oauthAccessToken,
        oauthTokenSecret,
        pendingToken,
        nonce
      } = _tokenResponse;

      if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
        return null;
      } // TODO(avolkovi): uncomment this and get it working with SAML & OIDC


      if (pendingToken) {
        if (providerId.startsWith('saml.')) {
          return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.SAMLAuthCredential._create(providerId, pendingToken);
        } else {
          // OIDC and non-default providers excluding Twitter.
          return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.OAuthCredential._fromParams({
            providerId,
            signInMethod: providerId,
            pendingToken,
            idToken: oauthIdToken,
            accessToken: oauthAccessToken
          });
        }
      }

      return new _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.OAuthProvider(providerId).credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        rawNonce: nonce
      });
  }

  return object instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError ? provider.credentialFromError(object) : provider.credentialFromResult(object);
}

function convertCredential(auth, credentialPromise) {
  return credentialPromise.catch(e => {
    if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError) {
      attachExtraErrorFields(auth, e);
    }

    throw e;
  }).then(credential => {
    const operationType = credential.operationType;
    const user = credential.user;
    return {
      operationType,
      credential: credentialFromResponse(credential),
      additionalUserInfo: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.getAdditionalUserInfo(credential),
      user: User.getOrCreate(user)
    };
  });
}

function convertConfirmationResult(_x2, _x3) {
  return _convertConfirmationResult.apply(this, arguments);
}

function _convertConfirmationResult() {
  _convertConfirmationResult = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, confirmationResultPromise) {
    const confirmationResultExp = yield confirmationResultPromise;
    return {
      verificationId: confirmationResultExp.verificationId,
      confirm: verificationCode => convertCredential(auth, confirmationResultExp.confirm(verificationCode))
    };
  });
  return _convertConfirmationResult.apply(this, arguments);
}

class MultiFactorResolver {
  constructor(auth, resolver) {
    this.resolver = resolver;
    this.auth = wrapped(auth);
  }

  get session() {
    return this.resolver.session;
  }

  get hints() {
    return this.resolver.hints;
  }

  resolveSignIn(assertion) {
    return convertCredential(unwrap(this.auth), this.resolver.resolveSignIn(assertion));
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class User {
  constructor(_delegate) {
    this._delegate = _delegate;
    this.multiFactor = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.multiFactor(_delegate);
  }

  static getOrCreate(user) {
    if (!User.USER_MAP.has(user)) {
      User.USER_MAP.set(user, new User(user));
    }

    return User.USER_MAP.get(user);
  }

  delete() {
    return this._delegate.delete();
  }

  reload() {
    return this._delegate.reload();
  }

  toJSON() {
    return this._delegate.toJSON();
  }

  getIdTokenResult(forceRefresh) {
    return this._delegate.getIdTokenResult(forceRefresh);
  }

  getIdToken(forceRefresh) {
    return this._delegate.getIdToken(forceRefresh);
  }

  linkAndRetrieveDataWithCredential(credential) {
    return this.linkWithCredential(credential);
  }

  linkWithCredential(credential) {
    var _this5 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return convertCredential(_this5.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithCredential(_this5._delegate, credential));
    })();
  }

  linkWithPhoneNumber(phoneNumber, applicationVerifier) {
    var _this6 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return convertConfirmationResult(_this6.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithPhoneNumber(_this6._delegate, phoneNumber, applicationVerifier));
    })();
  }

  linkWithPopup(provider) {
    var _this7 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return convertCredential(_this7.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithPopup(_this7._delegate, provider, CompatPopupRedirectResolver));
    })();
  }

  linkWithRedirect(provider) {
    var _this8 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _savePersistenceForRedirect(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._castAuth(_this8.auth));
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.linkWithRedirect(_this8._delegate, provider, CompatPopupRedirectResolver);
    })();
  }

  reauthenticateAndRetrieveDataWithCredential(credential) {
    return this.reauthenticateWithCredential(credential);
  }

  reauthenticateWithCredential(credential) {
    var _this9 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return convertCredential(_this9.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithCredential(_this9._delegate, credential));
    })();
  }

  reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier) {
    return convertConfirmationResult(this.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithPhoneNumber(this._delegate, phoneNumber, applicationVerifier));
  }

  reauthenticateWithPopup(provider) {
    return convertCredential(this.auth, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithPopup(this._delegate, provider, CompatPopupRedirectResolver));
  }

  reauthenticateWithRedirect(provider) {
    var _this10 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _savePersistenceForRedirect(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._castAuth(_this10.auth));
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithRedirect(_this10._delegate, provider, CompatPopupRedirectResolver);
    })();
  }

  sendEmailVerification(actionCodeSettings) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.sendEmailVerification(this._delegate, actionCodeSettings);
  }

  unlink(providerId) {
    var _this11 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.unlink(_this11._delegate, providerId);
      return _this11;
    })();
  }

  updateEmail(newEmail) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updateEmail(this._delegate, newEmail);
  }

  updatePassword(newPassword) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updatePassword(this._delegate, newPassword);
  }

  updatePhoneNumber(phoneCredential) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updatePhoneNumber(this._delegate, phoneCredential);
  }

  updateProfile(profile) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.updateProfile(this._delegate, profile);
  }

  verifyBeforeUpdateEmail(newEmail, actionCodeSettings) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.verifyBeforeUpdateEmail(this._delegate, newEmail, actionCodeSettings);
  }

  get emailVerified() {
    return this._delegate.emailVerified;
  }

  get isAnonymous() {
    return this._delegate.isAnonymous;
  }

  get metadata() {
    return this._delegate.metadata;
  }

  get phoneNumber() {
    return this._delegate.phoneNumber;
  }

  get providerData() {
    return this._delegate.providerData;
  }

  get refreshToken() {
    return this._delegate.refreshToken;
  }

  get tenantId() {
    return this._delegate.tenantId;
  }

  get displayName() {
    return this._delegate.displayName;
  }

  get email() {
    return this._delegate.email;
  }

  get photoURL() {
    return this._delegate.photoURL;
  }

  get providerId() {
    return this._delegate.providerId;
  }

  get uid() {
    return this._delegate.uid;
  }

  get auth() {
    return this._delegate.auth;
  }

} // Maintain a map so that there's always a 1:1 mapping between new User and
// legacy compat users


User.USER_MAP = /*#__PURE__*/new WeakMap();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const _assert$1 = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;
let Auth = /*#__PURE__*/(() => {
  class Auth {
    constructor(app, provider) {
      this.app = app;

      if (provider.isInitialized()) {
        this._delegate = provider.getImmediate();
        this.linkUnderlyingAuth();
        return;
      }

      const {
        apiKey
      } = app.options; // TODO: platform needs to be determined using heuristics

      _assert$1(apiKey, "invalid-api-key"
      /* exp.AuthErrorCode.INVALID_API_KEY */
      , {
        appName: app.name
      }); // TODO: platform needs to be determined using heuristics


      _assert$1(apiKey, "invalid-api-key"
      /* exp.AuthErrorCode.INVALID_API_KEY */
      , {
        appName: app.name
      }); // Only use a popup/redirect resolver in browser environments


      const resolver = typeof window !== 'undefined' ? CompatPopupRedirectResolver : undefined;
      this._delegate = provider.initialize({
        options: {
          persistence: buildPersistenceHierarchy(apiKey, app.name),
          popupRedirectResolver: resolver
        }
      });

      this._delegate._updateErrorMap(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.debugErrorMap);

      this.linkUnderlyingAuth();
    }

    get emulatorConfig() {
      return this._delegate.emulatorConfig;
    }

    get currentUser() {
      if (!this._delegate.currentUser) {
        return null;
      }

      return User.getOrCreate(this._delegate.currentUser);
    }

    get languageCode() {
      return this._delegate.languageCode;
    }

    set languageCode(languageCode) {
      this._delegate.languageCode = languageCode;
    }

    get settings() {
      return this._delegate.settings;
    }

    get tenantId() {
      return this._delegate.tenantId;
    }

    set tenantId(tid) {
      this._delegate.tenantId = tid;
    }

    useDeviceLanguage() {
      this._delegate.useDeviceLanguage();
    }

    signOut() {
      return this._delegate.signOut();
    }

    useEmulator(url, options) {
      _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.connectAuthEmulator(this._delegate, url, options);
    }

    applyActionCode(code) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.applyActionCode(this._delegate, code);
    }

    checkActionCode(code) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.checkActionCode(this._delegate, code);
    }

    confirmPasswordReset(code, newPassword) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.confirmPasswordReset(this._delegate, code, newPassword);
    }

    createUserWithEmailAndPassword(email, password) {
      var _this12 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return convertCredential(_this12._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword(_this12._delegate, email, password));
      })();
    }

    fetchProvidersForEmail(email) {
      return this.fetchSignInMethodsForEmail(email);
    }

    fetchSignInMethodsForEmail(email) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.fetchSignInMethodsForEmail(this._delegate, email);
    }

    isSignInWithEmailLink(emailLink) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.isSignInWithEmailLink(this._delegate, emailLink);
    }

    getRedirectResult() {
      var _this13 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _assert$1(_isPopupRedirectSupported(), _this13._delegate, "operation-not-supported-in-this-environment"
        /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
        );

        const credential = yield _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.getRedirectResult(_this13._delegate, CompatPopupRedirectResolver);

        if (!credential) {
          return {
            credential: null,
            user: null
          };
        }

        return convertCredential(_this13._delegate, Promise.resolve(credential));
      })();
    } // This function should only be called by frameworks (e.g. FirebaseUI-web) to log their usage.
    // It is not intended for direct use by developer apps. NO jsdoc here to intentionally leave it
    // out of autogenerated documentation pages to reduce accidental misuse.


    addFrameworkForLogging(framework) {
      _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.addFrameworkForLogging(this._delegate, framework);
    }

    onAuthStateChanged(nextOrObserver, errorFn, completed) {
      const {
        next,
        error,
        complete
      } = wrapObservers(nextOrObserver, errorFn, completed);
      return this._delegate.onAuthStateChanged(next, error, complete);
    }

    onIdTokenChanged(nextOrObserver, errorFn, completed) {
      const {
        next,
        error,
        complete
      } = wrapObservers(nextOrObserver, errorFn, completed);
      return this._delegate.onIdTokenChanged(next, error, complete);
    }

    sendSignInLinkToEmail(email, actionCodeSettings) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.sendSignInLinkToEmail(this._delegate, email, actionCodeSettings);
    }

    sendPasswordResetEmail(email, actionCodeSettings) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.sendPasswordResetEmail(this._delegate, email, actionCodeSettings || undefined);
    }

    setPersistence(persistence) {
      var _this14 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _validatePersistenceArgument(_this14._delegate, persistence);

        let converted;

        switch (persistence) {
          case Persistence.SESSION:
            converted = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence;
            break;

          case Persistence.LOCAL:
            // Not using isIndexedDBAvailable() since it only checks if indexedDB is defined.
            const isIndexedDBFullySupported = yield _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._getInstance(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence)._isAvailable();
            converted = isIndexedDBFullySupported ? _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence : _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserLocalPersistence;
            break;

          case Persistence.NONE:
            converted = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence;
            break;

          default:
            return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._fail("argument-error"
            /* exp.AuthErrorCode.ARGUMENT_ERROR */
            , {
              appName: _this14._delegate.name
            });
        }

        return _this14._delegate.setPersistence(converted);
      })();
    }

    signInAndRetrieveDataWithCredential(credential) {
      return this.signInWithCredential(credential);
    }

    signInAnonymously() {
      return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInAnonymously(this._delegate));
    }

    signInWithCredential(credential) {
      return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithCredential(this._delegate, credential));
    }

    signInWithCustomToken(token) {
      return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithCustomToken(this._delegate, token));
    }

    signInWithEmailAndPassword(email, password) {
      return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword(this._delegate, email, password));
    }

    signInWithEmailLink(email, emailLink) {
      return convertCredential(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailLink(this._delegate, email, emailLink));
    }

    signInWithPhoneNumber(phoneNumber, applicationVerifier) {
      return convertConfirmationResult(this._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithPhoneNumber(this._delegate, phoneNumber, applicationVerifier));
    }

    signInWithPopup(provider) {
      var _this15 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _assert$1(_isPopupRedirectSupported(), _this15._delegate, "operation-not-supported-in-this-environment"
        /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
        );

        return convertCredential(_this15._delegate, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup(_this15._delegate, provider, CompatPopupRedirectResolver));
      })();
    }

    signInWithRedirect(provider) {
      var _this16 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _assert$1(_isPopupRedirectSupported(), _this16._delegate, "operation-not-supported-in-this-environment"
        /* exp.AuthErrorCode.OPERATION_NOT_SUPPORTED */
        );

        yield _savePersistenceForRedirect(_this16._delegate);
        return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.signInWithRedirect(_this16._delegate, provider, CompatPopupRedirectResolver);
      })();
    }

    updateCurrentUser(user) {
      // remove ts-ignore once overloads are defined for exp functions to accept compat objects
      // @ts-ignore
      return this._delegate.updateCurrentUser(user);
    }

    verifyPasswordResetCode(code) {
      return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.verifyPasswordResetCode(this._delegate, code);
    }

    unwrap() {
      return this._delegate;
    }

    _delete() {
      return this._delegate._delete();
    }

    linkUnderlyingAuth() {
      this._delegate.wrapped = () => this;
    }

  }

  Auth.Persistence = Persistence;
  return Auth;
})();

function wrapObservers(nextOrObserver, error, complete) {
  let next = nextOrObserver;

  if (typeof nextOrObserver !== 'function') {
    ({
      next,
      error,
      complete
    } = nextOrObserver);
  } // We know 'next' is now a function


  const oldNext = next;

  const newNext = user => oldNext(user && User.getOrCreate(user));

  return {
    next: newNext,
    error: error,
    complete
  };
}

function buildPersistenceHierarchy(apiKey, appName) {
  // Note this is slightly different behavior: in this case, the stored
  // persistence is checked *first* rather than last. This is because we want
  // to prefer stored persistence type in the hierarchy. This is an empty
  // array if window is not available or there is no pending redirect
  const persistences = _getPersistencesFromRedirect(apiKey, appName); // If "self" is available, add indexedDB


  if (typeof self !== 'undefined' && !persistences.includes(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence)) {
    persistences.push(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.indexedDBLocalPersistence);
  } // If "window" is available, add HTML Storage persistences


  if (typeof window !== 'undefined') {
    for (const persistence of [_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserLocalPersistence, _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.browserSessionPersistence]) {
      if (!persistences.includes(persistence)) {
        persistences.push(persistence);
      }
    }
  } // Add in-memory as a final fallback


  if (!persistences.includes(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence)) {
    persistences.push(_firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.inMemoryPersistence);
  }

  return persistences;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class PhoneAuthProvider {
  constructor() {
    this.providerId = 'phone'; // TODO: remove ts-ignore when moving types from auth-types to auth-compat
    // @ts-ignore

    this._delegate = new _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider(unwrap(_firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__["default"].auth()));
  }

  static credential(verificationId, verificationCode) {
    return _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.credential(verificationId, verificationCode);
  }

  verifyPhoneNumber(phoneInfoOptions, applicationVerifier) {
    return this._delegate.verifyPhoneNumber( // The implementation matches but the types are subtly incompatible
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    phoneInfoOptions, applicationVerifier);
  }

  unwrap() {
    return this._delegate;
  }

}

PhoneAuthProvider.PHONE_SIGN_IN_METHOD = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.PHONE_SIGN_IN_METHOD;
PhoneAuthProvider.PROVIDER_ID = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneAuthProvider.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const _assert = _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__._assert;

class RecaptchaVerifier {
  constructor(container, parameters, app = _firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__["default"].app()) {
    var _a; // API key is required for web client RPC calls.


    _assert((_a = app.options) === null || _a === void 0 ? void 0 : _a.apiKey, "invalid-api-key"
    /* exp.AuthErrorCode.INVALID_API_KEY */
    , {
      appName: app.name
    });

    this._delegate = new _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.RecaptchaVerifier(container, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parameters, // TODO: remove ts-ignore when moving types from auth-types to auth-compat
    // @ts-ignore
    app.auth());
    this.type = this._delegate.type;
  }

  clear() {
    this._delegate.clear();
  }

  render() {
    return this._delegate.render();
  }

  verify() {
    return this._delegate.verify();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const AUTH_TYPE = 'auth-compat'; // Create auth components to register with firebase.
// Provides Auth public APIs.

function registerAuthCompat(instance) {
  instance.INTERNAL.registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component(AUTH_TYPE, container => {
    // getImmediate for FirebaseApp will always succeed
    const app = container.getProvider('app-compat').getImmediate();
    const authProvider = container.getProvider('auth');
    return new Auth(app, authProvider);
  }, "PUBLIC"
  /* ComponentType.PUBLIC */
  ).setServiceProps({
    ActionCodeInfo: {
      Operation: {
        EMAIL_SIGNIN: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.EMAIL_SIGNIN,
        PASSWORD_RESET: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.PASSWORD_RESET,
        RECOVER_EMAIL: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.RECOVER_EMAIL,
        REVERT_SECOND_FACTOR_ADDITION: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION,
        VERIFY_AND_CHANGE_EMAIL: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL,
        VERIFY_EMAIL: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.ActionCodeOperation.VERIFY_EMAIL
      }
    },
    EmailAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.EmailAuthProvider,
    FacebookAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.FacebookAuthProvider,
    GithubAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GithubAuthProvider,
    GoogleAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider,
    OAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.OAuthProvider,
    SAMLAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.SAMLAuthProvider,
    PhoneAuthProvider: PhoneAuthProvider,
    PhoneMultiFactorGenerator: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.PhoneMultiFactorGenerator,
    RecaptchaVerifier: RecaptchaVerifier,
    TwitterAuthProvider: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.TwitterAuthProvider,
    Auth,
    AuthCredential: _firebase_auth_internal__WEBPACK_IMPORTED_MODULE_2__.AuthCredential,
    Error: _firebase_util__WEBPACK_IMPORTED_MODULE_4__.FirebaseError
  }).setInstantiationMode("LAZY"
  /* InstantiationMode.LAZY */
  ).setMultipleInstances(false));
  instance.registerVersion(name, version);
}

/*#__PURE__*/
registerAuthCompat(_firebase_app_compat__WEBPACK_IMPORTED_MODULE_1__["default"]); //# sourceMappingURL=index.esm2017.js.map

/***/ }),

/***/ 9500:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@angular/fire/node_modules/@firebase/auth/dist/esm2017/index-e3d5d3f4.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ signInWithCredential),
/* harmony export */   "A": () => (/* binding */ ActionCodeOperation),
/* harmony export */   "B": () => (/* binding */ signOut),
/* harmony export */   "C": () => (/* binding */ deleteUser),
/* harmony export */   "D": () => (/* binding */ debugErrorMap),
/* harmony export */   "E": () => (/* binding */ prodErrorMap),
/* harmony export */   "F": () => (/* binding */ FactorId),
/* harmony export */   "G": () => (/* binding */ AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY),
/* harmony export */   "H": () => (/* binding */ initializeAuth),
/* harmony export */   "I": () => (/* binding */ connectAuthEmulator),
/* harmony export */   "J": () => (/* binding */ AuthCredential),
/* harmony export */   "K": () => (/* binding */ EmailAuthCredential),
/* harmony export */   "L": () => (/* binding */ OAuthCredential),
/* harmony export */   "M": () => (/* binding */ PhoneAuthCredential),
/* harmony export */   "N": () => (/* binding */ inMemoryPersistence),
/* harmony export */   "O": () => (/* binding */ OperationType),
/* harmony export */   "P": () => (/* binding */ PhoneAuthProvider),
/* harmony export */   "Q": () => (/* binding */ EmailAuthProvider),
/* harmony export */   "R": () => (/* binding */ RecaptchaVerifier),
/* harmony export */   "S": () => (/* binding */ SignInMethod),
/* harmony export */   "T": () => (/* binding */ TotpMultiFactorGenerator),
/* harmony export */   "U": () => (/* binding */ FacebookAuthProvider),
/* harmony export */   "V": () => (/* binding */ GoogleAuthProvider),
/* harmony export */   "W": () => (/* binding */ GithubAuthProvider),
/* harmony export */   "X": () => (/* binding */ OAuthProvider),
/* harmony export */   "Y": () => (/* binding */ SAMLAuthProvider),
/* harmony export */   "Z": () => (/* binding */ TwitterAuthProvider),
/* harmony export */   "_": () => (/* binding */ signInAnonymously),
/* harmony export */   "a": () => (/* binding */ browserSessionPersistence),
/* harmony export */   "a0": () => (/* binding */ linkWithCredential),
/* harmony export */   "a1": () => (/* binding */ reauthenticateWithCredential),
/* harmony export */   "a2": () => (/* binding */ signInWithCustomToken),
/* harmony export */   "a3": () => (/* binding */ sendPasswordResetEmail),
/* harmony export */   "a4": () => (/* binding */ confirmPasswordReset),
/* harmony export */   "a5": () => (/* binding */ applyActionCode),
/* harmony export */   "a6": () => (/* binding */ checkActionCode),
/* harmony export */   "a7": () => (/* binding */ verifyPasswordResetCode),
/* harmony export */   "a8": () => (/* binding */ createUserWithEmailAndPassword),
/* harmony export */   "a9": () => (/* binding */ signInWithEmailAndPassword),
/* harmony export */   "aA": () => (/* binding */ _assert),
/* harmony export */   "aB": () => (/* binding */ AuthEventManager),
/* harmony export */   "aC": () => (/* binding */ _getInstance),
/* harmony export */   "aD": () => (/* binding */ _persistenceKeyName),
/* harmony export */   "aE": () => (/* binding */ _getRedirectResult),
/* harmony export */   "aF": () => (/* binding */ _overrideRedirectResult),
/* harmony export */   "aG": () => (/* binding */ _clearRedirectOutcomes),
/* harmony export */   "aH": () => (/* binding */ _castAuth),
/* harmony export */   "aI": () => (/* binding */ UserImpl),
/* harmony export */   "aJ": () => (/* binding */ AuthImpl),
/* harmony export */   "aK": () => (/* binding */ _getClientVersion),
/* harmony export */   "aL": () => (/* binding */ _generateEventId),
/* harmony export */   "aM": () => (/* binding */ AuthPopup),
/* harmony export */   "aN": () => (/* binding */ FetchProvider),
/* harmony export */   "aO": () => (/* binding */ SAMLAuthCredential),
/* harmony export */   "aa": () => (/* binding */ sendSignInLinkToEmail),
/* harmony export */   "ab": () => (/* binding */ isSignInWithEmailLink),
/* harmony export */   "ac": () => (/* binding */ signInWithEmailLink),
/* harmony export */   "ad": () => (/* binding */ fetchSignInMethodsForEmail),
/* harmony export */   "ae": () => (/* binding */ sendEmailVerification),
/* harmony export */   "af": () => (/* binding */ verifyBeforeUpdateEmail),
/* harmony export */   "ag": () => (/* binding */ ActionCodeURL),
/* harmony export */   "ah": () => (/* binding */ parseActionCodeURL),
/* harmony export */   "ai": () => (/* binding */ updateProfile),
/* harmony export */   "aj": () => (/* binding */ updateEmail),
/* harmony export */   "ak": () => (/* binding */ updatePassword),
/* harmony export */   "al": () => (/* binding */ getIdToken),
/* harmony export */   "am": () => (/* binding */ getIdTokenResult),
/* harmony export */   "an": () => (/* binding */ unlink),
/* harmony export */   "ao": () => (/* binding */ getAdditionalUserInfo),
/* harmony export */   "ap": () => (/* binding */ reload),
/* harmony export */   "aq": () => (/* binding */ getMultiFactorResolver),
/* harmony export */   "ar": () => (/* binding */ multiFactor),
/* harmony export */   "as": () => (/* binding */ debugAssert),
/* harmony export */   "at": () => (/* binding */ _isIOS),
/* harmony export */   "au": () => (/* binding */ _isAndroid),
/* harmony export */   "av": () => (/* binding */ _fail),
/* harmony export */   "aw": () => (/* binding */ _getRedirectUrl),
/* harmony export */   "ax": () => (/* binding */ _getProjectConfig),
/* harmony export */   "ay": () => (/* binding */ _isIOS7Or8),
/* harmony export */   "az": () => (/* binding */ _createError),
/* harmony export */   "b": () => (/* binding */ browserLocalPersistence),
/* harmony export */   "c": () => (/* binding */ signInWithPopup),
/* harmony export */   "d": () => (/* binding */ linkWithPopup),
/* harmony export */   "e": () => (/* binding */ reauthenticateWithPopup),
/* harmony export */   "f": () => (/* binding */ signInWithRedirect),
/* harmony export */   "g": () => (/* binding */ linkWithRedirect),
/* harmony export */   "h": () => (/* binding */ reauthenticateWithRedirect),
/* harmony export */   "i": () => (/* binding */ indexedDBLocalPersistence),
/* harmony export */   "j": () => (/* binding */ getRedirectResult),
/* harmony export */   "k": () => (/* binding */ browserPopupRedirectResolver),
/* harmony export */   "l": () => (/* binding */ linkWithPhoneNumber),
/* harmony export */   "m": () => (/* binding */ PhoneMultiFactorGenerator),
/* harmony export */   "n": () => (/* binding */ TotpSecret),
/* harmony export */   "o": () => (/* binding */ getAuth),
/* harmony export */   "p": () => (/* binding */ ProviderId),
/* harmony export */   "q": () => (/* binding */ setPersistence),
/* harmony export */   "r": () => (/* binding */ reauthenticateWithPhoneNumber),
/* harmony export */   "s": () => (/* binding */ signInWithPhoneNumber),
/* harmony export */   "t": () => (/* binding */ initializeRecaptchaConfig),
/* harmony export */   "u": () => (/* binding */ updatePhoneNumber),
/* harmony export */   "v": () => (/* binding */ onIdTokenChanged),
/* harmony export */   "w": () => (/* binding */ beforeAuthStateChanged),
/* harmony export */   "x": () => (/* binding */ onAuthStateChanged),
/* harmony export */   "y": () => (/* binding */ useDeviceLanguage),
/* harmony export */   "z": () => (/* binding */ updateCurrentUser)
/* harmony export */ });
/* harmony import */ var D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/util */ 2090);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/app */ 9752);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 7582);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ 1877);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/component */ 4859);






/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An enum of factors that may be used for multifactor authentication.
 *
 * @public
 */

const FactorId = {
  /** Phone as second factor */
  PHONE: 'phone',
  TOTP: 'totp'
};
/**
 * Enumeration of supported providers.
 *
 * @public
 */

const ProviderId = {
  /** Facebook provider ID */
  FACEBOOK: 'facebook.com',

  /** GitHub provider ID */
  GITHUB: 'github.com',

  /** Google provider ID */
  GOOGLE: 'google.com',

  /** Password provider */
  PASSWORD: 'password',

  /** Phone provider */
  PHONE: 'phone',

  /** Twitter provider ID */
  TWITTER: 'twitter.com'
};
/**
 * Enumeration of supported sign-in methods.
 *
 * @public
 */

const SignInMethod = {
  /** Email link sign in method */
  EMAIL_LINK: 'emailLink',

  /** Email/password sign in method */
  EMAIL_PASSWORD: 'password',

  /** Facebook sign in method */
  FACEBOOK: 'facebook.com',

  /** GitHub sign in method */
  GITHUB: 'github.com',

  /** Google sign in method */
  GOOGLE: 'google.com',

  /** Phone sign in method */
  PHONE: 'phone',

  /** Twitter sign in method */
  TWITTER: 'twitter.com'
};
/**
 * Enumeration of supported operation types.
 *
 * @public
 */

const OperationType = {
  /** Operation involving linking an additional provider to an already signed-in user. */
  LINK: 'link',

  /** Operation involving using a provider to reauthenticate an already signed-in user. */
  REAUTHENTICATE: 'reauthenticate',

  /** Operation involving signing in a user. */
  SIGN_IN: 'signIn'
};
/**
 * An enumeration of the possible email action types.
 *
 * @public
 */

const ActionCodeOperation = {
  /** The email link sign-in action. */
  EMAIL_SIGNIN: 'EMAIL_SIGNIN',

  /** The password reset action. */
  PASSWORD_RESET: 'PASSWORD_RESET',

  /** The email revocation action. */
  RECOVER_EMAIL: 'RECOVER_EMAIL',

  /** The revert second factor addition email action. */
  REVERT_SECOND_FACTOR_ADDITION: 'REVERT_SECOND_FACTOR_ADDITION',

  /** The revert second factor addition email action. */
  VERIFY_AND_CHANGE_EMAIL: 'VERIFY_AND_CHANGE_EMAIL',

  /** The email verification action. */
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function _debugErrorMap() {
  return {
    ["admin-restricted-operation"
    /* AuthErrorCode.ADMIN_ONLY_OPERATION */
    ]: 'This operation is restricted to administrators only.',
    ["argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    ]: '',
    ["app-not-authorized"
    /* AuthErrorCode.APP_NOT_AUTHORIZED */
    ]: "This app, identified by the domain where it's hosted, is not " + 'authorized to use Firebase Authentication with the provided API key. ' + 'Review your key configuration in the Google API console.',
    ["app-not-installed"
    /* AuthErrorCode.APP_NOT_INSTALLED */
    ]: 'The requested mobile application corresponding to the identifier (' + 'Android package name or iOS bundle ID) provided is not installed on ' + 'this device.',
    ["captcha-check-failed"
    /* AuthErrorCode.CAPTCHA_CHECK_FAILED */
    ]: 'The reCAPTCHA response token provided is either invalid, expired, ' + 'already used or the domain associated with it does not match the list ' + 'of whitelisted domains.',
    ["code-expired"
    /* AuthErrorCode.CODE_EXPIRED */
    ]: 'The SMS code has expired. Please re-send the verification code to try ' + 'again.',
    ["cordova-not-ready"
    /* AuthErrorCode.CORDOVA_NOT_READY */
    ]: 'Cordova framework is not ready.',
    ["cors-unsupported"
    /* AuthErrorCode.CORS_UNSUPPORTED */
    ]: 'This browser is not supported.',
    ["credential-already-in-use"
    /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */
    ]: 'This credential is already associated with a different user account.',
    ["custom-token-mismatch"
    /* AuthErrorCode.CREDENTIAL_MISMATCH */
    ]: 'The custom token corresponds to a different audience.',
    ["requires-recent-login"
    /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
    ]: 'This operation is sensitive and requires recent authentication. Log in ' + 'again before retrying this request.',
    ["dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    ]: 'Another Firebase SDK was initialized and is trying to use Auth before Auth is ' + 'initialized. Please be sure to call `initializeAuth` or `getAuth` before ' + 'starting any other Firebase SDK.',
    ["dynamic-link-not-activated"
    /* AuthErrorCode.DYNAMIC_LINK_NOT_ACTIVATED */
    ]: 'Please activate Dynamic Links in the Firebase Console and agree to the terms and ' + 'conditions.',
    ["email-change-needs-verification"
    /* AuthErrorCode.EMAIL_CHANGE_NEEDS_VERIFICATION */
    ]: 'Multi-factor users must always have a verified email.',
    ["email-already-in-use"
    /* AuthErrorCode.EMAIL_EXISTS */
    ]: 'The email address is already in use by another account.',
    ["emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
    ]: 'Auth instance has already been used to make a network call. Auth can ' + 'no longer be configured to use the emulator. Try calling ' + '"connectAuthEmulator()" sooner.',
    ["expired-action-code"
    /* AuthErrorCode.EXPIRED_OOB_CODE */
    ]: 'The action code has expired.',
    ["cancelled-popup-request"
    /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ]: 'This operation has been cancelled due to another conflicting popup being opened.',
    ["internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    ]: 'An internal AuthError has occurred.',
    ["invalid-app-credential"
    /* AuthErrorCode.INVALID_APP_CREDENTIAL */
    ]: 'The phone verification request contains an invalid application verifier.' + ' The reCAPTCHA token response is either invalid or expired.',
    ["invalid-app-id"
    /* AuthErrorCode.INVALID_APP_ID */
    ]: 'The mobile app identifier is not registed for the current project.',
    ["invalid-user-token"
    /* AuthErrorCode.INVALID_AUTH */
    ]: "This user's credential isn't valid for this project. This can happen " + "if the user's token has been tampered with, or if the user isn't for " + 'the project associated with this API key.',
    ["invalid-auth-event"
    /* AuthErrorCode.INVALID_AUTH_EVENT */
    ]: 'An internal AuthError has occurred.',
    ["invalid-verification-code"
    /* AuthErrorCode.INVALID_CODE */
    ]: 'The SMS verification code used to create the phone auth credential is ' + 'invalid. Please resend the verification code sms and be sure to use the ' + 'verification code provided by the user.',
    ["invalid-continue-uri"
    /* AuthErrorCode.INVALID_CONTINUE_URI */
    ]: 'The continue URL provided in the request is invalid.',
    ["invalid-cordova-configuration"
    /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
    ]: 'The following Cordova plugins must be installed to enable OAuth sign-in: ' + 'cordova-plugin-buildinfo, cordova-universal-links-plugin, ' + 'cordova-plugin-browsertab, cordova-plugin-inappbrowser and ' + 'cordova-plugin-customurlscheme.',
    ["invalid-custom-token"
    /* AuthErrorCode.INVALID_CUSTOM_TOKEN */
    ]: 'The custom token format is incorrect. Please check the documentation.',
    ["invalid-dynamic-link-domain"
    /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
    ]: 'The provided dynamic link domain is not configured or authorized for the current project.',
    ["invalid-email"
    /* AuthErrorCode.INVALID_EMAIL */
    ]: 'The email address is badly formatted.',
    ["invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
    ]: 'Emulator URL must start with a valid scheme (http:// or https://).',
    ["invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
    ]: 'Your API key is invalid, please check you have copied it correctly.',
    ["invalid-cert-hash"
    /* AuthErrorCode.INVALID_CERT_HASH */
    ]: 'The SHA-1 certificate hash provided is invalid.',
    ["invalid-credential"
    /* AuthErrorCode.INVALID_IDP_RESPONSE */
    ]: 'The supplied auth credential is malformed or has expired.',
    ["invalid-message-payload"
    /* AuthErrorCode.INVALID_MESSAGE_PAYLOAD */
    ]: 'The email template corresponding to this action contains invalid characters in its message. ' + 'Please fix by going to the Auth email templates section in the Firebase Console.',
    ["invalid-multi-factor-session"
    /* AuthErrorCode.INVALID_MFA_SESSION */
    ]: 'The request does not contain a valid proof of first factor successful sign-in.',
    ["invalid-oauth-provider"
    /* AuthErrorCode.INVALID_OAUTH_PROVIDER */
    ]: 'EmailAuthProvider is not supported for this operation. This operation ' + 'only supports OAuth providers.',
    ["invalid-oauth-client-id"
    /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */
    ]: 'The OAuth client ID provided is either invalid or does not match the ' + 'specified API key.',
    ["unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
    ]: 'This domain is not authorized for OAuth operations for your Firebase ' + 'project. Edit the list of authorized domains from the Firebase console.',
    ["invalid-action-code"
    /* AuthErrorCode.INVALID_OOB_CODE */
    ]: 'The action code is invalid. This can happen if the code is malformed, ' + 'expired, or has already been used.',
    ["wrong-password"
    /* AuthErrorCode.INVALID_PASSWORD */
    ]: 'The password is invalid or the user does not have a password.',
    ["invalid-persistence-type"
    /* AuthErrorCode.INVALID_PERSISTENCE */
    ]: 'The specified persistence type is invalid. It can only be local, session or none.',
    ["invalid-phone-number"
    /* AuthErrorCode.INVALID_PHONE_NUMBER */
    ]: 'The format of the phone number provided is incorrect. Please enter the ' + 'phone number in a format that can be parsed into E.164 format. E.164 ' + 'phone numbers are written in the format [+][country code][subscriber ' + 'number including area code].',
    ["invalid-provider-id"
    /* AuthErrorCode.INVALID_PROVIDER_ID */
    ]: 'The specified provider ID is invalid.',
    ["invalid-recipient-email"
    /* AuthErrorCode.INVALID_RECIPIENT_EMAIL */
    ]: 'The email corresponding to this action failed to send as the provided ' + 'recipient email address is invalid.',
    ["invalid-sender"
    /* AuthErrorCode.INVALID_SENDER */
    ]: 'The email template corresponding to this action contains an invalid sender email or name. ' + 'Please fix by going to the Auth email templates section in the Firebase Console.',
    ["invalid-verification-id"
    /* AuthErrorCode.INVALID_SESSION_INFO */
    ]: 'The verification ID used to create the phone auth credential is invalid.',
    ["invalid-tenant-id"
    /* AuthErrorCode.INVALID_TENANT_ID */
    ]: "The Auth instance's tenant ID is invalid.",
    ["login-blocked"
    /* AuthErrorCode.LOGIN_BLOCKED */
    ]: 'Login blocked by user-provided method: {$originalMessage}',
    ["missing-android-pkg-name"
    /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
    ]: 'An Android Package Name must be provided if the Android App is required to be installed.',
    ["auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
    ]: 'Be sure to include authDomain when calling firebase.initializeApp(), ' + 'by following the instructions in the Firebase console.',
    ["missing-app-credential"
    /* AuthErrorCode.MISSING_APP_CREDENTIAL */
    ]: 'The phone verification request is missing an application verifier ' + 'assertion. A reCAPTCHA response token needs to be provided.',
    ["missing-verification-code"
    /* AuthErrorCode.MISSING_CODE */
    ]: 'The phone auth credential was created with an empty SMS verification code.',
    ["missing-continue-uri"
    /* AuthErrorCode.MISSING_CONTINUE_URI */
    ]: 'A continue URL must be provided in the request.',
    ["missing-iframe-start"
    /* AuthErrorCode.MISSING_IFRAME_START */
    ]: 'An internal AuthError has occurred.',
    ["missing-ios-bundle-id"
    /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
    ]: 'An iOS Bundle ID must be provided if an App Store ID is provided.',
    ["missing-or-invalid-nonce"
    /* AuthErrorCode.MISSING_OR_INVALID_NONCE */
    ]: 'The request does not contain a valid nonce. This can occur if the ' + 'SHA-256 hash of the provided raw nonce does not match the hashed nonce ' + 'in the ID token payload.',
    ["missing-password"
    /* AuthErrorCode.MISSING_PASSWORD */
    ]: 'A non-empty password must be provided',
    ["missing-multi-factor-info"
    /* AuthErrorCode.MISSING_MFA_INFO */
    ]: 'No second factor identifier is provided.',
    ["missing-multi-factor-session"
    /* AuthErrorCode.MISSING_MFA_SESSION */
    ]: 'The request is missing proof of first factor successful sign-in.',
    ["missing-phone-number"
    /* AuthErrorCode.MISSING_PHONE_NUMBER */
    ]: 'To send verification codes, provide a phone number for the recipient.',
    ["missing-verification-id"
    /* AuthErrorCode.MISSING_SESSION_INFO */
    ]: 'The phone auth credential was created with an empty verification ID.',
    ["app-deleted"
    /* AuthErrorCode.MODULE_DESTROYED */
    ]: 'This instance of FirebaseApp has been deleted.',
    ["multi-factor-info-not-found"
    /* AuthErrorCode.MFA_INFO_NOT_FOUND */
    ]: 'The user does not have a second factor matching the identifier provided.',
    ["multi-factor-auth-required"
    /* AuthErrorCode.MFA_REQUIRED */
    ]: 'Proof of ownership of a second factor is required to complete sign-in.',
    ["account-exists-with-different-credential"
    /* AuthErrorCode.NEED_CONFIRMATION */
    ]: 'An account already exists with the same email address but different ' + 'sign-in credentials. Sign in using a provider associated with this ' + 'email address.',
    ["network-request-failed"
    /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    ]: 'A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.',
    ["no-auth-event"
    /* AuthErrorCode.NO_AUTH_EVENT */
    ]: 'An internal AuthError has occurred.',
    ["no-such-provider"
    /* AuthErrorCode.NO_SUCH_PROVIDER */
    ]: 'User was not linked to an account with the given provider.',
    ["null-user"
    /* AuthErrorCode.NULL_USER */
    ]: 'A null user object was provided as the argument for an operation which ' + 'requires a non-null user object.',
    ["operation-not-allowed"
    /* AuthErrorCode.OPERATION_NOT_ALLOWED */
    ]: 'The given sign-in provider is disabled for this Firebase project. ' + 'Enable it in the Firebase console, under the sign-in method tab of the ' + 'Auth section.',
    ["operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    ]: 'This operation is not supported in the environment this application is ' + 'running on. "location.protocol" must be http, https or chrome-extension' + ' and web storage must be enabled.',
    ["popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
    ]: 'Unable to establish a connection with the popup. It may have been blocked by the browser.',
    ["popup-closed-by-user"
    /* AuthErrorCode.POPUP_CLOSED_BY_USER */
    ]: 'The popup has been closed by the user before finalizing the operation.',
    ["provider-already-linked"
    /* AuthErrorCode.PROVIDER_ALREADY_LINKED */
    ]: 'User can only be linked to one identity for the given provider.',
    ["quota-exceeded"
    /* AuthErrorCode.QUOTA_EXCEEDED */
    ]: "The project's quota for this operation has been exceeded.",
    ["redirect-cancelled-by-user"
    /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */
    ]: 'The redirect operation has been cancelled by the user before finalizing.',
    ["redirect-operation-pending"
    /* AuthErrorCode.REDIRECT_OPERATION_PENDING */
    ]: 'A redirect sign-in operation is already pending.',
    ["rejected-credential"
    /* AuthErrorCode.REJECTED_CREDENTIAL */
    ]: 'The request contains malformed or mismatching credentials.',
    ["second-factor-already-in-use"
    /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */
    ]: 'The second factor is already enrolled on this account.',
    ["maximum-second-factor-count-exceeded"
    /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */
    ]: 'The maximum allowed number of second factors on a user has been exceeded.',
    ["tenant-id-mismatch"
    /* AuthErrorCode.TENANT_ID_MISMATCH */
    ]: "The provided tenant ID does not match the Auth instance's tenant ID",
    ["timeout"
    /* AuthErrorCode.TIMEOUT */
    ]: 'The operation has timed out.',
    ["user-token-expired"
    /* AuthErrorCode.TOKEN_EXPIRED */
    ]: "The user's credential is no longer valid. The user must sign in again.",
    ["too-many-requests"
    /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */
    ]: 'We have blocked all requests from this device due to unusual activity. ' + 'Try again later.',
    ["unauthorized-continue-uri"
    /* AuthErrorCode.UNAUTHORIZED_DOMAIN */
    ]: 'The domain of the continue URL is not whitelisted.  Please whitelist ' + 'the domain in the Firebase console.',
    ["unsupported-first-factor"
    /* AuthErrorCode.UNSUPPORTED_FIRST_FACTOR */
    ]: 'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
    ["unsupported-persistence-type"
    /* AuthErrorCode.UNSUPPORTED_PERSISTENCE */
    ]: 'The current environment does not support the specified persistence type.',
    ["unsupported-tenant-operation"
    /* AuthErrorCode.UNSUPPORTED_TENANT_OPERATION */
    ]: 'This operation is not supported in a multi-tenant context.',
    ["unverified-email"
    /* AuthErrorCode.UNVERIFIED_EMAIL */
    ]: 'The operation requires a verified email.',
    ["user-cancelled"
    /* AuthErrorCode.USER_CANCELLED */
    ]: 'The user did not grant your application the permissions it requested.',
    ["user-not-found"
    /* AuthErrorCode.USER_DELETED */
    ]: 'There is no user record corresponding to this identifier. The user may ' + 'have been deleted.',
    ["user-disabled"
    /* AuthErrorCode.USER_DISABLED */
    ]: 'The user account has been disabled by an administrator.',
    ["user-mismatch"
    /* AuthErrorCode.USER_MISMATCH */
    ]: 'The supplied credentials do not correspond to the previously signed in user.',
    ["user-signed-out"
    /* AuthErrorCode.USER_SIGNED_OUT */
    ]: '',
    ["weak-password"
    /* AuthErrorCode.WEAK_PASSWORD */
    ]: 'The password must be 6 characters long or more.',
    ["web-storage-unsupported"
    /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
    ]: 'This browser is not supported or 3rd party cookies and data may be disabled.',
    ["already-initialized"
    /* AuthErrorCode.ALREADY_INITIALIZED */
    ]: 'initializeAuth() has already been called with ' + 'different options. To avoid this error, call initializeAuth() with the ' + 'same options as when it was originally called, or call getAuth() to return the' + ' already initialized instance.',
    ["missing-recaptcha-token"
    /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
    ]: 'The reCAPTCHA token is missing when sending request to the backend.',
    ["invalid-recaptcha-token"
    /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */
    ]: 'The reCAPTCHA token is invalid when sending request to the backend.',
    ["invalid-recaptcha-action"
    /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */
    ]: 'The reCAPTCHA action is invalid when sending request to the backend.',
    ["recaptcha-not-enabled"
    /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */
    ]: 'reCAPTCHA Enterprise integration is not enabled for this project.',
    ["missing-client-type"
    /* AuthErrorCode.MISSING_CLIENT_TYPE */
    ]: 'The reCAPTCHA client type is missing when sending request to the backend.',
    ["missing-recaptcha-version"
    /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */
    ]: 'The reCAPTCHA version is missing when sending request to the backend.',
    ["invalid-req-type"
    /* AuthErrorCode.INVALID_REQ_TYPE */
    ]: 'Invalid request parameters.',
    ["invalid-recaptcha-version"
    /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */
    ]: 'The reCAPTCHA version is invalid when sending request to the backend.'
  };
}

function _prodErrorMap() {
  // We will include this one message in the prod error map since by the very
  // nature of this error, developers will never be able to see the message
  // using the debugErrorMap (which is installed during auth initialization).
  return {
    ["dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    ]: 'Another Firebase SDK was initialized and is trying to use Auth before Auth is ' + 'initialized. Please be sure to call `initializeAuth` or `getAuth` before ' + 'starting any other Firebase SDK.'
  };
}
/**
 * A verbose error map with detailed descriptions for most error codes.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */


const debugErrorMap = _debugErrorMap;
/**
 * A minimal error map with all verbose error messages stripped.
 *
 * See discussion at {@link AuthErrorMap}
 *
 * @public
 */

const prodErrorMap = _prodErrorMap;

const _DEFAULT_AUTH_ERROR_FACTORY = /*#__PURE__*/new _firebase_util__WEBPACK_IMPORTED_MODULE_1__.ErrorFactory('auth', 'Firebase', /*#__PURE__*/_prodErrorMap());
/**
 * A map of potential `Auth` error codes, for easier comparison with errors
 * thrown by the SDK.
 *
 * @remarks
 * Note that you can't tree-shake individual keys
 * in the map, so by using the map you might substantially increase your
 * bundle size.
 *
 * @public
 */


const AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY = {
  ADMIN_ONLY_OPERATION: 'auth/admin-restricted-operation',
  ARGUMENT_ERROR: 'auth/argument-error',
  APP_NOT_AUTHORIZED: 'auth/app-not-authorized',
  APP_NOT_INSTALLED: 'auth/app-not-installed',
  CAPTCHA_CHECK_FAILED: 'auth/captcha-check-failed',
  CODE_EXPIRED: 'auth/code-expired',
  CORDOVA_NOT_READY: 'auth/cordova-not-ready',
  CORS_UNSUPPORTED: 'auth/cors-unsupported',
  CREDENTIAL_ALREADY_IN_USE: 'auth/credential-already-in-use',
  CREDENTIAL_MISMATCH: 'auth/custom-token-mismatch',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'auth/requires-recent-login',
  DEPENDENT_SDK_INIT_BEFORE_AUTH: 'auth/dependent-sdk-initialized-before-auth',
  DYNAMIC_LINK_NOT_ACTIVATED: 'auth/dynamic-link-not-activated',
  EMAIL_CHANGE_NEEDS_VERIFICATION: 'auth/email-change-needs-verification',
  EMAIL_EXISTS: 'auth/email-already-in-use',
  EMULATOR_CONFIG_FAILED: 'auth/emulator-config-failed',
  EXPIRED_OOB_CODE: 'auth/expired-action-code',
  EXPIRED_POPUP_REQUEST: 'auth/cancelled-popup-request',
  INTERNAL_ERROR: 'auth/internal-error',
  INVALID_API_KEY: 'auth/invalid-api-key',
  INVALID_APP_CREDENTIAL: 'auth/invalid-app-credential',
  INVALID_APP_ID: 'auth/invalid-app-id',
  INVALID_AUTH: 'auth/invalid-user-token',
  INVALID_AUTH_EVENT: 'auth/invalid-auth-event',
  INVALID_CERT_HASH: 'auth/invalid-cert-hash',
  INVALID_CODE: 'auth/invalid-verification-code',
  INVALID_CONTINUE_URI: 'auth/invalid-continue-uri',
  INVALID_CORDOVA_CONFIGURATION: 'auth/invalid-cordova-configuration',
  INVALID_CUSTOM_TOKEN: 'auth/invalid-custom-token',
  INVALID_DYNAMIC_LINK_DOMAIN: 'auth/invalid-dynamic-link-domain',
  INVALID_EMAIL: 'auth/invalid-email',
  INVALID_EMULATOR_SCHEME: 'auth/invalid-emulator-scheme',
  INVALID_IDP_RESPONSE: 'auth/invalid-credential',
  INVALID_MESSAGE_PAYLOAD: 'auth/invalid-message-payload',
  INVALID_MFA_SESSION: 'auth/invalid-multi-factor-session',
  INVALID_OAUTH_CLIENT_ID: 'auth/invalid-oauth-client-id',
  INVALID_OAUTH_PROVIDER: 'auth/invalid-oauth-provider',
  INVALID_OOB_CODE: 'auth/invalid-action-code',
  INVALID_ORIGIN: 'auth/unauthorized-domain',
  INVALID_PASSWORD: 'auth/wrong-password',
  INVALID_PERSISTENCE: 'auth/invalid-persistence-type',
  INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
  INVALID_PROVIDER_ID: 'auth/invalid-provider-id',
  INVALID_RECIPIENT_EMAIL: 'auth/invalid-recipient-email',
  INVALID_SENDER: 'auth/invalid-sender',
  INVALID_SESSION_INFO: 'auth/invalid-verification-id',
  INVALID_TENANT_ID: 'auth/invalid-tenant-id',
  MFA_INFO_NOT_FOUND: 'auth/multi-factor-info-not-found',
  MFA_REQUIRED: 'auth/multi-factor-auth-required',
  MISSING_ANDROID_PACKAGE_NAME: 'auth/missing-android-pkg-name',
  MISSING_APP_CREDENTIAL: 'auth/missing-app-credential',
  MISSING_AUTH_DOMAIN: 'auth/auth-domain-config-required',
  MISSING_CODE: 'auth/missing-verification-code',
  MISSING_CONTINUE_URI: 'auth/missing-continue-uri',
  MISSING_IFRAME_START: 'auth/missing-iframe-start',
  MISSING_IOS_BUNDLE_ID: 'auth/missing-ios-bundle-id',
  MISSING_OR_INVALID_NONCE: 'auth/missing-or-invalid-nonce',
  MISSING_MFA_INFO: 'auth/missing-multi-factor-info',
  MISSING_MFA_SESSION: 'auth/missing-multi-factor-session',
  MISSING_PHONE_NUMBER: 'auth/missing-phone-number',
  MISSING_SESSION_INFO: 'auth/missing-verification-id',
  MODULE_DESTROYED: 'auth/app-deleted',
  NEED_CONFIRMATION: 'auth/account-exists-with-different-credential',
  NETWORK_REQUEST_FAILED: 'auth/network-request-failed',
  NULL_USER: 'auth/null-user',
  NO_AUTH_EVENT: 'auth/no-auth-event',
  NO_SUCH_PROVIDER: 'auth/no-such-provider',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  OPERATION_NOT_SUPPORTED: 'auth/operation-not-supported-in-this-environment',
  POPUP_BLOCKED: 'auth/popup-blocked',
  POPUP_CLOSED_BY_USER: 'auth/popup-closed-by-user',
  PROVIDER_ALREADY_LINKED: 'auth/provider-already-linked',
  QUOTA_EXCEEDED: 'auth/quota-exceeded',
  REDIRECT_CANCELLED_BY_USER: 'auth/redirect-cancelled-by-user',
  REDIRECT_OPERATION_PENDING: 'auth/redirect-operation-pending',
  REJECTED_CREDENTIAL: 'auth/rejected-credential',
  SECOND_FACTOR_ALREADY_ENROLLED: 'auth/second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'auth/maximum-second-factor-count-exceeded',
  TENANT_ID_MISMATCH: 'auth/tenant-id-mismatch',
  TIMEOUT: 'auth/timeout',
  TOKEN_EXPIRED: 'auth/user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'auth/too-many-requests',
  UNAUTHORIZED_DOMAIN: 'auth/unauthorized-continue-uri',
  UNSUPPORTED_FIRST_FACTOR: 'auth/unsupported-first-factor',
  UNSUPPORTED_PERSISTENCE: 'auth/unsupported-persistence-type',
  UNSUPPORTED_TENANT_OPERATION: 'auth/unsupported-tenant-operation',
  UNVERIFIED_EMAIL: 'auth/unverified-email',
  USER_CANCELLED: 'auth/user-cancelled',
  USER_DELETED: 'auth/user-not-found',
  USER_DISABLED: 'auth/user-disabled',
  USER_MISMATCH: 'auth/user-mismatch',
  USER_SIGNED_OUT: 'auth/user-signed-out',
  WEAK_PASSWORD: 'auth/weak-password',
  WEB_STORAGE_UNSUPPORTED: 'auth/web-storage-unsupported',
  ALREADY_INITIALIZED: 'auth/already-initialized',
  RECAPTCHA_NOT_ENABLED: 'auth/recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'auth/missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'auth/invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'auth/invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'auth/missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'auth/missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'auth/invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'auth/invalid-req-type'
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const logClient = /*#__PURE__*/new _firebase_logger__WEBPACK_IMPORTED_MODULE_3__.Logger('@firebase/auth');

function _logWarn(msg, ...args) {
  if (logClient.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.WARN) {
    logClient.warn(`Auth (${_firebase_app__WEBPACK_IMPORTED_MODULE_2__.SDK_VERSION}): ${msg}`, ...args);
  }
}

function _logError(msg, ...args) {
  if (logClient.logLevel <= _firebase_logger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.ERROR) {
    logClient.error(`Auth (${_firebase_app__WEBPACK_IMPORTED_MODULE_2__.SDK_VERSION}): ${msg}`, ...args);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}

function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}

function _errorWithCustomMessage(auth, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), {
    [code]: message
  });
  const factory = new _firebase_util__WEBPACK_IMPORTED_MODULE_1__.ErrorFactory('auth', 'Firebase', errorMap);
  return factory.create(code, {
    appName: auth.name
  });
}

function _assertInstanceOf(auth, object, instance) {
  const constructorInstance = instance;

  if (!(object instanceof constructorInstance)) {
    if (constructorInstance.name !== object.constructor.name) {
      _fail(auth, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );
    }

    throw _errorWithCustomMessage(auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    , `Type of ${object.constructor.name} does not match expected instance.` + `Did you pass a reference from a different Auth SDK?`);
  }
}

function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== 'string') {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];

    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }

    return authOrCode._errorFactory.create(code, ...fullParams);
  }

  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}

function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */


function debugFail(failure) {
  // Log the failure in addition to throw an exception, just in case the
  // exception is swallowed.
  const message = `INTERNAL ASSERTION FAILED: ` + failure;

  _logError(message); // NOTE: We don't use FirebaseError here because these are internal failures
  // that cannot be handled by the user. (Also it would create a circular
  // dependency between the error and assert modules which doesn't work.)


  throw new Error(message);
}
/**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * @param assertion
 * @param message
 */


function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getCurrentUrl() {
  var _a;

  return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || '';
}

function _isHttpOrHttps() {
  return _getCurrentScheme() === 'http:' || _getCurrentScheme() === 'https:';
}

function _getCurrentScheme() {
  var _a;

  return typeof self !== 'undefined' && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Determine whether the browser is working online
 */


function _isOnline() {
  if (typeof navigator !== 'undefined' && navigator && 'onLine' in navigator && typeof navigator.onLine === 'boolean' && ( // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  _isHttpOrHttps() || (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.isBrowserExtension)() || 'connection' in navigator)) {
    return navigator.onLine;
  } // If we can't determine the state, assume it is online.


  return true;
}

function _getUserLanguage() {
  if (typeof navigator === 'undefined') {
    return null;
  }

  const navigatorLanguage = navigator;
  return (// Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language || // Couldn't determine language.
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */


class Delay {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay; // Internal error when improperly initialized.

    debugAssert(longDelay > shortDelay, 'Short delay should be less than long delay!');
    this.isMobile = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.isMobileCordova)() || (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.isReactNative)();
  }

  get() {
    if (!_isOnline()) {
      // Pick the shorter timeout.
      return Math.min(5000
      /* DelayMin.OFFLINE */
      , this.shortDelay);
    } // If running in a mobile environment, return the long delay, otherwise
    // return the short delay.
    // This could be improved in the future to dynamically change based on other
    // variables instead of just reading the current environment.


    return this.isMobile ? this.longDelay : this.shortDelay;
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _emulatorUrl(config, path) {
  debugAssert(config.emulator, 'Emulator should always be set here');
  const {
    url
  } = config.emulator;

  if (!path) {
    return url;
  }

  return `${url}${path.startsWith('/') ? path.slice(1) : path}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class FetchProvider {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;

    if (headersImpl) {
      this.headersImpl = headersImpl;
    }

    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }

  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }

    if (typeof self !== 'undefined' && 'fetch' in self) {
      return self.fetch;
    }

    debugFail('Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
  }

  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }

    if (typeof self !== 'undefined' && 'Headers' in self) {
      return self.Headers;
    }

    debugFail('Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
  }

  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }

    if (typeof self !== 'undefined' && 'Response' in self) {
      return self.Response;
    }

    debugFail('Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill');
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Map from errors returned by the server to errors to developer visible errors
 */


const SERVER_ERROR_MAP = {
  // Custom token errors.
  ["CREDENTIAL_MISMATCH"
  /* ServerError.CREDENTIAL_MISMATCH */
  ]: "custom-token-mismatch"
  /* AuthErrorCode.CREDENTIAL_MISMATCH */
  ,
  // This can only happen if the SDK sends a bad request.
  ["MISSING_CUSTOM_TOKEN"
  /* ServerError.MISSING_CUSTOM_TOKEN */
  ]: "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  ,
  // Create Auth URI errors.
  ["INVALID_IDENTIFIER"
  /* ServerError.INVALID_IDENTIFIER */
  ]: "invalid-email"
  /* AuthErrorCode.INVALID_EMAIL */
  ,
  // This can only happen if the SDK sends a bad request.
  ["MISSING_CONTINUE_URI"
  /* ServerError.MISSING_CONTINUE_URI */
  ]: "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  ,
  // Sign in with email and password errors (some apply to sign up too).
  ["INVALID_PASSWORD"
  /* ServerError.INVALID_PASSWORD */
  ]: "wrong-password"
  /* AuthErrorCode.INVALID_PASSWORD */
  ,
  // This can only happen if the SDK sends a bad request.
  ["MISSING_PASSWORD"
  /* ServerError.MISSING_PASSWORD */
  ]: "missing-password"
  /* AuthErrorCode.MISSING_PASSWORD */
  ,
  // Sign up with email and password errors.
  ["EMAIL_EXISTS"
  /* ServerError.EMAIL_EXISTS */
  ]: "email-already-in-use"
  /* AuthErrorCode.EMAIL_EXISTS */
  ,
  ["PASSWORD_LOGIN_DISABLED"
  /* ServerError.PASSWORD_LOGIN_DISABLED */
  ]: "operation-not-allowed"
  /* AuthErrorCode.OPERATION_NOT_ALLOWED */
  ,
  // Verify assertion for sign in with credential errors:
  ["INVALID_IDP_RESPONSE"
  /* ServerError.INVALID_IDP_RESPONSE */
  ]: "invalid-credential"
  /* AuthErrorCode.INVALID_IDP_RESPONSE */
  ,
  ["INVALID_PENDING_TOKEN"
  /* ServerError.INVALID_PENDING_TOKEN */
  ]: "invalid-credential"
  /* AuthErrorCode.INVALID_IDP_RESPONSE */
  ,
  ["FEDERATED_USER_ID_ALREADY_LINKED"
  /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
  ]: "credential-already-in-use"
  /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */
  ,
  // This can only happen if the SDK sends a bad request.
  ["MISSING_REQ_TYPE"
  /* ServerError.MISSING_REQ_TYPE */
  ]: "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  ,
  // Send Password reset email errors:
  ["EMAIL_NOT_FOUND"
  /* ServerError.EMAIL_NOT_FOUND */
  ]: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
  ,
  ["RESET_PASSWORD_EXCEED_LIMIT"
  /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */
  ]: "too-many-requests"
  /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */
  ,
  ["EXPIRED_OOB_CODE"
  /* ServerError.EXPIRED_OOB_CODE */
  ]: "expired-action-code"
  /* AuthErrorCode.EXPIRED_OOB_CODE */
  ,
  ["INVALID_OOB_CODE"
  /* ServerError.INVALID_OOB_CODE */
  ]: "invalid-action-code"
  /* AuthErrorCode.INVALID_OOB_CODE */
  ,
  // This can only happen if the SDK sends a bad request.
  ["MISSING_OOB_CODE"
  /* ServerError.MISSING_OOB_CODE */
  ]: "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  ,
  // Operations that require ID token in request:
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
  /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
  ]: "requires-recent-login"
  /* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
  ,
  ["INVALID_ID_TOKEN"
  /* ServerError.INVALID_ID_TOKEN */
  ]: "invalid-user-token"
  /* AuthErrorCode.INVALID_AUTH */
  ,
  ["TOKEN_EXPIRED"
  /* ServerError.TOKEN_EXPIRED */
  ]: "user-token-expired"
  /* AuthErrorCode.TOKEN_EXPIRED */
  ,
  ["USER_NOT_FOUND"
  /* ServerError.USER_NOT_FOUND */
  ]: "user-token-expired"
  /* AuthErrorCode.TOKEN_EXPIRED */
  ,
  // Other errors.
  ["TOO_MANY_ATTEMPTS_TRY_LATER"
  /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */
  ]: "too-many-requests"
  /* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */
  ,
  // Phone Auth related errors.
  ["INVALID_CODE"
  /* ServerError.INVALID_CODE */
  ]: "invalid-verification-code"
  /* AuthErrorCode.INVALID_CODE */
  ,
  ["INVALID_SESSION_INFO"
  /* ServerError.INVALID_SESSION_INFO */
  ]: "invalid-verification-id"
  /* AuthErrorCode.INVALID_SESSION_INFO */
  ,
  ["INVALID_TEMPORARY_PROOF"
  /* ServerError.INVALID_TEMPORARY_PROOF */
  ]: "invalid-credential"
  /* AuthErrorCode.INVALID_IDP_RESPONSE */
  ,
  ["MISSING_SESSION_INFO"
  /* ServerError.MISSING_SESSION_INFO */
  ]: "missing-verification-id"
  /* AuthErrorCode.MISSING_SESSION_INFO */
  ,
  ["SESSION_EXPIRED"
  /* ServerError.SESSION_EXPIRED */
  ]: "code-expired"
  /* AuthErrorCode.CODE_EXPIRED */
  ,
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  ["MISSING_ANDROID_PACKAGE_NAME"
  /* ServerError.MISSING_ANDROID_PACKAGE_NAME */
  ]: "missing-android-pkg-name"
  /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
  ,
  ["UNAUTHORIZED_DOMAIN"
  /* ServerError.UNAUTHORIZED_DOMAIN */
  ]: "unauthorized-continue-uri"
  /* AuthErrorCode.UNAUTHORIZED_DOMAIN */
  ,
  // getProjectConfig errors when clientId is passed.
  ["INVALID_OAUTH_CLIENT_ID"
  /* ServerError.INVALID_OAUTH_CLIENT_ID */
  ]: "invalid-oauth-client-id"
  /* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */
  ,
  // User actions (sign-up or deletion) disabled errors.
  ["ADMIN_ONLY_OPERATION"
  /* ServerError.ADMIN_ONLY_OPERATION */
  ]: "admin-restricted-operation"
  /* AuthErrorCode.ADMIN_ONLY_OPERATION */
  ,
  // Multi factor related errors.
  ["INVALID_MFA_PENDING_CREDENTIAL"
  /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */
  ]: "invalid-multi-factor-session"
  /* AuthErrorCode.INVALID_MFA_SESSION */
  ,
  ["MFA_ENROLLMENT_NOT_FOUND"
  /* ServerError.MFA_ENROLLMENT_NOT_FOUND */
  ]: "multi-factor-info-not-found"
  /* AuthErrorCode.MFA_INFO_NOT_FOUND */
  ,
  ["MISSING_MFA_ENROLLMENT_ID"
  /* ServerError.MISSING_MFA_ENROLLMENT_ID */
  ]: "missing-multi-factor-info"
  /* AuthErrorCode.MISSING_MFA_INFO */
  ,
  ["MISSING_MFA_PENDING_CREDENTIAL"
  /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */
  ]: "missing-multi-factor-session"
  /* AuthErrorCode.MISSING_MFA_SESSION */
  ,
  ["SECOND_FACTOR_EXISTS"
  /* ServerError.SECOND_FACTOR_EXISTS */
  ]: "second-factor-already-in-use"
  /* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */
  ,
  ["SECOND_FACTOR_LIMIT_EXCEEDED"
  /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */
  ]: "maximum-second-factor-count-exceeded"
  /* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */
  ,
  // Blocking functions related errors.
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"
  /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */
  ]: "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  ,
  // Recaptcha related errors.
  ["RECAPTCHA_NOT_ENABLED"
  /* ServerError.RECAPTCHA_NOT_ENABLED */
  ]: "recaptcha-not-enabled"
  /* AuthErrorCode.RECAPTCHA_NOT_ENABLED */
  ,
  ["MISSING_RECAPTCHA_TOKEN"
  /* ServerError.MISSING_RECAPTCHA_TOKEN */
  ]: "missing-recaptcha-token"
  /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
  ,
  ["INVALID_RECAPTCHA_TOKEN"
  /* ServerError.INVALID_RECAPTCHA_TOKEN */
  ]: "invalid-recaptcha-token"
  /* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */
  ,
  ["INVALID_RECAPTCHA_ACTION"
  /* ServerError.INVALID_RECAPTCHA_ACTION */
  ]: "invalid-recaptcha-action"
  /* AuthErrorCode.INVALID_RECAPTCHA_ACTION */
  ,
  ["MISSING_CLIENT_TYPE"
  /* ServerError.MISSING_CLIENT_TYPE */
  ]: "missing-client-type"
  /* AuthErrorCode.MISSING_CLIENT_TYPE */
  ,
  ["MISSING_RECAPTCHA_VERSION"
  /* ServerError.MISSING_RECAPTCHA_VERSION */
  ]: "missing-recaptcha-version"
  /* AuthErrorCode.MISSING_RECAPTCHA_VERSION */
  ,
  ["INVALID_RECAPTCHA_VERSION"
  /* ServerError.INVALID_RECAPTCHA_VERSION */
  ]: "invalid-recaptcha-version"
  /* AuthErrorCode.INVALID_RECAPTCHA_VERSION */
  ,
  ["INVALID_REQ_TYPE"
  /* ServerError.INVALID_REQ_TYPE */
  ]: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */

};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const DEFAULT_API_TIMEOUT_MS = /*#__PURE__*/new Delay(30000, 60000);

function _addTidIfNecessary(auth, request) {
  if (auth.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), {
      tenantId: auth.tenantId
    });
  }

  return request;
}

function _performApiRequest(_x, _x2, _x3, _x4) {
  return _performApiRequest2.apply(this, arguments);
}

function _performApiRequest2() {
  _performApiRequest2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, method, path, request, customErrorMap = {}) {
    return _performFetchWithErrorHandling(auth, customErrorMap, /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let body = {};
      let params = {};

      if (request) {
        if (method === "GET"
        /* HttpMethod.GET */
        ) {
          params = request;
        } else {
          body = {
            body: JSON.stringify(request)
          };
        }
      }

      const query = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystring)(Object.assign({
        key: auth.config.apiKey
      }, params)).slice(1);
      const headers = yield auth._getAdditionalHeaders();
      headers["Content-Type"
      /* HttpHeader.CONTENT_TYPE */
      ] = 'application/json';

      if (auth.languageCode) {
        headers["X-Firebase-Locale"
        /* HttpHeader.X_FIREBASE_LOCALE */
        ] = auth.languageCode;
      }

      return FetchProvider.fetch()(_getFinalTarget(auth, auth.config.apiHost, path, query), Object.assign({
        method,
        headers,
        referrerPolicy: 'no-referrer'
      }, body));
    }));
  });
  return _performApiRequest2.apply(this, arguments);
}

function _performFetchWithErrorHandling(_x5, _x6, _x7) {
  return _performFetchWithErrorHandling2.apply(this, arguments);
}

function _performFetchWithErrorHandling2() {
  _performFetchWithErrorHandling2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, customErrorMap, fetchFn) {
    auth._canInitEmulator = false;
    const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);

    try {
      const networkTimeout = new NetworkTimeout(auth);
      const response = yield Promise.race([fetchFn(), networkTimeout.promise]); // If we've reached this point, the fetch succeeded and the networkTimeout
      // didn't throw; clear the network timeout delay so that Node won't hang

      networkTimeout.clearNetworkTimeout();
      const json = yield response.json();

      if ('needConfirmation' in json) {
        throw _makeTaggedError(auth, "account-exists-with-different-credential"
        /* AuthErrorCode.NEED_CONFIRMATION */
        , json);
      }

      if (response.ok && !('errorMessage' in json)) {
        return json;
      } else {
        const errorMessage = response.ok ? json.errorMessage : json.error.message;
        const [serverErrorCode, serverErrorMessage] = errorMessage.split(' : ');

        if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED"
        /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
        ) {
          throw _makeTaggedError(auth, "credential-already-in-use"
          /* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */
          , json);
        } else if (serverErrorCode === "EMAIL_EXISTS"
        /* ServerError.EMAIL_EXISTS */
        ) {
          throw _makeTaggedError(auth, "email-already-in-use"
          /* AuthErrorCode.EMAIL_EXISTS */
          , json);
        } else if (serverErrorCode === "USER_DISABLED"
        /* ServerError.USER_DISABLED */
        ) {
          throw _makeTaggedError(auth, "user-disabled"
          /* AuthErrorCode.USER_DISABLED */
          , json);
        }

        const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, '-');

        if (serverErrorMessage) {
          throw _errorWithCustomMessage(auth, authError, serverErrorMessage);
        } else {
          _fail(auth, authError);
        }
      }
    } catch (e) {
      if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_1__.FirebaseError) {
        throw e;
      } // Changing this to a different error code will log user out when there is a network error
      // because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
      // https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316


      _fail(auth, "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
      , {
        'message': String(e)
      });
    }
  });
  return _performFetchWithErrorHandling2.apply(this, arguments);
}

function _performSignInRequest(_x8, _x9, _x10, _x11) {
  return _performSignInRequest2.apply(this, arguments);
}

function _performSignInRequest2() {
  _performSignInRequest2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, method, path, request, customErrorMap = {}) {
    const serverResponse = yield _performApiRequest(auth, method, path, request, customErrorMap);

    if ('mfaPendingCredential' in serverResponse) {
      _fail(auth, "multi-factor-auth-required"
      /* AuthErrorCode.MFA_REQUIRED */
      , {
        _serverResponse: serverResponse
      });
    }

    return serverResponse;
  });
  return _performSignInRequest2.apply(this, arguments);
}

function _getFinalTarget(auth, host, path, query) {
  const base = `${host}${path}?${query}`;

  if (!auth.config.emulator) {
    return `${auth.config.apiScheme}://${base}`;
  }

  return _emulatorUrl(auth.config, base);
}

class NetworkTimeout {
  constructor(auth) {
    this.auth = auth; // Node timers and browser timers are fundamentally incompatible, but we
    // don't care about the value here
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }

  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }

}

function _makeTaggedError(auth, code, response) {
  const errorParams = {
    appName: auth.name
  };

  if (response.email) {
    errorParams.email = response.email;
  }

  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }

  const error = _createError(auth, code, errorParams); // We know customData is defined on error because errorParams is defined


  error.customData._tokenResponse = response;
  return error;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function deleteAccount(_x12, _x13) {
  return _deleteAccount.apply(this, arguments);
}

function _deleteAccount() {
  _deleteAccount = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:delete"
    /* Endpoint.DELETE_ACCOUNT */
    , request);
  });
  return _deleteAccount.apply(this, arguments);
}

function deleteLinkedAccounts(_x14, _x15) {
  return _deleteLinkedAccounts.apply(this, arguments);
}

function _deleteLinkedAccounts() {
  _deleteLinkedAccounts = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:update"
    /* Endpoint.SET_ACCOUNT_INFO */
    , request);
  });
  return _deleteLinkedAccounts.apply(this, arguments);
}

function getAccountInfo(_x16, _x17) {
  return _getAccountInfo.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getAccountInfo() {
  _getAccountInfo = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:lookup"
    /* Endpoint.GET_ACCOUNT_INFO */
    , request);
  });
  return _getAccountInfo.apply(this, arguments);
}

function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return undefined;
  }

  try {
    // Convert to date object.
    const date = new Date(Number(utcTimestamp)); // Test date is valid.

    if (!isNaN(date.getTime())) {
      // Convert to UTC date string.
      return date.toUTCString();
    }
  } catch (e) {// Do nothing. undefined will be returned.
  }

  return undefined;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */


function getIdToken(user, forceRefresh = false) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user).getIdToken(forceRefresh);
}
/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */


function getIdTokenResult(_x18) {
  return _getIdTokenResult.apply(this, arguments);
}

function _getIdTokenResult() {
  _getIdTokenResult = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, forceRefresh = false) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    const token = yield userInternal.getIdToken(forceRefresh);

    const claims = _parseToken(token);

    _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    const firebase = typeof claims.firebase === 'object' ? claims.firebase : undefined;
    const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_provider'];
    return {
      claims,
      token,
      authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
      issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
      expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
      signInProvider: signInProvider || null,
      signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase['sign_in_second_factor']) || null
    };
  });
  return _getIdTokenResult.apply(this, arguments);
}

function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1000;
}

function _parseToken(token) {
  const [algorithm, payload, signature] = token.split('.');

  if (algorithm === undefined || payload === undefined || signature === undefined) {
    _logError('JWT malformed, contained fewer than 3 sections');

    return null;
  }

  try {
    const decoded = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.base64Decode)(payload);

    if (!decoded) {
      _logError('Failed to decode base64 JWT payload');

      return null;
    }

    return JSON.parse(decoded);
  } catch (e) {
    _logError('Caught error parsing JWT payload as JSON', e === null || e === void 0 ? void 0 : e.toString());

    return null;
  }
}
/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */


function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);

  _assert(parsedToken, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  );

  _assert(typeof parsedToken.exp !== 'undefined', "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  );

  _assert(typeof parsedToken.iat !== 'undefined', "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  );

  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _logoutIfInvalidated(_x19, _x20) {
  return _logoutIfInvalidated2.apply(this, arguments);
}

function _logoutIfInvalidated2() {
  _logoutIfInvalidated2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, promise, bypassAuthState = false) {
    if (bypassAuthState) {
      return promise;
    }

    try {
      return yield promise;
    } catch (e) {
      if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_1__.FirebaseError && isUserInvalidated(e)) {
        if (user.auth.currentUser === user) {
          yield user.auth.signOut();
        }
      }

      throw e;
    }
  });
  return _logoutIfInvalidated2.apply(this, arguments);
}

function isUserInvalidated({
  code
}) {
  return code === `auth/${"user-disabled"
  /* AuthErrorCode.USER_DISABLED */
  }` || code === `auth/${"user-token-expired"
  /* AuthErrorCode.TOKEN_EXPIRED */
  }`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class ProactiveRefresh {
  constructor(user) {
    this.user = user;
    this.isRunning = false; // Node timers and browser timers return fundamentally different types.
    // We don't actually care what the value is but TS won't accept unknown and
    // we can't cast properly in both environments.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    this.timerId = null;
    this.errorBackoff = 30000
    /* Duration.RETRY_BACKOFF_MIN */
    ;
  }

  _start() {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.schedule();
  }

  _stop() {
    if (!this.isRunning) {
      return;
    }

    this.isRunning = false;

    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }

  getInterval(wasError) {
    var _a;

    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 960000
      /* Duration.RETRY_BACKOFF_MAX */
      );
      return interval;
    } else {
      // Reset the error backoff
      this.errorBackoff = 30000
      /* Duration.RETRY_BACKOFF_MIN */
      ;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 300000
      /* Duration.OFFSET */
      ;
      return Math.max(0, interval);
    }
  }

  schedule(wasError = false) {
    var _this = this;

    if (!this.isRunning) {
      // Just in case...
      return;
    }

    const interval = this.getInterval(wasError);
    this.timerId = setTimeout( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.iteration();
    }), interval);
  }

  iteration() {
    var _this2 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.user.getIdToken(true);
      } catch (e) {
        // Only retry on network errors
        if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        }`) {
          _this2.schedule(
          /* wasError */
          true);
        }

        return;
      }

      _this2.schedule();
    })();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class UserMetadata {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;

    this._initializeTime();
  }

  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }

  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;

    this._initializeTime();
  }

  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _reloadWithoutSaving(_x21) {
  return _reloadWithoutSaving2.apply(this, arguments);
}
/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */


function _reloadWithoutSaving2() {
  _reloadWithoutSaving2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
    var _a;

    const auth = user.auth;
    const idToken = yield user.getIdToken();
    const response = yield _logoutIfInvalidated(user, getAccountInfo(auth, {
      idToken
    }));

    _assert(response === null || response === void 0 ? void 0 : response.users.length, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    const coreAccount = response.users[0];

    user._notifyReloadListener(coreAccount);

    const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
    const providerData = mergeProviderData(user.providerData, newProviderData); // Preserves the non-nonymous status of the stored user, even if no more
    // credentials (federated or email/password) are linked to the user. If
    // the user was previously anonymous, then use provider data to update.
    // On the other hand, if it was not anonymous before, it should never be
    // considered anonymous now.

    const oldIsAnonymous = user.isAnonymous;
    const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
    const updates = {
      uid: coreAccount.localId,
      displayName: coreAccount.displayName || null,
      photoURL: coreAccount.photoUrl || null,
      email: coreAccount.email || null,
      emailVerified: coreAccount.emailVerified || false,
      phoneNumber: coreAccount.phoneNumber || null,
      tenantId: coreAccount.tenantId || null,
      providerData,
      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
      isAnonymous
    };
    Object.assign(user, updates);
  });
  return _reloadWithoutSaving2.apply(this, arguments);
}

function reload(_x22) {
  return _reload.apply(this, arguments);
}

function _reload() {
  _reload = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    yield _reloadWithoutSaving(userInternal); // Even though the current user hasn't changed, update
    // current user will trigger a persistence update w/ the
    // new info.

    yield userInternal.auth._persistUserIfCurrent(userInternal);

    userInternal.auth._notifyListenersIfCurrent(userInternal);
  });
  return _reload.apply(this, arguments);
}

function mergeProviderData(original, newData) {
  const deduped = original.filter(o => !newData.some(n => n.providerId === o.providerId));
  return [...deduped, ...newData];
}

function extractProviderData(providers) {
  return providers.map(_a => {
    var {
      providerId
    } = _a,
        provider = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(_a, ["providerId"]);

    return {
      providerId,
      uid: provider.rawId || '',
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function requestStsToken(_x23, _x24) {
  return _requestStsToken.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */


function _requestStsToken() {
  _requestStsToken = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, refreshToken) {
    const response = yield _performFetchWithErrorHandling(auth, {}, /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const body = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystring)({
        'grant_type': 'refresh_token',
        'refresh_token': refreshToken
      }).slice(1);
      const {
        tokenApiHost,
        apiKey
      } = auth.config;

      const url = _getFinalTarget(auth, tokenApiHost, "/v1/token"
      /* Endpoint.TOKEN */
      , `key=${apiKey}`);

      const headers = yield auth._getAdditionalHeaders();
      headers["Content-Type"
      /* HttpHeader.CONTENT_TYPE */
      ] = 'application/x-www-form-urlencoded';
      return FetchProvider.fetch()(url, {
        method: "POST"
        /* HttpMethod.POST */
        ,
        headers,
        body
      });
    })); // The response comes back in snake_case. Convert to camel:

    return {
      accessToken: response.access_token,
      expiresIn: response.expires_in,
      refreshToken: response.refresh_token
    };
  });
  return _requestStsToken.apply(this, arguments);
}

class StsTokenManager {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }

  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 30000
    /* Buffer.TOKEN_REFRESH */
    ;
  }

  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    _assert(typeof response.idToken !== 'undefined', "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    _assert(typeof response.refreshToken !== 'undefined', "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    const expiresIn = 'expiresIn' in response && typeof response.expiresIn !== 'undefined' ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }

  getToken(auth, forceRefresh = false) {
    var _this3 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _assert(!_this3.accessToken || _this3.refreshToken, auth, "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
      );

      if (!forceRefresh && _this3.accessToken && !_this3.isExpired) {
        return _this3.accessToken;
      }

      if (_this3.refreshToken) {
        yield _this3.refresh(auth, _this3.refreshToken);
        return _this3.accessToken;
      }

      return null;
    })();
  }

  clearRefreshToken() {
    this.refreshToken = null;
  }

  refresh(auth, oldToken) {
    var _this4 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        accessToken,
        refreshToken,
        expiresIn
      } = yield requestStsToken(auth, oldToken);

      _this4.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
    })();
  }

  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1000;
  }

  static fromJSON(appName, object) {
    const {
      refreshToken,
      accessToken,
      expirationTime
    } = object;
    const manager = new StsTokenManager();

    if (refreshToken) {
      _assert(typeof refreshToken === 'string', "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      , {
        appName
      });

      manager.refreshToken = refreshToken;
    }

    if (accessToken) {
      _assert(typeof accessToken === 'string', "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      , {
        appName
      });

      manager.accessToken = accessToken;
    }

    if (expirationTime) {
      _assert(typeof expirationTime === 'number', "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      , {
        appName
      });

      manager.expirationTime = expirationTime;
    }

    return manager;
  }

  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }

  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }

  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }

  _performRefresh() {
    return debugFail('not implemented');
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === 'string' || typeof assertion === 'undefined', "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  , {
    appName
  });
}

class UserImpl {
  constructor(_a) {
    var {
      uid,
      auth,
      stsTokenManager
    } = _a,
        opt = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(_a, ["uid", "auth", "stsTokenManager"]); // For the user object, provider is always Firebase.


    this.providerId = "firebase"
    /* ProviderId.FIREBASE */
    ;
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || undefined, opt.lastLoginAt || undefined);
  }

  getIdToken(forceRefresh) {
    var _this5 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const accessToken = yield _logoutIfInvalidated(_this5, _this5.stsTokenManager.getToken(_this5.auth, forceRefresh));

      _assert(accessToken, _this5.auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      );

      if (_this5.accessToken !== accessToken) {
        _this5.accessToken = accessToken;
        yield _this5.auth._persistUserIfCurrent(_this5);

        _this5.auth._notifyListenersIfCurrent(_this5);
      }

      return accessToken;
    })();
  }

  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }

  reload() {
    return reload(this);
  }

  _assign(user) {
    if (this === user) {
      return;
    }

    _assert(this.uid === user.uid, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map(userInfo => Object.assign({}, userInfo));

    this.metadata._copy(user.metadata);

    this.stsTokenManager._assign(user.stsTokenManager);
  }

  _clone(auth) {
    const newUser = new UserImpl(Object.assign(Object.assign({}, this), {
      auth,
      stsTokenManager: this.stsTokenManager._clone()
    }));

    newUser.metadata._copy(this.metadata);

    return newUser;
  }

  _onReload(callback) {
    // There should only ever be one listener, and that is a single instance of MultiFactorUser
    _assert(!this.reloadListener, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    this.reloadListener = callback;

    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);

      this.reloadUserInfo = null;
    }
  }

  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      // If no listener is subscribed yet, save the result so it's available when they do subscribe
      this.reloadUserInfo = userInfo;
    }
  }

  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }

  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }

  _updateTokensIfNecessary(response, reload = false) {
    var _this6 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tokensRefreshed = false;

      if (response.idToken && response.idToken !== _this6.stsTokenManager.accessToken) {
        _this6.stsTokenManager.updateFromServerResponse(response);

        tokensRefreshed = true;
      }

      if (reload) {
        yield _reloadWithoutSaving(_this6);
      }

      yield _this6.auth._persistUserIfCurrent(_this6);

      if (tokensRefreshed) {
        _this6.auth._notifyListenersIfCurrent(_this6);
      }
    })();
  }

  delete() {
    var _this7 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const idToken = yield _this7.getIdToken();
      yield _logoutIfInvalidated(_this7, deleteAccount(_this7.auth, {
        idToken
      }));

      _this7.stsTokenManager.clearRefreshToken(); // TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
      //       cancels pending actions...


      return _this7.auth.signOut();
    })();
  }

  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || undefined,
      emailVerified: this.emailVerified,
      displayName: this.displayName || undefined,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || undefined,
      phoneNumber: this.phoneNumber || undefined,
      tenantId: this.tenantId || undefined,
      providerData: this.providerData.map(userInfo => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }

  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }

  static _fromJSON(auth, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : undefined;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : undefined;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : undefined;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : undefined;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : undefined;

    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : undefined;

    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : undefined;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : undefined;
    const {
      uid,
      emailVerified,
      isAnonymous,
      providerData,
      stsTokenManager: plainObjectTokenManager
    } = object;

    _assert(uid && plainObjectTokenManager, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);

    _assert(typeof uid === 'string', auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    assertStringOrUndefined(displayName, auth.name);
    assertStringOrUndefined(email, auth.name);

    _assert(typeof emailVerified === 'boolean', auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    _assert(typeof isAnonymous === 'boolean', auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    assertStringOrUndefined(phoneNumber, auth.name);
    assertStringOrUndefined(photoURL, auth.name);
    assertStringOrUndefined(tenantId, auth.name);
    assertStringOrUndefined(_redirectEventId, auth.name);
    assertStringOrUndefined(createdAt, auth.name);
    assertStringOrUndefined(lastLoginAt, auth.name);
    const user = new UserImpl({
      uid,
      auth,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });

    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map(userInfo => Object.assign({}, userInfo));
    }

    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }

    return user;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */


  static _fromIdTokenResponse(auth, idTokenResponse, isAnonymous = false) {
    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const stsTokenManager = new StsTokenManager();
      stsTokenManager.updateFromServerResponse(idTokenResponse); // Initialize the Firebase Auth user.

      const user = new UserImpl({
        uid: idTokenResponse.localId,
        auth,
        stsTokenManager,
        isAnonymous
      }); // Updates the user info and data and resolves with a user instance.

      yield _reloadWithoutSaving(user);
      return user;
    })();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const instanceCache = /*#__PURE__*/new Map();

function _getInstance(cls) {
  debugAssert(cls instanceof Function, 'Expected a class definition');
  let instance = instanceCache.get(cls);

  if (instance) {
    debugAssert(instance instanceof cls, 'Instance stored in cache mismatched with class');
    return instance;
  }

  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


let InMemoryPersistence = /*#__PURE__*/(() => {
  class InMemoryPersistence {
    constructor() {
      this.type = "NONE"
      /* PersistenceType.NONE */
      ;
      this.storage = {};
    }

    _isAvailable() {
      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return true;
      })();
    }

    _set(key, value) {
      var _this8 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this8.storage[key] = value;
      })();
    }

    _get(key) {
      var _this9 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const value = _this9.storage[key];
        return value === undefined ? null : value;
      })();
    }

    _remove(key) {
      var _this10 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        delete _this10.storage[key];
      })();
    }

    _addListener(_key, _listener) {
      // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
      return;
    }

    _removeListener(_key, _listener) {
      // Listeners are not supported for in-memory storage since it cannot be shared across windows/workers
      return;
    }

  }

  InMemoryPersistence.type = 'NONE';
  /**
   * An implementation of {@link Persistence} of type 'NONE'.
   *
   * @public
   */

  return InMemoryPersistence;
})();
const inMemoryPersistence = InMemoryPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"
  /* Namespace.PERSISTENCE */
  }:${key}:${apiKey}:${appName}`;
}

class PersistenceUserManager {
  constructor(persistence, auth, userKey) {
    this.persistence = persistence;
    this.auth = auth;
    this.userKey = userKey;
    const {
      config,
      name
    } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name);
    this.fullPersistenceKey = _persistenceKeyName("persistence"
    /* KeyName.PERSISTENCE_USER */
    , config.apiKey, name);
    this.boundEventHandler = auth._onStorageEvent.bind(auth);

    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }

  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }

  getCurrentUser() {
    var _this11 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const blob = yield _this11.persistence._get(_this11.fullUserKey);
      return blob ? UserImpl._fromJSON(_this11.auth, blob) : null;
    })();
  }

  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }

  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }

  setPersistence(newPersistence) {
    var _this12 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this12.persistence === newPersistence) {
        return;
      }

      const currentUser = yield _this12.getCurrentUser();
      yield _this12.removeCurrentUser();
      _this12.persistence = newPersistence;

      if (currentUser) {
        return _this12.setCurrentUser(currentUser);
      }
    })();
  }

  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }

  static create(auth, persistenceHierarchy, userKey = "authUser"
  /* KeyName.AUTH_USER */
  ) {
    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!persistenceHierarchy.length) {
        return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth, userKey);
      } // Eliminate any persistences that are not available


      const availablePersistences = (yield Promise.all(persistenceHierarchy.map( /*#__PURE__*/function () {
        var _ref2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (persistence) {
          if (yield persistence._isAvailable()) {
            return persistence;
          }

          return undefined;
        });

        return function (_x25) {
          return _ref2.apply(this, arguments);
        };
      }()))).filter(persistence => persistence); // Fall back to the first persistence listed, or in memory if none available

      let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);

      const key = _persistenceKeyName(userKey, auth.config.apiKey, auth.name); // Pull out the existing user, setting the chosen persistence to that
      // persistence if the user exists.


      let userToMigrate = null; // Note, here we check for a user in _all_ persistences, not just the
      // ones deemed available. If we can migrate a user out of a broken
      // persistence, we will (but only if that persistence supports migration).

      for (const persistence of persistenceHierarchy) {
        try {
          const blob = yield persistence._get(key);

          if (blob) {
            const user = UserImpl._fromJSON(auth, blob); // throws for unparsable blob (wrong format)


            if (persistence !== selectedPersistence) {
              userToMigrate = user;
            }

            selectedPersistence = persistence;
            break;
          }
        } catch (_a) {}
      } // If we find the user in a persistence that does support migration, use
      // that migration path (of only persistences that support migration)


      const migrationHierarchy = availablePersistences.filter(p => p._shouldAllowMigration); // If the persistence does _not_ allow migration, just finish off here

      if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
        return new PersistenceUserManager(selectedPersistence, auth, userKey);
      }

      selectedPersistence = migrationHierarchy[0];

      if (userToMigrate) {
        // This normally shouldn't throw since chosenPersistence.isAvailable() is true, but if it does
        // we'll just let it bubble to surface the error.
        yield selectedPersistence._set(key, userToMigrate.toJSON());
      } // Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
      // such as users getting stuck with a previous account after signing out and refreshing the tab.


      yield Promise.all(persistenceHierarchy.map( /*#__PURE__*/function () {
        var _ref3 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (persistence) {
          if (persistence !== selectedPersistence) {
            try {
              yield persistence._remove(key);
            } catch (_a) {}
          }
        });

        return function (_x26) {
          return _ref3.apply(this, arguments);
        };
      }()));
      return new PersistenceUserManager(selectedPersistence, auth, userKey);
    })();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Determine the browser for the purposes of reporting usage to the API
 */


function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();

  if (ua.includes('opera/') || ua.includes('opr/') || ua.includes('opios/')) {
    return "Opera"
    /* BrowserName.OPERA */
    ;
  } else if (_isIEMobile(ua)) {
    // Windows phone IEMobile browser.
    return "IEMobile"
    /* BrowserName.IEMOBILE */
    ;
  } else if (ua.includes('msie') || ua.includes('trident/')) {
    return "IE"
    /* BrowserName.IE */
    ;
  } else if (ua.includes('edge/')) {
    return "Edge"
    /* BrowserName.EDGE */
    ;
  } else if (_isFirefox(ua)) {
    return "Firefox"
    /* BrowserName.FIREFOX */
    ;
  } else if (ua.includes('silk/')) {
    return "Silk"
    /* BrowserName.SILK */
    ;
  } else if (_isBlackBerry(ua)) {
    // Blackberry browser.
    return "Blackberry"
    /* BrowserName.BLACKBERRY */
    ;
  } else if (_isWebOS(ua)) {
    // WebOS default browser.
    return "Webos"
    /* BrowserName.WEBOS */
    ;
  } else if (_isSafari(ua)) {
    return "Safari"
    /* BrowserName.SAFARI */
    ;
  } else if ((ua.includes('chrome/') || _isChromeIOS(ua)) && !ua.includes('edge/')) {
    return "Chrome"
    /* BrowserName.CHROME */
    ;
  } else if (_isAndroid(ua)) {
    // Android stock browser.
    return "Android"
    /* BrowserName.ANDROID */
    ;
  } else {
    // Most modern browsers have name/version at end of user agent string.
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);

    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }

  return "Other"
  /* BrowserName.OTHER */
  ;
}

function _isFirefox(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /firefox\//i.test(ua);
}

function _isSafari(userAgent = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  const ua = userAgent.toLowerCase();
  return ua.includes('safari/') && !ua.includes('chrome/') && !ua.includes('crios/') && !ua.includes('android');
}

function _isChromeIOS(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /crios\//i.test(ua);
}

function _isIEMobile(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /iemobile/i.test(ua);
}

function _isAndroid(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /android/i.test(ua);
}

function _isBlackBerry(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /blackberry/i.test(ua);
}

function _isWebOS(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /webos/i.test(ua);
}

function _isIOS(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}

function _isIOS7Or8(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  return /(iPad|iPhone|iPod).*OS 7_\d/i.test(ua) || /(iPad|iPhone|iPod).*OS 8_\d/i.test(ua);
}

function _isIOSStandalone(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  var _a;

  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}

function _isIE10() {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.isIE)() && document.documentMode === 10;
}

function _isMobileBrowser(ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)()) {
  // TODO: implement getBrowserName equivalent for OS.
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}

function _isIframe() {
  try {
    // Check that the current window is not the top window.
    // If so, return true.
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Determine the SDK version string
 */


function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;

  switch (clientPlatform) {
    case "Browser"
    /* ClientPlatform.BROWSER */
    :
      // In a browser environment, report the browser name.
      reportedPlatform = _getBrowserName((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)());
      break;

    case "Worker"
    /* ClientPlatform.WORKER */
    :
      // Technically a worker runs from a browser but we need to differentiate a
      // worker from a browser.
      // For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
      reportedPlatform = `${_getBrowserName((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)())}-${clientPlatform}`;
      break;

    default:
      reportedPlatform = clientPlatform;
  }

  const reportedFrameworks = frameworks.length ? frameworks.join(',') : 'FirebaseCore-web';
  /* default value if no other framework is used */

  return `${reportedPlatform}/${"JsCore"
  /* ClientImplementation.CORE */
  }/${_firebase_app__WEBPACK_IMPORTED_MODULE_2__.SDK_VERSION}/${reportedFrameworks}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getRecaptchaParams(_x27) {
  return _getRecaptchaParams.apply(this, arguments);
}

function _getRecaptchaParams() {
  _getRecaptchaParams = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
    return (yield _performApiRequest(auth, "GET"
    /* HttpMethod.GET */
    , "/v1/recaptchaParams"
    /* Endpoint.GET_RECAPTCHA_PARAM */
    )).recaptchaSiteKey || '';
  });
  return _getRecaptchaParams.apply(this, arguments);
}

function getRecaptchaConfig(_x28, _x29) {
  return _getRecaptchaConfig.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getRecaptchaConfig() {
  _getRecaptchaConfig = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "GET"
    /* HttpMethod.GET */
    , "/v2/recaptchaConfig"
    /* Endpoint.GET_RECAPTCHA_CONFIG */
    , _addTidIfNecessary(auth, request));
  });
  return _getRecaptchaConfig.apply(this, arguments);
}

function isV2(grecaptcha) {
  return grecaptcha !== undefined && grecaptcha.getResponse !== undefined;
}

function isEnterprise(grecaptcha) {
  return grecaptcha !== undefined && grecaptcha.enterprise !== undefined;
}

class RecaptchaConfig {
  constructor(response) {
    /**
     * The reCAPTCHA site key.
     */
    this.siteKey = '';
    /**
     * The reCAPTCHA enablement status of the {@link EmailAuthProvider} for the current tenant.
     */

    this.emailPasswordEnabled = false;

    if (response.recaptchaKey === undefined) {
      throw new Error('recaptchaKey undefined');
    } // Example response.recaptchaKey: "projects/proj123/keys/sitekey123"


    this.siteKey = response.recaptchaKey.split('/')[3];
    this.emailPasswordEnabled = response.recaptchaEnforcementState.some(enforcementState => enforcementState.provider === 'EMAIL_PASSWORD_PROVIDER' && enforcementState.enforcementState !== 'OFF');
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getScriptParentElement() {
  var _a, _b;

  return (_b = (_a = document.getElementsByTagName('head')) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}

function _loadJS(url) {
  // TODO: consider adding timeout support & cancellation
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.setAttribute('src', url);
    el.onload = resolve;

    el.onerror = e => {
      const error = _createError("internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      );

      error.customData = e;
      reject(error);
    };

    el.type = 'text/javascript';
    el.charset = 'UTF-8';
    getScriptParentElement().appendChild(el);
  });
}

function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1000000)}`;
}
/* eslint-disable @typescript-eslint/no-require-imports */


const RECAPTCHA_ENTERPRISE_URL = 'https://www.google.com/recaptcha/enterprise.js?render=';
const RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = 'recaptcha-enterprise';
const FAKE_TOKEN = 'NO_RECAPTCHA';

class RecaptchaEnterpriseVerifier {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(authExtern) {
    /**
     * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
     */
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */


  verify(action = 'verify', forceRefresh = false) {
    var _this13 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      function retrieveSiteKey(_x30) {
        return _retrieveSiteKey.apply(this, arguments);
      }

      function _retrieveSiteKey() {
        _retrieveSiteKey = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
          if (!forceRefresh) {
            if (auth.tenantId == null && auth._agentRecaptchaConfig != null) {
              return auth._agentRecaptchaConfig.siteKey;
            }

            if (auth.tenantId != null && auth._tenantRecaptchaConfigs[auth.tenantId] !== undefined) {
              return auth._tenantRecaptchaConfigs[auth.tenantId].siteKey;
            }
          }

          return new Promise( /*#__PURE__*/function () {
            var _ref4 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
              getRecaptchaConfig(auth, {
                clientType: "CLIENT_TYPE_WEB"
                /* RecaptchaClientType.WEB */
                ,
                version: "RECAPTCHA_ENTERPRISE"
                /* RecaptchaVersion.ENTERPRISE */

              }).then(response => {
                if (response.recaptchaKey === undefined) {
                  reject(new Error('recaptcha Enterprise site key undefined'));
                } else {
                  const config = new RecaptchaConfig(response);

                  if (auth.tenantId == null) {
                    auth._agentRecaptchaConfig = config;
                  } else {
                    auth._tenantRecaptchaConfigs[auth.tenantId] = config;
                  }

                  return resolve(config.siteKey);
                }
              }).catch(error => {
                reject(error);
              });
            });

            return function (_x31, _x32) {
              return _ref4.apply(this, arguments);
            };
          }());
        });
        return _retrieveSiteKey.apply(this, arguments);
      }

      function retrieveRecaptchaToken(siteKey, resolve, reject) {
        const grecaptcha = window.grecaptcha;

        if (isEnterprise(grecaptcha)) {
          grecaptcha.enterprise.ready(() => {
            grecaptcha.enterprise.execute(siteKey, {
              action
            }).then(token => {
              resolve(token);
            }).catch(() => {
              resolve(FAKE_TOKEN);
            });
          });
        } else {
          reject(Error('No reCAPTCHA enterprise script loaded.'));
        }
      }

      return new Promise((resolve, reject) => {
        retrieveSiteKey(_this13.auth).then(siteKey => {
          if (!forceRefresh && isEnterprise(window.grecaptcha)) {
            retrieveRecaptchaToken(siteKey, resolve, reject);
          } else {
            if (typeof window === 'undefined') {
              reject(new Error('RecaptchaVerifier is only supported in browser'));
              return;
            }

            _loadJS(RECAPTCHA_ENTERPRISE_URL + siteKey).then(() => {
              retrieveRecaptchaToken(siteKey, resolve, reject);
            }).catch(error => {
              reject(error);
            });
          }
        }).catch(error => {
          reject(error);
        });
      });
    })();
  }

}

function injectRecaptchaFields(_x33, _x34, _x35) {
  return _injectRecaptchaFields.apply(this, arguments);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _injectRecaptchaFields() {
  _injectRecaptchaFields = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request, action, captchaResp = false) {
    const verifier = new RecaptchaEnterpriseVerifier(auth);
    let captchaResponse;

    try {
      captchaResponse = yield verifier.verify(action);
    } catch (error) {
      captchaResponse = yield verifier.verify(action, true);
    }

    const newRequest = Object.assign({}, request);

    if (!captchaResp) {
      Object.assign(newRequest, {
        captchaResponse
      });
    } else {
      Object.assign(newRequest, {
        'captchaResp': captchaResponse
      });
    }

    Object.assign(newRequest, {
      'clientType': "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */

    });
    Object.assign(newRequest, {
      'recaptchaVersion': "RECAPTCHA_ENTERPRISE"
      /* RecaptchaVersion.ENTERPRISE */

    });
    return newRequest;
  });
  return _injectRecaptchaFields.apply(this, arguments);
}

class AuthMiddlewareQueue {
  constructor(auth) {
    this.auth = auth;
    this.queue = [];
  }

  pushCallback(callback, onAbort) {
    // The callback could be sync or async. Wrap it into a
    // function that is always async.
    const wrappedCallback = user => new Promise((resolve, reject) => {
      try {
        const result = callback(user); // Either resolve with existing promise or wrap a non-promise
        // return value into a promise.

        resolve(result);
      } catch (e) {
        // Sync callback throws.
        reject(e);
      }
    }); // Attach the onAbort if present


    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      // Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
      // indexing of other elements.
      this.queue[index] = () => Promise.resolve();
    };
  }

  runMiddleware(nextUser) {
    var _this14 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this14.auth.currentUser === nextUser) {
        return;
      } // While running the middleware, build a temporary stack of onAbort
      // callbacks to call if one middleware callback rejects.


      const onAbortStack = [];

      try {
        for (const beforeStateCallback of _this14.queue) {
          yield beforeStateCallback(nextUser); // Only push the onAbort if the callback succeeds

          if (beforeStateCallback.onAbort) {
            onAbortStack.push(beforeStateCallback.onAbort);
          }
        }
      } catch (e) {
        // Run all onAbort, with separate try/catch to ignore any errors and
        // continue
        onAbortStack.reverse();

        for (const onAbort of onAbortStack) {
          try {
            onAbort();
          } catch (_) {
            /* swallow error */
          }
        }

        throw _this14.auth._errorFactory.create("login-blocked"
        /* AuthErrorCode.LOGIN_BLOCKED */
        , {
          originalMessage: e === null || e === void 0 ? void 0 : e.message
        });
      }
    })();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class AuthImpl {
  constructor(app, heartbeatServiceProvider, appCheckServiceProvider, config) {
    this.app = app;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.appCheckServiceProvider = appCheckServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false; // Any network calls will set this to true and prevent subsequent emulator
    // initialization

    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this._agentRecaptchaConfig = null;
    this._tenantRecaptchaConfigs = {}; // Tracks the last notified UID for state change listeners to prevent
    // repeated calls to the callbacks. Undefined means it's never been
    // called, whereas null means it's been called with a signed out user

    this.lastNotifiedUid = undefined;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = {
      appVerificationDisabledForTesting: false
    };
    this.frameworks = [];
    this.name = app.name;
    this.clientVersion = config.sdkClientVersion;
  }

  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    var _this15 = this;

    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    } // Have to check for app deletion throughout initialization (after each
    // promise resolution)


    this._initializationPromise = this.queue( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      if (_this15._deleted) {
        return;
      }

      _this15.persistenceManager = yield PersistenceUserManager.create(_this15, persistenceHierarchy);

      if (_this15._deleted) {
        return;
      } // Initialize the resolver early if necessary (only applicable to web:
      // this will cause the iframe to load immediately in certain cases)


      if ((_a = _this15._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        // If this fails, don't halt auth loading
        try {
          yield _this15._popupRedirectResolver._initialize(_this15);
        } catch (e) {
          /* Ignore the error */
        }
      }

      yield _this15.initializeCurrentUser(popupRedirectResolver);
      _this15.lastNotifiedUid = ((_b = _this15.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;

      if (_this15._deleted) {
        return;
      }

      _this15._isInitialized = true;
    }));
    return this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */


  _onStorageEvent() {
    var _this16 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this16._deleted) {
        return;
      }

      const user = yield _this16.assertedPersistence.getCurrentUser();

      if (!_this16.currentUser && !user) {
        // No change, do nothing (was signed out and remained signed out).
        return;
      } // If the same user is to be synchronized.


      if (_this16.currentUser && user && _this16.currentUser.uid === user.uid) {
        // Data update, simply copy data changes.
        _this16._currentUser._assign(user); // If tokens changed from previous user tokens, this will trigger
        // notifyAuthListeners_.


        yield _this16.currentUser.getIdToken();
        return;
      } // Update current Auth state. Either a new login or logout.
      // Skip blocking callbacks, they should not apply to a change in another tab.


      yield _this16._updateCurrentUser(user,
      /* skipBeforeStateCallbacks */
      true);
    })();
  }

  initializeCurrentUser(popupRedirectResolver) {
    var _this17 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a; // First check to see if we have a pending redirect event.


      const previouslyStoredUser = yield _this17.assertedPersistence.getCurrentUser();
      let futureCurrentUser = previouslyStoredUser;
      let needsTocheckMiddleware = false;

      if (popupRedirectResolver && _this17.config.authDomain) {
        yield _this17.getOrInitRedirectPersistenceManager();
        const redirectUserEventId = (_a = _this17.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
        const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
        const result = yield _this17.tryRedirectSignIn(popupRedirectResolver); // If the stored user (i.e. the old "currentUser") has a redirectId that
        // matches the redirect user, then we want to initially sign in with the
        // new user object from result.
        // TODO(samgho): More thoroughly test all of this

        if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
          futureCurrentUser = result.user;
          needsTocheckMiddleware = true;
        }
      } // If no user in persistence, there is no current user. Set to null.


      if (!futureCurrentUser) {
        return _this17.directlySetCurrentUser(null);
      }

      if (!futureCurrentUser._redirectEventId) {
        // This isn't a redirect link operation, we can reload and bail.
        // First though, ensure that we check the middleware is happy.
        if (needsTocheckMiddleware) {
          try {
            yield _this17.beforeStateQueue.runMiddleware(futureCurrentUser);
          } catch (e) {
            futureCurrentUser = previouslyStoredUser; // We know this is available since the bit is only set when the
            // resolver is available

            _this17._popupRedirectResolver._overrideRedirectResult(_this17, () => Promise.reject(e));
          }
        }

        if (futureCurrentUser) {
          return _this17.reloadAndSetCurrentUserOrClear(futureCurrentUser);
        } else {
          return _this17.directlySetCurrentUser(null);
        }
      }

      _assert(_this17._popupRedirectResolver, _this17, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );

      yield _this17.getOrInitRedirectPersistenceManager(); // If the redirect user's event ID matches the current user's event ID,
      // DO NOT reload the current user, otherwise they'll be cleared from storage.
      // This is important for the reauthenticateWithRedirect() flow.

      if (_this17.redirectUser && _this17.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
        return _this17.directlySetCurrentUser(futureCurrentUser);
      }

      return _this17.reloadAndSetCurrentUserOrClear(futureCurrentUser);
    })();
  }

  tryRedirectSignIn(redirectResolver) {
    var _this18 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // The redirect user needs to be checked (and signed in if available)
      // during auth initialization. All of the normal sign in and link/reauth
      // flows call back into auth and push things onto the promise queue. We
      // need to await the result of the redirect sign in *inside the promise
      // queue*. This presents a problem: we run into deadlock. See:
      //    ┌> [Initialization] ─────┐
      //    ┌> [<other queue tasks>] │
      //    └─ [getRedirectResult] <─┘
      //    where [] are tasks on the queue and arrows denote awaits
      // Initialization will never complete because it's waiting on something
      // that's waiting for initialization to complete!
      //
      // Instead, this method calls getRedirectResult() (stored in
      // _completeRedirectFn) with an optional parameter that instructs all of
      // the underlying auth operations to skip anything that mutates auth state.
      let result = null;

      try {
        // We know this._popupRedirectResolver is set since redirectResolver
        // is passed in. The _completeRedirectFn expects the unwrapped extern.
        result = yield _this18._popupRedirectResolver._completeRedirectFn(_this18, redirectResolver, true);
      } catch (e) {
        // Swallow any errors here; the code can retrieve them in
        // getRedirectResult().
        yield _this18._setRedirectUser(null);
      }

      return result;
    })();
  }

  reloadAndSetCurrentUserOrClear(user) {
    var _this19 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _reloadWithoutSaving(user);
      } catch (e) {
        if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        }`) {
          // Something's wrong with the user's token. Log them out and remove
          // them from storage
          return _this19.directlySetCurrentUser(null);
        }
      }

      return _this19.directlySetCurrentUser(user);
    })();
  }

  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }

  _delete() {
    var _this20 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this20._deleted = true;
    })();
  }

  updateCurrentUser(userExtern) {
    var _this21 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // The public updateCurrentUser method needs to make a copy of the user,
      // and also check that the project matches
      const user = userExtern ? (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(userExtern) : null;

      if (user) {
        _assert(user.auth.config.apiKey === _this21.config.apiKey, _this21, "invalid-user-token"
        /* AuthErrorCode.INVALID_AUTH */
        );
      }

      return _this21._updateCurrentUser(user && user._clone(_this21));
    })();
  }

  _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    var _this22 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this22._deleted) {
        return;
      }

      if (user) {
        _assert(_this22.tenantId === user.tenantId, _this22, "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
        );
      }

      if (!skipBeforeStateCallbacks) {
        yield _this22.beforeStateQueue.runMiddleware(user);
      }

      return _this22.queue( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this22.directlySetCurrentUser(user);

        _this22.notifyAuthListeners();
      }));
    })();
  }

  signOut() {
    var _this23 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Run first, to block _setRedirectUser() if any callbacks fail.
      yield _this23.beforeStateQueue.runMiddleware(null); // Clear the redirect user when signOut is called

      if (_this23.redirectPersistenceManager || _this23._popupRedirectResolver) {
        yield _this23._setRedirectUser(null);
      } // Prevent callbacks from being called again in _updateCurrentUser, as
      // they were already called in the first line.


      return _this23._updateCurrentUser(null,
      /* skipBeforeStateCallbacks */
      true);
    })();
  }

  setPersistence(persistence) {
    var _this24 = this;

    return this.queue( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this24.assertedPersistence.setPersistence(_getInstance(persistence));
    }));
  }

  initializeRecaptchaConfig() {
    var _this25 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield getRecaptchaConfig(_this25, {
        clientType: "CLIENT_TYPE_WEB"
        /* RecaptchaClientType.WEB */
        ,
        version: "RECAPTCHA_ENTERPRISE"
        /* RecaptchaVersion.ENTERPRISE */

      });
      const config = new RecaptchaConfig(response);

      if (_this25.tenantId == null) {
        _this25._agentRecaptchaConfig = config;
      } else {
        _this25._tenantRecaptchaConfigs[_this25.tenantId] = config;
      }

      if (config.emailPasswordEnabled) {
        const verifier = new RecaptchaEnterpriseVerifier(_this25);
        void verifier.verify();
      }
    })();
  }

  _getRecaptchaConfig() {
    if (this.tenantId == null) {
      return this._agentRecaptchaConfig;
    } else {
      return this._tenantRecaptchaConfigs[this.tenantId];
    }
  }

  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }

  _updateErrorMap(errorMap) {
    this._errorFactory = new _firebase_util__WEBPACK_IMPORTED_MODULE_1__.ErrorFactory('auth', 'Firebase', errorMap());
  }

  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }

  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }

  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }

  toJSON() {
    var _a;

    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }

  _setRedirectUser(user, popupRedirectResolver) {
    var _this26 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const redirectManager = yield _this26.getOrInitRedirectPersistenceManager(popupRedirectResolver);
      return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
    })();
  }

  getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    var _this27 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this27.redirectPersistenceManager) {
        const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || _this27._popupRedirectResolver;

        _assert(resolver, _this27, "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
        );

        _this27.redirectPersistenceManager = yield PersistenceUserManager.create(_this27, [_getInstance(resolver._redirectPersistence)], "redirectUser"
        /* KeyName.REDIRECT_USER */
        );
        _this27.redirectUser = yield _this27.redirectPersistenceManager.getCurrentUser();
      }

      return _this27.redirectPersistenceManager;
    })();
  }

  _redirectUserForId(id) {
    var _this28 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b; // Make sure we've cleared any pending persistence actions if we're not in
      // the initializer


      if (_this28._isInitialized) {
        yield _this28.queue( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {}));
      }

      if (((_a = _this28._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
        return _this28._currentUser;
      }

      if (((_b = _this28.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
        return _this28.redirectUser;
      }

      return null;
    })();
  }

  _persistUserIfCurrent(user) {
    var _this29 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (user === _this29.currentUser) {
        return _this29.queue( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          return _this29.directlySetCurrentUser(user);
        }));
      }
    })();
  }
  /** Notifies listeners only if the user is current */


  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }

  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }

  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;

    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }

  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;

    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  /** Returns the current user cast as the internal type */


  get _currentUser() {
    return this.currentUser;
  }

  notifyAuthListeners() {
    var _a, _b;

    if (!this._isInitialized) {
      return;
    }

    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;

    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }

  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {};
    }

    const cb = typeof nextOrObserver === 'function' ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;

    _assert(promise, this, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    ); // The callback needs to be called asynchronously per the spec.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises


    promise.then(() => cb(this.currentUser));

    if (typeof nextOrObserver === 'function') {
      return subscription.addObserver(nextOrObserver, error, completed);
    } else {
      return subscription.addObserver(nextOrObserver);
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */


  directlySetCurrentUser(user) {
    var _this30 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this30.currentUser && _this30.currentUser !== user) {
        _this30._currentUser._stopProactiveRefresh();
      }

      if (user && _this30.isProactiveRefreshEnabled) {
        user._startProactiveRefresh();
      }

      _this30.currentUser = user;

      if (user) {
        yield _this30.assertedPersistence.setCurrentUser(user);
      } else {
        yield _this30.assertedPersistence.removeCurrentUser();
      }
    })();
  }

  queue(action) {
    // In case something errors, the callback still should be called in order
    // to keep the promise chain alive
    this.operations = this.operations.then(action, action);
    return this.operations;
  }

  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    return this.persistenceManager;
  }

  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }

    this.frameworks.push(framework); // Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
    // "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.

    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }

  _getFrameworks() {
    return this.frameworks;
  }

  _getAdditionalHeaders() {
    var _this31 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a; // Additional headers on every request


      const headers = {
        ["X-Client-Version"
        /* HttpHeader.X_CLIENT_VERSION */
        ]: _this31.clientVersion
      };

      if (_this31.app.options.appId) {
        headers["X-Firebase-gmpid"
        /* HttpHeader.X_FIREBASE_GMPID */
        ] = _this31.app.options.appId;
      } // If the heartbeat service exists, add the heartbeat string


      const heartbeatsHeader = yield (_a = _this31.heartbeatServiceProvider.getImmediate({
        optional: true
      })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader();

      if (heartbeatsHeader) {
        headers["X-Firebase-Client"
        /* HttpHeader.X_FIREBASE_CLIENT */
        ] = heartbeatsHeader;
      } // If the App Check service exists, add the App Check token in the headers


      const appCheckToken = yield _this31._getAppCheckToken();

      if (appCheckToken) {
        headers["X-Firebase-AppCheck"
        /* HttpHeader.X_FIREBASE_APP_CHECK */
        ] = appCheckToken;
      }

      return headers;
    })();
  }

  _getAppCheckToken() {
    var _this32 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const appCheckTokenResult = yield (_a = _this32.appCheckServiceProvider.getImmediate({
        optional: true
      })) === null || _a === void 0 ? void 0 : _a.getToken();

      if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
        // Context: appCheck.getToken() will never throw even if an error happened.
        // In the error case, a dummy token will be returned along with an error field describing
        // the error. In general, we shouldn't care about the error condition and just use
        // the token (actual or dummy) to send requests.
        _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
      }

      return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
    })();
  }

}
/**
 * Method to be used to cast down to our private implmentation of Auth.
 * It will also handle unwrapping from the compat type if necessary
 *
 * @param auth Auth object passed in from developer
 */


function _castAuth(auth) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth);
}
/** Helper class to wrap subscriber logic */


class Subscription {
  constructor(auth) {
    this.auth = auth;
    this.observer = null;
    this.addObserver = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.createSubscribe)(observer => this.observer = observer);
  }

  get next() {
    _assert(this.observer, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    return this.observer.next.bind(this.observer);
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */


function initializeAuth(app, deps) {
  const provider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._getProvider)(app, 'auth');

  if (provider.isInitialized()) {
    const auth = provider.getImmediate();
    const initialOptions = provider.getOptions();

    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.deepEqual)(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth;
    } else {
      _fail(auth, "already-initialized"
      /* AuthErrorCode.ALREADY_INITIALIZED */
      );
    }
  }

  const auth = provider.initialize({
    options: deps
  });
  return auth;
}

function _initializeAuthInstance(auth, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);

  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth._updateErrorMap(deps.errorMap);
  } // This promise is intended to float; auth initialization happens in the
  // background, meanwhile the auth object may be used by the app.
  // eslint-disable-next-line @typescript-eslint/no-floating-promises


  auth._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */


function connectAuthEmulator(auth, url, options) {
  const authInternal = _castAuth(auth);

  _assert(authInternal._canInitEmulator, authInternal, "emulator-config-failed"
  /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  );

  _assert(/^https?:\/\//.test(url), authInternal, "invalid-emulator-scheme"
  /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );

  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const {
    host,
    port
  } = extractHostAndPort(url);
  const portStr = port === null ? '' : `:${port}`; // Always replace path with "/" (even if input url had no path at all, or had a different one).

  authInternal.config.emulator = {
    url: `${protocol}//${host}${portStr}/`
  };
  authInternal.settings.appVerificationDisabledForTesting = true;
  authInternal.emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(':', ''),
    options: Object.freeze({
      disableWarnings
    })
  });

  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}

function extractProtocol(url) {
  const protocolEnd = url.indexOf(':');
  return protocolEnd < 0 ? '' : url.substr(0, protocolEnd + 1);
}

function extractHostAndPort(url) {
  const protocol = extractProtocol(url);
  const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length)); // Between // and /, ? or #.

  if (!authority) {
    return {
      host: '',
      port: null
    };
  }

  const hostAndPort = authority[2].split('@').pop() || ''; // Strip out "username:password@".

  const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);

  if (bracketedIPv6) {
    const host = bracketedIPv6[1];
    return {
      host,
      port: parsePort(hostAndPort.substr(host.length + 1))
    };
  } else {
    const [host, port] = hostAndPort.split(':');
    return {
      host,
      port: parsePort(port)
    };
  }
}

function parsePort(portStr) {
  if (!portStr) {
    return null;
  }

  const port = Number(portStr);

  if (isNaN(port)) {
    return null;
  }

  return port;
}

function emitEmulatorWarning() {
  function attachBanner() {
    const el = document.createElement('p');
    const sty = el.style;
    el.innerText = 'Running in emulator mode. Do not use with production credentials.';
    sty.position = 'fixed';
    sty.width = '100%';
    sty.backgroundColor = '#ffffff';
    sty.border = '.1em solid #000000';
    sty.color = '#b50000';
    sty.bottom = '0px';
    sty.left = '0px';
    sty.margin = '0px';
    sty.zIndex = '10000';
    sty.textAlign = 'center';
    el.classList.add('firebase-emulator-warning');
    document.body.appendChild(el);
  }

  if (typeof console !== 'undefined' && typeof console.info === 'function') {
    console.info('WARNING: You are using the Auth Emulator,' + ' which is intended for local testing only.  Do not use with' + ' production credentials.');
  }

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', attachBanner);
    } else {
      attachBanner();
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */


class AuthCredential {
  /** @internal */
  constructor(
  /**
   * The authentication provider ID for the credential.
   *
   * @remarks
   * For example, 'facebook.com', or 'google.com'.
   */
  providerId,
  /**
   * The authentication sign in method for the credential.
   *
   * @remarks
   * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
   * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
   * identifier as returned in {@link fetchSignInMethodsForEmail}.
   */
  signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */


  toJSON() {
    return debugFail('not implemented');
  }
  /** @internal */


  _getIdTokenResponse(_auth) {
    return debugFail('not implemented');
  }
  /** @internal */


  _linkToIdToken(_auth, _idToken) {
    return debugFail('not implemented');
  }
  /** @internal */


  _getReauthenticationResolver(_auth) {
    return debugFail('not implemented');
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function resetPassword(_x36, _x37) {
  return _resetPassword.apply(this, arguments);
}

function _resetPassword() {
  _resetPassword = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:resetPassword"
    /* Endpoint.RESET_PASSWORD */
    , _addTidIfNecessary(auth, request));
  });
  return _resetPassword.apply(this, arguments);
}

function updateEmailPassword(_x38, _x39) {
  return _updateEmailPassword.apply(this, arguments);
}

function _updateEmailPassword() {
  _updateEmailPassword = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:update"
    /* Endpoint.SET_ACCOUNT_INFO */
    , request);
  });
  return _updateEmailPassword.apply(this, arguments);
}

function applyActionCode$1(_x40, _x41) {
  return _applyActionCode$.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _applyActionCode$() {
  _applyActionCode$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:update"
    /* Endpoint.SET_ACCOUNT_INFO */
    , _addTidIfNecessary(auth, request));
  });
  return _applyActionCode$.apply(this, arguments);
}

function signInWithPassword(_x42, _x43) {
  return _signInWithPassword.apply(this, arguments);
}

function _signInWithPassword() {
  _signInWithPassword = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithPassword"
    /* Endpoint.SIGN_IN_WITH_PASSWORD */
    , _addTidIfNecessary(auth, request));
  });
  return _signInWithPassword.apply(this, arguments);
}

function sendOobCode(_x44, _x45) {
  return _sendOobCode.apply(this, arguments);
}

function _sendOobCode() {
  _sendOobCode = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:sendOobCode"
    /* Endpoint.SEND_OOB_CODE */
    , _addTidIfNecessary(auth, request));
  });
  return _sendOobCode.apply(this, arguments);
}

function sendEmailVerification$1(_x46, _x47) {
  return _sendEmailVerification$.apply(this, arguments);
}

function _sendEmailVerification$() {
  _sendEmailVerification$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return sendOobCode(auth, request);
  });
  return _sendEmailVerification$.apply(this, arguments);
}

function sendPasswordResetEmail$1(_x48, _x49) {
  return _sendPasswordResetEmail$.apply(this, arguments);
}

function _sendPasswordResetEmail$() {
  _sendPasswordResetEmail$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return sendOobCode(auth, request);
  });
  return _sendPasswordResetEmail$.apply(this, arguments);
}

function sendSignInLinkToEmail$1(_x50, _x51) {
  return _sendSignInLinkToEmail$.apply(this, arguments);
}

function _sendSignInLinkToEmail$() {
  _sendSignInLinkToEmail$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return sendOobCode(auth, request);
  });
  return _sendSignInLinkToEmail$.apply(this, arguments);
}

function verifyAndChangeEmail(_x52, _x53) {
  return _verifyAndChangeEmail.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _verifyAndChangeEmail() {
  _verifyAndChangeEmail = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return sendOobCode(auth, request);
  });
  return _verifyAndChangeEmail.apply(this, arguments);
}

function signInWithEmailLink$1(_x54, _x55) {
  return _signInWithEmailLink$.apply(this, arguments);
}

function _signInWithEmailLink$() {
  _signInWithEmailLink$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithEmailLink"
    /* Endpoint.SIGN_IN_WITH_EMAIL_LINK */
    , _addTidIfNecessary(auth, request));
  });
  return _signInWithEmailLink$.apply(this, arguments);
}

function signInWithEmailLinkForLinking(_x56, _x57) {
  return _signInWithEmailLinkForLinking.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */


function _signInWithEmailLinkForLinking() {
  _signInWithEmailLinkForLinking = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithEmailLink"
    /* Endpoint.SIGN_IN_WITH_EMAIL_LINK */
    , _addTidIfNecessary(auth, request));
  });
  return _signInWithEmailLinkForLinking.apply(this, arguments);
}

class EmailAuthCredential extends AuthCredential {
  /** @internal */
  constructor(
  /** @internal */
  _email,
  /** @internal */
  _password, signInMethod,
  /** @internal */
  _tenantId = null) {
    super("password"
    /* ProviderId.PASSWORD */
    , signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  /** @internal */


  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password"
    /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */


  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink"
    /* SignInMethod.EMAIL_LINK */
    , tenantId);
  }
  /** {@inheritdoc AuthCredential.toJSON} */


  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */


  static fromJSON(json) {
    const obj = typeof json === 'string' ? JSON.parse(json) : json;

    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password"
      /* SignInMethod.EMAIL_PASSWORD */
      ) {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink"
      /* SignInMethod.EMAIL_LINK */
      ) {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }

    return null;
  }
  /** @internal */


  _getIdTokenResponse(auth) {
    var _this33 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      switch (_this33.signInMethod) {
        case "password"
        /* SignInMethod.EMAIL_PASSWORD */
        :
          const request = {
            returnSecureToken: true,
            email: _this33._email,
            password: _this33._password,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */

          };

          if ((_a = auth._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
            const requestWithRecaptcha = yield injectRecaptchaFields(auth, request, "signInWithPassword"
            /* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */
            );
            return signInWithPassword(auth, requestWithRecaptcha);
          } else {
            return signInWithPassword(auth, request).catch( /*#__PURE__*/function () {
              var _ref10 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
                if (error.code === `auth/${"missing-recaptcha-token"
                /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
                }`) {
                  console.log('Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.');
                  const requestWithRecaptcha = yield injectRecaptchaFields(auth, request, "signInWithPassword"
                  /* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */
                  );
                  return signInWithPassword(auth, requestWithRecaptcha);
                } else {
                  return Promise.reject(error);
                }
              });

              return function (_x58) {
                return _ref10.apply(this, arguments);
              };
            }());
          }

        case "emailLink"
        /* SignInMethod.EMAIL_LINK */
        :
          return signInWithEmailLink$1(auth, {
            email: _this33._email,
            oobCode: _this33._password
          });

        default:
          _fail(auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
          );

      }
    })();
  }
  /** @internal */


  _linkToIdToken(auth, idToken) {
    var _this34 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (_this34.signInMethod) {
        case "password"
        /* SignInMethod.EMAIL_PASSWORD */
        :
          return updateEmailPassword(auth, {
            idToken,
            returnSecureToken: true,
            email: _this34._email,
            password: _this34._password
          });

        case "emailLink"
        /* SignInMethod.EMAIL_LINK */
        :
          return signInWithEmailLinkForLinking(auth, {
            idToken,
            email: _this34._email,
            oobCode: _this34._password
          });

        default:
          _fail(auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
          );

      }
    })();
  }
  /** @internal */


  _getReauthenticationResolver(auth) {
    return this._getIdTokenResponse(auth);
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function signInWithIdp(_x59, _x60) {
  return _signInWithIdp.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _signInWithIdp() {
  _signInWithIdp = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithIdp"
    /* Endpoint.SIGN_IN_WITH_IDP */
    , _addTidIfNecessary(auth, request));
  });
  return _signInWithIdp.apply(this, arguments);
}

const IDP_REQUEST_URI$1 = 'http://localhost';
/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */

class OAuthCredential extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  /** @internal */


  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);

    if (params.idToken || params.accessToken) {
      // OAuth 2 and either ID token or access token.
      if (params.idToken) {
        cred.idToken = params.idToken;
      }

      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      } // Add nonce if available and no pendingToken is present.


      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }

      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      // OAuth 1 and OAuth token with token secret
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );
    }

    return cred;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */


  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */


  static fromJSON(json) {
    const obj = typeof json === 'string' ? JSON.parse(json) : json;

    const {
      providerId,
      signInMethod
    } = obj,
          rest = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__rest)(obj, ["providerId", "signInMethod"]);

    if (!providerId || !signInMethod) {
      return null;
    }

    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || undefined;
    cred.accessToken = rest.accessToken || undefined;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  /** @internal */


  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */


  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */


  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }

  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };

    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};

      if (this.idToken) {
        postBody['id_token'] = this.idToken;
      }

      if (this.accessToken) {
        postBody['access_token'] = this.accessToken;
      }

      if (this.secret) {
        postBody['oauth_token_secret'] = this.secret;
      }

      postBody['providerId'] = this.providerId;

      if (this.nonce && !this.pendingToken) {
        postBody['nonce'] = this.nonce;
      }

      request.postBody = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystring)(postBody);
    }

    return request;
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function sendPhoneVerificationCode(_x61, _x62) {
  return _sendPhoneVerificationCode.apply(this, arguments);
}

function _sendPhoneVerificationCode() {
  _sendPhoneVerificationCode = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:sendVerificationCode"
    /* Endpoint.SEND_VERIFICATION_CODE */
    , _addTidIfNecessary(auth, request));
  });
  return _sendPhoneVerificationCode.apply(this, arguments);
}

function signInWithPhoneNumber$1(_x63, _x64) {
  return _signInWithPhoneNumber$.apply(this, arguments);
}

function _signInWithPhoneNumber$() {
  _signInWithPhoneNumber$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithPhoneNumber"
    /* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */
    , _addTidIfNecessary(auth, request));
  });
  return _signInWithPhoneNumber$.apply(this, arguments);
}

function linkWithPhoneNumber$1(_x65, _x66) {
  return _linkWithPhoneNumber$.apply(this, arguments);
}

function _linkWithPhoneNumber$() {
  _linkWithPhoneNumber$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    const response = yield _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithPhoneNumber"
    /* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */
    , _addTidIfNecessary(auth, request));

    if (response.temporaryProof) {
      throw _makeTaggedError(auth, "account-exists-with-different-credential"
      /* AuthErrorCode.NEED_CONFIRMATION */
      , response);
    }

    return response;
  });
  return _linkWithPhoneNumber$.apply(this, arguments);
}

const VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  ["USER_NOT_FOUND"
  /* ServerError.USER_NOT_FOUND */
  ]: "user-not-found"
  /* AuthErrorCode.USER_DELETED */

};

function verifyPhoneNumberForExisting(_x67, _x68) {
  return _verifyPhoneNumberForExisting.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */


function _verifyPhoneNumberForExisting() {
  _verifyPhoneNumberForExisting = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    const apiRequest = Object.assign(Object.assign({}, request), {
      operation: 'REAUTH'
    });
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithPhoneNumber"
    /* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */
    , _addTidIfNecessary(auth, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
  });
  return _verifyPhoneNumberForExisting.apply(this, arguments);
}

class PhoneAuthCredential extends AuthCredential {
  constructor(params) {
    super("phone"
    /* ProviderId.PHONE */
    , "phone"
    /* SignInMethod.PHONE */
    );
    this.params = params;
  }
  /** @internal */


  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({
      verificationId,
      verificationCode
    });
  }
  /** @internal */


  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({
      phoneNumber,
      temporaryProof
    });
  }
  /** @internal */


  _getIdTokenResponse(auth) {
    return signInWithPhoneNumber$1(auth, this._makeVerificationRequest());
  }
  /** @internal */


  _linkToIdToken(auth, idToken) {
    return linkWithPhoneNumber$1(auth, Object.assign({
      idToken
    }, this._makeVerificationRequest()));
  }
  /** @internal */


  _getReauthenticationResolver(auth) {
    return verifyPhoneNumberForExisting(auth, this._makeVerificationRequest());
  }
  /** @internal */


  _makeVerificationRequest() {
    const {
      temporaryProof,
      phoneNumber,
      verificationId,
      verificationCode
    } = this.params;

    if (temporaryProof && phoneNumber) {
      return {
        temporaryProof,
        phoneNumber
      };
    }

    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  /** {@inheritdoc AuthCredential.toJSON} */


  toJSON() {
    const obj = {
      providerId: this.providerId
    };

    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }

    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }

    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }

    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }

    return obj;
  }
  /** Generates a phone credential based on a plain object or a JSON string. */


  static fromJSON(json) {
    if (typeof json === 'string') {
      json = JSON.parse(json);
    }

    const {
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    } = json;

    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }

    return new PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */


function parseMode(mode) {
  switch (mode) {
    case 'recoverEmail':
      return "RECOVER_EMAIL"
      /* ActionCodeOperation.RECOVER_EMAIL */
      ;

    case 'resetPassword':
      return "PASSWORD_RESET"
      /* ActionCodeOperation.PASSWORD_RESET */
      ;

    case 'signIn':
      return "EMAIL_SIGNIN"
      /* ActionCodeOperation.EMAIL_SIGNIN */
      ;

    case 'verifyEmail':
      return "VERIFY_EMAIL"
      /* ActionCodeOperation.VERIFY_EMAIL */
      ;

    case 'verifyAndChangeEmail':
      return "VERIFY_AND_CHANGE_EMAIL"
      /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */
      ;

    case 'revertSecondFactorAddition':
      return "REVERT_SECOND_FACTOR_ADDITION"
      /* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */
      ;

    default:
      return null;
  }
}
/**
 * Helper to parse FDL links
 *
 * @param url
 */


function parseDeepLink(url) {
  const link = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystringDecode)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.extractQuerystring)(url))['link']; // Double link case (automatic redirect).

  const doubleDeepLink = link ? (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystringDecode)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.extractQuerystring)(link))['deep_link_id'] : null; // iOS custom scheme links.

  const iOSDeepLink = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystringDecode)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.extractQuerystring)(url))['deep_link_id'];
  const iOSDoubleDeepLink = iOSDeepLink ? (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystringDecode)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.extractQuerystring)(iOSDeepLink))['link'] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */


class ActionCodeURL {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;

    const searchParams = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystringDecode)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.extractQuerystring)(actionLink));
    const apiKey = (_a = searchParams["apiKey"
    /* QueryField.API_KEY */
    ]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"
    /* QueryField.CODE */
    ]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"
    /* QueryField.MODE */
    ]) !== null && _c !== void 0 ? _c : null); // Validate API key, code and mode.

    _assert(apiKey && code && operation, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"
    /* QueryField.CONTINUE_URL */
    ]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"
    /* QueryField.LANGUAGE_CODE */
    ]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"
    /* QueryField.TENANT_ID */
    ]) !== null && _f !== void 0 ? _f : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */


  static parseLink(link) {
    const actionLink = parseDeepLink(link);

    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }

}
/**
 * Parses the email action link string and returns an {@link ActionCodeURL} if
 * the link is valid, otherwise returns null.
 *
 * @public
 */


function parseActionCodeURL(link) {
  return ActionCodeURL.parseLink(link);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */


let EmailAuthProvider = /*#__PURE__*/(() => {
  class EmailAuthProvider {
    constructor() {
      /**
       * Always set to {@link ProviderId}.PASSWORD, even for email link.
       */
      this.providerId = EmailAuthProvider.PROVIDER_ID;
    }
    /**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */


    static credential(email, password) {
      return EmailAuthCredential._fromEmailAndPassword(email, password);
    }
    /**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */


    static credentialWithLink(email, emailLink) {
      const actionCodeUrl = ActionCodeURL.parseLink(emailLink);

      _assert(actionCodeUrl, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );

      return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
    }

  }

  /**
   * Always set to {@link ProviderId}.PASSWORD, even for email link.
   */

  /**
   * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
   */

  /**
   * Always set to {@link SignInMethod}.EMAIL_LINK.
   */
  EmailAuthProvider.PROVIDER_ID = "password"
  /* ProviderId.PASSWORD */
  ;
  EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"
  /* SignInMethod.EMAIL_PASSWORD */
  ;
  EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink"
  /* SignInMethod.EMAIL_LINK */
  ;
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * The base class for all Federated providers (OAuth (including OIDC), SAML).
   *
   * This class is not meant to be instantiated directly.
   *
   * @public
   */

  return EmailAuthProvider;
})();

class FederatedAuthProvider {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(providerId) {
    this.providerId = providerId;
    /** @internal */

    this.defaultLanguageCode = null;
    /** @internal */

    this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */


  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */


  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */


  getCustomParameters() {
    return this.customParameters;
  }

}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */


class BaseOAuthProvider extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    /** @internal */

    this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */


  addScope(scope) {
    // If not already added, add scope to list.
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }

    return this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */


  getScopes() {
    return [...this.scopes];
  }

}
/**
 * Provider for generating generic {@link OAuthCredential}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new OAuthProvider('google.com');
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a OAuth Access Token for the provider.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new OAuthProvider('google.com');
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a OAuth Access Token for the provider.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 * @public
 */


class OAuthProvider extends BaseOAuthProvider {
  /**
   * Creates an {@link OAuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */
  static credentialFromJSON(json) {
    const obj = typeof json === 'string' ? JSON.parse(json) : json;

    _assert('providerId' in obj && 'signInMethod' in obj, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    return OAuthCredential._fromParams(obj);
  }
  /**
   * Creates a {@link OAuthCredential} from a generic OAuth provider's access token or ID token.
   *
   * @remarks
   * The raw nonce is required when an ID token with a nonce field is provided. The SHA-256 hash of
   * the raw nonce must match the nonce field in the ID token.
   *
   * @example
   * ```javascript
   * // `googleUser` from the onsuccess Google Sign In callback.
   * // Initialize a generate OAuth provider with a `google.com` providerId.
   * const provider = new OAuthProvider('google.com');
   * const credential = provider.credential({
   *   idToken: googleUser.getAuthResponse().id_token,
   * });
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param params - Either the options object containing the ID token, access token and raw nonce
   * or the ID token string.
   */


  credential(params) {
    return this._credential(Object.assign(Object.assign({}, params), {
      nonce: params.rawNonce
    }));
  }
  /** An internal credential method that accepts more permissive options */


  _credential(params) {
    _assert(params.idToken || params.accessToken, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    ); // For OAuthCredential, sign in method is same as providerId.


    return OAuthCredential._fromParams(Object.assign(Object.assign({}, params), {
      providerId: this.providerId,
      signInMethod: this.providerId
    }));
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */


  static credentialFromResult(userCredential) {
    return OAuthProvider.oauthCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */


  static credentialFromError(error) {
    return OAuthProvider.oauthCredentialFromTaggedObject(error.customData || {});
  }

  static oauthCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }

    const {
      oauthIdToken,
      oauthAccessToken,
      oauthTokenSecret,
      pendingToken,
      nonce,
      providerId
    } = tokenResponse;

    if (!oauthAccessToken && !oauthTokenSecret && !oauthIdToken && !pendingToken) {
      return null;
    }

    if (!providerId) {
      return null;
    }

    try {
      return new OAuthProvider(providerId)._credential({
        idToken: oauthIdToken,
        accessToken: oauthAccessToken,
        nonce,
        pendingToken
      });
    } catch (e) {
      return null;
    }
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */


let FacebookAuthProvider = /*#__PURE__*/(() => {
  class FacebookAuthProvider extends BaseOAuthProvider {
    constructor() {
      super("facebook.com"
      /* ProviderId.FACEBOOK */
      );
    }
    /**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */


    static credential(accessToken) {
      return OAuthCredential._fromParams({
        providerId: FacebookAuthProvider.PROVIDER_ID,
        signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
        accessToken
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromResult(userCredential) {
      return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromError(error) {
      return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
    }

    static credentialFromTaggedObject({
      _tokenResponse: tokenResponse
    }) {
      if (!tokenResponse || !('oauthAccessToken' in tokenResponse)) {
        return null;
      }

      if (!tokenResponse.oauthAccessToken) {
        return null;
      }

      try {
        return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
      } catch (_a) {
        return null;
      }
    }

  }

  /** Always set to {@link SignInMethod}.FACEBOOK. */

  /** Always set to {@link ProviderId}.FACEBOOK. */
  FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com"
  /* SignInMethod.FACEBOOK */
  ;
  FacebookAuthProvider.PROVIDER_ID = "facebook.com"
  /* ProviderId.FACEBOOK */
  ;
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
   *
   * @example
   * ```javascript
   * // Sign in using a redirect.
   * const provider = new GoogleAuthProvider();
   * // Start a sign in process for an unauthenticated user.
   * provider.addScope('profile');
   * provider.addScope('email');
   * await signInWithRedirect(auth, provider);
   * // This will trigger a full page redirect away from your app
   *
   * // After returning from the redirect when your app initializes you can obtain the result
   * const result = await getRedirectResult(auth);
   * if (result) {
   *   // This is the signed-in user
   *   const user = result.user;
   *   // This gives you a Google Access Token.
   *   const credential = GoogleAuthProvider.credentialFromResult(result);
   *   const token = credential.accessToken;
   * }
   * ```
   *
   * @example
   * ```javascript
   * // Sign in using a popup.
   * const provider = new GoogleAuthProvider();
   * provider.addScope('profile');
   * provider.addScope('email');
   * const result = await signInWithPopup(auth, provider);
   *
   * // The signed-in user info.
   * const user = result.user;
   * // This gives you a Google Access Token.
   * const credential = GoogleAuthProvider.credentialFromResult(result);
   * const token = credential.accessToken;
   * ```
   *
   * @public
   */

  return FacebookAuthProvider;
})();
let GoogleAuthProvider = /*#__PURE__*/(() => {
  class GoogleAuthProvider extends BaseOAuthProvider {
    constructor() {
      super("google.com"
      /* ProviderId.GOOGLE */
      );
      this.addScope('profile');
    }
    /**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */


    static credential(idToken, accessToken) {
      return OAuthCredential._fromParams({
        providerId: GoogleAuthProvider.PROVIDER_ID,
        signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
        idToken,
        accessToken
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromResult(userCredential) {
      return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromError(error) {
      return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
    }

    static credentialFromTaggedObject({
      _tokenResponse: tokenResponse
    }) {
      if (!tokenResponse) {
        return null;
      }

      const {
        oauthIdToken,
        oauthAccessToken
      } = tokenResponse;

      if (!oauthIdToken && !oauthAccessToken) {
        // This could be an oauth 1 credential or a phone credential
        return null;
      }

      try {
        return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
      } catch (_a) {
        return null;
      }
    }

  }

  /** Always set to {@link SignInMethod}.GOOGLE. */

  /** Always set to {@link ProviderId}.GOOGLE. */
  GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com"
  /* SignInMethod.GOOGLE */
  ;
  GoogleAuthProvider.PROVIDER_ID = "google.com"
  /* ProviderId.GOOGLE */
  ;
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
   *
   * @remarks
   * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
   * the {@link signInWithPopup} handler:
   *
   * @example
   * ```javascript
   * // Sign in using a redirect.
   * const provider = new GithubAuthProvider();
   * // Start a sign in process for an unauthenticated user.
   * provider.addScope('repo');
   * await signInWithRedirect(auth, provider);
   * // This will trigger a full page redirect away from your app
   *
   * // After returning from the redirect when your app initializes you can obtain the result
   * const result = await getRedirectResult(auth);
   * if (result) {
   *   // This is the signed-in user
   *   const user = result.user;
   *   // This gives you a Github Access Token.
   *   const credential = GithubAuthProvider.credentialFromResult(result);
   *   const token = credential.accessToken;
   * }
   * ```
   *
   * @example
   * ```javascript
   * // Sign in using a popup.
   * const provider = new GithubAuthProvider();
   * provider.addScope('repo');
   * const result = await signInWithPopup(auth, provider);
   *
   * // The signed-in user info.
   * const user = result.user;
   * // This gives you a Github Access Token.
   * const credential = GithubAuthProvider.credentialFromResult(result);
   * const token = credential.accessToken;
   * ```
   * @public
   */

  return GoogleAuthProvider;
})();
let GithubAuthProvider = /*#__PURE__*/(() => {
  class GithubAuthProvider extends BaseOAuthProvider {
    constructor() {
      super("github.com"
      /* ProviderId.GITHUB */
      );
    }
    /**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */


    static credential(accessToken) {
      return OAuthCredential._fromParams({
        providerId: GithubAuthProvider.PROVIDER_ID,
        signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
        accessToken
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromResult(userCredential) {
      return GithubAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromError(error) {
      return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
    }

    static credentialFromTaggedObject({
      _tokenResponse: tokenResponse
    }) {
      if (!tokenResponse || !('oauthAccessToken' in tokenResponse)) {
        return null;
      }

      if (!tokenResponse.oauthAccessToken) {
        return null;
      }

      try {
        return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
      } catch (_a) {
        return null;
      }
    }

  }

  /** Always set to {@link SignInMethod}.GITHUB. */

  /** Always set to {@link ProviderId}.GITHUB. */
  GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com"
  /* SignInMethod.GITHUB */
  ;
  GithubAuthProvider.PROVIDER_ID = "github.com"
  /* ProviderId.GITHUB */
  ;
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  return GithubAuthProvider;
})();
const IDP_REQUEST_URI = 'http://localhost';
/**
 * @public
 */

class SAMLAuthCredential extends AuthCredential {
  /** @internal */
  constructor(providerId, pendingToken) {
    super(providerId, providerId);
    this.pendingToken = pendingToken;
  }
  /** @internal */


  _getIdTokenResponse(auth) {
    const request = this.buildRequest();
    return signInWithIdp(auth, request);
  }
  /** @internal */


  _linkToIdToken(auth, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth, request);
  }
  /** @internal */


  _getReauthenticationResolver(auth) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth, request);
  }
  /** {@inheritdoc AuthCredential.toJSON}  */


  toJSON() {
    return {
      signInMethod: this.signInMethod,
      providerId: this.providerId,
      pendingToken: this.pendingToken
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */


  static fromJSON(json) {
    const obj = typeof json === 'string' ? JSON.parse(json) : json;
    const {
      providerId,
      signInMethod,
      pendingToken
    } = obj;

    if (!providerId || !signInMethod || !pendingToken || providerId !== signInMethod) {
      return null;
    }

    return new SAMLAuthCredential(providerId, pendingToken);
  }
  /**
   * Helper static method to avoid exposing the constructor to end users.
   *
   * @internal
   */


  static _create(providerId, pendingToken) {
    return new SAMLAuthCredential(providerId, pendingToken);
  }

  buildRequest() {
    return {
      requestUri: IDP_REQUEST_URI,
      returnSecureToken: true,
      pendingToken: this.pendingToken
    };
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const SAML_PROVIDER_PREFIX = 'saml.';
/**
 * An {@link AuthProvider} for SAML.
 *
 * @public
 */

class SAMLAuthProvider extends FederatedAuthProvider {
  /**
   * Constructor. The providerId must start with "saml."
   * @param providerId - SAML provider ID.
   */
  constructor(providerId) {
    _assert(providerId.startsWith(SAML_PROVIDER_PREFIX), "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    super(providerId);
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential} after a
   * successful SAML flow completes.
   *
   * @remarks
   *
   * For example, to get an {@link AuthCredential}, you could write the
   * following code:
   *
   * ```js
   * const userCredential = await signInWithPopup(auth, samlProvider);
   * const credential = SAMLAuthProvider.credentialFromResult(userCredential);
   * ```
   *
   * @param userCredential - The user credential.
   */


  static credentialFromResult(userCredential) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */


  static credentialFromError(error) {
    return SAMLAuthProvider.samlCredentialFromTaggedObject(error.customData || {});
  }
  /**
   * Creates an {@link AuthCredential} from a JSON string or a plain object.
   * @param json - A plain object or a JSON string
   */


  static credentialFromJSON(json) {
    const credential = SAMLAuthCredential.fromJSON(json);

    _assert(credential, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    return credential;
  }

  static samlCredentialFromTaggedObject({
    _tokenResponse: tokenResponse
  }) {
    if (!tokenResponse) {
      return null;
    }

    const {
      pendingToken,
      providerId
    } = tokenResponse;

    if (!pendingToken || !providerId) {
      return null;
    }

    try {
      return SAMLAuthCredential._create(providerId, pendingToken);
    } catch (e) {
      return null;
    }
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */


let TwitterAuthProvider = /*#__PURE__*/(() => {
  class TwitterAuthProvider extends BaseOAuthProvider {
    constructor() {
      super("twitter.com"
      /* ProviderId.TWITTER */
      );
    }
    /**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */


    static credential(token, secret) {
      return OAuthCredential._fromParams({
        providerId: TwitterAuthProvider.PROVIDER_ID,
        signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
        oauthToken: token,
        oauthTokenSecret: secret
      });
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromResult(userCredential) {
      return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
    }
    /**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */


    static credentialFromError(error) {
      return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
    }

    static credentialFromTaggedObject({
      _tokenResponse: tokenResponse
    }) {
      if (!tokenResponse) {
        return null;
      }

      const {
        oauthAccessToken,
        oauthTokenSecret
      } = tokenResponse;

      if (!oauthAccessToken || !oauthTokenSecret) {
        return null;
      }

      try {
        return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
      } catch (_a) {
        return null;
      }
    }

  }

  /** Always set to {@link SignInMethod}.TWITTER. */

  /** Always set to {@link ProviderId}.TWITTER. */
  TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com"
  /* SignInMethod.TWITTER */
  ;
  TwitterAuthProvider.PROVIDER_ID = "twitter.com"
  /* ProviderId.TWITTER */
  ;
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  return TwitterAuthProvider;
})();

function signUp(_x69, _x70) {
  return _signUp.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _signUp() {
  _signUp = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signUp"
    /* Endpoint.SIGN_UP */
    , _addTidIfNecessary(auth, request));
  });
  return _signUp.apply(this, arguments);
}

class UserCredentialImpl {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }

  static _fromIdTokenResponse(auth, operationType, idTokenResponse, isAnonymous = false) {
    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = yield UserImpl._fromIdTokenResponse(auth, idTokenResponse, isAnonymous);
      const providerId = providerIdForResponse(idTokenResponse);
      const userCred = new UserCredentialImpl({
        user,
        providerId,
        _tokenResponse: idTokenResponse,
        operationType
      });
      return userCred;
    })();
  }

  static _forOperation(user, operationType, response) {
    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield user._updateTokensIfNecessary(response,
      /* reload */
      true);
      const providerId = providerIdForResponse(response);
      return new UserCredentialImpl({
        user,
        providerId,
        _tokenResponse: response,
        operationType
      });
    })();
  }

}

function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }

  if ('phoneNumber' in response) {
    return "phone"
    /* ProviderId.PHONE */
    ;
  }

  return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Asynchronously signs in as an anonymous user.
 *
 * @remarks
 * If there is already an anonymous user signed in, that user will be returned; otherwise, a
 * new anonymous user identity will be created and returned.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */


function signInAnonymously(_x71) {
  return _signInAnonymously.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _signInAnonymously() {
  _signInAnonymously = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
    var _a;

    const authInternal = _castAuth(auth);

    yield authInternal._initializationPromise;

    if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
      // If an anonymous user is already signed in, no need to sign them in again.
      return new UserCredentialImpl({
        user: authInternal.currentUser,
        providerId: null,
        operationType: "signIn"
        /* OperationType.SIGN_IN */

      });
    }

    const response = yield signUp(authInternal, {
      returnSecureToken: true
    });
    const userCredential = yield UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn"
    /* OperationType.SIGN_IN */
    , response, true);
    yield authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
  });
  return _signInAnonymously.apply(this, arguments);
}

class MultiFactorError extends _firebase_util__WEBPACK_IMPORTED_MODULE_1__.FirebaseError {
  constructor(auth, error, operationType, user) {
    var _a;

    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user; // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth.name,
      tenantId: (_a = auth.tenantId) !== null && _a !== void 0 ? _a : undefined,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }

  static _fromErrorAndOperation(auth, error, operationType, user) {
    return new MultiFactorError(auth, error, operationType, user);
  }

}

function _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate"
  /* OperationType.REAUTHENTICATE */
  ? credential._getReauthenticationResolver(auth) : credential._getIdTokenResponse(auth);
  return idTokenProvider.catch(error => {
    if (error.code === `auth/${"multi-factor-auth-required"
    /* AuthErrorCode.MFA_REQUIRED */
    }`) {
      throw MultiFactorError._fromErrorAndOperation(auth, error, operationType, user);
    }

    throw error;
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Takes a set of UserInfo provider data and converts it to a set of names
 */


function providerDataAsNames(providerData) {
  return new Set(providerData.map(({
    providerId
  }) => providerId).filter(pid => !!pid));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Unlinks a provider from a user account.
 *
 * @param user - The user.
 * @param providerId - The provider to unlink.
 *
 * @public
 */


function unlink(_x72, _x73) {
  return _unlink.apply(this, arguments);
}

function _unlink() {
  _unlink = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, providerId) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    yield _assertLinkedStatus(true, userInternal, providerId);
    const {
      providerUserInfo
    } = yield deleteLinkedAccounts(userInternal.auth, {
      idToken: yield userInternal.getIdToken(),
      deleteProvider: [providerId]
    });
    const providersLeft = providerDataAsNames(providerUserInfo || []);
    userInternal.providerData = userInternal.providerData.filter(pd => providersLeft.has(pd.providerId));

    if (!providersLeft.has("phone"
    /* ProviderId.PHONE */
    )) {
      userInternal.phoneNumber = null;
    }

    yield userInternal.auth._persistUserIfCurrent(userInternal);
    return userInternal;
  });
  return _unlink.apply(this, arguments);
}

function _link$1(_x74, _x75) {
  return _link$.apply(this, arguments);
}

function _link$() {
  _link$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, credential, bypassAuthState = false) {
    const response = yield _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, yield user.getIdToken()), bypassAuthState);
    return UserCredentialImpl._forOperation(user, "link"
    /* OperationType.LINK */
    , response);
  });
  return _link$.apply(this, arguments);
}

function _assertLinkedStatus(_x76, _x77, _x78) {
  return _assertLinkedStatus2.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _assertLinkedStatus2() {
  _assertLinkedStatus2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (expected, user, provider) {
    yield _reloadWithoutSaving(user);
    const providerIds = providerDataAsNames(user.providerData);
    const code = expected === false ? "provider-already-linked"
    /* AuthErrorCode.PROVIDER_ALREADY_LINKED */
    : "no-such-provider"
    /* AuthErrorCode.NO_SUCH_PROVIDER */
    ;

    _assert(providerIds.has(provider) === expected, user.auth, code);
  });
  return _assertLinkedStatus2.apply(this, arguments);
}

function _reauthenticate(_x79, _x80) {
  return _reauthenticate2.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _reauthenticate2() {
  _reauthenticate2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, credential, bypassAuthState = false) {
    const {
      auth
    } = user;
    const operationType = "reauthenticate"
    /* OperationType.REAUTHENTICATE */
    ;

    try {
      const response = yield _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential, user), bypassAuthState);

      _assert(response.idToken, auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      );

      const parsed = _parseToken(response.idToken);

      _assert(parsed, auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      );

      const {
        sub: localId
      } = parsed;

      _assert(user.uid === localId, auth, "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
      );

      return UserCredentialImpl._forOperation(user, operationType, response);
    } catch (e) {
      // Convert user deleted error into user mismatch
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"
      /* AuthErrorCode.USER_DELETED */
      }`) {
        _fail(auth, "user-mismatch"
        /* AuthErrorCode.USER_MISMATCH */
        );
      }

      throw e;
    }
  });
  return _reauthenticate2.apply(this, arguments);
}

function _signInWithCredential(_x81, _x82) {
  return _signInWithCredential2.apply(this, arguments);
}
/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */


function _signInWithCredential2() {
  _signInWithCredential2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, credential, bypassAuthState = false) {
    const operationType = "signIn"
    /* OperationType.SIGN_IN */
    ;
    const response = yield _processCredentialSavingMfaContextIfNecessary(auth, operationType, credential);
    const userCredential = yield UserCredentialImpl._fromIdTokenResponse(auth, operationType, response);

    if (!bypassAuthState) {
      yield auth._updateCurrentUser(userCredential.user);
    }

    return userCredential;
  });
  return _signInWithCredential2.apply(this, arguments);
}

function signInWithCredential(_x83, _x84) {
  return _signInWithCredential3.apply(this, arguments);
}
/**
 * Links the user account with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */


function _signInWithCredential3() {
  _signInWithCredential3 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, credential) {
    return _signInWithCredential(_castAuth(auth), credential);
  });
  return _signInWithCredential3.apply(this, arguments);
}

function linkWithCredential(_x85, _x86) {
  return _linkWithCredential.apply(this, arguments);
}
/**
 * Re-authenticates a user using a fresh credential.
 *
 * @remarks
 * Use before operations such as {@link updatePassword} that require tokens from recent sign-in
 * attempts. This method can be used to recover from a `CREDENTIAL_TOO_OLD_LOGIN_AGAIN` error
 * or a `TOKEN_EXPIRED` error.
 *
 * @param user - The user.
 * @param credential - The auth credential.
 *
 * @public
 */


function _linkWithCredential() {
  _linkWithCredential = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, credential) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    yield _assertLinkedStatus(false, userInternal, credential.providerId);
    return _link$1(userInternal, credential);
  });
  return _linkWithCredential.apply(this, arguments);
}

function reauthenticateWithCredential(_x87, _x88) {
  return _reauthenticateWithCredential.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _reauthenticateWithCredential() {
  _reauthenticateWithCredential = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, credential) {
    return _reauthenticate((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user), credential);
  });
  return _reauthenticateWithCredential.apply(this, arguments);
}

function signInWithCustomToken$1(_x89, _x90) {
  return _signInWithCustomToken$.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Asynchronously signs in using a custom token.
 *
 * @remarks
 * Custom tokens are used to integrate Firebase Auth with existing auth systems, and must
 * be generated by an auth backend using the
 * {@link https://firebase.google.com/docs/reference/admin/node/admin.auth.Auth#createcustomtoken | createCustomToken}
 * method in the {@link https://firebase.google.com/docs/auth/admin | Admin SDK} .
 *
 * Fails with an error if the token is invalid, expired, or not accepted by the Firebase Auth service.
 *
 * @param auth - The {@link Auth} instance.
 * @param customToken - The custom token to sign in with.
 *
 * @public
 */


function _signInWithCustomToken$() {
  _signInWithCustomToken$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performSignInRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:signInWithCustomToken"
    /* Endpoint.SIGN_IN_WITH_CUSTOM_TOKEN */
    , _addTidIfNecessary(auth, request));
  });
  return _signInWithCustomToken$.apply(this, arguments);
}

function signInWithCustomToken(_x91, _x92) {
  return _signInWithCustomToken.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _signInWithCustomToken() {
  _signInWithCustomToken = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, customToken) {
    const authInternal = _castAuth(auth);

    const response = yield signInWithCustomToken$1(authInternal, {
      token: customToken,
      returnSecureToken: true
    });
    const cred = yield UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn"
    /* OperationType.SIGN_IN */
    , response);
    yield authInternal._updateCurrentUser(cred.user);
    return cred;
  });
  return _signInWithCustomToken.apply(this, arguments);
}

class MultiFactorInfoImpl {
  constructor(factorId, response) {
    this.factorId = factorId;
    this.uid = response.mfaEnrollmentId;
    this.enrollmentTime = new Date(response.enrolledAt).toUTCString();
    this.displayName = response.displayName;
  }

  static _fromServerResponse(auth, enrollment) {
    if ('phoneInfo' in enrollment) {
      return PhoneMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    } else if ('totpInfo' in enrollment) {
      return TotpMultiFactorInfoImpl._fromServerResponse(auth, enrollment);
    }

    return _fail(auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );
  }

}

class PhoneMultiFactorInfoImpl extends MultiFactorInfoImpl {
  constructor(response) {
    super("phone"
    /* FactorId.PHONE */
    , response);
    this.phoneNumber = response.phoneInfo;
  }

  static _fromServerResponse(_auth, enrollment) {
    return new PhoneMultiFactorInfoImpl(enrollment);
  }

}

class TotpMultiFactorInfoImpl extends MultiFactorInfoImpl {
  constructor(response) {
    super("totp"
    /* FactorId.TOTP */
    , response);
  }

  static _fromServerResponse(_auth, enrollment) {
    return new TotpMultiFactorInfoImpl(enrollment);
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _setActionCodeSettingsOnRequest(auth, request, actionCodeSettings) {
  var _a;

  _assert(((_a = actionCodeSettings.url) === null || _a === void 0 ? void 0 : _a.length) > 0, auth, "invalid-continue-uri"
  /* AuthErrorCode.INVALID_CONTINUE_URI */
  );

  _assert(typeof actionCodeSettings.dynamicLinkDomain === 'undefined' || actionCodeSettings.dynamicLinkDomain.length > 0, auth, "invalid-dynamic-link-domain"
  /* AuthErrorCode.INVALID_DYNAMIC_LINK_DOMAIN */
  );

  request.continueUrl = actionCodeSettings.url;
  request.dynamicLinkDomain = actionCodeSettings.dynamicLinkDomain;
  request.canHandleCodeInApp = actionCodeSettings.handleCodeInApp;

  if (actionCodeSettings.iOS) {
    _assert(actionCodeSettings.iOS.bundleId.length > 0, auth, "missing-ios-bundle-id"
    /* AuthErrorCode.MISSING_IOS_BUNDLE_ID */
    );

    request.iOSBundleId = actionCodeSettings.iOS.bundleId;
  }

  if (actionCodeSettings.android) {
    _assert(actionCodeSettings.android.packageName.length > 0, auth, "missing-android-pkg-name"
    /* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */
    );

    request.androidInstallApp = actionCodeSettings.android.installApp;
    request.androidMinimumVersionCode = actionCodeSettings.android.minimumVersion;
    request.androidPackageName = actionCodeSettings.android.packageName;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sends a password reset email to the given email address.
 *
 * @remarks
 * To complete the password reset, call {@link confirmPasswordReset} with the code supplied in
 * the email sent to the user, along with the new password specified by the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendPasswordResetEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain code from user.
 * await confirmPasswordReset('user@example.com', code);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function sendPasswordResetEmail(_x93, _x94, _x95) {
  return _sendPasswordResetEmail.apply(this, arguments);
}
/**
 * Completes the password reset process, given a confirmation code and new password.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A confirmation code sent to the user.
 * @param newPassword - The new password.
 *
 * @public
 */


function _sendPasswordResetEmail() {
  _sendPasswordResetEmail = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, email, actionCodeSettings) {
    var _a;

    const authInternal = _castAuth(auth);

    const request = {
      requestType: "PASSWORD_RESET"
      /* ActionCodeOperation.PASSWORD_RESET */
      ,
      email,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */

    };

    if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
      const requestWithRecaptcha = yield injectRecaptchaFields(authInternal, request, "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */
      , true);

      if (actionCodeSettings) {
        _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
      }

      yield sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
    } else {
      if (actionCodeSettings) {
        _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
      }

      yield sendPasswordResetEmail$1(authInternal, request).catch( /*#__PURE__*/function () {
        var _ref24 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          if (error.code === `auth/${"missing-recaptcha-token"
          /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
          }`) {
            console.log('Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.');
            const requestWithRecaptcha = yield injectRecaptchaFields(authInternal, request, "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
            , true);

            if (actionCodeSettings) {
              _setActionCodeSettingsOnRequest(authInternal, requestWithRecaptcha, actionCodeSettings);
            }

            yield sendPasswordResetEmail$1(authInternal, requestWithRecaptcha);
          } else {
            return Promise.reject(error);
          }
        });

        return function (_x197) {
          return _ref24.apply(this, arguments);
        };
      }());
    }
  });
  return _sendPasswordResetEmail.apply(this, arguments);
}

function confirmPasswordReset(_x96, _x97, _x98) {
  return _confirmPasswordReset.apply(this, arguments);
}
/**
 * Applies a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */


function _confirmPasswordReset() {
  _confirmPasswordReset = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, oobCode, newPassword) {
    yield resetPassword((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth), {
      oobCode,
      newPassword
    }); // Do not return the email.
  });
  return _confirmPasswordReset.apply(this, arguments);
}

function applyActionCode(_x99, _x100) {
  return _applyActionCode.apply(this, arguments);
}
/**
 * Checks a verification code sent to the user by email or other out-of-band mechanism.
 *
 * @returns metadata about the code.
 *
 * @param auth - The {@link Auth} instance.
 * @param oobCode - A verification code sent to the user.
 *
 * @public
 */


function _applyActionCode() {
  _applyActionCode = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, oobCode) {
    yield applyActionCode$1((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth), {
      oobCode
    });
  });
  return _applyActionCode.apply(this, arguments);
}

function checkActionCode(_x101, _x102) {
  return _checkActionCode.apply(this, arguments);
}
/**
 * Checks a password reset code sent to the user by email or other out-of-band mechanism.
 *
 * @returns the user's email address if valid.
 *
 * @param auth - The {@link Auth} instance.
 * @param code - A verification code sent to the user.
 *
 * @public
 */


function _checkActionCode() {
  _checkActionCode = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, oobCode) {
    const authModular = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth);
    const response = yield resetPassword(authModular, {
      oobCode
    }); // Email could be empty only if the request type is EMAIL_SIGNIN or
    // VERIFY_AND_CHANGE_EMAIL.
    // New email should not be empty if the request type is
    // VERIFY_AND_CHANGE_EMAIL.
    // Multi-factor info could not be empty if the request type is
    // REVERT_SECOND_FACTOR_ADDITION.

    const operation = response.requestType;

    _assert(operation, authModular, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    switch (operation) {
      case "EMAIL_SIGNIN"
      /* ActionCodeOperation.EMAIL_SIGNIN */
      :
        break;

      case "VERIFY_AND_CHANGE_EMAIL"
      /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */
      :
        _assert(response.newEmail, authModular, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
        );

        break;

      case "REVERT_SECOND_FACTOR_ADDITION"
      /* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */
      :
        _assert(response.mfaInfo, authModular, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
        );

      // fall through

      default:
        _assert(response.email, authModular, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
        );

    } // The multi-factor info for revert second factor addition


    let multiFactorInfo = null;

    if (response.mfaInfo) {
      multiFactorInfo = MultiFactorInfoImpl._fromServerResponse(_castAuth(authModular), response.mfaInfo);
    }

    return {
      data: {
        email: (response.requestType === "VERIFY_AND_CHANGE_EMAIL"
        /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */
        ? response.newEmail : response.email) || null,
        previousEmail: (response.requestType === "VERIFY_AND_CHANGE_EMAIL"
        /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */
        ? response.email : response.newEmail) || null,
        multiFactorInfo
      },
      operation
    };
  });
  return _checkActionCode.apply(this, arguments);
}

function verifyPasswordResetCode(_x103, _x104) {
  return _verifyPasswordResetCode.apply(this, arguments);
}
/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */


function _verifyPasswordResetCode() {
  _verifyPasswordResetCode = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, code) {
    const {
      data
    } = yield checkActionCode((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth), code); // Email should always be present since a code was sent to it

    return data.email;
  });
  return _verifyPasswordResetCode.apply(this, arguments);
}

function createUserWithEmailAndPassword(_x105, _x106, _x107) {
  return _createUserWithEmailAndPassword.apply(this, arguments);
}
/**
 * Asynchronously signs in using an email and password.
 *
 * @remarks
 * Fails with an error if the email address and password do not match.
 *
 * Note: The user's password is NOT the password used to access the user's email account. The
 * email address serves as a unique identifier for the user, and the password is used to access
 * the user's account in your Firebase project. See also: {@link createUserWithEmailAndPassword}.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The users email address.
 * @param password - The users password.
 *
 * @public
 */


function _createUserWithEmailAndPassword() {
  _createUserWithEmailAndPassword = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, email, password) {
    var _a;

    const authInternal = _castAuth(auth);

    const request = {
      returnSecureToken: true,
      email,
      password,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */

    };
    let signUpResponse;

    if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
      const requestWithRecaptcha = yield injectRecaptchaFields(authInternal, request, "signUpPassword"
      /* RecaptchaActionName.SIGN_UP_PASSWORD */
      );
      signUpResponse = signUp(authInternal, requestWithRecaptcha);
    } else {
      signUpResponse = signUp(authInternal, request).catch( /*#__PURE__*/function () {
        var _ref25 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          if (error.code === `auth/${"missing-recaptcha-token"
          /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
          }`) {
            console.log('Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.');
            const requestWithRecaptcha = yield injectRecaptchaFields(authInternal, request, "signUpPassword"
            /* RecaptchaActionName.SIGN_UP_PASSWORD */
            );
            return signUp(authInternal, requestWithRecaptcha);
          } else {
            return Promise.reject(error);
          }
        });

        return function (_x198) {
          return _ref25.apply(this, arguments);
        };
      }());
    }

    const response = yield signUpResponse.catch(error => {
      return Promise.reject(error);
    });
    const userCredential = yield UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn"
    /* OperationType.SIGN_IN */
    , response);
    yield authInternal._updateCurrentUser(userCredential.user);
    return userCredential;
  });
  return _createUserWithEmailAndPassword.apply(this, arguments);
}

function signInWithEmailAndPassword(auth, email, password) {
  return signInWithCredential((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth), EmailAuthProvider.credential(email, password));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Sends a sign-in email link to the user with the specified email.
 *
 * @remarks
 * The sign-in operation has to always be completed in the app unlike other out of band email
 * actions (password reset and email verifications). This is because, at the end of the flow,
 * the user is expected to be signed in and their Auth state persisted within the app.
 *
 * To complete sign in with the email link, call {@link signInWithEmailLink} with the email
 * address and the email link supplied in the email sent to the user.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink(auth, 'user@example.com', emailLink);
 * }
 * ```
 *
 * @param authInternal - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function sendSignInLinkToEmail(_x108, _x109, _x110) {
  return _sendSignInLinkToEmail.apply(this, arguments);
}
/**
 * Checks if an incoming link is a sign-in with email link suitable for {@link signInWithEmailLink}.
 *
 * @param auth - The {@link Auth} instance.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */


function _sendSignInLinkToEmail() {
  _sendSignInLinkToEmail = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, email, actionCodeSettings) {
    var _a;

    const authInternal = _castAuth(auth);

    const request = {
      requestType: "EMAIL_SIGNIN"
      /* ActionCodeOperation.EMAIL_SIGNIN */
      ,
      email,
      clientType: "CLIENT_TYPE_WEB"
      /* RecaptchaClientType.WEB */

    };

    function setActionCodeSettings(request, actionCodeSettings) {
      _assert(actionCodeSettings.handleCodeInApp, authInternal, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );

      if (actionCodeSettings) {
        _setActionCodeSettingsOnRequest(authInternal, request, actionCodeSettings);
      }
    }

    if ((_a = authInternal._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.emailPasswordEnabled) {
      const requestWithRecaptcha = yield injectRecaptchaFields(authInternal, request, "getOobCode"
      /* RecaptchaActionName.GET_OOB_CODE */
      , true);
      setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
      yield sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
    } else {
      setActionCodeSettings(request, actionCodeSettings);
      yield sendSignInLinkToEmail$1(authInternal, request).catch( /*#__PURE__*/function () {
        var _ref26 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          if (error.code === `auth/${"missing-recaptcha-token"
          /* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */
          }`) {
            console.log('Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.');
            const requestWithRecaptcha = yield injectRecaptchaFields(authInternal, request, "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
            , true);
            setActionCodeSettings(requestWithRecaptcha, actionCodeSettings);
            yield sendSignInLinkToEmail$1(authInternal, requestWithRecaptcha);
          } else {
            return Promise.reject(error);
          }
        });

        return function (_x199) {
          return _ref26.apply(this, arguments);
        };
      }());
    }
  });
  return _sendSignInLinkToEmail.apply(this, arguments);
}

function isSignInWithEmailLink(auth, emailLink) {
  const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
  return (actionCodeUrl === null || actionCodeUrl === void 0 ? void 0 : actionCodeUrl.operation) === "EMAIL_SIGNIN"
  /* ActionCodeOperation.EMAIL_SIGNIN */
  ;
}
/**
 * Asynchronously signs in using an email and sign-in email link.
 *
 * @remarks
 * If no link is passed, the link is inferred from the current URL.
 *
 * Fails with an error if the email address is invalid or OTP in email link expires.
 *
 * Note: Confirm the link is a sign-in email link before calling this method firebase.auth.Auth.isSignInWithEmailLink.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendSignInLinkToEmail(auth, 'user@example.com', actionCodeSettings);
 * // Obtain emailLink from the user.
 * if(isSignInWithEmailLink(auth, emailLink)) {
 *   await signInWithEmailLink(auth, 'user@example.com', emailLink);
 * }
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param emailLink - The link sent to the user's email address.
 *
 * @public
 */


function signInWithEmailLink(_x111, _x112, _x113) {
  return _signInWithEmailLink.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _signInWithEmailLink() {
  _signInWithEmailLink = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, email, emailLink) {
    const authModular = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth);
    const credential = EmailAuthProvider.credentialWithLink(email, emailLink || _getCurrentUrl()); // Check if the tenant ID in the email link matches the tenant ID on Auth
    // instance.

    _assert(credential._tenantId === (authModular.tenantId || null), authModular, "tenant-id-mismatch"
    /* AuthErrorCode.TENANT_ID_MISMATCH */
    );

    return signInWithCredential(authModular, credential);
  });
  return _signInWithEmailLink.apply(this, arguments);
}

function createAuthUri(_x114, _x115) {
  return _createAuthUri.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Gets the list of possible sign in methods for the given email address.
 *
 * @remarks
 * This is useful to differentiate methods of sign-in for the same provider, eg.
 * {@link EmailAuthProvider} which has 2 methods of sign-in,
 * {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 *
 * @public
 */


function _createAuthUri() {
  _createAuthUri = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:createAuthUri"
    /* Endpoint.CREATE_AUTH_URI */
    , _addTidIfNecessary(auth, request));
  });
  return _createAuthUri.apply(this, arguments);
}

function fetchSignInMethodsForEmail(_x116, _x117) {
  return _fetchSignInMethodsForEmail.apply(this, arguments);
}
/**
 * Sends a verification email to a user.
 *
 * @remarks
 * The verification process is completed by calling {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await sendEmailVerification(user, actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function _fetchSignInMethodsForEmail() {
  _fetchSignInMethodsForEmail = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, email) {
    // createAuthUri returns an error if continue URI is not http or https.
    // For environments like Cordova, Chrome extensions, native frameworks, file
    // systems, etc, use http://localhost as continue URL.
    const continueUri = _isHttpOrHttps() ? _getCurrentUrl() : 'http://localhost';
    const request = {
      identifier: email,
      continueUri
    };
    const {
      signinMethods
    } = yield createAuthUri((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth), request);
    return signinMethods || [];
  });
  return _fetchSignInMethodsForEmail.apply(this, arguments);
}

function sendEmailVerification(_x118, _x119) {
  return _sendEmailVerification.apply(this, arguments);
}
/**
 * Sends a verification email to a new email address.
 *
 * @remarks
 * The user's email will be updated to the new one after being verified.
 *
 * If you have a custom email action handler, you can complete the verification process by calling
 * {@link applyActionCode}.
 *
 * @example
 * ```javascript
 * const actionCodeSettings = {
 *   url: 'https://www.example.com/?email=user@example.com',
 *   iOS: {
 *      bundleId: 'com.example.ios'
 *   },
 *   android: {
 *     packageName: 'com.example.android',
 *     installApp: true,
 *     minimumVersion: '12'
 *   },
 *   handleCodeInApp: true
 * };
 * await verifyBeforeUpdateEmail(user, 'newemail@example.com', actionCodeSettings);
 * // Obtain code from the user.
 * await applyActionCode(auth, code);
 * ```
 *
 * @param user - The user.
 * @param newEmail - The new email address to be verified before update.
 * @param actionCodeSettings - The {@link ActionCodeSettings}.
 *
 * @public
 */


function _sendEmailVerification() {
  _sendEmailVerification = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, actionCodeSettings) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    const idToken = yield user.getIdToken();
    const request = {
      requestType: "VERIFY_EMAIL"
      /* ActionCodeOperation.VERIFY_EMAIL */
      ,
      idToken
    };

    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    }

    const {
      email
    } = yield sendEmailVerification$1(userInternal.auth, request);

    if (email !== user.email) {
      yield user.reload();
    }
  });
  return _sendEmailVerification.apply(this, arguments);
}

function verifyBeforeUpdateEmail(_x120, _x121, _x122) {
  return _verifyBeforeUpdateEmail.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _verifyBeforeUpdateEmail() {
  _verifyBeforeUpdateEmail = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, newEmail, actionCodeSettings) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    const idToken = yield user.getIdToken();
    const request = {
      requestType: "VERIFY_AND_CHANGE_EMAIL"
      /* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */
      ,
      idToken,
      newEmail
    };

    if (actionCodeSettings) {
      _setActionCodeSettingsOnRequest(userInternal.auth, request, actionCodeSettings);
    }

    const {
      email
    } = yield verifyAndChangeEmail(userInternal.auth, request);

    if (email !== user.email) {
      // If the local copy of the email on user is outdated, reload the
      // user.
      yield user.reload();
    }
  });
  return _verifyBeforeUpdateEmail.apply(this, arguments);
}

function updateProfile$1(_x123, _x124) {
  return _updateProfile$.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Updates a user's profile data.
 *
 * @param user - The user.
 * @param profile - The profile's `displayName` and `photoURL` to update.
 *
 * @public
 */


function _updateProfile$() {
  _updateProfile$ = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request) {
    return _performApiRequest(auth, "POST"
    /* HttpMethod.POST */
    , "/v1/accounts:update"
    /* Endpoint.SET_ACCOUNT_INFO */
    , request);
  });
  return _updateProfile$.apply(this, arguments);
}

function updateProfile(_x125, _x126) {
  return _updateProfile.apply(this, arguments);
}
/**
 * Updates the user's email address.
 *
 * @remarks
 * An email will be sent to the original email address (if it was set) that allows to revoke the
 * email address change, in order to protect them from account hijacking.
 *
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newEmail - The new email address.
 *
 * @public
 */


function _updateProfile() {
  _updateProfile = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, {
    displayName,
    photoURL: photoUrl
  }) {
    if (displayName === undefined && photoUrl === undefined) {
      return;
    }

    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    const idToken = yield userInternal.getIdToken();
    const profileRequest = {
      idToken,
      displayName,
      photoUrl,
      returnSecureToken: true
    };
    const response = yield _logoutIfInvalidated(userInternal, updateProfile$1(userInternal.auth, profileRequest));
    userInternal.displayName = response.displayName || null;
    userInternal.photoURL = response.photoUrl || null; // Update the password provider as well

    const passwordProvider = userInternal.providerData.find(({
      providerId
    }) => providerId === "password"
    /* ProviderId.PASSWORD */
    );

    if (passwordProvider) {
      passwordProvider.displayName = userInternal.displayName;
      passwordProvider.photoURL = userInternal.photoURL;
    }

    yield userInternal._updateTokensIfNecessary(response);
  });
  return _updateProfile.apply(this, arguments);
}

function updateEmail(user, newEmail) {
  return updateEmailOrPassword((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user), newEmail, null);
}
/**
 * Updates the user's password.
 *
 * @remarks
 * Important: this is a security sensitive operation that requires the user to have recently signed
 * in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 * @param newPassword - The new password.
 *
 * @public
 */


function updatePassword(user, newPassword) {
  return updateEmailOrPassword((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user), null, newPassword);
}

function updateEmailOrPassword(_x127, _x128, _x129) {
  return _updateEmailOrPassword.apply(this, arguments);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Parse the `AdditionalUserInfo` from the ID token response.
 *
 */


function _updateEmailOrPassword() {
  _updateEmailOrPassword = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, email, password) {
    const {
      auth
    } = user;
    const idToken = yield user.getIdToken();
    const request = {
      idToken,
      returnSecureToken: true
    };

    if (email) {
      request.email = email;
    }

    if (password) {
      request.password = password;
    }

    const response = yield _logoutIfInvalidated(user, updateEmailPassword(auth, request));
    yield user._updateTokensIfNecessary(response,
    /* reload */
    true);
  });
  return _updateEmailOrPassword.apply(this, arguments);
}

function _fromIdTokenResponse(idTokenResponse) {
  var _a, _b;

  if (!idTokenResponse) {
    return null;
  }

  const {
    providerId
  } = idTokenResponse;
  const profile = idTokenResponse.rawUserInfo ? JSON.parse(idTokenResponse.rawUserInfo) : {};
  const isNewUser = idTokenResponse.isNewUser || idTokenResponse.kind === "identitytoolkit#SignupNewUserResponse"
  /* IdTokenResponseKind.SignupNewUser */
  ;

  if (!providerId && (idTokenResponse === null || idTokenResponse === void 0 ? void 0 : idTokenResponse.idToken)) {
    const signInProvider = (_b = (_a = _parseToken(idTokenResponse.idToken)) === null || _a === void 0 ? void 0 : _a.firebase) === null || _b === void 0 ? void 0 : _b['sign_in_provider'];

    if (signInProvider) {
      const filteredProviderId = signInProvider !== "anonymous"
      /* ProviderId.ANONYMOUS */
      && signInProvider !== "custom"
      /* ProviderId.CUSTOM */
      ? signInProvider : null; // Uses generic class in accordance with the legacy SDK.

      return new GenericAdditionalUserInfo(isNewUser, filteredProviderId);
    }
  }

  if (!providerId) {
    return null;
  }

  switch (providerId) {
    case "facebook.com"
    /* ProviderId.FACEBOOK */
    :
      return new FacebookAdditionalUserInfo(isNewUser, profile);

    case "github.com"
    /* ProviderId.GITHUB */
    :
      return new GithubAdditionalUserInfo(isNewUser, profile);

    case "google.com"
    /* ProviderId.GOOGLE */
    :
      return new GoogleAdditionalUserInfo(isNewUser, profile);

    case "twitter.com"
    /* ProviderId.TWITTER */
    :
      return new TwitterAdditionalUserInfo(isNewUser, profile, idTokenResponse.screenName || null);

    case "custom"
    /* ProviderId.CUSTOM */
    :
    case "anonymous"
    /* ProviderId.ANONYMOUS */
    :
      return new GenericAdditionalUserInfo(isNewUser, null);

    default:
      return new GenericAdditionalUserInfo(isNewUser, providerId, profile);
  }
}

class GenericAdditionalUserInfo {
  constructor(isNewUser, providerId, profile = {}) {
    this.isNewUser = isNewUser;
    this.providerId = providerId;
    this.profile = profile;
  }

}

class FederatedAdditionalUserInfoWithUsername extends GenericAdditionalUserInfo {
  constructor(isNewUser, providerId, profile, username) {
    super(isNewUser, providerId, profile);
    this.username = username;
  }

}

class FacebookAdditionalUserInfo extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "facebook.com"
    /* ProviderId.FACEBOOK */
    , profile);
  }

}

class GithubAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile) {
    super(isNewUser, "github.com"
    /* ProviderId.GITHUB */
    , profile, typeof (profile === null || profile === void 0 ? void 0 : profile.login) === 'string' ? profile === null || profile === void 0 ? void 0 : profile.login : null);
  }

}

class GoogleAdditionalUserInfo extends GenericAdditionalUserInfo {
  constructor(isNewUser, profile) {
    super(isNewUser, "google.com"
    /* ProviderId.GOOGLE */
    , profile);
  }

}

class TwitterAdditionalUserInfo extends FederatedAdditionalUserInfoWithUsername {
  constructor(isNewUser, profile, screenName) {
    super(isNewUser, "twitter.com"
    /* ProviderId.TWITTER */
    , profile, screenName);
  }

}
/**
 * Extracts provider specific {@link AdditionalUserInfo} for the given credential.
 *
 * @param userCredential - The user credential.
 *
 * @public
 */


function getAdditionalUserInfo(userCredential) {
  const {
    user,
    _tokenResponse
  } = userCredential;

  if (user.isAnonymous && !_tokenResponse) {
    // Handle the special case where signInAnonymously() gets called twice.
    // No network call is made so there's nothing to actually fill this in
    return {
      providerId: null,
      isNewUser: false,
      profile: null
    };
  }

  return _fromIdTokenResponse(_tokenResponse);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Non-optional auth methods.

/**
 * Changes the type of persistence on the {@link Auth} instance for the currently saved
 * `Auth` session and applies this type of persistence for future sign-in requests, including
 * sign-in with redirect requests.
 *
 * @remarks
 * This makes it easy for a user signing in to specify whether their session should be
 * remembered or not. It also makes it easier to never persist the `Auth` state for applications
 * that are shared by other users or have sensitive data.
 *
 * @example
 * ```javascript
 * setPersistence(auth, browserSessionPersistence);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param persistence - The {@link Persistence} to use.
 * @returns A `Promise` that resolves once the persistence change has completed
 *
 * @public
 */


function setPersistence(auth, persistence) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth).setPersistence(persistence);
}
/**
 * Loads the reCAPTCHA configuration into the `Auth` instance.
 *
 * @remarks
 * This will load the reCAPTCHA config, which indicates whether the reCAPTCHA
 * verification flow should be triggered for each auth provider, into the
 * current Auth session.
 *
 * If initializeRecaptchaConfig() is not invoked, the auth flow will always start
 * without reCAPTCHA verification. If the provider is configured to require reCAPTCHA
 * verification, the SDK will transparently load the reCAPTCHA config and restart the
 * auth flows.
 *
 * Thus, by calling this optional method, you will reduce the latency of future auth flows.
 * Loading the reCAPTCHA config early will also enhance the signal collected by reCAPTCHA.
 *
 * @example
 * ```javascript
 * initializeRecaptchaConfig(auth);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */


function initializeRecaptchaConfig(auth) {
  const authInternal = _castAuth(auth);

  return authInternal.initializeRecaptchaConfig();
}
/**
 * Adds an observer for changes to the signed-in user's ID token.
 *
 * @remarks
 * This includes sign-in, sign-out, and token refresh events.
 * This will not be triggered automatically upon ID token expiration. Use {@link User.getIdToken} to refresh the ID token.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - Deprecated. This callback is never triggered. Errors
 * on signing in/out can be caught in promises returned from
 * sign-in/sign-out functions.
 * @param completed - Deprecated. This callback is never triggered.
 *
 * @public
 */


function onIdTokenChanged(auth, nextOrObserver, error, completed) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth).onIdTokenChanged(nextOrObserver, error, completed);
}
/**
 * Adds a blocking callback that runs before an auth state change
 * sets a new user.
 *
 * @param auth - The {@link Auth} instance.
 * @param callback - callback triggered before new user value is set.
 *   If this throws, it blocks the user from being set.
 * @param onAbort - callback triggered if a later `beforeAuthStateChanged()`
 *   callback throws, allowing you to undo any side effects.
 */


function beforeAuthStateChanged(auth, callback, onAbort) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth).beforeAuthStateChanged(callback, onAbort);
}
/**
 * Adds an observer for changes to the user's sign-in state.
 *
 * @remarks
 * To keep the old behavior, see {@link onIdTokenChanged}.
 *
 * @param auth - The {@link Auth} instance.
 * @param nextOrObserver - callback triggered on change.
 * @param error - Deprecated. This callback is never triggered. Errors
 * on signing in/out can be caught in promises returned from
 * sign-in/sign-out functions.
 * @param completed - Deprecated. This callback is never triggered.
 *
 * @public
 */


function onAuthStateChanged(auth, nextOrObserver, error, completed) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth).onAuthStateChanged(nextOrObserver, error, completed);
}
/**
 * Sets the current language to the default device/browser preference.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */


function useDeviceLanguage(auth) {
  (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth).useDeviceLanguage();
}
/**
 * Asynchronously sets the provided user as {@link Auth.currentUser} on the
 * {@link Auth} instance.
 *
 * @remarks
 * A new instance copy of the user provided will be made and set as currentUser.
 *
 * This will trigger {@link onAuthStateChanged} and {@link onIdTokenChanged} listeners
 * like other sign in methods.
 *
 * The operation fails with an error if the user to be updated belongs to a different Firebase
 * project.
 *
 * @param auth - The {@link Auth} instance.
 * @param user - The new {@link User}.
 *
 * @public
 */


function updateCurrentUser(auth, user) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth).updateCurrentUser(user);
}
/**
 * Signs out the current user.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @public
 */


function signOut(auth) {
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth).signOut();
}
/**
 * Deletes and signs out the user.
 *
 * @remarks
 * Important: this is a security-sensitive operation that requires the user to have recently
 * signed in. If this requirement isn't met, ask the user to authenticate again and then call
 * {@link reauthenticateWithCredential}.
 *
 * @param user - The user.
 *
 * @public
 */


function deleteUser(_x130) {
  return _deleteUser.apply(this, arguments);
}

function _deleteUser() {
  _deleteUser = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
    return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user).delete();
  });
  return _deleteUser.apply(this, arguments);
}

class MultiFactorSessionImpl {
  constructor(type, credential, auth) {
    this.type = type;
    this.credential = credential;
    this.auth = auth;
  }

  static _fromIdtoken(idToken, auth) {
    return new MultiFactorSessionImpl("enroll"
    /* MultiFactorSessionType.ENROLL */
    , idToken, auth);
  }

  static _fromMfaPendingCredential(mfaPendingCredential) {
    return new MultiFactorSessionImpl("signin"
    /* MultiFactorSessionType.SIGN_IN */
    , mfaPendingCredential);
  }

  toJSON() {
    const key = this.type === "enroll"
    /* MultiFactorSessionType.ENROLL */
    ? 'idToken' : 'pendingCredential';
    return {
      multiFactorSession: {
        [key]: this.credential
      }
    };
  }

  static fromJSON(obj) {
    var _a, _b;

    if (obj === null || obj === void 0 ? void 0 : obj.multiFactorSession) {
      if ((_a = obj.multiFactorSession) === null || _a === void 0 ? void 0 : _a.pendingCredential) {
        return MultiFactorSessionImpl._fromMfaPendingCredential(obj.multiFactorSession.pendingCredential);
      } else if ((_b = obj.multiFactorSession) === null || _b === void 0 ? void 0 : _b.idToken) {
        return MultiFactorSessionImpl._fromIdtoken(obj.multiFactorSession.idToken);
      }
    }

    return null;
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class MultiFactorResolverImpl {
  constructor(session, hints, signInResolver) {
    this.session = session;
    this.hints = hints;
    this.signInResolver = signInResolver;
  }
  /** @internal */


  static _fromError(authExtern, error) {
    const auth = _castAuth(authExtern);

    const serverResponse = error.customData._serverResponse;
    const hints = (serverResponse.mfaInfo || []).map(enrollment => MultiFactorInfoImpl._fromServerResponse(auth, enrollment));

    _assert(serverResponse.mfaPendingCredential, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    const session = MultiFactorSessionImpl._fromMfaPendingCredential(serverResponse.mfaPendingCredential);

    return new MultiFactorResolverImpl(session, hints, /*#__PURE__*/function () {
      var _ref11 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (assertion) {
        const mfaResponse = yield assertion._process(auth, session); // Clear out the unneeded fields from the old login response

        delete serverResponse.mfaInfo;
        delete serverResponse.mfaPendingCredential; // Use in the new token & refresh token in the old response

        const idTokenResponse = Object.assign(Object.assign({}, serverResponse), {
          idToken: mfaResponse.idToken,
          refreshToken: mfaResponse.refreshToken
        }); // TODO: we should collapse this switch statement into UserCredentialImpl._forOperation and have it support the SIGN_IN case

        switch (error.operationType) {
          case "signIn"
          /* OperationType.SIGN_IN */
          :
            const userCredential = yield UserCredentialImpl._fromIdTokenResponse(auth, error.operationType, idTokenResponse);
            yield auth._updateCurrentUser(userCredential.user);
            return userCredential;

          case "reauthenticate"
          /* OperationType.REAUTHENTICATE */
          :
            _assert(error.user, auth, "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
            );

            return UserCredentialImpl._forOperation(error.user, error.operationType, idTokenResponse);

          default:
            _fail(auth, "internal-error"
            /* AuthErrorCode.INTERNAL_ERROR */
            );

        }
      });

      return function (_x131) {
        return _ref11.apply(this, arguments);
      };
    }());
  }

  resolveSignIn(assertionExtern) {
    var _this35 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const assertion = assertionExtern;
      return _this35.signInResolver(assertion);
    })();
  }

}
/**
 * Provides a {@link MultiFactorResolver} suitable for completion of a
 * multi-factor flow.
 *
 * @param auth - The {@link Auth} instance.
 * @param error - The {@link MultiFactorError} raised during a sign-in, or
 * reauthentication operation.
 *
 * @public
 */


function getMultiFactorResolver(auth, error) {
  var _a;

  const authModular = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(auth);
  const errorInternal = error;

  _assert(error.customData.operationType, authModular, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */
  );

  _assert((_a = errorInternal.customData._serverResponse) === null || _a === void 0 ? void 0 : _a.mfaPendingCredential, authModular, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */
  );

  return MultiFactorResolverImpl._fromError(authModular, errorInternal);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function startEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaEnrollment:start"
  /* Endpoint.START_MFA_ENROLLMENT */
  , _addTidIfNecessary(auth, request));
}

function finalizeEnrollPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaEnrollment:finalize"
  /* Endpoint.FINALIZE_MFA_ENROLLMENT */
  , _addTidIfNecessary(auth, request));
}

function startEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaEnrollment:start"
  /* Endpoint.START_MFA_ENROLLMENT */
  , _addTidIfNecessary(auth, request));
}

function finalizeEnrollTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaEnrollment:finalize"
  /* Endpoint.FINALIZE_MFA_ENROLLMENT */
  , _addTidIfNecessary(auth, request));
}

function withdrawMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaEnrollment:withdraw"
  /* Endpoint.WITHDRAW_MFA */
  , _addTidIfNecessary(auth, request));
}

class MultiFactorUserImpl {
  constructor(user) {
    this.user = user;
    this.enrolledFactors = [];

    user._onReload(userInfo => {
      if (userInfo.mfaInfo) {
        this.enrolledFactors = userInfo.mfaInfo.map(enrollment => MultiFactorInfoImpl._fromServerResponse(user.auth, enrollment));
      }
    });
  }

  static _fromUser(user) {
    return new MultiFactorUserImpl(user);
  }

  getSession() {
    var _this36 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return MultiFactorSessionImpl._fromIdtoken(yield _this36.user.getIdToken(), _this36.user.auth);
    })();
  }

  enroll(assertionExtern, displayName) {
    var _this37 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const assertion = assertionExtern;
      const session = yield _this37.getSession();
      const finalizeMfaResponse = yield _logoutIfInvalidated(_this37.user, assertion._process(_this37.user.auth, session, displayName)); // New tokens will be issued after enrollment of the new second factors.
      // They need to be updated on the user.

      yield _this37.user._updateTokensIfNecessary(finalizeMfaResponse); // The user needs to be reloaded to get the new multi-factor information
      // from server. USER_RELOADED event will be triggered and `enrolledFactors`
      // will be updated.

      return _this37.user.reload();
    })();
  }

  unenroll(infoOrUid) {
    var _this38 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const mfaEnrollmentId = typeof infoOrUid === 'string' ? infoOrUid : infoOrUid.uid;
      const idToken = yield _this38.user.getIdToken();

      try {
        const idTokenResponse = yield _logoutIfInvalidated(_this38.user, withdrawMfa(_this38.user.auth, {
          idToken,
          mfaEnrollmentId
        })); // Remove the second factor from the user's list.

        _this38.enrolledFactors = _this38.enrolledFactors.filter(({
          uid
        }) => uid !== mfaEnrollmentId); // Depending on whether the backend decided to revoke the user's session,
        // the tokenResponse may be empty. If the tokens were not updated (and they
        // are now invalid), reloading the user will discover this and invalidate
        // the user's state accordingly.

        yield _this38.user._updateTokensIfNecessary(idTokenResponse);
        yield _this38.user.reload();
      } catch (e) {
        throw e;
      }
    })();
  }

}

const multiFactorUserCache = /*#__PURE__*/new WeakMap();
/**
 * The {@link MultiFactorUser} corresponding to the user.
 *
 * @remarks
 * This is used to access all multi-factor properties and operations related to the user.
 *
 * @param user - The user.
 *
 * @public
 */

function multiFactor(user) {
  const userModular = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);

  if (!multiFactorUserCache.has(userModular)) {
    multiFactorUserCache.set(userModular, MultiFactorUserImpl._fromUser(userModular));
  }

  return multiFactorUserCache.get(userModular);
}

const STORAGE_AVAILABLE_KEY = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.

class BrowserPersistenceClass {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }

  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }

      this.storage.setItem(STORAGE_AVAILABLE_KEY, '1');
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }

  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }

  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }

  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }

  get storage() {
    return this.storageRetriever();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _iframeCannotSyncWebStorage() {
  const ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)();
  return _isSafari(ua) || _isIOS(ua);
} // The polling period in case events are not supported


const _POLLING_INTERVAL_MS$1 = 1000; // The IE 10 localStorage cross tab synchronization delay in milliseconds

const IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
let BrowserLocalPersistence = /*#__PURE__*/(() => {
  class BrowserLocalPersistence extends BrowserPersistenceClass {
    constructor() {
      super(() => window.localStorage, "LOCAL"
      /* PersistenceType.LOCAL */
      );

      this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);

      this.listeners = {};
      this.localCache = {}; // setTimeout return value is platform specific
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.pollTimer = null; // Safari or iOS browser and embedded in an iframe.

      this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe(); // Whether to use polling instead of depending on window events

      this.fallbackToPolling = _isMobileBrowser();
      this._shouldAllowMigration = true;
    }

    forAllChangedKeys(cb) {
      // Check all keys with listeners on them.
      for (const key of Object.keys(this.listeners)) {
        // Get value from localStorage.
        const newValue = this.storage.getItem(key);
        const oldValue = this.localCache[key]; // If local map value does not match, trigger listener with storage event.
        // Differentiate this simulated event from the real storage event.

        if (newValue !== oldValue) {
          cb(key, oldValue, newValue);
        }
      }
    }

    onStorageEvent(event, poll = false) {
      // Key would be null in some situations, like when localStorage is cleared
      if (!event.key) {
        this.forAllChangedKeys((key, _oldValue, newValue) => {
          this.notifyListeners(key, newValue);
        });
        return;
      }

      const key = event.key; // Check the mechanism how this event was detected.
      // The first event will dictate the mechanism to be used.

      if (poll) {
        // Environment detects storage changes via polling.
        // Remove storage event listener to prevent possible event duplication.
        this.detachListener();
      } else {
        // Environment detects storage changes via storage event listener.
        // Remove polling listener to prevent possible event duplication.
        this.stopPolling();
      } // Safari embedded iframe. Storage event will trigger with the delta
      // changes but no changes will be applied to the iframe localStorage.


      if (this.safariLocalStorageNotSynced) {
        // Get current iframe page value.
        const storedValue = this.storage.getItem(key); // Value not synchronized, synchronize manually.

        if (event.newValue !== storedValue) {
          if (event.newValue !== null) {
            // Value changed from current value.
            this.storage.setItem(key, event.newValue);
          } else {
            // Current value deleted.
            this.storage.removeItem(key);
          }
        } else if (this.localCache[key] === event.newValue && !poll) {
          // Already detected and processed, do not trigger listeners again.
          return;
        }
      }

      const triggerListeners = () => {
        // Keep local map up to date in case storage event is triggered before
        // poll.
        const storedValue = this.storage.getItem(key);

        if (!poll && this.localCache[key] === storedValue) {
          // Real storage event which has already been detected, do nothing.
          // This seems to trigger in some IE browsers for some reason.
          return;
        }

        this.notifyListeners(key, storedValue);
      };

      const storedValue = this.storage.getItem(key);

      if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
        // IE 10 has this weird bug where a storage event would trigger with the
        // correct key, oldValue and newValue but localStorage.getItem(key) does
        // not yield the updated value until a few milliseconds. This ensures
        // this recovers from that situation.
        setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
      } else {
        triggerListeners();
      }
    }

    notifyListeners(key, value) {
      this.localCache[key] = value;
      const listeners = this.listeners[key];

      if (listeners) {
        for (const listener of Array.from(listeners)) {
          listener(value ? JSON.parse(value) : value);
        }
      }
    }

    startPolling() {
      this.stopPolling();
      this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((key, oldValue, newValue) => {
          this.onStorageEvent(new StorageEvent('storage', {
            key,
            oldValue,
            newValue
          }),
          /* poll */
          true);
        });
      }, _POLLING_INTERVAL_MS$1);
    }

    stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    }

    attachListener() {
      window.addEventListener('storage', this.boundEventHandler);
    }

    detachListener() {
      window.removeEventListener('storage', this.boundEventHandler);
    }

    _addListener(key, listener) {
      if (Object.keys(this.listeners).length === 0) {
        // Whether browser can detect storage event when it had already been pushed to the background.
        // This may happen in some mobile browsers. A localStorage change in the foreground window
        // will not be detected in the background window via the storage event.
        // This was detected in iOS 7.x mobile browsers
        if (this.fallbackToPolling) {
          this.startPolling();
        } else {
          this.attachListener();
        }
      }

      if (!this.listeners[key]) {
        this.listeners[key] = new Set(); // Populate the cache to avoid spuriously triggering on first poll.

        this.localCache[key] = this.storage.getItem(key);
      }

      this.listeners[key].add(listener);
    }

    _removeListener(key, listener) {
      if (this.listeners[key]) {
        this.listeners[key].delete(listener);

        if (this.listeners[key].size === 0) {
          delete this.listeners[key];
        }
      }

      if (Object.keys(this.listeners).length === 0) {
        this.detachListener();
        this.stopPolling();
      }
    } // Update local cache on base operations:


    _set(key, value) {
      var _superprop_get_set = () => super._set,
          _this39 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _superprop_get_set().call(_this39, key, value);
        _this39.localCache[key] = JSON.stringify(value);
      })();
    }

    _get(key) {
      var _superprop_get_get = () => super._get,
          _this40 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const value = yield _superprop_get_get().call(_this40, key);
        _this40.localCache[key] = JSON.stringify(value);
        return value;
      })();
    }

    _remove(key) {
      var _superprop_get_remove = () => super._remove,
          _this41 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _superprop_get_remove().call(_this41, key);
        delete _this41.localCache[key];
      })();
    }

  }

  BrowserLocalPersistence.type = 'LOCAL';
  /**
   * An implementation of {@link Persistence} of type `LOCAL` using `localStorage`
   * for the underlying storage.
   *
   * @public
   */

  return BrowserLocalPersistence;
})();
const browserLocalPersistence = BrowserLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let BrowserSessionPersistence = /*#__PURE__*/(() => {
  class BrowserSessionPersistence extends BrowserPersistenceClass {
    constructor() {
      super(() => window.sessionStorage, "SESSION"
      /* PersistenceType.SESSION */
      );
    }

    _addListener(_key, _listener) {
      // Listeners are not supported for session storage since it cannot be shared across windows
      return;
    }

    _removeListener(_key, _listener) {
      // Listeners are not supported for session storage since it cannot be shared across windows
      return;
    }

  }

  BrowserSessionPersistence.type = 'SESSION';
  /**
   * An implementation of {@link Persistence} of `SESSION` using `sessionStorage`
   * for the underlying storage.
   *
   * @public
   */

  return BrowserSessionPersistence;
})();
const browserSessionPersistence = BrowserSessionPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Shim for Promise.allSettled, note the slightly different format of `fulfilled` vs `status`.
 *
 * @param promises - Array of promises to wait on.
 */

function _allSettled(promises) {
  return Promise.all(promises.map( /*#__PURE__*/function () {
    var _ref12 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (promise) {
      try {
        const value = yield promise;
        return {
          fulfilled: true,
          value
        };
      } catch (reason) {
        return {
          fulfilled: false,
          reason
        };
      }
    });

    return function (_x132) {
      return _ref12.apply(this, arguments);
    };
  }()));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Interface class for receiving messages.
 *
 */


let Receiver = /*#__PURE__*/(() => {
  class Receiver {
    constructor(eventTarget) {
      this.eventTarget = eventTarget;
      this.handlersMap = {};
      this.boundEventHandler = this.handleEvent.bind(this);
    }
    /**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */


    static _getInstance(eventTarget) {
      // The results are stored in an array since objects can't be keys for other
      // objects. In addition, setting a unique property on an event target as a
      // hash map key may not be allowed due to CORS restrictions.
      const existingInstance = this.receivers.find(receiver => receiver.isListeningto(eventTarget));

      if (existingInstance) {
        return existingInstance;
      }

      const newInstance = new Receiver(eventTarget);
      this.receivers.push(newInstance);
      return newInstance;
    }

    isListeningto(eventTarget) {
      return this.eventTarget === eventTarget;
    }
    /**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */


    handleEvent(event) {
      var _this42 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const messageEvent = event;
        const {
          eventId,
          eventType,
          data
        } = messageEvent.data;
        const handlers = _this42.handlersMap[eventType];

        if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
          return;
        }

        messageEvent.ports[0].postMessage({
          status: "ack"
          /* _Status.ACK */
          ,
          eventId,
          eventType
        });
        const promises = Array.from(handlers).map( /*#__PURE__*/function () {
          var _ref13 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (handler) {
            return handler(messageEvent.origin, data);
          });

          return function (_x133) {
            return _ref13.apply(this, arguments);
          };
        }());
        const response = yield _allSettled(promises);
        messageEvent.ports[0].postMessage({
          status: "done"
          /* _Status.DONE */
          ,
          eventId,
          eventType,
          response
        });
      })();
    }
    /**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */


    _subscribe(eventType, eventHandler) {
      if (Object.keys(this.handlersMap).length === 0) {
        this.eventTarget.addEventListener('message', this.boundEventHandler);
      }

      if (!this.handlersMap[eventType]) {
        this.handlersMap[eventType] = new Set();
      }

      this.handlersMap[eventType].add(eventHandler);
    }
    /**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */


    _unsubscribe(eventType, eventHandler) {
      if (this.handlersMap[eventType] && eventHandler) {
        this.handlersMap[eventType].delete(eventHandler);
      }

      if (!eventHandler || this.handlersMap[eventType].size === 0) {
        delete this.handlersMap[eventType];
      }

      if (Object.keys(this.handlersMap).length === 0) {
        this.eventTarget.removeEventListener('message', this.boundEventHandler);
      }
    }

  }

  Receiver.receivers = [];
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  return Receiver;
})();

function _generateEventId(prefix = '', digits = 10) {
  let random = '';

  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }

  return prefix + random;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Interface for sending messages and waiting for a completion response.
 *
 */


class Sender {
  constructor(target) {
    this.target = target;
    this.handlers = new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */


  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener('message', handler.onMessage);
      handler.messageChannel.port1.close();
    }

    this.handlers.delete(handler);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */


  _send(eventType, data, timeout = 50
  /* _TimeoutDuration.ACK */
  ) {
    var _this43 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const messageChannel = typeof MessageChannel !== 'undefined' ? new MessageChannel() : null;

      if (!messageChannel) {
        throw new Error("connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
        );
      } // Node timers and browser timers return fundamentally different types.
      // We don't actually care what the value is but TS won't accept unknown and
      // we can't cast properly in both environments.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any


      let completionTimer;
      let handler;
      return new Promise((resolve, reject) => {
        const eventId = _generateEventId('', 20);

        messageChannel.port1.start();
        const ackTimer = setTimeout(() => {
          reject(new Error("unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
          ));
        }, timeout);
        handler = {
          messageChannel,

          onMessage(event) {
            const messageEvent = event;

            if (messageEvent.data.eventId !== eventId) {
              return;
            }

            switch (messageEvent.data.status) {
              case "ack"
              /* _Status.ACK */
              :
                // The receiver should ACK first.
                clearTimeout(ackTimer);
                completionTimer = setTimeout(() => {
                  reject(new Error("timeout"
                  /* _MessageError.TIMEOUT */
                  ));
                }, 3000
                /* _TimeoutDuration.COMPLETION */
                );
                break;

              case "done"
              /* _Status.DONE */
              :
                // Once the receiver's handlers are finished we will get the results.
                clearTimeout(completionTimer);
                resolve(messageEvent.data.response);
                break;

              default:
                clearTimeout(ackTimer);
                clearTimeout(completionTimer);
                reject(new Error("invalid_response"
                /* _MessageError.INVALID_RESPONSE */
                ));
                break;
            }
          }

        };

        _this43.handlers.add(handler);

        messageChannel.port1.addEventListener('message', handler.onMessage);

        _this43.target.postMessage({
          eventType,
          eventId,
          data
        }, [messageChannel.port2]);
      }).finally(() => {
        if (handler) {
          _this43.removeMessageHandler(handler);
        }
      });
    })();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */


function _window() {
  return window;
}

function _setWindowLocation(url) {
  _window().location.href = url;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _isWorker() {
  return typeof _window()['WorkerGlobalScope'] !== 'undefined' && typeof _window()['importScripts'] === 'function';
}

function _getActiveServiceWorker() {
  return _getActiveServiceWorker2.apply(this, arguments);
}

function _getActiveServiceWorker2() {
  _getActiveServiceWorker2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
      return null;
    }

    try {
      const registration = yield navigator.serviceWorker.ready;
      return registration.active;
    } catch (_a) {
      return null;
    }
  });
  return _getActiveServiceWorker2.apply(this, arguments);
}

function _getServiceWorkerController() {
  var _a;

  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}

function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DB_NAME = 'firebaseLocalStorageDb';
const DB_VERSION = 1;
const DB_OBJECTSTORE_NAME = 'firebaseLocalStorage';
const DB_DATA_KEYPATH = 'fbase_key';
/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */

class DBPromise {
  constructor(request) {
    this.request = request;
  }

  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener('success', () => {
        resolve(this.request.result);
      });
      this.request.addEventListener('error', () => {
        reject(this.request.error);
      });
    });
  }

}

function getObjectStore(db, isReadWrite) {
  return db.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? 'readwrite' : 'readonly').objectStore(DB_OBJECTSTORE_NAME);
}

function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}

function _openDatabase() {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise((resolve, reject) => {
    request.addEventListener('error', () => {
      reject(request.error);
    });
    request.addEventListener('upgradeneeded', () => {
      const db = request.result;

      try {
        db.createObjectStore(DB_OBJECTSTORE_NAME, {
          keyPath: DB_DATA_KEYPATH
        });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener('success', /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const db = request.result; // Strange bug that occurs in Firefox when multiple tabs are opened at the
      // same time. The only way to recover seems to be deleting the database
      // and re-initializing it.
      // https://github.com/firebase/firebase-js-sdk/issues/634

      if (!db.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        // Need to close the database or else you get a `blocked` event
        db.close();
        yield _deleteDatabase();
        resolve(yield _openDatabase());
      } else {
        resolve(db);
      }
    }));
  });
}

function _putObject(_x134, _x135, _x136) {
  return _putObject2.apply(this, arguments);
}

function _putObject2() {
  _putObject2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (db, key, value) {
    const request = getObjectStore(db, true).put({
      [DB_DATA_KEYPATH]: key,
      value
    });
    return new DBPromise(request).toPromise();
  });
  return _putObject2.apply(this, arguments);
}

function getObject(_x137, _x138) {
  return _getObject.apply(this, arguments);
}

function _getObject() {
  _getObject = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (db, key) {
    const request = getObjectStore(db, false).get(key);
    const data = yield new DBPromise(request).toPromise();
    return data === undefined ? null : data.value;
  });
  return _getObject.apply(this, arguments);
}

function _deleteObject(db, key) {
  const request = getObjectStore(db, true).delete(key);
  return new DBPromise(request).toPromise();
}

const _POLLING_INTERVAL_MS = 800;
const _TRANSACTION_RETRY_COUNT = 3;
let IndexedDBLocalPersistence = /*#__PURE__*/(() => {
  class IndexedDBLocalPersistence {
    constructor() {
      this.type = "LOCAL"
      /* PersistenceType.LOCAL */
      ;
      this._shouldAllowMigration = true;
      this.listeners = {};
      this.localCache = {}; // setTimeout return value is platform specific
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.pollTimer = null;
      this.pendingWrites = 0;
      this.receiver = null;
      this.sender = null;
      this.serviceWorkerReceiverAvailable = false;
      this.activeServiceWorker = null; // Fire & forget the service worker registration as it may never resolve

      this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
    }

    _openDb() {
      var _this44 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this44.db) {
          return _this44.db;
        }

        _this44.db = yield _openDatabase();
        return _this44.db;
      })();
    }

    _withRetries(op) {
      var _this45 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        let numAttempts = 0;

        while (true) {
          try {
            const db = yield _this45._openDb();
            return yield op(db);
          } catch (e) {
            if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
              throw e;
            }

            if (_this45.db) {
              _this45.db.close();

              _this45.db = undefined;
            } // TODO: consider adding exponential backoff

          }
        }
      })();
    }
    /**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */


    initializeServiceWorkerMessaging() {
      var _this46 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _isWorker() ? _this46.initializeReceiver() : _this46.initializeSender();
      })();
    }
    /**
     * As the worker we should listen to events from the main window.
     */


    initializeReceiver() {
      var _this47 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this47.receiver = Receiver._getInstance(_getWorkerGlobalScope()); // Refresh from persistence if we receive a KeyChanged message.

        _this47.receiver._subscribe("keyChanged"
        /* _EventType.KEY_CHANGED */
        , /*#__PURE__*/function () {
          var _ref15 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_origin, data) {
            const keys = yield _this47._poll();
            return {
              keyProcessed: keys.includes(data.key)
            };
          });

          return function (_x139, _x140) {
            return _ref15.apply(this, arguments);
          };
        }()); // Let the sender know that we are listening so they give us more timeout.


        _this47.receiver._subscribe("ping"
        /* _EventType.PING */
        , /*#__PURE__*/function () {
          var _ref16 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (_origin, _data) {
            return ["keyChanged"
            /* _EventType.KEY_CHANGED */
            ];
          });

          return function (_x141, _x142) {
            return _ref16.apply(this, arguments);
          };
        }());
      })();
    }
    /**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */


    initializeSender() {
      var _this48 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        var _a, _b; // Check to see if there's an active service worker.


        _this48.activeServiceWorker = yield _getActiveServiceWorker();

        if (!_this48.activeServiceWorker) {
          return;
        }

        _this48.sender = new Sender(_this48.activeServiceWorker); // Ping the service worker to check what events they can handle.

        const results = yield _this48.sender._send("ping"
        /* _EventType.PING */
        , {}, 800
        /* _TimeoutDuration.LONG_ACK */
        );

        if (!results) {
          return;
        }

        if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"
        /* _EventType.KEY_CHANGED */
        ))) {
          _this48.serviceWorkerReceiverAvailable = true;
        }
      })();
    }
    /**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */


    notifyServiceWorker(key) {
      var _this49 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this49.sender || !_this49.activeServiceWorker || _getServiceWorkerController() !== _this49.activeServiceWorker) {
          return;
        }

        try {
          yield _this49.sender._send("keyChanged"
          /* _EventType.KEY_CHANGED */
          , {
            key
          }, // Use long timeout if receiver has previously responded to a ping from us.
          _this49.serviceWorkerReceiverAvailable ? 800
          /* _TimeoutDuration.LONG_ACK */
          : 50
          /* _TimeoutDuration.ACK */
          );
        } catch (_a) {// This is a best effort approach. Ignore errors.
        }
      })();
    }

    _isAvailable() {
      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        try {
          if (!indexedDB) {
            return false;
          }

          const db = yield _openDatabase();
          yield _putObject(db, STORAGE_AVAILABLE_KEY, '1');
          yield _deleteObject(db, STORAGE_AVAILABLE_KEY);
          return true;
        } catch (_a) {}

        return false;
      })();
    }

    _withPendingWrite(write) {
      var _this50 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this50.pendingWrites++;

        try {
          yield write();
        } finally {
          _this50.pendingWrites--;
        }
      })();
    }

    _set(key, value) {
      var _this51 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this51._withPendingWrite( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this51._withRetries(db => _putObject(db, key, value));
          _this51.localCache[key] = value;
          return _this51.notifyServiceWorker(key);
        }));
      })();
    }

    _get(key) {
      var _this52 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const obj = yield _this52._withRetries(db => getObject(db, key));
        _this52.localCache[key] = obj;
        return obj;
      })();
    }

    _remove(key) {
      var _this53 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this53._withPendingWrite( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          yield _this53._withRetries(db => _deleteObject(db, key));
          delete _this53.localCache[key];
          return _this53.notifyServiceWorker(key);
        }));
      })();
    }

    _poll() {
      var _this54 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        // TODO: check if we need to fallback if getAll is not supported
        const result = yield _this54._withRetries(db => {
          const getAllRequest = getObjectStore(db, false).getAll();
          return new DBPromise(getAllRequest).toPromise();
        });

        if (!result) {
          return [];
        } // If we have pending writes in progress abort, we'll get picked up on the next poll


        if (_this54.pendingWrites !== 0) {
          return [];
        }

        const keys = [];
        const keysInResult = new Set();

        for (const {
          fbase_key: key,
          value
        } of result) {
          keysInResult.add(key);

          if (JSON.stringify(_this54.localCache[key]) !== JSON.stringify(value)) {
            _this54.notifyListeners(key, value);

            keys.push(key);
          }
        }

        for (const localKey of Object.keys(_this54.localCache)) {
          if (_this54.localCache[localKey] && !keysInResult.has(localKey)) {
            // Deleted
            _this54.notifyListeners(localKey, null);

            keys.push(localKey);
          }
        }

        return keys;
      })();
    }

    notifyListeners(key, newValue) {
      this.localCache[key] = newValue;
      const listeners = this.listeners[key];

      if (listeners) {
        for (const listener of Array.from(listeners)) {
          listener(newValue);
        }
      }
    }

    startPolling() {
      var _this55 = this;

      this.stopPolling();
      this.pollTimer = setInterval( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        return _this55._poll();
      }), _POLLING_INTERVAL_MS);
    }

    stopPolling() {
      if (this.pollTimer) {
        clearInterval(this.pollTimer);
        this.pollTimer = null;
      }
    }

    _addListener(key, listener) {
      if (Object.keys(this.listeners).length === 0) {
        this.startPolling();
      }

      if (!this.listeners[key]) {
        this.listeners[key] = new Set(); // Populate the cache to avoid spuriously triggering on first poll.

        void this._get(key); // This can happen in the background async and we can return immediately.
      }

      this.listeners[key].add(listener);
    }

    _removeListener(key, listener) {
      if (this.listeners[key]) {
        this.listeners[key].delete(listener);

        if (this.listeners[key].size === 0) {
          delete this.listeners[key];
        }
      }

      if (Object.keys(this.listeners).length === 0) {
        this.stopPolling();
      }
    }

  }

  IndexedDBLocalPersistence.type = 'LOCAL';
  /**
   * An implementation of {@link Persistence} of type `LOCAL` using `indexedDB`
   * for the underlying storage.
   *
   * @public
   */

  return IndexedDBLocalPersistence;
})();
const indexedDBLocalPersistence = IndexedDBLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function startSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaSignIn:start"
  /* Endpoint.START_MFA_SIGN_IN */
  , _addTidIfNecessary(auth, request));
}

function finalizeSignInPhoneMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaSignIn:finalize"
  /* Endpoint.FINALIZE_MFA_SIGN_IN */
  , _addTidIfNecessary(auth, request));
}

function finalizeSignInTotpMfa(auth, request) {
  return _performApiRequest(auth, "POST"
  /* HttpMethod.POST */
  , "/v2/accounts/mfaSignIn:finalize"
  /* Endpoint.FINALIZE_MFA_SIGN_IN */
  , _addTidIfNecessary(auth, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const _SOLVE_TIME_MS = 500;
const _EXPIRATION_TIME_MS = 60000;
const _WIDGET_ID_START = 1000000000000;

class MockReCaptcha {
  constructor(auth) {
    this.auth = auth;
    this.counter = _WIDGET_ID_START;
    this._widgets = new Map();
  }

  render(container, parameters) {
    const id = this.counter;

    this._widgets.set(id, new MockWidget(container, this.auth.name, parameters || {}));

    this.counter++;
    return id;
  }

  reset(optWidgetId) {
    var _a;

    const id = optWidgetId || _WIDGET_ID_START;
    void ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.delete());

    this._widgets.delete(id);
  }

  getResponse(optWidgetId) {
    var _a;

    const id = optWidgetId || _WIDGET_ID_START;
    return ((_a = this._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.getResponse()) || '';
  }

  execute(optWidgetId) {
    var _this56 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const id = optWidgetId || _WIDGET_ID_START;
      void ((_a = _this56._widgets.get(id)) === null || _a === void 0 ? void 0 : _a.execute());
      return '';
    })();
  }

}

class MockWidget {
  constructor(containerOrId, appName, params) {
    this.params = params;
    this.timerId = null;
    this.deleted = false;
    this.responseToken = null;

    this.clickHandler = () => {
      this.execute();
    };

    const container = typeof containerOrId === 'string' ? document.getElementById(containerOrId) : containerOrId;

    _assert(container, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    , {
      appName
    });

    this.container = container;
    this.isVisible = this.params.size !== 'invisible';

    if (this.isVisible) {
      this.execute();
    } else {
      this.container.addEventListener('click', this.clickHandler);
    }
  }

  getResponse() {
    this.checkIfDeleted();
    return this.responseToken;
  }

  delete() {
    this.checkIfDeleted();
    this.deleted = true;

    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    this.container.removeEventListener('click', this.clickHandler);
  }

  execute() {
    this.checkIfDeleted();

    if (this.timerId) {
      return;
    }

    this.timerId = window.setTimeout(() => {
      this.responseToken = generateRandomAlphaNumericString(50);
      const {
        callback,
        'expired-callback': expiredCallback
      } = this.params;

      if (callback) {
        try {
          callback(this.responseToken);
        } catch (e) {}
      }

      this.timerId = window.setTimeout(() => {
        this.timerId = null;
        this.responseToken = null;

        if (expiredCallback) {
          try {
            expiredCallback();
          } catch (e) {}
        }

        if (this.isVisible) {
          this.execute();
        }
      }, _EXPIRATION_TIME_MS);
    }, _SOLVE_TIME_MS);
  }

  checkIfDeleted() {
    if (this.deleted) {
      throw new Error('reCAPTCHA mock was already deleted!');
    }
  }

}

function generateRandomAlphaNumericString(len) {
  const chars = [];
  const allowedChars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < len; i++) {
    chars.push(allowedChars.charAt(Math.floor(Math.random() * allowedChars.length)));
  }

  return chars.join('');
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// ReCaptcha will load using the same callback, so the callback function needs
// to be kept around


const _JSLOAD_CALLBACK = /*#__PURE__*/_generateCallbackName('rcb');

const NETWORK_TIMEOUT_DELAY = /*#__PURE__*/new Delay(30000, 60000);
const RECAPTCHA_BASE = 'https://www.google.com/recaptcha/api.js?';
/**
 * Loader for the GReCaptcha library. There should only ever be one of this.
 */

class ReCaptchaLoaderImpl {
  constructor() {
    var _a;

    this.hostLanguage = '';
    this.counter = 0;
    /**
     * Check for `render()` method. `window.grecaptcha` will exist if the Enterprise
     * version of the ReCAPTCHA script was loaded by someone else (e.g. App Check) but
     * `window.grecaptcha.render()` will not. Another load will add it.
     */

    this.librarySeparatelyLoaded = !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render);
  }

  load(auth, hl = '') {
    _assert(isHostLanguageValid(hl), auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    if (this.shouldResolveImmediately(hl) && isV2(_window().grecaptcha)) {
      return Promise.resolve(_window().grecaptcha);
    }

    return new Promise((resolve, reject) => {
      const networkTimeout = _window().setTimeout(() => {
        reject(_createError(auth, "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, NETWORK_TIMEOUT_DELAY.get());

      _window()[_JSLOAD_CALLBACK] = () => {
        _window().clearTimeout(networkTimeout);

        delete _window()[_JSLOAD_CALLBACK];

        const recaptcha = _window().grecaptcha;

        if (!recaptcha || !isV2(recaptcha)) {
          reject(_createError(auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
          ));
          return;
        } // Wrap the greptcha render function so that we know if the developer has
        // called it separately


        const render = recaptcha.render;

        recaptcha.render = (container, params) => {
          const widgetId = render(container, params);
          this.counter++;
          return widgetId;
        };

        this.hostLanguage = hl;
        resolve(recaptcha);
      };

      const url = `${RECAPTCHA_BASE}?${(0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystring)({
        onload: _JSLOAD_CALLBACK,
        render: 'explicit',
        hl
      })}`;

      _loadJS(url).catch(() => {
        clearTimeout(networkTimeout);
        reject(_createError(auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
        ));
      });
    });
  }

  clearedOneInstance() {
    this.counter--;
  }

  shouldResolveImmediately(hl) {
    var _a; // We can resolve immediately if:
    //   • grecaptcha is already defined AND (
    //     1. the requested language codes are the same OR
    //     2. there exists already a ReCaptcha on the page
    //     3. the library was already loaded by the app
    // In cases (2) and (3), we _can't_ reload as it would break the recaptchas
    // that are already in the page


    return !!((_a = _window().grecaptcha) === null || _a === void 0 ? void 0 : _a.render) && (hl === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
  }

}

function isHostLanguageValid(hl) {
  return hl.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(hl);
}

class MockReCaptchaLoaderImpl {
  load(auth) {
    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new MockReCaptcha(auth);
    })();
  }

  clearedOneInstance() {}

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const RECAPTCHA_VERIFIER_TYPE = 'recaptcha';
const DEFAULT_PARAMS = {
  theme: 'light',
  type: 'image'
};
/**
 * An {@link https://www.google.com/recaptcha/ | reCAPTCHA}-based application verifier.
 *
 * @public
 */

class RecaptchaVerifier {
  /**
   *
   * @param containerOrId - The reCAPTCHA container parameter.
   *
   * @remarks
   * This has different meaning depending on whether the reCAPTCHA is hidden or visible. For a
   * visible reCAPTCHA the container must be empty. If a string is used, it has to correspond to
   * an element ID. The corresponding element must also must be in the DOM at the time of
   * initialization.
   *
   * @param parameters - The optional reCAPTCHA parameters.
   *
   * @remarks
   * Check the reCAPTCHA docs for a comprehensive list. All parameters are accepted except for
   * the sitekey. Firebase Auth backend provisions a reCAPTCHA for each project and will
   * configure this upon rendering. For an invisible reCAPTCHA, a size key must have the value
   * 'invisible'.
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   */
  constructor(containerOrId, parameters = Object.assign({}, DEFAULT_PARAMS), authExtern) {
    this.parameters = parameters;
    /**
     * The application verifier type.
     *
     * @remarks
     * For a reCAPTCHA verifier, this is 'recaptcha'.
     */

    this.type = RECAPTCHA_VERIFIER_TYPE;
    this.destroyed = false;
    this.widgetId = null;
    this.tokenChangeListeners = new Set();
    this.renderPromise = null;
    this.recaptcha = null;
    this.auth = _castAuth(authExtern);
    this.isInvisible = this.parameters.size === 'invisible';

    _assert(typeof document !== 'undefined', this.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );

    const container = typeof containerOrId === 'string' ? document.getElementById(containerOrId) : containerOrId;

    _assert(container, this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    this.container = container;
    this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
    this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new MockReCaptchaLoaderImpl() : new ReCaptchaLoaderImpl();
    this.validateStartingState(); // TODO: Figure out if sdk version is needed
  }
  /**
   * Waits for the user to solve the reCAPTCHA and resolves with the reCAPTCHA token.
   *
   * @returns A Promise for the reCAPTCHA token.
   */


  verify() {
    var _this57 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this57.assertNotDestroyed();

      const id = yield _this57.render();

      const recaptcha = _this57.getAssertedRecaptcha();

      const response = recaptcha.getResponse(id);

      if (response) {
        return response;
      }

      return new Promise(resolve => {
        const tokenChange = token => {
          if (!token) {
            return; // Ignore token expirations.
          }

          _this57.tokenChangeListeners.delete(tokenChange);

          resolve(token);
        };

        _this57.tokenChangeListeners.add(tokenChange);

        if (_this57.isInvisible) {
          recaptcha.execute(id);
        }
      });
    })();
  }
  /**
   * Renders the reCAPTCHA widget on the page.
   *
   * @returns A Promise that resolves with the reCAPTCHA widget ID.
   */


  render() {
    try {
      this.assertNotDestroyed();
    } catch (e) {
      // This method returns a promise. Since it's not async (we want to return the
      // _same_ promise if rendering is still occurring), the API surface should
      // reject with the error rather than just throw
      return Promise.reject(e);
    }

    if (this.renderPromise) {
      return this.renderPromise;
    }

    this.renderPromise = this.makeRenderPromise().catch(e => {
      this.renderPromise = null;
      throw e;
    });
    return this.renderPromise;
  }
  /** @internal */


  _reset() {
    this.assertNotDestroyed();

    if (this.widgetId !== null) {
      this.getAssertedRecaptcha().reset(this.widgetId);
    }
  }
  /**
   * Clears the reCAPTCHA widget from the page and destroys the instance.
   */


  clear() {
    this.assertNotDestroyed();
    this.destroyed = true;

    this._recaptchaLoader.clearedOneInstance();

    if (!this.isInvisible) {
      this.container.childNodes.forEach(node => {
        this.container.removeChild(node);
      });
    }
  }

  validateStartingState() {
    _assert(!this.parameters.sitekey, this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    _assert(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
    );

    _assert(typeof document !== 'undefined', this.auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }

  makeTokenCallback(existing) {
    return token => {
      this.tokenChangeListeners.forEach(listener => listener(token));

      if (typeof existing === 'function') {
        existing(token);
      } else if (typeof existing === 'string') {
        const globalFunc = _window()[existing];

        if (typeof globalFunc === 'function') {
          globalFunc(token);
        }
      }
    };
  }

  assertNotDestroyed() {
    _assert(!this.destroyed, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );
  }

  makeRenderPromise() {
    var _this58 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this58.init();

      if (!_this58.widgetId) {
        let container = _this58.container;

        if (!_this58.isInvisible) {
          const guaranteedEmpty = document.createElement('div');
          container.appendChild(guaranteedEmpty);
          container = guaranteedEmpty;
        }

        _this58.widgetId = _this58.getAssertedRecaptcha().render(container, _this58.parameters);
      }

      return _this58.widgetId;
    })();
  }

  init() {
    var _this59 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _assert(_isHttpOrHttps() && !_isWorker(), _this59.auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      );

      yield domReady();
      _this59.recaptcha = yield _this59._recaptchaLoader.load(_this59.auth, _this59.auth.languageCode || undefined);
      const siteKey = yield getRecaptchaParams(_this59.auth);

      _assert(siteKey, _this59.auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      );

      _this59.parameters.sitekey = siteKey;
    })();
  }

  getAssertedRecaptcha() {
    _assert(this.recaptcha, this.auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    return this.recaptcha;
  }

}

function domReady() {
  let resolver = null;
  return new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
      return;
    } // Document not ready, wait for load before resolving.
    // Save resolver, so we can remove listener in case it was externally
    // cancelled.


    resolver = () => resolve();

    window.addEventListener('load', resolver);
  }).catch(e => {
    if (resolver) {
      window.removeEventListener('load', resolver);
    }

    throw e;
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class ConfirmationResultImpl {
  constructor(verificationId, onConfirmation) {
    this.verificationId = verificationId;
    this.onConfirmation = onConfirmation;
  }

  confirm(verificationCode) {
    const authCredential = PhoneAuthCredential._fromVerification(this.verificationId, verificationCode);

    return this.onConfirmation(authCredential);
  }

}
/**
 * Asynchronously signs in using a phone number.
 *
 * @remarks
 * This method sends a code via SMS to the given
 * phone number, and returns a {@link ConfirmationResult}. After the user
 * provides the code sent to their phone, call {@link ConfirmationResult.confirm}
 * with the code to sign the user in.
 *
 * For abuse prevention, this method also requires a {@link ApplicationVerifier}.
 * This SDK includes a reCAPTCHA-based implementation, {@link RecaptchaVerifier}.
 * This function can work on other platforms that do not support the
 * {@link RecaptchaVerifier} (like React Native), but you need to use a
 * third-party {@link ApplicationVerifier} implementation.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
 * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
 * // Obtain a verificationCode from the user.
 * const credential = await confirmationResult.confirm(verificationCode);
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */


function signInWithPhoneNumber(_x143, _x144, _x145) {
  return _signInWithPhoneNumber.apply(this, arguments);
}
/**
 * Links the user account with the given phone number.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */


function _signInWithPhoneNumber() {
  _signInWithPhoneNumber = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, phoneNumber, appVerifier) {
    const authInternal = _castAuth(auth);

    const verificationId = yield _verifyPhoneNumber(authInternal, phoneNumber, (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(appVerifier));
    return new ConfirmationResultImpl(verificationId, cred => signInWithCredential(authInternal, cred));
  });
  return _signInWithPhoneNumber.apply(this, arguments);
}

function linkWithPhoneNumber(_x146, _x147, _x148) {
  return _linkWithPhoneNumber.apply(this, arguments);
}
/**
 * Re-authenticates a user using a fresh phone credential.
 *
 * @remarks Use before operations such as {@link updatePassword} that require tokens from recent sign-in attempts.
 *
 * @param user - The user.
 * @param phoneNumber - The user's phone number in E.164 format (e.g. +16505550101).
 * @param appVerifier - The {@link ApplicationVerifier}.
 *
 * @public
 */


function _linkWithPhoneNumber() {
  _linkWithPhoneNumber = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, phoneNumber, appVerifier) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    yield _assertLinkedStatus(false, userInternal, "phone"
    /* ProviderId.PHONE */
    );
    const verificationId = yield _verifyPhoneNumber(userInternal.auth, phoneNumber, (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(appVerifier));
    return new ConfirmationResultImpl(verificationId, cred => linkWithCredential(userInternal, cred));
  });
  return _linkWithPhoneNumber.apply(this, arguments);
}

function reauthenticateWithPhoneNumber(_x149, _x150, _x151) {
  return _reauthenticateWithPhoneNumber.apply(this, arguments);
}
/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */


function _reauthenticateWithPhoneNumber() {
  _reauthenticateWithPhoneNumber = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, phoneNumber, appVerifier) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);
    const verificationId = yield _verifyPhoneNumber(userInternal.auth, phoneNumber, (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(appVerifier));
    return new ConfirmationResultImpl(verificationId, cred => reauthenticateWithCredential(userInternal, cred));
  });
  return _reauthenticateWithPhoneNumber.apply(this, arguments);
}

function _verifyPhoneNumber(_x152, _x153, _x154) {
  return _verifyPhoneNumber2.apply(this, arguments);
}
/**
 * Updates the user's phone number.
 *
 * @example
 * ```
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * await updatePhoneNumber(user, phoneCredential);
 * ```
 *
 * @param user - The user.
 * @param credential - A credential authenticating the new phone number.
 *
 * @public
 */


function _verifyPhoneNumber2() {
  _verifyPhoneNumber2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, options, verifier) {
    var _a;

    const recaptchaToken = yield verifier.verify();

    try {
      _assert(typeof recaptchaToken === 'string', auth, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );

      _assert(verifier.type === RECAPTCHA_VERIFIER_TYPE, auth, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );

      let phoneInfoOptions;

      if (typeof options === 'string') {
        phoneInfoOptions = {
          phoneNumber: options
        };
      } else {
        phoneInfoOptions = options;
      }

      if ('session' in phoneInfoOptions) {
        const session = phoneInfoOptions.session;

        if ('phoneNumber' in phoneInfoOptions) {
          _assert(session.type === "enroll"
          /* MultiFactorSessionType.ENROLL */
          , auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
          );

          const response = yield startEnrollPhoneMfa(auth, {
            idToken: session.credential,
            phoneEnrollmentInfo: {
              phoneNumber: phoneInfoOptions.phoneNumber,
              recaptchaToken
            }
          });
          return response.phoneSessionInfo.sessionInfo;
        } else {
          _assert(session.type === "signin"
          /* MultiFactorSessionType.SIGN_IN */
          , auth, "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
          );

          const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;

          _assert(mfaEnrollmentId, auth, "missing-multi-factor-info"
          /* AuthErrorCode.MISSING_MFA_INFO */
          );

          const response = yield startSignInPhoneMfa(auth, {
            mfaPendingCredential: session.credential,
            mfaEnrollmentId,
            phoneSignInInfo: {
              recaptchaToken
            }
          });
          return response.phoneResponseInfo.sessionInfo;
        }
      } else {
        const {
          sessionInfo
        } = yield sendPhoneVerificationCode(auth, {
          phoneNumber: phoneInfoOptions.phoneNumber,
          recaptchaToken
        });
        return sessionInfo;
      }
    } finally {
      verifier._reset();
    }
  });
  return _verifyPhoneNumber2.apply(this, arguments);
}

function updatePhoneNumber(_x155, _x156) {
  return _updatePhoneNumber.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */


function _updatePhoneNumber() {
  _updatePhoneNumber = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, credential) {
    yield _link$1((0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user), credential);
  });
  return _updatePhoneNumber.apply(this, arguments);
}

let PhoneAuthProvider = /*#__PURE__*/(() => {
  class PhoneAuthProvider {
    /**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */
    constructor(auth) {
      /** Always set to {@link ProviderId}.PHONE. */
      this.providerId = PhoneAuthProvider.PROVIDER_ID;
      this.auth = _castAuth(auth);
    }
    /**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */


    verifyPhoneNumber(phoneOptions, applicationVerifier) {
      return _verifyPhoneNumber(this.auth, phoneOptions, (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(applicationVerifier));
    }
    /**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */


    static credential(verificationId, verificationCode) {
      return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
    }
    /**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */


    static credentialFromResult(userCredential) {
      const credential = userCredential;
      return PhoneAuthProvider.credentialFromTaggedObject(credential);
    }
    /**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */


    static credentialFromError(error) {
      return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
    }

    static credentialFromTaggedObject({
      _tokenResponse: tokenResponse
    }) {
      if (!tokenResponse) {
        return null;
      }

      const {
        phoneNumber,
        temporaryProof
      } = tokenResponse;

      if (phoneNumber && temporaryProof) {
        return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
      }

      return null;
    }

  }

  /** Always set to {@link ProviderId}.PHONE. */

  /** Always set to {@link SignInMethod}.PHONE. */
  PhoneAuthProvider.PROVIDER_ID = "phone"
  /* ProviderId.PHONE */
  ;
  PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone"
  /* SignInMethod.PHONE */
  ;
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Chooses a popup/redirect resolver to use. This prefers the override (which
   * is directly passed in), and falls back to the property set on the auth
   * object. If neither are available, this function errors w/ an argument error.
   */

  return PhoneAuthProvider;
})();

function _withDefaultResolver(auth, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }

  _assert(auth._popupRedirectResolver, auth, "argument-error"
  /* AuthErrorCode.ARGUMENT_ERROR */
  );

  return auth._popupRedirectResolver;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


class IdpCredential extends AuthCredential {
  constructor(params) {
    super("custom"
    /* ProviderId.CUSTOM */
    , "custom"
    /* ProviderId.CUSTOM */
    );
    this.params = params;
  }

  _getIdTokenResponse(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }

  _linkToIdToken(auth, idToken) {
    return signInWithIdp(auth, this._buildIdpRequest(idToken));
  }

  _getReauthenticationResolver(auth) {
    return signInWithIdp(auth, this._buildIdpRequest());
  }

  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };

    if (idToken) {
      request.idToken = idToken;
    }

    return request;
  }

}

function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}

function _reauth(params) {
  const {
    auth,
    user
  } = params;

  _assert(user, auth, "internal-error"
  /* AuthErrorCode.INTERNAL_ERROR */
  );

  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}

function _link(_x157) {
  return _link2.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */


function _link2() {
  _link2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (params) {
    const {
      auth,
      user
    } = params;

    _assert(user, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    return _link$1(user, new IdpCredential(params), params.bypassAuthState);
  });
  return _link2.apply(this, arguments);
}

class AbstractPopupRedirectOperation {
  constructor(auth, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }

  execute() {
    var _this60 = this;

    return new Promise( /*#__PURE__*/function () {
      var _ref20 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        _this60.pendingPromise = {
          resolve,
          reject
        };

        try {
          _this60.eventManager = yield _this60.resolver._initialize(_this60.auth);
          yield _this60.onExecution();

          _this60.eventManager.registerConsumer(_this60);
        } catch (e) {
          _this60.reject(e);
        }
      });

      return function (_x158, _x159) {
        return _ref20.apply(this, arguments);
      };
    }());
  }

  onAuthEvent(event) {
    var _this61 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        urlResponse,
        sessionId,
        postBody,
        tenantId,
        error,
        type
      } = event;

      if (error) {
        _this61.reject(error);

        return;
      }

      const params = {
        auth: _this61.auth,
        requestUri: urlResponse,
        sessionId: sessionId,
        tenantId: tenantId || undefined,
        postBody: postBody || undefined,
        user: _this61.user,
        bypassAuthState: _this61.bypassAuthState
      };

      try {
        _this61.resolve(yield _this61.getIdpTask(type)(params));
      } catch (e) {
        _this61.reject(e);
      }
    })();
  }

  onError(error) {
    this.reject(error);
  }

  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup"
      /* AuthEventType.SIGN_IN_VIA_POPUP */
      :
      case "signInViaRedirect"
      /* AuthEventType.SIGN_IN_VIA_REDIRECT */
      :
        return _signIn;

      case "linkViaPopup"
      /* AuthEventType.LINK_VIA_POPUP */
      :
      case "linkViaRedirect"
      /* AuthEventType.LINK_VIA_REDIRECT */
      :
        return _link;

      case "reauthViaPopup"
      /* AuthEventType.REAUTH_VIA_POPUP */
      :
      case "reauthViaRedirect"
      /* AuthEventType.REAUTH_VIA_REDIRECT */
      :
        return _reauth;

      default:
        _fail(this.auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
        );

    }
  }

  resolve(cred) {
    debugAssert(this.pendingPromise, 'Pending promise was never set');
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }

  reject(error) {
    debugAssert(this.pendingPromise, 'Pending promise was never set');
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }

  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }

    this.pendingPromise = null;
    this.cleanUp();
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const _POLL_WINDOW_CLOSE_TIMEOUT = /*#__PURE__*/new Delay(2000, 10000);
/**
 * Authenticates a Firebase client using a popup-based OAuth authentication flow.
 *
 * @remarks
 * If succeeds, returns the signed in user along with the provider's credential. If sign in was
 * unsuccessful, returns an error object containing additional information about the error.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = provider.credentialFromResult(auth, result);
 * const token = credential.accessToken;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 *
 * @public
 */


function signInWithPopup(_x160, _x161, _x162) {
  return _signInWithPopup.apply(this, arguments);
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a pop-up based
 * OAuth flow.
 *
 * @remarks
 * If the reauthentication is successful, the returned result will contain the user and the
 * provider's credential.
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 * // Reauthenticate using a popup.
 * await reauthenticateWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _signInWithPopup() {
  _signInWithPopup = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, provider, resolver) {
    const authInternal = _castAuth(auth);

    _assertInstanceOf(auth, provider, FederatedAuthProvider);

    const resolverInternal = _withDefaultResolver(authInternal, resolver);

    const action = new PopupOperation(authInternal, "signInViaPopup"
    /* AuthEventType.SIGN_IN_VIA_POPUP */
    , provider, resolverInternal);
    return action.executeNotNull();
  });
  return _signInWithPopup.apply(this, arguments);
}

function reauthenticateWithPopup(_x163, _x164, _x165) {
  return _reauthenticateWithPopup.apply(this, arguments);
}
/**
 * Links the authenticated provider to the user account using a pop-up based OAuth flow.
 *
 * @remarks
 * If the linking is successful, the returned result will contain the user and the provider's credential.
 *
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a popup.
 * const provider = new FacebookAuthProvider();
 * await linkWithPopup(result.user, provider);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _reauthenticateWithPopup() {
  _reauthenticateWithPopup = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, provider, resolver) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);

    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);

    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);

    const action = new PopupOperation(userInternal.auth, "reauthViaPopup"
    /* AuthEventType.REAUTH_VIA_POPUP */
    , provider, resolverInternal, userInternal);
    return action.executeNotNull();
  });
  return _reauthenticateWithPopup.apply(this, arguments);
}

function linkWithPopup(_x166, _x167, _x168) {
  return _linkWithPopup.apply(this, arguments);
}
/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */


function _linkWithPopup() {
  _linkWithPopup = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, provider, resolver) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);

    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider);

    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);

    const action = new PopupOperation(userInternal.auth, "linkViaPopup"
    /* AuthEventType.LINK_VIA_POPUP */
    , provider, resolverInternal, userInternal);
    return action.executeNotNull();
  });
  return _linkWithPopup.apply(this, arguments);
}

let PopupOperation = /*#__PURE__*/(() => {
  class PopupOperation extends AbstractPopupRedirectOperation {
    constructor(auth, filter, provider, resolver, user) {
      super(auth, filter, resolver, user);
      this.provider = provider;
      this.authWindow = null;
      this.pollId = null;

      if (PopupOperation.currentPopupAction) {
        PopupOperation.currentPopupAction.cancel();
      }

      PopupOperation.currentPopupAction = this;
    }

    executeNotNull() {
      var _this62 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const result = yield _this62.execute();

        _assert(result, _this62.auth, "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
        );

        return result;
      })();
    }

    onExecution() {
      var _this63 = this;

      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        debugAssert(_this63.filter.length === 1, 'Popup operations only handle one event');

        const eventId = _generateEventId();

        _this63.authWindow = yield _this63.resolver._openPopup(_this63.auth, _this63.provider, _this63.filter[0], // There's always one, see constructor
        eventId);
        _this63.authWindow.associatedEvent = eventId; // Check for web storage support and origin validation _after_ the popup is
        // loaded. These operations are slow (~1 second or so) Rather than
        // waiting on them before opening the window, optimistically open the popup
        // and check for storage support at the same time. If storage support is
        // not available, this will cause the whole thing to reject properly. It
        // will also close the popup, but since the promise has already rejected,
        // the popup closed by user poll will reject into the void.

        _this63.resolver._originValidation(_this63.auth).catch(e => {
          _this63.reject(e);
        });

        _this63.resolver._isIframeWebStorageSupported(_this63.auth, isSupported => {
          if (!isSupported) {
            _this63.reject(_createError(_this63.auth, "web-storage-unsupported"
            /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
            ));
          }
        }); // Handle user closure. Notice this does *not* use await


        _this63.pollUserCancellation();
      })();
    }

    get eventId() {
      var _a;

      return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
    }

    cancel() {
      this.reject(_createError(this.auth, "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
      ));
    }

    cleanUp() {
      if (this.authWindow) {
        this.authWindow.close();
      }

      if (this.pollId) {
        window.clearTimeout(this.pollId);
      }

      this.authWindow = null;
      this.pollId = null;
      PopupOperation.currentPopupAction = null;
    }

    pollUserCancellation() {
      const poll = () => {
        var _a, _b;

        if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
          // Make sure that there is sufficient time for whatever action to
          // complete. The window could have closed but the sign in network
          // call could still be in flight. This is specifically true for
          // Firefox or if the opener is in an iframe, in which case the oauth
          // helper closes the popup.
          this.pollId = window.setTimeout(() => {
            this.pollId = null;
            this.reject(_createError(this.auth, "popup-closed-by-user"
            /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          }, 8000
          /* _Timeout.AUTH_EVENT */
          );
          return;
        }

        this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
      };

      poll();
    }

  }

  // Only one popup is ever shown at once. The lifecycle of the current popup
  // can be managed / cancelled by the constructor.
  PopupOperation.currentPopupAction = null;
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  return PopupOperation;
})();
const PENDING_REDIRECT_KEY = 'pendingRedirect'; // We only get one redirect outcome for any one auth, so just store it
// in here.

const redirectOutcomeMap = /*#__PURE__*/new Map();

class RedirectAction extends AbstractPopupRedirectOperation {
  constructor(auth, resolver, bypassAuthState = false) {
    super(auth, ["signInViaRedirect"
    /* AuthEventType.SIGN_IN_VIA_REDIRECT */
    , "linkViaRedirect"
    /* AuthEventType.LINK_VIA_REDIRECT */
    , "reauthViaRedirect"
    /* AuthEventType.REAUTH_VIA_REDIRECT */
    , "unknown"
    /* AuthEventType.UNKNOWN */
    ], resolver, undefined, bypassAuthState);
    this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */


  execute() {
    var _superprop_getExecute = () => super.execute,
        _this64 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let readyOutcome = redirectOutcomeMap.get(_this64.auth._key());

      if (!readyOutcome) {
        try {
          const hasPendingRedirect = yield _getAndClearPendingRedirectStatus(_this64.resolver, _this64.auth);
          const result = hasPendingRedirect ? yield _superprop_getExecute().call(_this64) : null;

          readyOutcome = () => Promise.resolve(result);
        } catch (e) {
          readyOutcome = () => Promise.reject(e);
        }

        redirectOutcomeMap.set(_this64.auth._key(), readyOutcome);
      } // If we're not bypassing auth state, the ready outcome should be set to
      // null.


      if (!_this64.bypassAuthState) {
        redirectOutcomeMap.set(_this64.auth._key(), () => Promise.resolve(null));
      }

      return readyOutcome();
    })();
  }

  onAuthEvent(event) {
    var _superprop_getOnAuthEvent = () => super.onAuthEvent,
        _this65 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (event.type === "signInViaRedirect"
      /* AuthEventType.SIGN_IN_VIA_REDIRECT */
      ) {
        return _superprop_getOnAuthEvent().call(_this65, event);
      } else if (event.type === "unknown"
      /* AuthEventType.UNKNOWN */
      ) {
        // This is a sentinel value indicating there's no pending redirect
        _this65.resolve(null);

        return;
      }

      if (event.eventId) {
        const user = yield _this65.auth._redirectUserForId(event.eventId);

        if (user) {
          _this65.user = user;
          return _superprop_getOnAuthEvent().call(_this65, event);
        } else {
          _this65.resolve(null);
        }
      }
    })();
  }

  onExecution() {
    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  cleanUp() {}

}

function _getAndClearPendingRedirectStatus(_x169, _x170) {
  return _getAndClearPendingRedirectStatus2.apply(this, arguments);
}

function _getAndClearPendingRedirectStatus2() {
  _getAndClearPendingRedirectStatus2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolver, auth) {
    const key = pendingRedirectKey(auth);
    const persistence = resolverPersistence(resolver);

    if (!(yield persistence._isAvailable())) {
      return false;
    }

    const hasPendingRedirect = (yield persistence._get(key)) === 'true';
    yield persistence._remove(key);
    return hasPendingRedirect;
  });
  return _getAndClearPendingRedirectStatus2.apply(this, arguments);
}

function _setPendingRedirectStatus(_x171, _x172) {
  return _setPendingRedirectStatus2.apply(this, arguments);
}

function _setPendingRedirectStatus2() {
  _setPendingRedirectStatus2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolver, auth) {
    return resolverPersistence(resolver)._set(pendingRedirectKey(auth), 'true');
  });
  return _setPendingRedirectStatus2.apply(this, arguments);
}

function _clearRedirectOutcomes() {
  redirectOutcomeMap.clear();
}

function _overrideRedirectResult(auth, result) {
  redirectOutcomeMap.set(auth._key(), result);
}

function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}

function pendingRedirectKey(auth) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth.config.apiKey, auth.name);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Authenticates a Firebase client using a full-page redirect flow.
 *
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 * Follow the {@link https://firebase.google.com/docs/auth/web/redirect-best-practices
 * | best practices} when using {@link signInWithRedirect}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function signInWithRedirect(auth, provider, resolver) {
  return _signInWithRedirect(auth, provider, resolver);
}

function _signInWithRedirect(_x173, _x174, _x175) {
  return _signInWithRedirect2.apply(this, arguments);
}
/**
 * Reauthenticates the current user with the specified {@link OAuthProvider} using a full-page redirect flow.
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 * Follow the {@link https://firebase.google.com/docs/auth/web/redirect-best-practices
 * | best practices} when using {@link reauthenticateWithRedirect}.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * const result = await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * // Reauthenticate using a redirect.
 * await reauthenticateWithRedirect(result.user, provider);
 * // This will again trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _signInWithRedirect2() {
  _signInWithRedirect2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, provider, resolver) {
    const authInternal = _castAuth(auth);

    _assertInstanceOf(auth, provider, FederatedAuthProvider); // Wait for auth initialization to complete, this will process pending redirects and clear the
    // PENDING_REDIRECT_KEY in persistence. This should be completed before starting a new
    // redirect and creating a PENDING_REDIRECT_KEY entry.


    yield authInternal._initializationPromise;

    const resolverInternal = _withDefaultResolver(authInternal, resolver);

    yield _setPendingRedirectStatus(resolverInternal, authInternal);
    return resolverInternal._openRedirect(authInternal, provider, "signInViaRedirect"
    /* AuthEventType.SIGN_IN_VIA_REDIRECT */
    );
  });
  return _signInWithRedirect2.apply(this, arguments);
}

function reauthenticateWithRedirect(user, provider, resolver) {
  return _reauthenticateWithRedirect(user, provider, resolver);
}

function _reauthenticateWithRedirect(_x176, _x177, _x178) {
  return _reauthenticateWithRedirect2.apply(this, arguments);
}
/**
 * Links the {@link OAuthProvider} to the user account using a full-page redirect flow.
 * @remarks
 * To handle the results and errors for this operation, refer to {@link getRedirectResult}.
 * Follow the {@link https://firebase.google.com/docs/auth/web/redirect-best-practices
 * | best practices} when using {@link linkWithRedirect}.
 *
 * @example
 * ```javascript
 * // Sign in using some other provider.
 * const result = await signInWithEmailAndPassword(auth, email, password);
 * // Link using a redirect.
 * const provider = new FacebookAuthProvider();
 * await linkWithRedirect(result.user, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * ```
 *
 * @param user - The user.
 * @param provider - The provider to authenticate. The provider has to be an {@link OAuthProvider}.
 * Non-OAuth providers like {@link EmailAuthProvider} will throw an error.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 *
 * @public
 */


function _reauthenticateWithRedirect2() {
  _reauthenticateWithRedirect2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, provider, resolver) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);

    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider); // Wait for auth initialization to complete, this will process pending redirects and clear the
    // PENDING_REDIRECT_KEY in persistence. This should be completed before starting a new
    // redirect and creating a PENDING_REDIRECT_KEY entry.


    yield userInternal.auth._initializationPromise; // Allow the resolver to error before persisting the redirect user

    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);

    yield _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = yield prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "reauthViaRedirect"
    /* AuthEventType.REAUTH_VIA_REDIRECT */
    , eventId);
  });
  return _reauthenticateWithRedirect2.apply(this, arguments);
}

function linkWithRedirect(user, provider, resolver) {
  return _linkWithRedirect(user, provider, resolver);
}

function _linkWithRedirect(_x179, _x180, _x181) {
  return _linkWithRedirect2.apply(this, arguments);
}
/**
 * Returns a {@link UserCredential} from the redirect-based sign-in flow.
 *
 * @remarks
 * If sign-in succeeded, returns the signed in user. If sign-in was unsuccessful, fails with an
 * error. If no redirect operation was called, returns `null`.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // You can add additional scopes to the provider:
 * provider.addScope('user_birthday');
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = provider.credentialFromResult(auth, result);
 *   const token = credential.accessToken;
 * }
 * // As this API can be used for sign-in, linking and reauthentication,
 * // check the operationType to determine what triggered this redirect
 * // operation.
 * const operationType = result.operationType;
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param resolver - An instance of {@link PopupRedirectResolver}, optional
 * if already supplied to {@link initializeAuth} or provided by {@link getAuth}.
 *
 * @public
 */


function _linkWithRedirect2() {
  _linkWithRedirect2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user, provider, resolver) {
    const userInternal = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getModularInstance)(user);

    _assertInstanceOf(userInternal.auth, provider, FederatedAuthProvider); // Wait for auth initialization to complete, this will process pending redirects and clear the
    // PENDING_REDIRECT_KEY in persistence. This should be completed before starting a new
    // redirect and creating a PENDING_REDIRECT_KEY entry.


    yield userInternal.auth._initializationPromise; // Allow the resolver to error before persisting the redirect user

    const resolverInternal = _withDefaultResolver(userInternal.auth, resolver);

    yield _assertLinkedStatus(false, userInternal, provider.providerId);
    yield _setPendingRedirectStatus(resolverInternal, userInternal.auth);
    const eventId = yield prepareUserForRedirect(userInternal);
    return resolverInternal._openRedirect(userInternal.auth, provider, "linkViaRedirect"
    /* AuthEventType.LINK_VIA_REDIRECT */
    , eventId);
  });
  return _linkWithRedirect2.apply(this, arguments);
}

function getRedirectResult(_x182, _x183) {
  return _getRedirectResult2.apply(this, arguments);
}

function _getRedirectResult2() {
  _getRedirectResult2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, resolver) {
    yield _castAuth(auth)._initializationPromise;
    return _getRedirectResult(auth, resolver, false);
  });
  return _getRedirectResult2.apply(this, arguments);
}

function _getRedirectResult(_x184, _x185) {
  return _getRedirectResult3.apply(this, arguments);
}

function _getRedirectResult3() {
  _getRedirectResult3 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, resolverExtern, bypassAuthState = false) {
    const authInternal = _castAuth(auth);

    const resolver = _withDefaultResolver(authInternal, resolverExtern);

    const action = new RedirectAction(authInternal, resolver, bypassAuthState);
    const result = yield action.execute();

    if (result && !bypassAuthState) {
      delete result.user._redirectEventId;
      yield authInternal._persistUserIfCurrent(result.user);
      yield authInternal._setRedirectUser(null, resolverExtern);
    }

    return result;
  });
  return _getRedirectResult3.apply(this, arguments);
}

function prepareUserForRedirect(_x186) {
  return _prepareUserForRedirect.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The amount of time to store the UIDs of seen events; this is
// set to 10 min by default


function _prepareUserForRedirect() {
  _prepareUserForRedirect = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
    const eventId = _generateEventId(`${user.uid}:::`);

    user._redirectEventId = eventId;
    yield user.auth._setRedirectUser(user);
    yield user.auth._persistUserIfCurrent(user);
    return eventId;
  });
  return _prepareUserForRedirect.apply(this, arguments);
}

const EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1000;

class AuthEventManager {
  constructor(auth) {
    this.auth = auth;
    this.cachedEventUids = new Set();
    this.consumers = new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }

  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);

    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }

  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }

  onEvent(event) {
    // Check if the event has already been handled
    if (this.hasEventBeenHandled(event)) {
      return false;
    }

    let handled = false;
    this.consumers.forEach(consumer => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });

    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      // If we've already seen a redirect before, or this is a popup event,
      // bail now
      return handled;
    }

    this.hasHandledPotentialRedirect = true; // If the redirect wasn't handled, hang on to it

    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }

    return handled;
  }

  sendToConsumer(event, consumer) {
    var _a;

    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split('auth/')[1]) || "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      ;
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }

  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }

  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }

    return this.cachedEventUids.has(eventUid(event));
  }

  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }

}

function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter(v => v).join('-');
}

function isNullRedirectEvent({
  type,
  error
}) {
  return type === "unknown"
  /* AuthEventType.UNKNOWN */
  && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"
  /* AuthErrorCode.NO_AUTH_EVENT */
  }`;
}

function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect"
    /* AuthEventType.SIGN_IN_VIA_REDIRECT */
    :
    case "linkViaRedirect"
    /* AuthEventType.LINK_VIA_REDIRECT */
    :
    case "reauthViaRedirect"
    /* AuthEventType.REAUTH_VIA_REDIRECT */
    :
      return true;

    case "unknown"
    /* AuthEventType.UNKNOWN */
    :
      return isNullRedirectEvent(event);

    default:
      return false;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getProjectConfig(_x187) {
  return _getProjectConfig2.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _getProjectConfig2() {
  _getProjectConfig2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, request = {}) {
    return _performApiRequest(auth, "GET"
    /* HttpMethod.GET */
    , "/v1/projects"
    /* Endpoint.GET_PROJECT_CONFIG */
    , request);
  });
  return _getProjectConfig2.apply(this, arguments);
}

const IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
const HTTP_REGEX = /^https?/;

function _validateOrigin(_x188) {
  return _validateOrigin2.apply(this, arguments);
}

function _validateOrigin2() {
  _validateOrigin2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
    // Skip origin validation if we are in an emulated environment
    if (auth.config.emulator) {
      return;
    }

    const {
      authorizedDomains
    } = yield _getProjectConfig(auth);

    for (const domain of authorizedDomains) {
      try {
        if (matchDomain(domain)) {
          return;
        }
      } catch (_a) {// Do nothing if there's a URL error; just continue searching
      }
    } // In the old SDK, this error also provides helpful messages.


    _fail(auth, "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
    );
  });
  return _validateOrigin2.apply(this, arguments);
}

function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();

  const {
    protocol,
    hostname
  } = new URL(currentUrl);

  if (expected.startsWith('chrome-extension://')) {
    const ceUrl = new URL(expected);

    if (ceUrl.hostname === '' && hostname === '') {
      // For some reason we're not parsing chrome URLs properly
      return protocol === 'chrome-extension:' && expected.replace('chrome-extension://', '') === currentUrl.replace('chrome-extension://', '');
    }

    return protocol === 'chrome-extension:' && ceUrl.hostname === hostname;
  }

  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }

  if (IP_ADDRESS_REGEX.test(expected)) {
    // The domain has to be exactly equal to the pattern, as an IP domain will
    // only contain the IP, no extra character.
    return hostname === expected;
  } // Dots in pattern should be escaped.


  const escapedDomainPattern = expected.replace(/\./g, '\\.'); // Non ip address domains.
  // domain.com = *.domain.com OR domain.com

  const re = new RegExp('^(.+\\.' + escapedDomainPattern + '|' + escapedDomainPattern + ')$', 'i');
  return re.test(hostname);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const NETWORK_TIMEOUT = /*#__PURE__*/new Delay(30000, 60000);
/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */

function resetUnloadedGapiModules() {
  // Clear last failed gapi.load state to force next gapi.load to first
  // load the failed gapi.iframes module.
  // Get gapix.beacon context.
  const beacon = _window().___jsl; // Get current hint.


  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    // Get gapi hint.
    for (const hint of Object.keys(beacon.H)) {
      // Requested modules.
      beacon.H[hint].r = beacon.H[hint].r || []; // Loaded modules.

      beacon.H[hint].L = beacon.H[hint].L || []; // Set requested modules to a copy of the loaded modules.

      beacon.H[hint].r = [...beacon.H[hint].L]; // Clear pending callbacks.

      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          // Remove all failed pending callbacks.
          beacon.CP[i] = null;
        }
      }
    }
  }
}

function loadGapi(auth) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c; // Function to run when gapi.load is ready.


    function loadGapiIframe() {
      // The developer may have tried to previously run gapi.load and failed.
      // Run this to fix that.
      resetUnloadedGapiModules();
      gapi.load('gapi.iframes', {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          // The above reset may be sufficient, but having this reset after
          // failure ensures that if the developer calls gapi.load after the
          // connection is re-established and before another attempt to embed
          // the iframe, it would work and would not be broken because of our
          // failed attempt.
          // Timeout when gapi.iframes.Iframe not loaded.
          resetUnloadedGapiModules();
          reject(_createError(auth, "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }

    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      // If gapi.iframes.Iframe available, resolve.
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      // Gapi loader ready, load gapi.iframes.
      loadGapiIframe();
    } else {
      // Create a new iframe callback when this is called so as not to overwrite
      // any previous defined callback. This happens if this method is called
      // multiple times in parallel and could result in the later callback
      // overwriting the previous one. This would end up with a iframe
      // timeout.
      const cbName = _generateCallbackName('iframefcb'); // GApi loader not available, dynamically load platform.js.


      _window()[cbName] = () => {
        // GApi loader should be ready.
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          // Gapi loader failed, throw error.
          reject(_createError(auth, "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        }
      }; // Load GApi loader.


      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`).catch(e => reject(e));
    }
  }).catch(error => {
    // Reset cached promise to allow for retrial.
    cachedGApiLoader = null;
    throw error;
  });
}

let cachedGApiLoader = null;

function _loadGapi(auth) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth);
  return cachedGApiLoader;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const PING_TIMEOUT = /*#__PURE__*/new Delay(5000, 15000);
const IFRAME_PATH = '__/auth/iframe';
const EMULATED_IFRAME_PATH = 'emulator/auth/iframe';
const IFRAME_ATTRIBUTES = {
  style: {
    position: 'absolute',
    top: '-100px',
    width: '1px',
    height: '1px'
  },
  'aria-hidden': 'true',
  tabindex: '-1'
}; // Map from apiHost to endpoint ID for passing into iframe. In current SDK, apiHost can be set to
// anything (not from a list of endpoints with IDs as in legacy), so this is the closest we can get.

const EID_FROM_APIHOST = /*#__PURE__*/new Map([["identitytoolkit.googleapis.com"
/* DefaultConfig.API_HOST */
, 'p'], ['staging-identitytoolkit.sandbox.googleapis.com', 's'], ['test-identitytoolkit.sandbox.googleapis.com', 't'] // test
]);

function getIframeUrl(auth) {
  const config = auth.config;

  _assert(config.authDomain, auth, "auth-domain-config-required"
  /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );

  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth.name,
    v: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth.config.apiHost);

  if (eid) {
    params.eid = eid;
  }

  const frameworks = auth._getFrameworks();

  if (frameworks.length) {
    params.fw = frameworks.join(',');
  }

  return `${url}?${(0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystring)(params).slice(1)}`;
}

function _openIframe(_x189) {
  return _openIframe2.apply(this, arguments);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function _openIframe2() {
  _openIframe2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
    const context = yield _loadGapi(auth);

    const gapi = _window().gapi;

    _assert(gapi, auth, "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
    );

    return context.open({
      where: document.body,
      url: getIframeUrl(auth),
      messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
      attributes: IFRAME_ATTRIBUTES,
      dontclear: true
    }, iframe => new Promise( /*#__PURE__*/function () {
      var _ref27 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        yield iframe.restyle({
          // Prevent iframe from closing on mouse out.
          setHideOnLeave: false
        });

        const networkError = _createError(auth, "network-request-failed"
        /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ); // Confirm iframe is correctly loaded.
        // To fallback on failure, set a timeout.


        const networkErrorTimer = _window().setTimeout(() => {
          reject(networkError);
        }, PING_TIMEOUT.get()); // Clear timer and resolve pending iframe ready promise.


        function clearTimerAndResolve() {
          _window().clearTimeout(networkErrorTimer);

          resolve(iframe);
        } // This returns an IThenable. However the reject part does not call
        // when the iframe is not loaded.


        iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
          reject(networkError);
        });
      });

      return function (_x200, _x201) {
        return _ref27.apply(this, arguments);
      };
    }()));
  });
  return _openIframe2.apply(this, arguments);
}

const BASE_POPUP_OPTIONS = {
  location: 'yes',
  resizable: 'yes',
  statusbar: 'yes',
  toolbar: 'no'
};
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 600;
const TARGET_BLANK = '_blank';
const FIREFOX_EMPTY_URL = 'http://localhost';

class AuthPopup {
  constructor(window) {
    this.window = window;
    this.associatedEvent = null;
  }

  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {}
    }
  }

}

function _open(auth, url, name, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = '';
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  }); // Chrome iOS 7 and 8 is returning an undefined popup win when target is
  // specified, even though the popup is not necessarily blocked.

  const ua = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getUA)().toLowerCase();

  if (name) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name;
  }

  if (_isFirefox(ua)) {
    // Firefox complains when invalid URLs are popped out. Hacky way to bypass.
    url = url || FIREFOX_EMPTY_URL; // Firefox disables by default scrolling on popup windows, which can create
    // issues when the user has many Google accounts, for instance.

    options.scrollbars = 'yes';
  }

  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, '');

  if (_isIOSStandalone(ua) && target !== '_self') {
    openAsNewWindowIOS(url || '', target);
    return new AuthPopup(null);
  } // about:blank getting sanitized causing browsers like IE/Edge to display
  // brief error message before redirecting to handler.


  const newWin = window.open(url || '', target, optionsString);

  _assert(newWin, auth, "popup-blocked"
  /* AuthErrorCode.POPUP_BLOCKED */
  ); // Flaky on IE edge, encapsulate with a try and catch.


  try {
    newWin.focus();
  } catch (e) {}

  return new AuthPopup(newWin);
}

function openAsNewWindowIOS(url, target) {
  const el = document.createElement('a');
  el.href = url;
  el.target = target;
  const click = document.createEvent('MouseEvent');
  click.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * URL for Authentication widget which will initiate the OAuth handshake
 *
 * @internal
 */


const WIDGET_PATH = '__/auth/handler';
/**
 * URL for emulated environment
 *
 * @internal
 */

const EMULATOR_WIDGET_PATH = 'emulator/auth/handler';
/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */

const FIREBASE_APP_CHECK_FRAGMENT_ID = /*#__PURE__*/encodeURIComponent('fac');

function _getRedirectUrl(_x190, _x191, _x192, _x193, _x194, _x195) {
  return _getRedirectUrl2.apply(this, arguments);
}

function _getRedirectUrl2() {
  _getRedirectUrl2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, provider, authType, redirectUrl, eventId, additionalParams) {
    _assert(auth.config.authDomain, auth, "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
    );

    _assert(auth.config.apiKey, auth, "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
    );

    const params = {
      apiKey: auth.config.apiKey,
      appName: auth.name,
      authType,
      redirectUrl,
      v: _firebase_app__WEBPACK_IMPORTED_MODULE_2__.SDK_VERSION,
      eventId
    };

    if (provider instanceof FederatedAuthProvider) {
      provider.setDefaultLanguage(auth.languageCode);
      params.providerId = provider.providerId || '';

      if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(provider.getCustomParameters())) {
        params.customParameters = JSON.stringify(provider.getCustomParameters());
      } // TODO set additionalParams from the provider as well?


      for (const [key, value] of Object.entries(additionalParams || {})) {
        params[key] = value;
      }
    }

    if (provider instanceof BaseOAuthProvider) {
      const scopes = provider.getScopes().filter(scope => scope !== '');

      if (scopes.length > 0) {
        params.scopes = scopes.join(',');
      }
    }

    if (auth.tenantId) {
      params.tid = auth.tenantId;
    } // TODO: maybe set eid as endipointId
    // TODO: maybe set fw as Frameworks.join(",")


    const paramsDict = params;

    for (const key of Object.keys(paramsDict)) {
      if (paramsDict[key] === undefined) {
        delete paramsDict[key];
      }
    } // Sets the App Check token to pass to the widget


    const appCheckToken = yield auth._getAppCheckToken();
    const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : ''; // Start at index 1 to skip the leading '&' in the query string

    return `${getHandlerBase(auth)}?${(0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.querystring)(paramsDict).slice(1)}${appCheckTokenFragment}`;
  });
  return _getRedirectUrl2.apply(this, arguments);
}

function getHandlerBase({
  config
}) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }

  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The special web storage event
 *
 */


const WEB_STORAGE_SUPPORT_KEY = 'webStorageSupport';

class BrowserPopupRedirectResolver {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  } // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections


  _openPopup(auth, provider, authType, eventId) {
    var _this66 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      debugAssert((_a = _this66.eventManagers[auth._key()]) === null || _a === void 0 ? void 0 : _a.manager, '_initialize() not called before _openPopup()');
      const url = yield _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);
      return _open(auth, url, _generateEventId());
    })();
  }

  _openRedirect(auth, provider, authType, eventId) {
    var _this67 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this67._originValidation(auth);
      const url = yield _getRedirectUrl(auth, provider, authType, _getCurrentUrl(), eventId);

      _setWindowLocation(url);

      return new Promise(() => {});
    })();
  }

  _initialize(auth) {
    const key = auth._key();

    if (this.eventManagers[key]) {
      const {
        manager,
        promise
      } = this.eventManagers[key];

      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise, 'If manager is not set, promise should be');
        return promise;
      }
    }

    const promise = this.initAndGetManager(auth);
    this.eventManagers[key] = {
      promise
    }; // If the promise is rejected, the key should be removed so that the
    // operation can be retried later.

    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }

  initAndGetManager(auth) {
    var _this68 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const iframe = yield _openIframe(auth);
      const manager = new AuthEventManager(auth);
      iframe.register('authEvent', iframeEvent => {
        _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth, "invalid-auth-event"
        /* AuthErrorCode.INVALID_AUTH_EVENT */
        ); // TODO: Consider splitting redirect and popup events earlier on


        const handled = manager.onEvent(iframeEvent.authEvent);
        return {
          status: handled ? "ACK"
          /* GapiOutcome.ACK */
          : "ERROR"
          /* GapiOutcome.ERROR */

        };
      }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
      _this68.eventManagers[auth._key()] = {
        manager
      };
      _this68.iframes[auth._key()] = iframe;
      return manager;
    })();
  }

  _isIframeWebStorageSupported(auth, cb) {
    const iframe = this.iframes[auth._key()];

    iframe.send(WEB_STORAGE_SUPPORT_KEY, {
      type: WEB_STORAGE_SUPPORT_KEY
    }, result => {
      var _a;

      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];

      if (isSupported !== undefined) {
        cb(!!isSupported);
      }

      _fail(auth, "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }

  _originValidation(auth) {
    const key = auth._key();

    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }

    return this.originValidationPromises[key];
  }

  get _shouldInitProactively() {
    // Mobile browsers and Safari need to optimistically initialize
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }

}
/**
 * An implementation of {@link PopupRedirectResolver} suitable for browser
 * based applications.
 *
 * @public
 */


const browserPopupRedirectResolver = BrowserPopupRedirectResolver;

class MultiFactorAssertionImpl {
  constructor(factorId) {
    this.factorId = factorId;
  }

  _process(auth, session, displayName) {
    switch (session.type) {
      case "enroll"
      /* MultiFactorSessionType.ENROLL */
      :
        return this._finalizeEnroll(auth, session.credential, displayName);

      case "signin"
      /* MultiFactorSessionType.SIGN_IN */
      :
        return this._finalizeSignIn(auth, session.credential);

      default:
        return debugFail('unexpected MultiFactorSessionType');
    }
  }

}
/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */


class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
  constructor(credential) {
    super("phone"
    /* FactorId.PHONE */
    );
    this.credential = credential;
  }
  /** @internal */


  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  /** @internal */


  _finalizeEnroll(auth, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  /** @internal */


  _finalizeSignIn(auth, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }

}
/**
 * Provider for generating a {@link PhoneMultiFactorAssertion}.
 *
 * @public
 */


let PhoneMultiFactorGenerator = /*#__PURE__*/(() => {
  class PhoneMultiFactorGenerator {
    constructor() {}
    /**
     * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
     *
     * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
     * @returns A {@link PhoneMultiFactorAssertion} which can be used with
     * {@link MultiFactorResolver.resolveSignIn}
     */


    static assertion(credential) {
      return PhoneMultiFactorAssertionImpl._fromCredential(credential);
    }

  }

  /**
   * The identifier of the phone second factor: `phone`.
   */
  PhoneMultiFactorGenerator.FACTOR_ID = 'phone';
  /**
   * Provider for generating a {@link TotpMultiFactorAssertion}.
   *
   * @public
   */

  return PhoneMultiFactorGenerator;
})();
let TotpMultiFactorGenerator = /*#__PURE__*/(() => {
  class TotpMultiFactorGenerator {
    /**
     * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
     * the TOTP (time-based one-time password) second factor.
     * This assertion is used to complete enrollment in TOTP second factor.
     *
     * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
     * @param oneTimePassword One-time password from TOTP App.
     * @returns A {@link TotpMultiFactorAssertion} which can be used with
     * {@link MultiFactorUser.enroll}.
     */
    static assertionForEnrollment(secret, oneTimePassword) {
      return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
    }
    /**
     * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
     * This assertion is used to complete signIn with TOTP as the second factor.
     *
     * @param enrollmentId identifies the enrolled TOTP second factor.
     * @param oneTimePassword One-time password from TOTP App.
     * @returns A {@link TotpMultiFactorAssertion} which can be used with
     * {@link MultiFactorResolver.resolveSignIn}.
     */


    static assertionForSignIn(enrollmentId, oneTimePassword) {
      return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
    }
    /**
     * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
     * Creates a TOTP secret as part of enrolling a TOTP second factor.
     * Used for generating a QR code URL or inputting into a TOTP app.
     * This method uses the auth instance corresponding to the user in the multiFactorSession.
     *
     * @param session The {@link MultiFactorSession} that the user is part of.
     * @returns A promise to {@link TotpSecret}.
     */


    static generateSecret(session) {
      return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const mfaSession = session;

        _assert(typeof mfaSession.auth !== 'undefined', "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
        );

        const response = yield startEnrollTotpMfa(mfaSession.auth, {
          idToken: mfaSession.credential,
          totpEnrollmentInfo: {}
        });
        return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.auth);
      })();
    }

  }

  /**
   * The identifier of the TOTP second factor: `totp`.
   */
  TotpMultiFactorGenerator.FACTOR_ID = "totp"
  /* FactorId.TOTP */
  ;
  return TotpMultiFactorGenerator;
})();

class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super("totp"
    /* FactorId.TOTP */
    );
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  /** @internal */


  static _fromSecret(secret, otp) {
    return new TotpMultiFactorAssertionImpl(otp, undefined, secret);
  }
  /** @internal */


  static _fromEnrollmentId(enrollmentId, otp) {
    return new TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  /** @internal */


  _finalizeEnroll(auth, idToken, displayName) {
    var _this69 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _assert(typeof _this69.secret !== 'undefined', auth, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );

      return finalizeEnrollTotpMfa(auth, {
        idToken,
        displayName,
        totpVerificationInfo: _this69.secret._makeTotpVerificationInfo(_this69.otp)
      });
    })();
  }
  /** @internal */


  _finalizeSignIn(auth, mfaPendingCredential) {
    var _this70 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _assert(_this70.enrollmentId !== undefined && _this70.otp !== undefined, auth, "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
      );

      const totpVerificationInfo = {
        verificationCode: _this70.otp
      };
      return finalizeSignInTotpMfa(auth, {
        mfaPendingCredential,
        mfaEnrollmentId: _this70.enrollmentId,
        totpVerificationInfo
      });
    })();
  }

}
/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */


class TotpSecret {
  // The public members are declared outside the constructor so the docs can be generated.
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth) {
    this.sessionInfo = sessionInfo;
    this.auth = auth;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  /** @internal */


  static _fromStartTotpMfaEnrollmentResponse(response, auth) {
    return new TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth);
  }
  /** @internal */


  _makeTotpVerificationInfo(otp) {
    return {
      sessionInfo: this.sessionInfo,
      verificationCode: otp
    };
  }
  /**
   * Returns a QR code URL as described in
   * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
   * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
   * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
   *
   * @param accountName the name of the account/app along with a user identifier.
   * @param issuer issuer of the TOTP (likely the app name).
   * @returns A QR code URL string.
   */


  generateQrCodeUrl(accountName, issuer) {
    var _a;

    let useDefaults = false;

    if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
      useDefaults = true;
    }

    if (useDefaults) {
      if (_isEmptyString(accountName)) {
        accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || 'unknownuser';
      }

      if (_isEmptyString(issuer)) {
        issuer = this.auth.name;
      }
    }

    return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
  }

}
/** @internal */


function _isEmptyString(input) {
  return typeof input === 'undefined' || (input === null || input === void 0 ? void 0 : input.length) === 0;
}

var name = "@firebase/auth";
var version = "0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class AuthInterop {
  constructor(auth) {
    this.auth = auth;
    this.internalListeners = new Map();
  }

  getUid() {
    var _a;

    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }

  getToken(forceRefresh) {
    var _this71 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this71.assertAuthConfigured();

      yield _this71.auth._initializationPromise;

      if (!_this71.auth.currentUser) {
        return null;
      }

      const accessToken = yield _this71.auth.currentUser.getIdToken(forceRefresh);
      return {
        accessToken
      };
    })();
  }

  addAuthTokenListener(listener) {
    this.assertAuthConfigured();

    if (this.internalListeners.has(listener)) {
      return;
    }

    const unsubscribe = this.auth.onIdTokenChanged(user => {
      listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }

  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);

    if (!unsubscribe) {
      return;
    }

    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }

  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth"
    /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }

  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }

}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node"
    /* ClientPlatform.NODE */
    :
      return 'node';

    case "ReactNative"
    /* ClientPlatform.REACT_NATIVE */
    :
      return 'rn';

    case "Worker"
    /* ClientPlatform.WORKER */
    :
      return 'webworker';

    case "Cordova"
    /* ClientPlatform.CORDOVA */
    :
      return 'cordova';

    default:
      return undefined;
  }
}
/** @internal */


function registerAuth(clientPlatform) {
  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_4__.Component("auth"
  /* _ComponentName.AUTH */
  , (container, {
    options: deps
  }) => {
    const app = container.getProvider('app').getImmediate();
    const heartbeatServiceProvider = container.getProvider('heartbeat');
    const appCheckServiceProvider = container.getProvider('app-check-internal');
    const {
      apiKey,
      authDomain
    } = app.options;

    _assert(apiKey && !apiKey.includes(':'), "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
    , {
      appName: app.name
    });

    const config = {
      apiKey,
      authDomain,
      clientPlatform,
      apiHost: "identitytoolkit.googleapis.com"
      /* DefaultConfig.API_HOST */
      ,
      tokenApiHost: "securetoken.googleapis.com"
      /* DefaultConfig.TOKEN_API_HOST */
      ,
      apiScheme: "https"
      /* DefaultConfig.API_SCHEME */
      ,
      sdkClientVersion: _getClientVersion(clientPlatform)
    };
    const authInstance = new AuthImpl(app, heartbeatServiceProvider, appCheckServiceProvider, config);

    _initializeAuthInstance(authInstance, deps);

    return authInstance;
  }, "PUBLIC"
  /* ComponentType.PUBLIC */
  )
  /**
   * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
   * For why we do this, See go/firebase-next-auth-init
   */
  .setInstantiationMode("EXPLICIT"
  /* InstantiationMode.EXPLICIT */
  )
  /**
   * Because all firebase products that depend on auth depend on auth-internal directly,
   * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
   */
  .setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal"
    /* _ComponentName.AUTH_INTERNAL */
    );
    authInternalProvider.initialize();
  }));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_4__.Component("auth-internal"
  /* _ComponentName.AUTH_INTERNAL */
  , container => {
    const auth = _castAuth(container.getProvider("auth"
    /* _ComponentName.AUTH */
    ).getImmediate());

    return (auth => new AuthInterop(auth))(auth);
  }, "PRIVATE"
  /* ComponentType.PRIVATE */
  ).setInstantiationMode("EXPLICIT"
  /* InstantiationMode.EXPLICIT */
  ));

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.registerVersion)(name, version, getVersionForPlatform(clientPlatform)); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.registerVersion)(name, version, 'esm2017');
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
const authIdTokenMaxAge = /*#__PURE__*/(0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getExperimentalSetting)('authIdTokenMaxAge') || DEFAULT_ID_TOKEN_MAX_AGE;
let lastPostedIdToken = null;

const mintCookieFactory = url => /*#__PURE__*/function () {
  var _ref21 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
    const idTokenResult = user && (yield user.getIdTokenResult());
    const idTokenAge = idTokenResult && (new Date().getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1000;

    if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
      return;
    } // Specifically trip null => undefined when logged out, to delete any existing cookie


    const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;

    if (lastPostedIdToken === idToken) {
      return;
    }

    lastPostedIdToken = idToken;
    yield fetch(url, {
      method: idToken ? 'POST' : 'DELETE',
      headers: idToken ? {
        'Authorization': `Bearer ${idToken}`
      } : {}
    });
  });

  return function (_x196) {
    return _ref21.apply(this, arguments);
  };
}();
/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */


function getAuth(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__.getApp)()) {
  const provider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_2__._getProvider)(app, 'auth');

  if (provider.isInitialized()) {
    return provider.getImmediate();
  }

  const auth = initializeAuth(app, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [indexedDBLocalPersistence, browserLocalPersistence, browserSessionPersistence]
  });
  const authTokenSyncUrl = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getExperimentalSetting)('authTokenSyncURL');

  if (authTokenSyncUrl) {
    const mintCookie = mintCookieFactory(authTokenSyncUrl);
    beforeAuthStateChanged(auth, mintCookie, () => mintCookie(auth.currentUser));
    onIdTokenChanged(auth, user => mintCookie(user));
  }

  const authEmulatorHost = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_1__.getDefaultEmulatorHost)('auth');

  if (authEmulatorHost) {
    connectAuthEmulator(auth, `http://${authEmulatorHost}`);
  }

  return auth;
}

/*#__PURE__*/
registerAuth("Browser"
/* ClientPlatform.BROWSER */
);
 //# sourceMappingURL=index-e3d5d3f4.js.map

/***/ }),

/***/ 9439:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@angular/fire/node_modules/@firebase/auth/dist/esm2017/internal.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionCodeOperation": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   "ActionCodeURL": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ag),
/* harmony export */   "AuthCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.J),
/* harmony export */   "AuthErrorCodes": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.G),
/* harmony export */   "AuthImpl": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aJ),
/* harmony export */   "AuthPopup": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aM),
/* harmony export */   "EmailAuthCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.K),
/* harmony export */   "EmailAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.Q),
/* harmony export */   "FacebookAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   "FactorId": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   "FetchProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aN),
/* harmony export */   "GithubAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.W),
/* harmony export */   "GoogleAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.V),
/* harmony export */   "OAuthCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   "OAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.X),
/* harmony export */   "OperationType": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.O),
/* harmony export */   "PhoneAuthCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.M),
/* harmony export */   "PhoneAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   "PhoneMultiFactorGenerator": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.m),
/* harmony export */   "ProviderId": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "RecaptchaVerifier": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "SAMLAuthCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aO),
/* harmony export */   "SAMLAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   "SignInMethod": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "TotpMultiFactorGenerator": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.T),
/* harmony export */   "TotpSecret": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.n),
/* harmony export */   "TwitterAuthProvider": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "UserImpl": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aI),
/* harmony export */   "_assert": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aA),
/* harmony export */   "_castAuth": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aH),
/* harmony export */   "_fail": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.av),
/* harmony export */   "_generateEventId": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aL),
/* harmony export */   "_getClientVersion": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aK),
/* harmony export */   "_getInstance": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aC),
/* harmony export */   "_getRedirectResult": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aE),
/* harmony export */   "_overrideRedirectResult": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aF),
/* harmony export */   "_persistenceKeyName": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aD),
/* harmony export */   "addFrameworkForLogging": () => (/* binding */ addFrameworkForLogging),
/* harmony export */   "applyActionCode": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a5),
/* harmony export */   "beforeAuthStateChanged": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.w),
/* harmony export */   "browserLocalPersistence": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.b),
/* harmony export */   "browserPopupRedirectResolver": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.k),
/* harmony export */   "browserSessionPersistence": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   "checkActionCode": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a6),
/* harmony export */   "confirmPasswordReset": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a4),
/* harmony export */   "connectAuthEmulator": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "cordovaPopupRedirectResolver": () => (/* binding */ cordovaPopupRedirectResolver),
/* harmony export */   "createUserWithEmailAndPassword": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a8),
/* harmony export */   "debugErrorMap": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.D),
/* harmony export */   "deleteUser": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "fetchSignInMethodsForEmail": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ad),
/* harmony export */   "getAdditionalUserInfo": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ao),
/* harmony export */   "getAuth": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.o),
/* harmony export */   "getIdToken": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.al),
/* harmony export */   "getIdTokenResult": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.am),
/* harmony export */   "getMultiFactorResolver": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aq),
/* harmony export */   "getRedirectResult": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "inMemoryPersistence": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   "indexedDBLocalPersistence": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.i),
/* harmony export */   "initializeAuth": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   "initializeRecaptchaConfig": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.t),
/* harmony export */   "isSignInWithEmailLink": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ab),
/* harmony export */   "linkWithCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a0),
/* harmony export */   "linkWithPhoneNumber": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.l),
/* harmony export */   "linkWithPopup": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.d),
/* harmony export */   "linkWithRedirect": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "multiFactor": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ar),
/* harmony export */   "onAuthStateChanged": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.x),
/* harmony export */   "onIdTokenChanged": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.v),
/* harmony export */   "parseActionCodeURL": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ah),
/* harmony export */   "prodErrorMap": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "reauthenticateWithCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a1),
/* harmony export */   "reauthenticateWithPhoneNumber": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.r),
/* harmony export */   "reauthenticateWithPopup": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   "reauthenticateWithRedirect": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "reload": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ap),
/* harmony export */   "sendEmailVerification": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ae),
/* harmony export */   "sendPasswordResetEmail": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a3),
/* harmony export */   "sendSignInLinkToEmail": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aa),
/* harmony export */   "setPersistence": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "signInAnonymously": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__._),
/* harmony export */   "signInWithCredential": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.$),
/* harmony export */   "signInWithCustomToken": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a2),
/* harmony export */   "signInWithEmailAndPassword": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a9),
/* harmony export */   "signInWithEmailLink": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ac),
/* harmony export */   "signInWithPhoneNumber": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.s),
/* harmony export */   "signInWithPopup": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   "signInWithRedirect": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.f),
/* harmony export */   "signOut": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   "unlink": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.an),
/* harmony export */   "updateCurrentUser": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.z),
/* harmony export */   "updateEmail": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aj),
/* harmony export */   "updatePassword": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ak),
/* harmony export */   "updatePhoneNumber": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.u),
/* harmony export */   "updateProfile": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ai),
/* harmony export */   "useDeviceLanguage": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.y),
/* harmony export */   "verifyBeforeUpdateEmail": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.af),
/* harmony export */   "verifyPasswordResetCode": () => (/* reexport safe */ _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a7)
/* harmony export */ });
/* harmony import */ var D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 5861);
/* harmony import */ var _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-e3d5d3f4.js */ 9500);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ 2090);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/app */ 9752);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/logger */ 1877);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/component */ 4859);








/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function _cordovaWindow() {
  return window;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * How long to wait after the app comes back into focus before concluding that
 * the user closed the sign in tab.
 */


const REDIRECT_TIMEOUT_MS = 2000;
/**
 * Generates the URL for the OAuth handler.
 */

function _generateHandlerUrl(_x, _x2, _x3) {
  return _generateHandlerUrl2.apply(this, arguments);
}
/**
 * Validates that this app is valid for this project configuration
 */


function _generateHandlerUrl2() {
  _generateHandlerUrl2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, event, provider) {
    var _a; // Get the cordova plugins


    const {
      BuildInfo
    } = _cordovaWindow();

    (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.as)(event.sessionId, 'AuthEvent did not contain a session ID');
    const sessionDigest = yield computeSha256(event.sessionId);
    const additionalParams = {};

    if ((0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.at)()) {
      // iOS app identifier
      additionalParams['ibi'] = BuildInfo.packageName;
    } else if ((0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.au)()) {
      // Android app identifier
      additionalParams['apn'] = BuildInfo.packageName;
    } else {
      (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.av)(auth, "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
    } // Add the display name if available


    if (BuildInfo.displayName) {
      additionalParams['appDisplayName'] = BuildInfo.displayName;
    } // Attached the hashed session ID


    additionalParams['sessionId'] = sessionDigest;
    return (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aw)(auth, provider, event.type, undefined, (_a = event.eventId) !== null && _a !== void 0 ? _a : undefined, additionalParams);
  });
  return _generateHandlerUrl2.apply(this, arguments);
}

function _validateOrigin(_x4) {
  return _validateOrigin2.apply(this, arguments);
}

function _validateOrigin2() {
  _validateOrigin2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
    const {
      BuildInfo
    } = _cordovaWindow();

    const request = {};

    if ((0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.at)()) {
      request.iosBundleId = BuildInfo.packageName;
    } else if ((0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.au)()) {
      request.androidPackageName = BuildInfo.packageName;
    } else {
      (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.av)(auth, "operation-not-supported-in-this-environment"
      /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
      );
    } // Will fail automatically if package name is not authorized


    yield (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ax)(auth, request);
  });
  return _validateOrigin2.apply(this, arguments);
}

function _performRedirect(handlerUrl) {
  // Get the cordova plugins
  const {
    cordova
  } = _cordovaWindow();

  return new Promise(resolve => {
    cordova.plugins.browsertab.isAvailable(browserTabIsAvailable => {
      let iabRef = null;

      if (browserTabIsAvailable) {
        cordova.plugins.browsertab.openUrl(handlerUrl);
      } else {
        // TODO: Return the inappbrowser ref that's returned from the open call
        iabRef = cordova.InAppBrowser.open(handlerUrl, (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.ay)() ? '_blank' : '_system', 'location=yes');
      }

      resolve(iabRef);
    });
  });
}
/**
 * This function waits for app activity to be seen before resolving. It does
 * this by attaching listeners to various dom events. Once the app is determined
 * to be visible, this promise resolves. AFTER that resolution, the listeners
 * are detached and any browser tabs left open will be closed.
 */


function _waitForAppResume(_x5, _x6, _x7) {
  return _waitForAppResume2.apply(this, arguments);
}
/**
 * Checks the configuration of the Cordova environment. This has no side effect
 * if the configuration is correct; otherwise it throws an error with the
 * missing plugin.
 */


function _waitForAppResume2() {
  _waitForAppResume2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth, eventListener, iabRef) {
    // Get the cordova plugins
    const {
      cordova
    } = _cordovaWindow();

    let cleanup = () => {};

    try {
      yield new Promise((resolve, reject) => {
        let onCloseTimer = null; // DEFINE ALL THE CALLBACKS =====

        function authEventSeen() {
          var _a; // Auth event was detected. Resolve this promise and close the extra
          // window if it's still open.


          resolve();
          const closeBrowserTab = (_a = cordova.plugins.browsertab) === null || _a === void 0 ? void 0 : _a.close;

          if (typeof closeBrowserTab === 'function') {
            closeBrowserTab();
          } // Close inappbrowser emebedded webview in iOS7 and 8 case if still
          // open.


          if (typeof (iabRef === null || iabRef === void 0 ? void 0 : iabRef.close) === 'function') {
            iabRef.close();
          }
        }

        function resumed() {
          if (onCloseTimer) {
            // This code already ran; do not rerun.
            return;
          }

          onCloseTimer = window.setTimeout(() => {
            // Wait two seeconds after resume then reject.
            reject((0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.az)(auth, "redirect-cancelled-by-user"
            /* AuthErrorCode.REDIRECT_CANCELLED_BY_USER */
            ));
          }, REDIRECT_TIMEOUT_MS);
        }

        function visibilityChanged() {
          if ((document === null || document === void 0 ? void 0 : document.visibilityState) === 'visible') {
            resumed();
          }
        } // ATTACH ALL THE LISTENERS =====
        // Listen for the auth event


        eventListener.addPassiveListener(authEventSeen); // Listen for resume and visibility events

        document.addEventListener('resume', resumed, false);

        if ((0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.au)()) {
          document.addEventListener('visibilitychange', visibilityChanged, false);
        } // SETUP THE CLEANUP FUNCTION =====


        cleanup = () => {
          eventListener.removePassiveListener(authEventSeen);
          document.removeEventListener('resume', resumed, false);
          document.removeEventListener('visibilitychange', visibilityChanged, false);

          if (onCloseTimer) {
            window.clearTimeout(onCloseTimer);
          }
        };
      });
    } finally {
      cleanup();
    }
  });
  return _waitForAppResume2.apply(this, arguments);
}

function _checkCordovaConfiguration(auth) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

  const win = _cordovaWindow(); // Check all dependencies installed.
  // https://github.com/nordnet/cordova-universal-links-plugin
  // Note that cordova-universal-links-plugin has been abandoned.
  // A fork with latest fixes is available at:
  // https://www.npmjs.com/package/cordova-universal-links-plugin-fix


  (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aA)(typeof ((_a = win === null || win === void 0 ? void 0 : win.universalLinks) === null || _a === void 0 ? void 0 : _a.subscribe) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-universal-links-plugin-fix'
  }); // https://www.npmjs.com/package/cordova-plugin-buildinfo


  (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aA)(typeof ((_b = win === null || win === void 0 ? void 0 : win.BuildInfo) === null || _b === void 0 ? void 0 : _b.packageName) !== 'undefined', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-buildInfo'
  }); // https://github.com/google/cordova-plugin-browsertab


  (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aA)(typeof ((_e = (_d = (_c = win === null || win === void 0 ? void 0 : win.cordova) === null || _c === void 0 ? void 0 : _c.plugins) === null || _d === void 0 ? void 0 : _d.browsertab) === null || _e === void 0 ? void 0 : _e.openUrl) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-browsertab'
  });

  (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aA)(typeof ((_h = (_g = (_f = win === null || win === void 0 ? void 0 : win.cordova) === null || _f === void 0 ? void 0 : _f.plugins) === null || _g === void 0 ? void 0 : _g.browsertab) === null || _h === void 0 ? void 0 : _h.isAvailable) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-browsertab'
  }); // https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-inappbrowser/


  (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aA)(typeof ((_k = (_j = win === null || win === void 0 ? void 0 : win.cordova) === null || _j === void 0 ? void 0 : _j.InAppBrowser) === null || _k === void 0 ? void 0 : _k.open) === 'function', auth, "invalid-cordova-configuration"
  /* AuthErrorCode.INVALID_CORDOVA_CONFIGURATION */
  , {
    missingPlugin: 'cordova-plugin-inappbrowser'
  });
}
/**
 * Computes the SHA-256 of a session ID. The SubtleCrypto interface is only
 * available in "secure" contexts, which covers Cordova (which is served on a file
 * protocol).
 */


function computeSha256(_x8) {
  return _computeSha.apply(this, arguments);
}

function _computeSha() {
  _computeSha = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (sessionId) {
    const bytes = stringToArrayBuffer(sessionId); // TODO: For IE11 crypto has a different name and this operation comes back
    //       as an object, not a promise. This is the old proposed standard that
    //       is used by IE11:
    // https://www.w3.org/TR/2013/WD-WebCryptoAPI-20130108/#cryptooperation-interface

    const buf = yield crypto.subtle.digest('SHA-256', bytes);
    const arr = Array.from(new Uint8Array(buf));
    return arr.map(num => num.toString(16).padStart(2, '0')).join('');
  });
  return _computeSha.apply(this, arguments);
}

function stringToArrayBuffer(str) {
  // This function is only meant to deal with an ASCII charset and makes
  // certain simplifying assumptions.
  (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.as)(/[0-9a-zA-Z]+/.test(str), 'Can only convert alpha-numeric strings');

  if (typeof TextEncoder !== 'undefined') {
    return new TextEncoder().encode(str);
  }

  const buff = new ArrayBuffer(str.length);
  const view = new Uint8Array(buff);

  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i);
  }

  return view;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const SESSION_ID_LENGTH = 20;
/** Custom AuthEventManager that adds passive listeners to events */

class CordovaAuthEventManager extends _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aB {
  constructor() {
    super(...arguments);
    this.passiveListeners = new Set();
    this.initPromise = new Promise(resolve => {
      this.resolveInialized = resolve;
    });
  }

  addPassiveListener(cb) {
    this.passiveListeners.add(cb);
  }

  removePassiveListener(cb) {
    this.passiveListeners.delete(cb);
  } // In a Cordova environment, this manager can live through multiple redirect
  // operations


  resetRedirect() {
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
  }
  /** Override the onEvent method */


  onEvent(event) {
    this.resolveInialized();
    this.passiveListeners.forEach(cb => cb(event));
    return super.onEvent(event);
  }

  initialized() {
    var _this = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.initPromise;
    })();
  }

}
/**
 * Generates a (partial) {@link AuthEvent}.
 */


function _generateNewEvent(auth, type, eventId = null) {
  return {
    type,
    eventId,
    urlResponse: null,
    sessionId: generateSessionId(),
    postBody: null,
    tenantId: auth.tenantId,
    error: (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.az)(auth, "no-auth-event"
    /* AuthErrorCode.NO_AUTH_EVENT */
    )
  };
}

function _savePartialEvent(auth, event) {
  return storage()._set(persistenceKey(auth), event);
}

function _getAndRemoveEvent(_x9) {
  return _getAndRemoveEvent2.apply(this, arguments);
}

function _getAndRemoveEvent2() {
  _getAndRemoveEvent2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (auth) {
    const event = yield storage()._get(persistenceKey(auth));

    if (event) {
      yield storage()._remove(persistenceKey(auth));
    }

    return event;
  });
  return _getAndRemoveEvent2.apply(this, arguments);
}

function _eventFromPartialAndUrl(partialEvent, url) {
  var _a, _b; // Parse the deep link within the dynamic link URL.


  const callbackUrl = _getDeepLinkFromCallback(url); // Confirm it is actually a callback URL.
  // Currently the universal link will be of this format:
  // https://<AUTH_DOMAIN>/__/auth/callback<OAUTH_RESPONSE>
  // This is a fake URL but is not intended to take the user anywhere
  // and just redirect to the app.


  if (callbackUrl.includes('/__/auth/callback')) {
    // Check if there is an error in the URL.
    // This mechanism is also used to pass errors back to the app:
    // https://<AUTH_DOMAIN>/__/auth/callback?firebaseError=<STRINGIFIED_ERROR>
    const params = searchParamsOrEmpty(callbackUrl); // Get the error object corresponding to the stringified error if found.

    const errorObject = params['firebaseError'] ? parseJsonOrNull(decodeURIComponent(params['firebaseError'])) : null;
    const code = (_b = (_a = errorObject === null || errorObject === void 0 ? void 0 : errorObject['code']) === null || _a === void 0 ? void 0 : _a.split('auth/')) === null || _b === void 0 ? void 0 : _b[1];
    const error = code ? (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.az)(code) : null;

    if (error) {
      return {
        type: partialEvent.type,
        eventId: partialEvent.eventId,
        tenantId: partialEvent.tenantId,
        error,
        urlResponse: null,
        sessionId: null,
        postBody: null
      };
    } else {
      return {
        type: partialEvent.type,
        eventId: partialEvent.eventId,
        tenantId: partialEvent.tenantId,
        sessionId: partialEvent.sessionId,
        urlResponse: callbackUrl,
        postBody: null
      };
    }
  }

  return null;
}

function generateSessionId() {
  const chars = [];
  const allowedChars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < SESSION_ID_LENGTH; i++) {
    const idx = Math.floor(Math.random() * allowedChars.length);
    chars.push(allowedChars.charAt(idx));
  }

  return chars.join('');
}

function storage() {
  return (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aC)(_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.b);
}

function persistenceKey(auth) {
  return (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aD)("authEvent"
  /* KeyName.AUTH_EVENT */
  , auth.config.apiKey, auth.name);
}

function parseJsonOrNull(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
} // Exported for testing


function _getDeepLinkFromCallback(url) {
  const params = searchParamsOrEmpty(url);
  const link = params['link'] ? decodeURIComponent(params['link']) : undefined; // Double link case (automatic redirect)

  const doubleDeepLink = searchParamsOrEmpty(link)['link']; // iOS custom scheme links.

  const iOSDeepLink = params['deep_link_id'] ? decodeURIComponent(params['deep_link_id']) : undefined;
  const iOSDoubleDeepLink = searchParamsOrEmpty(iOSDeepLink)['link'];
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
/**
 * Optimistically tries to get search params from a string, or else returns an
 * empty search params object.
 */


function searchParamsOrEmpty(url) {
  if (!(url === null || url === void 0 ? void 0 : url.includes('?'))) {
    return {};
  }

  const [_, ...rest] = url.split('?');
  return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.querystringDecode)(rest.join('?'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * How long to wait for the initial auth event before concluding no
 * redirect pending
 */


const INITIAL_EVENT_TIMEOUT_MS = 500;

class CordovaPopupRedirectResolver {
  constructor() {
    this._redirectPersistence = _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.a;
    this._shouldInitProactively = true; // This is lightweight for Cordova

    this.eventManagers = new Map();
    this.originValidationPromises = {};
    this._completeRedirectFn = _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aE;
    this._overrideRedirectResult = _index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aF;
  }

  _initialize(auth) {
    var _this2 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const key = auth._key();

      let manager = _this2.eventManagers.get(key);

      if (!manager) {
        manager = new CordovaAuthEventManager(auth);

        _this2.eventManagers.set(key, manager);

        _this2.attachCallbackListeners(auth, manager);
      }

      return manager;
    })();
  }

  _openPopup(auth) {
    (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.av)(auth, "operation-not-supported-in-this-environment"
    /* AuthErrorCode.OPERATION_NOT_SUPPORTED */
    );
  }

  _openRedirect(auth, provider, authType, eventId) {
    var _this3 = this;

    return (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _checkCordovaConfiguration(auth);

      const manager = yield _this3._initialize(auth);
      yield manager.initialized(); // Reset the persisted redirect states. This does not matter on Web where
      // the redirect always blows away application state entirely. On Cordova,
      // the app maintains control flow through the redirect.

      manager.resetRedirect();

      (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aG)();

      yield _this3._originValidation(auth);

      const event = _generateNewEvent(auth, authType, eventId);

      yield _savePartialEvent(auth, event);
      const url = yield _generateHandlerUrl(auth, event, provider);
      const iabRef = yield _performRedirect(url);
      return _waitForAppResume(auth, manager, iabRef);
    })();
  }

  _isIframeWebStorageSupported(_auth, _cb) {
    throw new Error('Method not implemented.');
  }

  _originValidation(auth) {
    const key = auth._key();

    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth);
    }

    return this.originValidationPromises[key];
  }

  attachCallbackListeners(auth, manager) {
    // Get the global plugins
    const {
      universalLinks,
      handleOpenURL,
      BuildInfo
    } = _cordovaWindow();

    const noEventTimeout = setTimeout( /*#__PURE__*/(0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // We didn't see that initial event. Clear any pending object and
      // dispatch no event
      yield _getAndRemoveEvent(auth);
      manager.onEvent(generateNoEvent());
    }), INITIAL_EVENT_TIMEOUT_MS);

    const universalLinksCb = /*#__PURE__*/function () {
      var _ref2 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (eventData) {
        // We have an event so we can clear the no event timeout
        clearTimeout(noEventTimeout);
        const partialEvent = yield _getAndRemoveEvent(auth);
        let finalEvent = null;

        if (partialEvent && (eventData === null || eventData === void 0 ? void 0 : eventData['url'])) {
          finalEvent = _eventFromPartialAndUrl(partialEvent, eventData['url']);
        } // If finalEvent is never filled, trigger with no event


        manager.onEvent(finalEvent || generateNoEvent());
      });

      return function universalLinksCb(_x10) {
        return _ref2.apply(this, arguments);
      };
    }(); // Universal links subscriber doesn't exist for iOS, so we need to check


    if (typeof universalLinks !== 'undefined' && typeof universalLinks.subscribe === 'function') {
      universalLinks.subscribe(null, universalLinksCb);
    } // iOS 7 or 8 custom URL schemes.
    // This is also the current default behavior for iOS 9+.
    // For this to work, cordova-plugin-customurlscheme needs to be installed.
    // https://github.com/EddyVerbruggen/Custom-URL-scheme
    // Do not overwrite the existing developer's URL handler.


    const existingHandleOpenURL = handleOpenURL;
    const packagePrefix = `${BuildInfo.packageName.toLowerCase()}://`;

    _cordovaWindow().handleOpenURL = /*#__PURE__*/function () {
      var _ref3 = (0,D_NEW_PROJECT_practice_ANG_API_CALLS_patch_post_api_call_firebase_with_authguard_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url) {
        if (url.toLowerCase().startsWith(packagePrefix)) {
          // We want this intentionally to float
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          universalLinksCb({
            url
          });
        } // Call the developer's handler if it is present.


        if (typeof existingHandleOpenURL === 'function') {
          try {
            existingHandleOpenURL(url);
          } catch (e) {
            // This is a developer error. Don't stop the flow of the SDK.
            console.error(e);
          }
        }
      });

      return function (_x11) {
        return _ref3.apply(this, arguments);
      };
    }();
  }

}
/**
 * An implementation of {@link PopupRedirectResolver} suitable for Cordova
 * based applications.
 *
 * @public
 */


const cordovaPopupRedirectResolver = CordovaPopupRedirectResolver;

function generateNoEvent() {
  return {
    type: "unknown"
    /* AuthEventType.UNKNOWN */
    ,
    eventId: null,
    sessionId: null,
    urlResponse: null,
    postBody: null,
    tenantId: null,
    error: (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.az)("no-auth-event"
    /* AuthErrorCode.NO_AUTH_EVENT */
    )
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This function should only be called by frameworks (e.g. FirebaseUI-web) to log their usage.
// It is not intended for direct use by developer apps. NO jsdoc here to intentionally leave it out
// of autogenerated documentation pages to reduce accidental misuse.


function addFrameworkForLogging(auth, framework) {
  (0,_index_e3d5d3f4_js__WEBPACK_IMPORTED_MODULE_1__.aH)(auth)._logFramework(framework);
}

 //# sourceMappingURL=internal.js.map

/***/ }),

/***/ 1025:
/*!********************************************************************************************!*\
  !*** ./node_modules/@angular/fire/node_modules/firebase/compat/auth/dist/esm/index.esm.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_auth_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth-compat */ 7874);
 //# sourceMappingURL=index.esm.js.map

/***/ })

}]);