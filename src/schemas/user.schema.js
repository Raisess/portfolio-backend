module.exports = (hash, token, email, avatar, username, name, password) => {
  return {
    crated_at: new Date().toDateString(),
    update_at: new Date().toDateString(),
    id: hash,
    token: token,
    email: email,
    avatar: avatar,
    username: username,
    name: name,
    password: password
  };
}