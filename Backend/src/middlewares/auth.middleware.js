const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "token not provided"
        });
    }

    try {
        console.log("TOKEN EXISTS:", !!token);
        console.log("JWT SECRET EXISTS:", !!process.env.JWT_SECRET);

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("DECODED:", decoded);

        req.user = decoded;

        next();

    } catch (err) {
        console.log("JWT ERROR:", err.name);
        console.log("JWT ERROR MESSAGE:", err.message);

        return res.status(401).json({
            message: "invalid token."
        });
    }
}

module.exports = { authUser };