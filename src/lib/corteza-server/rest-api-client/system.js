import axios from 'axios'

/* eslint-disable */

// This is a generated file.
// See README.md file for update instructions

export default class System {
  constructor ({baseURL, headers, jwt} = {}) {
    this.jwt = null
    this.baseURL = baseURL

    this.headers = {
      'Content-Type': 'application/json',
    }

    this.setHeaders(headers)

    if (this.isValidJWT(jwt)) {
      this.setJWT(jwt)
    }
  }

  setJWT (jwt) {
    if (this.isValidJWT(jwt)) {
      this.jwt = jwt
      this.headers['Authorization'] = 'Bearer ' + jwt
    } else {
      throw new Error('JWT value too short', {
        jwt,
      })
    }

    return this
  }

  setHeaders (headers) {
    if (typeof headers === 'object') {
      this.headers = headers
    }

    return this
  }

  isValidJWT (jwt) {
    return jwt && jwt.length > 100
  }

  stdReject (reject) {
    return (error) => {
      reject(error)
    }
  }

  stdResolve (resolve, reject) {
    return (response) => {
      if (response.data.error) {
        reject(response.data.error)
      } else {
        resolve(response.data.response)
      }
    }
  }

  api () {
    return axios.create({
      withCredentials: true,
      baseURL: this.baseURL,
      headers: this.headers,
    })
  }

