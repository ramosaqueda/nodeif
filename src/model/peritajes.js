const express = require('express');
const moment = require('moment');
let fechoy = moment(new Date()).format("YYYY-MM-DD");

 
 
module.exports = {  
    get: (con, callback) => {      
      con.query(`SELECT
                peritajes.id,
                peritajes.ruc_pericia,
                peritajes.fecha_pericia,
                peritajes.nue_pericia,
                peritajes.plazo_pericia,
                estados.gls_estado,
                fiscales.nombre_fiscal,
                peritajes.fiscal_pericia_id,
                peritajes.perito_asignado_id,
                peritos.nombre_perito,
                caja_ubicacion
                FROM
                peritajes
                INNER JOIN estados ON peritajes.estado_pericua_id = estados.id
                INNER JOIN fiscales ON peritajes.fiscal_pericia_id = fiscales.id
                INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id`, callback)
    },
  
    getById: (con, id, callback) => {
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
      INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id WHERE peritajes.id =  ${id}`, callback)
    },


    getByPerito: (con, id, callback) => {
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
      INNER JOIN peritos ON peritajes.perito_asignado_id = peritos.id WHERE peritajes.perito_asignado_id =  ${id}`, callback)
    },


    getByanoactual: (con, id, callback) => {
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
  
    create: function(con, data, callback) {
      let fecha = moment(data.fecha_pericia).format("YYYY-MM-DD");
      console.log(fecha);
      let qry = `INSERT INTO peritajes (
        ruc_pericia,
        fecha_pericia,
        cometido_pericia,
        nue_pericia,
        plazo_pericia,
        created_at,      
        estado_pericua_id,
        fiscal_pericia_id,
        info_solicitud,
        perito_asignado_id,
        peritajes.caja_ubicacion
      )
      VALUES
        (
          '${data.ruc_pericia}',
          '${fecha}',
          '${data.cometido_pericia}',
          '${data.nue_pericia}',
          '${data.plazo_pericia}',
          '${fechoy}',        
          '${data.estado_pericua_id}',
          '${data.fiscal_pericia_id}',
          '${data.info_solicitud}',
          '${data.perito_asignado_id}',
          '${data.caja_ubicacion}' 
        )`;    
       
      con.query(qry ,     callback      )
    },
  
    update: function(con, data, id, callback) {
       
      let fecha = moment(data.fecha_pericia).format("YYYY-MM-DD");
      let qry = `UPDATE peritajes
      SET ruc_pericia = '${data.ruc_pericia}',
      fecha_pericia =   '${fecha}',
      cometido_pericia = '${data.cometido_pericia}',
      nue_pericia =   '${data.nue_pericia}',
      plazo_pericia ='${data.plazo_pericia}',       
      updated_at =   '${fechoy}',
      estado_pericua_id = '${data.estado_pericua_id}',
      fiscal_pericia_id = '${data.fiscal_pericia_id}',
      info_solicitud =   '${data.info_solicitud}',         
      obs_pericia =   '${data.obs_pericia}',
      caja_ubicacion = '${data.caja_ubicacion}',
      perito_asignado_id = '${data.perito_asignado_id}'
     WHERE
       (id = ${id})`;
        
      con.query(  qry      ,callback)    },
  
    destroy: function(con, id, callback) {
      con.query(`DELETE FROM peritajes WHERE peritajes.id = ${id}`, callback)
    }
  }
  
