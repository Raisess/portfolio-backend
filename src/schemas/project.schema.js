module.exports = (hash, name, description, cover, link, git, color) => {
  return {
    crated_at: new Date().toDateString(),
    update_at: new Date().toDateString(),
    id: hash,
    name: name,
    description: description,
    cover: cover,
    link: link,
    git: git,
    color: color
  };
}