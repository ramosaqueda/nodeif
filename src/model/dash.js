const express = require('express');

module.exports = {  
              getPorMes:  (con, callback) =>{      
                con.query(`SELECT COUNT(id) total,   EXTRACT(MONTH FROM peritajes.fecha_pericia) as mes
                FROM peritajes
                where
                EXTRACT(YEAR  FROM peritajes.fecha_pericia) = '2020'
                GROUP BY mes`, callback)
              },


              getPorperito:  (con, callback) =>{      
                con.query(`SELECT
                Count(peritajes.ruc_pericia) as cant,
                peritos.nombre_perito as perito, peritos.color as color
                FROM
                peritajes
                INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id
                  where
                      EXTRACT(YEAR  FROM peritajes.fecha_pericia) >= '2000'
                      and peritajes.estado_pericua_id NOT IN(6,4)    
                GROUP BY
                peritajes.perito_asignado_id`, callback)
              },

             getPorano : (con,callback) => {
          
               con.query(`SELECT
               peritajes.id,
               peritajes.ruc_pericia,
               peritajes.fecha_pericia,
               peritajes.nue_pericia,
               peritajes.plazo_pericia,
               peritajes.info_solicitud,
               peritajes.fiscal_pericia_id,
               peritajes.perito_asignado_id,
               peritajes.cometido_pericia,
               estados.gls_estado,
               fiscales.nombre_fiscal,
               peritos.nombre_perito,
               peritajes.estado_pericua_id,
               peritajes.caja_ubicacion
               FROM
               peritajes
               INNER JOIN estados ON peritajes.estado_pericua_id = estados.id
               INNER JOIN fiscales ON peritajes.fiscal_pericia_id = fiscales.id
               INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id WHERE EXTRACT(YEAR  FROM peritajes.fecha_pericia) >= year(NOW())`, callback)
              },


    }