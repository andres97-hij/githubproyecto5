const pool = require("../database");
const model = {};

model.listarcontacto = async() => {
    const sql = `SELECT * FROM factura`;
    const tato = await pool.query(sql);
    return tato;
};

model.agregarcontacto = async(datos) => {
    await pool.query('INSERT INTO factura set ? ', [datos]);
}

model.eliminarcontacto = async(id) => {
    const sql = `DELETE FROM factura WHERE id = ${id}`;
    await pool.query(sql)

}


module.exports = model;