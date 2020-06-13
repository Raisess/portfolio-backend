module.exports = ({ hash, username, password }) => {
  return {
    crated_at: new Date().toDateString(),
    update_at: new Date().toDateString(),
    id: hash,
    username: username,
    password: password
  };
}