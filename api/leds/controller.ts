import { v4 as uuidv4 } from "uuid";
import db from "../../store/mysql";

const TABLE = "Leds";

/****************** Creacion de LED *******************/
const createLed = async (name: string): Promise<any> => {
  const led = {
    name,
    status: false,
    id: uuidv4(),
  };
  return await db.create(TABLE, led);
};
/****************** Listar todos los LED *******************/
export const listLeds = async (): Promise<any> => {
  return await db.list(TABLE);
};
/****************** Buscar LED por Id *******************/
export const getLed = async (id: string): Promise<any> => {
  return await db.getById(TABLE, id);
};
/****************** Actualizacion de LED *******************/
export const updateLed = async (
  id: string,
  name: string,
  status: boolean
): Promise<any> => {
  const ledUpdate = {
    id,
    name,
    status,
  };
  return await db.update(TABLE, ledUpdate);
};
/****************** Eliminacion de LED *******************/
export const deleteLed = async (id: string): Promise<any> => {
  return await db.removeById(TABLE, id);
};

export default {
  listLeds,
  createLed,
  updateLed,
  getLed,
  deleteLed,
};
