const pool = require("../database");
const model = {};

model.listarempleado = async() => {
    const sql = `SELECT * FROM empleados`;
    const edo = await pool.query(sql);
    return edo;
};

model.agregarempleado = async(datos) => {
    await pool.query('INSERT INTO empleados set ? ', [datos]);
}

model.eliminarempleado = async(id) => {
    const sql = `DELETE FROM empleados WHERE id = ${id}`;
    await pool.query(sql)

}


module.exports = model;