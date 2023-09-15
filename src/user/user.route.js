const express = require(`express`);
const router = express.Router();

const controller = require(`./user.controller`);

router.get(`/login`, controller.getLogin);

router.get(`/join`, controller.getJoin);

router.post(`/login`, controller.postLogin);

router.post(`/join`, controller.postJoin);

module.exports = router;
