const bd = require('../db');

class TercerosLogic {

  async getTipoTercero(req) {
    try {

      var types = await bd.raw(`select * from gen_tipos_tercero`);

    } catch (error) {
      console.log(error);
    }
    return types;
  }

  async getTipoDocumento(req) {
    try {

      var types = await bd.raw(`select * from gen_tipo_documento`);

    } catch (error) {
      console.log(error);
    }
    return types;
  }

  async getTipoRegimen(req) {
    try {

      var types = await bd.raw(`select * from gen_regimen_tributario`);

    } catch (error) {
      console.log(error);
    }
    return types;
  }

  async getMunicipios(req) {
    try {

      var municipios = await bd.raw(`select * from gen_ciudades`);

    } catch (error) {
      console.log(error);
    }
    return municipios;
  }

  async getDepartamentos(req) {
    try {

      var departamentos = await bd.raw(`select * from gen_departamentos`);

    } catch (error) {
      console.log(error);
    }
    return departamentos;
  }

  async getActividadesCiiu(req) {
    try {

      var actividades = await bd.raw(`select * from gen_actividades_ciiu`);

    } catch (error) {
      console.log(error);
    }
    return actividades[0];
  }

  async getTipoFormaDePago(req) {
    try {

      var formaDePago = await bd.raw(`select * from gen_tipo_formas_pagos`);

    } catch (error) {
      console.log(error);
    }
    return formaDePago[0];
  }

  async createTerceros(terceros) {
    try {
      console.log("here the tercerrooos", terceros);

      var users = await bd
      .insert(
        [
          {
            primer_nombre:`${terceros.primer_nombre}`,
          
            segundo_nombre:`${terceros.segundo_nombre}`,
            primer_apellido:`${terceros.primer_apellido}`,
            segundo_apellido:`${terceros.segundo_apellido}`,
            id_tipo_tercero:`${terceros.id_tipo_tercero}`,
            id_regimen_tributario:`${terceros.id_regimen_tributario}`,
            id_tipo_documento:`${terceros.id_tipo_documento}`,
            id_ciudad:`${terceros.id_ciudad}`,
            direccion:`${terceros.direccion}`,
            email:`${terceros.email}`,
            celular:`${terceros.celular}`,
            telefono:`${terceros.telefono}`,
          }
        ]
        ).into('Gen_Terceros')
         
         
        //  .insert(
        //   [
        //     { title: 'Great Gatsby' }, 
        //     { title: 'Fahrenheit 451' }
        //   ], 
        //   ['id']
        // )
        // .into('books')
      
          
    } catch (error) {
      console.log(error);
    }
    return users[0][0];
  }


