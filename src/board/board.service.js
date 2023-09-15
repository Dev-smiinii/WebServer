const boardRepository = require(`./board.repository`);

exports.getFindAll = () => {
  const result = boardRepository.findAll(); // []
  return result; // []
};

exports.create = (data) => {
  const { title, writer, content } = data; // {}
  const result = boardRepository.create(title, writer, content); // [{}]
  return result; // [{}]
};

exports.getFindOne = (board_id) => {
  const id = parseInt(board_id); // num
  const result = boardRepository.findOne(id); // num

  boardRepository.incrementHit(id); // num

  return result; // num
};
