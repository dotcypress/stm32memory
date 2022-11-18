import db from './stm32';

export default function handler(req, res) {
  res.status(200).json(db);
}
