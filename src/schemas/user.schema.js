module.exports = (hash, email, username, password) => {
  return {
    crated_at: new Date().toDateString(),
    update_at: new Date().toDateString(),
    id: hash,
    email: email,
    username: username,
    password: password
  };
}