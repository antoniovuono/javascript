function processRequest(code) {
    switch (code) {
        case 200: return 'OK';
        case 201: return 'Created';
        case 400: return 'Bad Request';
        case 401: return 'Unauthorized';
        case 404: return 'Not Found';
        case 500: return 'Internal Server Error';
        default: return 'Status Unknown'
    }
}

const result = processRequest(401)

console.log(result)