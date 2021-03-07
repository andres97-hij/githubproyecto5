const pool = require("../database");
const model = {};

model.listarcomprando = async() => {
    const sql = `SELECT * FROM producto`;
    const comp = await pool.query(sql);
    return comp;
};

model.agregarcompra = async(datos) => {
    await pool.query('INSERT INTO producto set ? ', [datos]);
}

model.eliminarcarrito = async(id) => {
    const sql = `DELETE FROM producto WHERE id = ${id}`;
    await pool.query(sql)

}

model.modificarcarrito = async() => {
    const sql = `UPDATE producto set cliente='cliente'> + correo='correo'> + producto='producto'> + precio='precio'> + cantidad='cantidad'> + subtotal='sutotal'> +   WHERE id`;
    await pool.query(sql)

}






module.exports = model;