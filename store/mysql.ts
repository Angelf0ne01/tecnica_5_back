import mysql, { Connection, ConnectionConfig } from "mysql";
import config from "./../config";

const dbConfig: ConnectionConfig = {
  host: config.DB.MYSQL.HOST,
  port: config.DB.MYSQL.PORT,
  user: config.DB.MYSQL.USER,
  password: config.DB.MYSQL.PASSWORD,
  database: config.DB.MYSQL.DATABASE,
};

let connection: Connection;

export const dbConnect = () => {
  connection = mysql.createConnection(dbConfig);
  connection.connect((err) => {
    if (err) {
      console.error("[db-error]", err);
      setTimeout(dbConnect, 2000);
    } else console.log("DB CONNECTED");
  });

  connection.on("error", (err) => {
    console.error("[db-error]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      dbConnect();
    } else {
      throw err;
    }
  });
};

export const getById = async (table: string, id: any): Promise<any> => {
  const SQL = `SELECT * FROM ${table} WHERE id='${id}'`;
  return new Promise((resolve, reject) => {
    connection.query(SQL, (error, data) => {
      if (error) return reject(error);
      resolve(data?.find((i) => i));
    });
  });
};
export const list = async (table: string): Promise<any> => {
  const SQL = `SELECT * FROM ${table};`;
  return new Promise((resolve, reject) => {
    connection.query(SQL, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};
export const create = async (table: string, payload: any): Promise<any> => {
  const SQL = `INSERT INTO ${table} SET ?`;
  return new Promise((resolve, reject) => {
    connection.query(SQL, payload, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};
export const update = async (table: string, payload: any): Promise<any> => {
  const SQL = `UPDATE ${table} SET ? WHERE id=?`;
  return new Promise((resolve, reject) => {
    connection.query(SQL, [payload, payload.id], (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

export const removeById = async (table: string, id: any): Promise<any> => {
  const SQL = `DELETE FROM ${table} WHERE id=${id};`;
  return new Promise((resolve, reject) => {
    connection.query(SQL, (error, data) => {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

export default {
  getById,
  list,
  create,
  update,
  removeById,
};
