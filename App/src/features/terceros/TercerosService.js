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