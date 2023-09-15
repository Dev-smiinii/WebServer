exports.getList =
  (`/list`,
  (req, res) => {
    res.render(`board/list.html`);
  });

exports.getWrite =
  (`/write`,
  (req, res) => {
    res.render(`board/write.html`);
  });

exports.getView =
  (`/view`,
  (req, res) => {
    res.render(`board/view.html`);
  });

exports.getModify =
  (`/modify`,
  (req, res) => {
    res.render(`board/modify.html`);
  });

exports.postWrite =
  (`/write`,
  (req, res) => {
    res.redirect(`/boards/view`);
  });

exports.postModify =
  (`/modify`,
  (req, res) => {
    res.redirect(`/boards/view`);
  });

exports.postDelete =
  (`/delete`,
  (req, res) => {
    res.redirect(`/boards/list`);
  });
