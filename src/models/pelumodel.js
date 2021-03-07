const pool = require("../database");
const model = {};

model.listarcita = async() => {
    const sql = `SELECT * FROM peluquero`;
    const pelu = await pool.query(sql);
    return pelu;
};

model.agregarcita = async(datos) => {
    await pool.query('INSERT INTO peluquero set ? ', [datos]);
}

model.eliminarcita = async(id) => {
    const sql = `DELETE FROM peluquero WHERE id = ${id}`;
    await pool.query(sql)

}


module.exports = model;