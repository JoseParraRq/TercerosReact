export async function loginUserService(data) {
    const urlLoginUserService = 'http://localhost:3000/login';

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch(urlLoginUserService, requestOptions);
    const responseJson = await response.json();
    return await responseJson;
}

export async function getAllUsers(token) {

    const urlGetAllUsers = 'http://localhost:3000/getAllUser';
    const response = await fetch(urlGetAllUsers,{method:"GET",headers:{"x-token":token}});
    const responseJson = await response.json();
    return await responseJson;
    
}

export async function getAllRoles() {


   const token = localStorage.getItem('token');

    const urlGetAllRoles = 'http://localhost:3000/getAllRoles';
    const response = await fetch(urlGetAllRoles,{method:"GET",headers:{"x-token":token}});
    const responseJson = await response.json();
    return await responseJson;
    
}

export async function createUserService(data) {
    const urlcreateUserService = 'http://localhost:3000/createUser';

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch(urlcreateUserService, requestOptions);
    const responseJson = await response.json();
    return await responseJson;
    
}
