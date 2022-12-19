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