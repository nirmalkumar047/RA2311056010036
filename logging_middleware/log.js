const axios = require("axios");

const LOG_API = "http://20.244.56.144/evaluation-service/logs";

async function Log(stack, level, packageName, message, token) {
    try {
        await axios.post(
            LOG_API,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
    } catch (err) {
        console.error("Logging failed:", err.message);
    }
}

module.exports = Log;