exports.getList = (req, res) => {
  res.render(`board/list.html`);
};

exports.getWrite = (req, res) => {
  res.render(`board/write.html`);
};

exports.getView = (req, res) => {
  res.render(`board/view.html`);
};

exports.getModify = (req, res) => {
  res.render(`board/modify.html`);
};

exports.postWrite = (req, res) => {
  res.redirect(`/boards/view`);
};

exports.postModify = (req, res) => {
  res.redirect(`/boards/view`);
};

exports.postDelete = (req, res) => {
  res.redirect(`/boards/list`);
};
