class ErrorClass extends Error{
    constructor(error, statusCode){
        super(error.message === undefined ? error : error.message);
        this.statusCode = statusCode;
        this.operational = true;
        this.status = `${statusCode}`.startsWith(4) ? "Client Error" : "Server Error"
        this.error = error
    }
}

module.exports = ErrorClass