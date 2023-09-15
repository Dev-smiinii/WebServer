exports.getLogin = (req, res) => {
  res.render(`user/login.html`);
};

exports.getJoin = (req, res) => {
  res.render(`user/join.html`);
};

exports.postLogin = (req, res) => {
  res.redirect(`/boards/list`);
};

exports.postJoin = (req, res) => {
  res.redirect(`/users/login`);
};
