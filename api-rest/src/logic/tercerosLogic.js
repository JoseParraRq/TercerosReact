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
              primer_nombre: `${terceros.firstName}`,
              segundo_nombre: `${terceros.lastName}`,
              primer_apellido: `${terceros.surName}`,
              segundo_apellido: `${terceros.secondSurName}`,
              id_tipo_tercero: `${terceros.typeTerceroId}`,
              id_regimen_tributario: `${terceros.regimeTypeId}`,
              id_tipo_documento: `${terceros.documentTypeId}`,
              documento: `${terceros.document}`,
              id_ciudad: `${terceros.cityId}`,
              direccion: `${terceros.address}`,
              email: `${terceros.email}`,
              celular: `${terceros.cellPhone}`,
              telefono: `${terceros.phone}`,
              id_departamento: `${terceros.department}`
            }
          ]
        ).into('Gen_Terceros')


    } catch (error) {
      console.log(error);
    }
    return users[0][0];
  }


  async getAllTercerosLogic() {
    try {
      var terceros = await bd.raw(`select  * from View_terceros`);
    } catch (error) {
      console.log(error);
    }
    return terceros;
  }

  async getAllTercerosForListLogic() {
    try {

      var users = await bd.raw(`select  ter.id, ter.documento, ter.nombre_tercero, tg.nombre as Tipo_tercero, td.nombre as tipo_documento, m.nombre as municipio, rg.nombre as tipo_regimen from con_terceros as ter join con_tipos_tercero as tg on id_tipo_tercero=tg.id join gen_tipo_documentos_dian as td  on id_tipo_documento= td.id join gen_municipios as m on id_municipio=m.id join gen_tipo_regimenes as rg on id_tipo_regimen=rg.id order by ter.id ASC;`,);

    } catch (error) {
      console.log(error);
    }
    return users[0];
  }



  async getOneTercerosLogic(tercero) {
    try {
      console.log("here the idddd tercerrooo==>>", tercero.terceroId);
      var tercero = await bd.raw(`select
     idtercero, primer_nombre AS primerNombre, segundo_nombre AS segundoNombre, primer_apellido AS primerApellido,
      segundo_apellido AS segundoApellido, direccion, email, telefono, celular, documento, TpT.tipo_tercero AS tipoTercero,
       rgt.regimen, td.tipo_documento AS tipoDocumento, d.departamento, c.ciudad
      FROM Gen_Terceros INNER JOIN
      gen_tipos_tercero AS TpT ON TpT.id = Gen_Terceros.id_tipo_tercero INNER JOIN
      gen_regimen_tributario AS rgt ON rgt.id = Gen_Terceros.id_regimen_tributario INNER JOIN
      gen_tipo_documento AS td ON td.id = Gen_Terceros.id_tipo_documento INNER JOIN
      gen_departamentos AS d ON d.id = Gen_Terceros.id_departamento INNER JOIN
      gen_ciudades AS c ON c.id = Gen_Terceros.id_ciudad
      where idtercero=?;`, [tercero.terceroId]);
      console.log("here the result", tercero);
    } catch (error) {
      console.log(error);
    }
    return tercero;
  }



  async updateTerceros(terceros) {
    try {

        let tercerosUpdate = await bd
          .select('idtercero')
          .from('Gen_Terceros')
          .where('idtercero', terceros.idtercero)
          .then(([row]) => {
            if (!row) {
              console.log("select id do not exist")
              return res.send("do not exist")
            }
            return bd('Gen_Terceros')

              .update(
                
                { 'primer_nombre': terceros.firstName,
                  'segundo_nombre': terceros.lastName,
                  'primer_apellido': terceros.surName,
                  'segundo_apellido': terceros.secondSurName,
                  'id_tipo_tercero': terceros.typeTerceroId,
                  'id_regimen_tributario': terceros.regimeTypeId,
                  'id_tipo_documento': terceros.documentTypeId,
                  'documento': terceros.document,
                  'id_ciudad': terceros.cityId,
                  'direccion': terceros.address,
                  'email': terceros.email,
                  'celular': terceros.cellPhone,
                  'telefono': terceros.phone,
                  'id_departamento': terceros.department
                }
              )
              .where('idtercero', row.idtercero)
          });

      return tercerosUpdate;
    } catch (error) {
      console.log(error);
    }
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

  async loginLogic(request) {
    try {
      console.log("here the req in login logic", request);
      let findOneTerceroForLogin = await this.getOneTerceroByEmailLogic(request)
    } catch (error) {

    }
  }

}

module.exports = {
  TercerosLogic
}