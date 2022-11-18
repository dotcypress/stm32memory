import db from './stm32';

export default function handler(req, res) {
  let name = req.query.mcu.toUpperCase();
  let mcu = db.find((item) => item.CommercialPartNo == name || item.Reference == name);
  if (!mcu) {
    return res.status(404).send();
  }
  let flash = mcu.Flash.replace(" kBytes", "K");
  let ram = mcu.RAM.replace(" kBytes", "K");
  res.setHeader("Content-Disposition", `attachment; filename="memory.x"`)
  res.status(200).send(
    `/* Linker script for the ${mcu.Reference} */
MEMORY
{
  FLASH : ORIGIN = 0x08000000, LENGTH = ${flash}
  RAM   : ORIGIN = 0x20000000, LENGTH = ${ram}
}
`);
}
