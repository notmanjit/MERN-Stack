// Custom Error Class
// Read OOPs concepts to understand

class ExpressError extends Error {      // ExpressError class inherits the Error class
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;      // Exporting ExpressError class