  async getAllTercerosLogic() {
    try {
      const array = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        'listar'
      ];

      var users = await bd.raw(`call Sp_con_terceros(${array.map((e) => { return "?"; })})`, array);

      console.log("here the forms in back query", users[0].users);

    } catch (error) {
      console.log(error);
    }
    return users[0][0];
  }

  async getAllTercerosForListLogic() {
    try {

      var users = await bd.raw(`select  ter.id, ter.documento, ter.nombre_tercero, tg.nombre as Tipo_tercero, td.nombre as tipo_documento, m.nombre as municipio, rg.nombre as tipo_regimen from con_terceros as ter join con_tipos_tercero as tg on id_tipo_tercero=tg.id join gen_tipo_documentos_dian as td  on id_tipo_documento= td.id join gen_municipios as m on id_municipio=m.id join gen_tipo_regimenes as rg on id_tipo_regimen=rg.id order by ter.id ASC;`,);

    } catch (error) {
      console.log(error);
    }
    return users[0];
  }

  async getOneTercerosForLogic(tercero) {
    try {
      console.log("here the idddd tercerrooo==>>", tercero.tercerosId);
      var users = await bd.raw(`select
    ter.id,
    tg.nombre as Tipo_tercero,
    ter.documento, ter.digito, 
    td.nombre as tipo_documento,
    ter.nombre_tercero,
    ter.primer_nombre,ter.segundo_nombre,
    ter.primer_apellido,ter.segundo_apellido,
    rg.nombre as tipo_regimen,
    m.nombre as municipio,
    ac.nombre as actividad,
    ter.id_lista_precio,
    fp.nombre as forma_pago,
    ter.direccion,ter.telefono,ter.celular,ter.email,ter.cupo_credito,ter.plazo,ter.estado,ter.id_cuenta_retencion,ter.retencion_porcentaje,
    ter.id_cuenta_reteica,ter.reteica_porcentaje,ter.base_retencion  
   from con_terceros as ter 
   join con_tipos_tercero as tg on id_tipo_tercero=tg.id
   join gen_tipo_documentos_dian as td  on id_tipo_documento= td.id
   join gen_municipios as m on id_municipio=m.id
   join gen_tipo_regimenes as rg on id_tipo_regimen=rg.id
   join gen_actividades_ciiu as ac on id_actividad_ciiu=ac.id
   join gen_tipo_formas_pagos as fp on  id_tipo_forma_pago
   where ter.id=?;`, [tercero.tercerosId]);

    } catch (error) {
      console.log(error);
    }
    return users[0][0];
  }

  async getOneTercerosLogic(tercero) {
    try {
      console.log("here the idddd tercerrooo==>>", tercero.tercerosId);
      var users = await bd.raw(`select
    id,
    id_tipo_tercero,
    documento,
    digito,
    id_tipo_documento,
    nombre_tercero,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    id_tipo_regimen,
    id_municipio,
    id_actividad_ciiu,
    id_lista_precio,
    id_tipo_forma_pago,
    direccion,
    telefono,
    celular,
    email,
    cupo_credito,
    plazo,
    estado,
    id_cuenta_retencion,
    retencion_porcentaje,
    base_retencion from con_terceros
    where id=?;`, [tercero.tercerosId]);

    } catch (error) {
      console.log(error);
    }
    return users[0][0];
  }

  async updateTerceros(terceros) {
    try {
      console.log("here the tercerrooos", terceros);
      let municipio = new Number(terceros)
      const array = [
        terceros.id,//0
        terceros.id_municipio,//1
        terceros.id_actividad_ciiu,//2
        terceros.id_tipo_regimen,//3
        terceros.id_tipo_documento,//4
        terceros.id_lista_precio,//5
        terceros.id_tipo_tercero,//6
        terceros.id_tipo_forma_pago,//7
        terceros.documento,//8
        terceros.digito,//9
        terceros.nombre_tercero,//10
        terceros.primer_nombre,//11
        terceros.segundo_nombre,//12
        terceros.primer_apellido,//13
        terceros.segundo_apellido,//14
        terceros.direccion,//15
        terceros.telefono,//16
        terceros.celular,//17
        terceros.email,//18
        terceros.cupo_credito,//19
        terceros.plazo,//20
        terceros.estado,//21
        terceros.id_cuenta_retencion,//22
        terceros.retencion_porcentaje,//23
        terceros.base_retencion,//24
        terceros.id_cuenta_reteica,//25
        terceros.reteica_porcentaje,//26
        'editar'//26

      ];
      console.log("here the array from terceros", array);
      var users = await bd.raw(`call Sp_con_terceros(${array.map((e) => { return "?"; })})`, array);

    } catch (error) {
      console.log(error);
    }
    return users[0];
  }

  async deleteTerceros(tercero) {
    try {
      console.log("here the tercerrooos", tercero);

      // console.log("here the array from terceros",array);
      var users = await bd.raw(`delete from  con_terceros where id=?;`, tercero.tercerosId);

    } catch (error) {
      console.log(error);
    }
    return users[0];
  }

}

module.exports = {
  TercerosLogic
}