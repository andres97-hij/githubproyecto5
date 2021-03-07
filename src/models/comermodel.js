const pool = require("../database");
const model = {};

model.listarcomercio = async() => {
    const sql = `SELECT * FROM comercio`;
    const comer = await pool.query(sql);
    return comer;
};

model.agregarcomercio = async(datos) => {
    await pool.query('INSERT INTO comercio set ? ', [datos]);
}

model.eliminarcomercio = async(id) => {
    const sql = `DELETE FROM comercio WHERE id = ${id}`;
    await pool.query(sql)

}

module.exports = model;