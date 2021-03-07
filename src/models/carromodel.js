const pool = require("../database");
const model = {};

model.listarcompras = async() => {
    const sql = `SELECT * FROM carrito`;
    const carr = await pool.query(sql);
    return carr;
};




model.eliminarcarrito = async(id) => {
    const sql = `DELETE FROM carrito WHERE id = ${id}`;
    await pool.query(sql)

}





module.exports = model;