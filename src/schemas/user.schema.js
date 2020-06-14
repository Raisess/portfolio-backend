module.exports = (hash, email, avatar, username, password) => {
  return {
    crated_at: new Date().toDateString(),
    update_at: new Date().toDateString(),
    id: hash,
    email: email,
    avatar: avatar,
    username: username,
    password: password
  };
}