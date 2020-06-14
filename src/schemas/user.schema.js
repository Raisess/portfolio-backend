module.exports = (hash, token, email, avatar, username, password) => {
  return {
    crated_at: new Date().toDateString(),
    update_at: new Date().toDateString(),
    id: hash,
    token: token,
    email: email,
    avatar: avatar,
    username: username,
    password: password
  };
}