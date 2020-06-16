module.exports = (token, hash, username, name, description, cover, link, git, color) => {
  return {
    crated_at: new Date().toDateString(),
    update_at: new Date().toDateString(),
    token: token,
    id: hash,
    username: username,
    name: name,
    description: description,
    cover: cover,
    link: link,
    git: git,
    color: color
  };
}