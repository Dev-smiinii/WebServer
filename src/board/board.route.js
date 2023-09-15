const express = require(`express`);
const router = express.Router();

router.get(`/list`, (req, res) => {
  res.render(`board/list.html`);
});

router.get(`/write`, (req, res) => {
  res.render(`board/write.html`);
});

router.get(`/view`, (req, res) => {
  res.render(`board/view.html`);
});

router.get(`/modify`, (req, res) => {
  res.render(`board/modify.html`);
});

router.post(`/write`, (req, res) => {
  res.redirect(`/boards/view`);
});

router.post(`/modify`, (req, res) => {
  res.redirect(`/boards/view`);
});

router.post(`/delete`, (req, res) => {
  res.redirect(`/boards/list`);
});

module.exports = router;
