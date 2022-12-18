export async function getAllTipoTercerosService() {
    const urlGetAllTipoTercerosService = 'http://localhost:3000/getTipoTerceros';
    const response = await fetch(urlGetAllTipoTercerosService);
    const responseJson = await response.json();
    return await responseJson;
    
}

export async function getAllTipoRegimenService() {
    const urlGetAllTipoRegimenService = 'http://localhost:3000/getTipoRegimen';
    const response = await fetch(urlGetAllTipoRegimenService);
    const responseJson = await response.json();
    return await responseJson;
    
}

export async function getAllTipoDocumentoService() {
    const urlGetAllTipoDocumentoService = 'http://localhost:3000/getTipoDocumento';
    const response = await fetch(urlGetAllTipoDocumentoService);
    const responseJson = await response.json();
    return await responseJson;
    
}

export async function getAllCitiesService() {
    const urlGetAllCitiesService = 'http://localhost:3000/getMunicipios';
    const response = await fetch(urlGetAllCitiesService);
    const responseJson = await response.json();
    return await responseJson;
}

export async function getAllDepartmentsService() {
    const urlGetAllDepartmentsService = 'http://localhost:3000/getDepartamentos';
    const response = await fetch(urlGetAllDepartmentsService);
    const responseJson = await response.json();
    return await responseJson;
}

export async function createThirdService(data) {
    const urlcreateThirdService = 'http://localhost:3000/createTerceros';

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch(urlcreateThirdService, requestOptions);
    const responseJson = await response.json();
    return await responseJson;
    
}

export async function getAllTerceros() {
    const urlGetAllTerceros = 'http://localhost:3000/getAllTerceros';
    const response = await fetch(urlGetAllTerceros);
    const responseJson = await response.json();
    return await responseJson;
    
}