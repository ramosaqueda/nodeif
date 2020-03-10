const controller = {};
controller.list =  (req, res) => {
    conn.getConnection((err,conn) => {
        conn.query('SELECT  peritos.nombre_perito,  Count(peritajes.id)  FROM   peritajes  INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id  GROUP BY  peritos.nombre_perito', (err, customers) =>{
            if (err){
                res.json(err);
            }
            res.reder('');
        });


    });
 
};
module.exports = controller;