  // Returns auth settings
  async authSettings (args = {}) {



    let cfg = {
      method: 'get',
      url: this.authSettingsEndpoint({  }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authSettingsEndpoint () {
    return `/auth/`
  }

  // Check JWT token
  async authCheck (args = {}) {



    let cfg = {
      method: 'get',
      url: this.authCheckEndpoint({  }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authCheckEndpoint () {
    return `/auth/check`
  }

  // Exchange auth token for JWT
  async authExchangeAuthToken (args = {}) {
    const {token, } = args
    if (!token) {
      console.error('authExchangeAuthToken failed, field token is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field token is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authExchangeAuthTokenEndpoint({  }),
    }

    cfg.data = {
      token,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authExchangeAuthTokenEndpoint () {
    return `/auth/exchange`
  }

  // Logout
  async authLogout (args = {}) {



    let cfg = {
      method: 'get',
      url: this.authLogoutEndpoint({  }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authLogoutEndpoint () {
    return `/auth/logout`
  }

  // Login user
  async authInternalLogin (args = {}) {
    const {email, password, } = args
    if (!email) {
      console.error('authInternalLogin failed, field email is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field email is empty')
    }
    if (!password) {
      console.error('authInternalLogin failed, field password is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field password is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authInternalLoginEndpoint({  }),
    }

    cfg.data = {
      email,
      password,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authInternalLoginEndpoint () {
    return `/auth/internal/login`
  }

  // User signup/registration
  async authInternalSignup (args = {}) {
    const {email, username, password, handle, name, } = args
    if (!email) {
      console.error('authInternalSignup failed, field email is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field email is empty')
    }
    if (!password) {
      console.error('authInternalSignup failed, field password is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field password is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authInternalSignupEndpoint({  }),
    }

    cfg.data = {
      email,
      username,
      password,
      handle,
      name,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authInternalSignupEndpoint () {
    return `/auth/internal/signup`
  }

  // Request password reset token (via email)
  async authInternalRequestPasswordReset (args = {}) {
    const {email, } = args
    if (!email) {
      console.error('authInternalRequestPasswordReset failed, field email is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field email is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authInternalRequestPasswordResetEndpoint({  }),
    }

    cfg.data = {
      email,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authInternalRequestPasswordResetEndpoint () {
    return `/auth/internal/request-password-reset`
  }

  // Exchange password reset token for new token and user info
  async authInternalExchangePasswordResetToken (args = {}) {
    const {token, } = args
    if (!token) {
      console.error('authInternalExchangePasswordResetToken failed, field token is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field token is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authInternalExchangePasswordResetTokenEndpoint({  }),
    }

    cfg.data = {
      token,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authInternalExchangePasswordResetTokenEndpoint () {
    return `/auth/internal/exchange-password-reset-token`
  }

  // Reset password with exchanged password reset token
  async authInternalResetPassword (args = {}) {
    const {token, password, } = args
    if (!token) {
      console.error('authInternalResetPassword failed, field token is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field token is empty')
    }
    if (!password) {
      console.error('authInternalResetPassword failed, field password is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field password is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authInternalResetPasswordEndpoint({  }),
    }

    cfg.data = {
      token,
      password,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authInternalResetPasswordEndpoint () {
    return `/auth/internal/reset-password`
  }

  // Confirm email with token
  async authInternalConfirmEmail (args = {}) {
    const {token, } = args
    if (!token) {
      console.error('authInternalConfirmEmail failed, field token is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field token is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authInternalConfirmEmailEndpoint({  }),
    }

    cfg.data = {
      token,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authInternalConfirmEmailEndpoint () {
    return `/auth/internal/confirm-email`
  }

  // Changes password for current user, requires current password
  async authInternalChangePassword (args = {}) {
    const {oldPassword, newPassword, } = args
    if (!oldPassword) {
      console.error('authInternalChangePassword failed, field oldPassword is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field oldPassword is empty')
    }
    if (!newPassword) {
      console.error('authInternalChangePassword failed, field newPassword is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field newPassword is empty')
    }

    let cfg = {
      method: 'post',
      url: this.authInternalChangePasswordEndpoint({  }),
    }

    cfg.data = {
      oldPassword,
      newPassword,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  authInternalChangePasswordEndpoint () {
    return `/auth/internal/change-password`
  }

  // List settings
  async settingsList (args = {}) {
    const {prefix, } = args


    let cfg = {
      method: 'get',
      url: this.settingsListEndpoint({  }),
    }
    cfg.params = {
      prefix,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  settingsListEndpoint () {
    return `/settings/`
  }

  // Update settings
  async settingsUpdate (args = {}) {
    const {values, } = args
    if (!values) {
      console.error('settingsUpdate failed, field values is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field values is empty')
    }

    let cfg = {
      method: 'patch',
      url: this.settingsUpdateEndpoint({  }),
    }

    cfg.data = {
      values,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  settingsUpdateEndpoint () {
    return `/settings/`
  }

  // Check JWT token
  async settingsGet (args = {}) {
    const {key, ownerID, } = args
    if (!key) {
      console.error('settingsGet failed, field key is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field key is empty')
    }

    let cfg = {
      method: 'get',
      url: this.settingsGetEndpoint({
        key,
      }),
    }
    cfg.params = {
      ownerID,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  settingsGetEndpoint ({key, } = {}) {
    return `/settings/${key}`
  }

  // Set a value for a key
  async settingsSet (args = {}) {
    const {key, ownerID, value, } = args
    if (!key) {
      console.error('settingsSet failed, field key is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field key is empty')
    }
    if (!value) {
      console.error('settingsSet failed, field value is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field value is empty')
    }

    let cfg = {
      method: 'put',
      url: this.settingsSetEndpoint({
        key,
      }),
    }

    cfg.data = {
      ownerID,
      value,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  settingsSetEndpoint ({key, } = {}) {
    return `/settings/${key}`
  }

  // List organisations
  async organisationList (args = {}) {
    const {query, } = args


    let cfg = {
      method: 'get',
      url: this.organisationListEndpoint({  }),
    }
    cfg.params = {
      query,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  organisationListEndpoint () {
    return `/organisations/`
  }

  // Create organisation
  async organisationCreate (args = {}) {
    const {name, } = args
    if (!name) {
      console.error('organisationCreate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'post',
      url: this.organisationCreateEndpoint({  }),
    }

    cfg.data = {
      name,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  organisationCreateEndpoint () {
    return `/organisations/`
  }

  // Update organisation details
  async organisationUpdate (args = {}) {
    const {id, name, } = args
    if (!name) {
      console.error('organisationUpdate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'put',
      url: this.organisationUpdateEndpoint({
        id,
      }),
    }

    cfg.data = {
      name,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  organisationUpdateEndpoint ({id, } = {}) {
    return `/organisations/${id}`
  }

  // Remove organisation
  async organisationDelete (args = {}) {
    const {id, } = args
    if (!id) {
      console.error('organisationDelete failed, field id is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field id is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.organisationDeleteEndpoint({
        id,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  organisationDeleteEndpoint ({id, } = {}) {
    return `/organisations/${id}`
  }

  // Read organisation details
  async organisationRead (args = {}) {
    const {id, } = args
    if (!id) {
      console.error('organisationRead failed, field id is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field id is empty')
    }

    let cfg = {
      method: 'get',
      url: this.organisationReadEndpoint({  }),
    }
    cfg.params = {
      id,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  organisationReadEndpoint () {
    return `/organisations/${id}`
  }

  // Archive organisation
  async organisationArchive (args = {}) {
    const {id, } = args
    if (!id) {
      console.error('organisationArchive failed, field id is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field id is empty')
    }

    let cfg = {
      method: 'post',
      url: this.organisationArchiveEndpoint({
        id,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  organisationArchiveEndpoint ({id, } = {}) {
    return `/organisations/${id}/archive`
  }

  // List roles
  async roleList (args = {}) {
    const {query, } = args


    let cfg = {
      method: 'get',
      url: this.roleListEndpoint({  }),
    }
    cfg.params = {
      query,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleListEndpoint () {
    return `/roles/`
  }

  // Update role details
  async roleCreate (args = {}) {
    const {name, handle, members, } = args
    if (!name) {
      console.error('roleCreate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }
    if (!handle) {
      console.error('roleCreate failed, field handle is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field handle is empty')
    }

    let cfg = {
      method: 'post',
      url: this.roleCreateEndpoint({  }),
    }

    cfg.data = {
      name,
      handle,
      members,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleCreateEndpoint () {
    return `/roles/`
  }

  // Update role details
  async roleUpdate (args = {}) {
    const {roleID, name, handle, members, } = args
    if (!roleID) {
      console.error('roleUpdate failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'put',
      url: this.roleUpdateEndpoint({
        roleID,
      }),
    }

    cfg.data = {
      name,
      handle,
      members,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleUpdateEndpoint ({roleID, } = {}) {
    return `/roles/${roleID}`
  }

  // Read role details and memberships
  async roleRead (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('roleRead failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.roleReadEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleReadEndpoint ({roleID, } = {}) {
    return `/roles/${roleID}`
  }

  // Remove role
  async roleDelete (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('roleDelete failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.roleDeleteEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleDeleteEndpoint ({roleID, } = {}) {
    return `/roles/${roleID}`
  }

  // Archive role
  async roleArchive (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('roleArchive failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.roleArchiveEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleArchiveEndpoint ({roleID, } = {}) {
    return `/roles/${roleID}/archive`
  }

  // Move role to different organisation
  async roleMove (args = {}) {
    const {roleID, organisationID, } = args
    if (!roleID) {
      console.error('roleMove failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!organisationID) {
      console.error('roleMove failed, field organisationID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field organisationID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.roleMoveEndpoint({
        roleID,
      }),
    }

    cfg.data = {
      organisationID,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleMoveEndpoint ({roleID, } = {}) {
    return `/roles/${roleID}/move`
  }

  // Merge one role into another
  async roleMerge (args = {}) {
    const {roleID, destination, } = args
    if (!roleID) {
      console.error('roleMerge failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!destination) {
      console.error('roleMerge failed, field destination is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field destination is empty')
    }

    let cfg = {
      method: 'post',
      url: this.roleMergeEndpoint({
        roleID,
      }),
    }

    cfg.data = {
      destination,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleMergeEndpoint ({roleID, } = {}) {
    return `/roles/${roleID}/merge`
  }

  // Returns all role members
  async roleMemberList (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('roleMemberList failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.roleMemberListEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleMemberListEndpoint ({roleID, } = {}) {
    return `/roles/${roleID}/members`
  }

  // Add member to a role
  async roleMemberAdd (args = {}) {
    const {roleID, userID, } = args
    if (!roleID) {
      console.error('roleMemberAdd failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!userID) {
      console.error('roleMemberAdd failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.roleMemberAddEndpoint({
        roleID,
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleMemberAddEndpoint ({roleID, userID, } = {}) {
    return `/roles/${roleID}/member/${userID}`
  }

  // Remove member from a role
  async roleMemberRemove (args = {}) {
    const {roleID, userID, } = args
    if (!roleID) {
      console.error('roleMemberRemove failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!userID) {
      console.error('roleMemberRemove failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.roleMemberRemoveEndpoint({
        roleID,
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  roleMemberRemoveEndpoint ({roleID, userID, } = {}) {
    return `/roles/${roleID}/member/${userID}`
  }

  // Search users (Directory)
  async userList (args = {}) {
    const {query, username, email, handle, kind, incDeleted, incSuspended, sort, page, perPage, } = args


    let cfg = {
      method: 'get',
      url: this.userListEndpoint({  }),
    }
    cfg.params = {
      query,
      username,
      email,
      handle,
      kind,
      incDeleted,
      incSuspended,
      sort,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userListEndpoint () {
    return `/users/`
  }

  // Create user
  async userCreate (args = {}) {
    const {email, name, handle, kind, } = args
    if (!email) {
      console.error('userCreate failed, field email is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field email is empty')
    }

    let cfg = {
      method: 'post',
      url: this.userCreateEndpoint({  }),
    }

    cfg.data = {
      email,
      name,
      handle,
      kind,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userCreateEndpoint () {
    return `/users/`
  }

  // Update user details
  async userUpdate (args = {}) {
    const {userID, email, name, handle, kind, } = args
    if (!userID) {
      console.error('userUpdate failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }
    if (!email) {
      console.error('userUpdate failed, field email is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field email is empty')
    }
    if (!name) {
      console.error('userUpdate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'put',
      url: this.userUpdateEndpoint({
        userID,
      }),
    }

    cfg.data = {
      email,
      name,
      handle,
      kind,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userUpdateEndpoint ({userID, } = {}) {
    return `/users/${userID}`
  }

  // Read user details
  async userRead (args = {}) {
    const {userID, } = args
    if (!userID) {
      console.error('userRead failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.userReadEndpoint({
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userReadEndpoint ({userID, } = {}) {
    return `/users/${userID}`
  }

  // Remove user
  async userDelete (args = {}) {
    const {userID, } = args
    if (!userID) {
      console.error('userDelete failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.userDeleteEndpoint({
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userDeleteEndpoint ({userID, } = {}) {
    return `/users/${userID}`
  }

  // Suspend user
  async userSuspend (args = {}) {
    const {userID, } = args
    if (!userID) {
      console.error('userSuspend failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.userSuspendEndpoint({
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userSuspendEndpoint ({userID, } = {}) {
    return `/users/${userID}/suspend`
  }

  // Unsuspend user
  async userUnsuspend (args = {}) {
    const {userID, } = args
    if (!userID) {
      console.error('userUnsuspend failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.userUnsuspendEndpoint({
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userUnsuspendEndpoint ({userID, } = {}) {
    return `/users/${userID}/unsuspend`
  }

  // Set&#x27;s or changes user&#x27;s password
  async userSetPassword (args = {}) {
    const {userID, password, } = args
    if (!userID) {
      console.error('userSetPassword failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }
    if (!password) {
      console.error('userSetPassword failed, field password is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field password is empty')
    }

    let cfg = {
      method: 'post',
      url: this.userSetPasswordEndpoint({
        userID,
      }),
    }

    cfg.data = {
      password,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userSetPasswordEndpoint ({userID, } = {}) {
    return `/users/${userID}/password`
  }

  // Add member to a role
  async userMembershipList (args = {}) {
    const {userID, } = args
    if (!userID) {
      console.error('userMembershipList failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.userMembershipListEndpoint({
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userMembershipListEndpoint ({userID, } = {}) {
    return `/users/${userID}/membership`
  }

  // Add role to a user
  async userMembershipAdd (args = {}) {
    const {roleID, userID, } = args
    if (!roleID) {
      console.error('userMembershipAdd failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!userID) {
      console.error('userMembershipAdd failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.userMembershipAddEndpoint({
        roleID,
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userMembershipAddEndpoint ({roleID, userID, } = {}) {
    return `/users/${userID}/membership/${roleID}`
  }

  // Remove role from a user
  async userMembershipRemove (args = {}) {
    const {roleID, userID, } = args
    if (!roleID) {
      console.error('userMembershipRemove failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!userID) {
      console.error('userMembershipRemove failed, field userID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field userID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.userMembershipRemoveEndpoint({
        roleID,
        userID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  userMembershipRemoveEndpoint ({roleID, userID, } = {}) {
    return `/users/${userID}/membership/${roleID}`
  }

  // List applications
  async applicationList (args = {}) {



    let cfg = {
      method: 'get',
      url: this.applicationListEndpoint({  }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  applicationListEndpoint () {
    return `/application/`
  }

  // Create application
  async applicationCreate (args = {}) {
    const {name, enabled, unify, config, } = args
    if (!name) {
      console.error('applicationCreate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'post',
      url: this.applicationCreateEndpoint({  }),
    }

    cfg.data = {
      name,
      enabled,
      unify,
      config,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  applicationCreateEndpoint () {
    return `/application/`
  }

  // Update user details
  async applicationUpdate (args = {}) {
    const {applicationID, name, enabled, unify, config, } = args
    if (!applicationID) {
      console.error('applicationUpdate failed, field applicationID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field applicationID is empty')
    }
    if (!name) {
      console.error('applicationUpdate failed, field name is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field name is empty')
    }

    let cfg = {
      method: 'put',
      url: this.applicationUpdateEndpoint({
        applicationID,
      }),
    }

    cfg.data = {
      name,
      enabled,
      unify,
      config,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  applicationUpdateEndpoint ({applicationID, } = {}) {
    return `/application/${applicationID}`
  }

  // Read application details
  async applicationRead (args = {}) {
    const {applicationID, } = args
    if (!applicationID) {
      console.error('applicationRead failed, field applicationID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field applicationID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.applicationReadEndpoint({
        applicationID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  applicationReadEndpoint ({applicationID, } = {}) {
    return `/application/${applicationID}`
  }

  // Remove application
  async applicationDelete (args = {}) {
    const {applicationID, } = args
    if (!applicationID) {
      console.error('applicationDelete failed, field applicationID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field applicationID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.applicationDeleteEndpoint({
        applicationID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  applicationDeleteEndpoint ({applicationID, } = {}) {
    return `/application/${applicationID}`
  }

  // Retrieve defined permissions
  async permissionsList (args = {}) {



    let cfg = {
      method: 'get',
      url: this.permissionsListEndpoint({  }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsListEndpoint () {
    return `/permissions/`
  }

  // Effective rules for current user
  async permissionsEffective (args = {}) {
    const {resource, } = args


    let cfg = {
      method: 'get',
      url: this.permissionsEffectiveEndpoint({  }),
    }
    cfg.params = {
      resource,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsEffectiveEndpoint () {
    return `/permissions/effective`
  }

  // Retrieve role permissions
  async permissionsRead (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('permissionsRead failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.permissionsReadEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsReadEndpoint ({roleID, } = {}) {
    return `/permissions/${roleID}/rules`
  }

  // Remove all defined role permissions
  async permissionsDelete (args = {}) {
    const {roleID, } = args
    if (!roleID) {
      console.error('permissionsDelete failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.permissionsDeleteEndpoint({
        roleID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsDeleteEndpoint ({roleID, } = {}) {
    return `/permissions/${roleID}/rules`
  }

  // Update permission settings
  async permissionsUpdate (args = {}) {
    const {roleID, rules, } = args
    if (!roleID) {
      console.error('permissionsUpdate failed, field roleID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field roleID is empty')
    }
    if (!rules) {
      console.error('permissionsUpdate failed, field rules is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field rules is empty')
    }

    let cfg = {
      method: 'patch',
      url: this.permissionsUpdateEndpoint({
        roleID,
      }),
    }

    cfg.data = {
      rules,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  permissionsUpdateEndpoint ({roleID, } = {}) {
    return `/permissions/${roleID}/rules`
  }

  // List/read automation script
  async automationScriptList (args = {}) {
    const {query, resource, incDeleted, page, perPage, } = args


    let cfg = {
      method: 'get',
      url: this.automationScriptListEndpoint({  }),
    }
    cfg.params = {
      query,
      resource,
      incDeleted,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptListEndpoint () {
    return `/automation/script/`
  }

  // Add new automation script
  async automationScriptCreate (args = {}) {
    const {name, sourceRef, source, runAs, runInUA, timeout, critical, async, enabled, triggers, } = args


    let cfg = {
      method: 'post',
      url: this.automationScriptCreateEndpoint({  }),
    }

    cfg.data = {
      name,
      sourceRef,
      source,
      runAs,
      runInUA,
      timeout,
      critical,
      async,
      enabled,
      triggers,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptCreateEndpoint () {
    return `/automation/script/`
  }

  // Read automation script by ID
  async automationScriptRead (args = {}) {
    const {scriptID, } = args
    if (!scriptID) {
      console.error('automationScriptRead failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.automationScriptReadEndpoint({
        scriptID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptReadEndpoint ({scriptID, } = {}) {
    return `/automation/script/${scriptID}`
  }

  // Update automation script
  async automationScriptUpdate (args = {}) {
    const {scriptID, name, sourceRef, source, runAs, runInUA, timeout, critical, async, enabled, triggers, } = args
    if (!scriptID) {
      console.error('automationScriptUpdate failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationScriptUpdateEndpoint({
        scriptID,
      }),
    }

    cfg.data = {
      name,
      sourceRef,
      source,
      runAs,
      runInUA,
      timeout,
      critical,
      async,
      enabled,
      triggers,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptUpdateEndpoint ({scriptID, } = {}) {
    return `/automation/script/${scriptID}`
  }

  // Delete script
  async automationScriptDelete (args = {}) {
    const {scriptID, } = args
    if (!scriptID) {
      console.error('automationScriptDelete failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.automationScriptDeleteEndpoint({
        scriptID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptDeleteEndpoint ({scriptID, } = {}) {
    return `/automation/script/${scriptID}`
  }

  // List of runnable (event&#x3D;manual) scripts (executable on the backend or from user-agent/browser)
  async automationScriptRunnable (args = {}) {
    const {resource, condition, } = args


    let cfg = {
      method: 'get',
      url: this.automationScriptRunnableEndpoint({  }),
    }
    cfg.params = {
      resource,
      condition,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptRunnableEndpoint () {
    return `/automation/script/runnable`
  }

  // Run a specific script or code at the backend. Used for running script manually
  async automationScriptRun (args = {}) {
    const {scriptID, moduleID, recordID, record, } = args
    if (!scriptID) {
      console.error('automationScriptRun failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationScriptRunEndpoint({
        scriptID,
      }),
    }

    cfg.data = {
      moduleID,
      recordID,
      record,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptRunEndpoint ({scriptID, } = {}) {
    return `/automation/script/${scriptID}/run`
  }

  // Run source code in corredor. Used for testing
  async automationScriptTest (args = {}) {
    const {source, moduleID, record, } = args


    let cfg = {
      method: 'post',
      url: this.automationScriptTestEndpoint({  }),
    }

    cfg.data = {
      source,
      moduleID,
      record,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationScriptTestEndpoint () {
    return `/automation/script/test`
  }

  // List/read automation script triggers
  async automationTriggerList (args = {}) {
    const {scriptID, resource, event, incDeleted, page, perPage, } = args
    if (!scriptID) {
      console.error('automationTriggerList failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.automationTriggerListEndpoint({
        scriptID,
      }),
    }
    cfg.params = {
      resource,
      event,
      incDeleted,
      page,
      perPage,
    }

    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerListEndpoint ({scriptID, } = {}) {
    return `/automation/script/${scriptID}/trigger/`
  }

  // Add new automation script trigger
  async automationTriggerCreate (args = {}) {
    const {scriptID, resource, event, condition, enabled, } = args
    if (!scriptID) {
      console.error('automationTriggerCreate failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!resource) {
      console.error('automationTriggerCreate failed, field resource is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field resource is empty')
    }
    if (!event) {
      console.error('automationTriggerCreate failed, field event is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field event is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationTriggerCreateEndpoint({
        scriptID,
      }),
    }

    cfg.data = {
      resource,
      event,
      condition,
      enabled,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerCreateEndpoint ({scriptID, } = {}) {
    return `/automation/script/${scriptID}/trigger/`
  }

  // Read automation script trigger by ID
  async automationTriggerRead (args = {}) {
    const {scriptID, triggerID, } = args
    if (!scriptID) {
      console.error('automationTriggerRead failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!triggerID) {
      console.error('automationTriggerRead failed, field triggerID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field triggerID is empty')
    }

    let cfg = {
      method: 'get',
      url: this.automationTriggerReadEndpoint({
        scriptID,
        triggerID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerReadEndpoint ({scriptID, triggerID, } = {}) {
    return `/automation/script/${scriptID}/trigger/${triggerID}`
  }

  // Update automation script trigger
  async automationTriggerUpdate (args = {}) {
    const {scriptID, triggerID, resource, event, condition, enabled, } = args
    if (!scriptID) {
      console.error('automationTriggerUpdate failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!triggerID) {
      console.error('automationTriggerUpdate failed, field triggerID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field triggerID is empty')
    }
    if (!resource) {
      console.error('automationTriggerUpdate failed, field resource is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field resource is empty')
    }
    if (!event) {
      console.error('automationTriggerUpdate failed, field event is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field event is empty')
    }

    let cfg = {
      method: 'post',
      url: this.automationTriggerUpdateEndpoint({
        scriptID,
        triggerID,
      }),
    }

    cfg.data = {
      resource,
      event,
      condition,
      enabled,
    }
    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerUpdateEndpoint ({scriptID, triggerID, } = {}) {
    return `/automation/script/${scriptID}/trigger/${triggerID}`
  }

  // Delete script
  async automationTriggerDelete (args = {}) {
    const {scriptID, triggerID, } = args
    if (!scriptID) {
      console.error('automationTriggerDelete failed, field scriptID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field scriptID is empty')
    }
    if (!triggerID) {
      console.error('automationTriggerDelete failed, field triggerID is empty', {
        args,
      }) // log error so we can debug/trace it
      throw Error('field triggerID is empty')
    }

    let cfg = {
      method: 'delete',
      url: this.automationTriggerDeleteEndpoint({
        scriptID,
        triggerID,
      }),
    }


    return new Promise((resolve, reject) => {
      this.api().request(cfg).then(this.stdResolve(resolve, reject), this.stdReject(reject))
    })
  }

  automationTriggerDeleteEndpoint ({scriptID, triggerID, } = {}) {
    return `/automation/script/${scriptID}/trigger/${triggerID}`
  }

}
