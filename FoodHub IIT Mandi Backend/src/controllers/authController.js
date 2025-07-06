const { COOKIE_SECURE } = require("../config/serverConfig");
const { loginUser } = require("../services/authService");


async function logout(req, res) {
    res.cookie("authToken", "", {
        httpOnly: true,
        secure: true, // Always true for HTTPS
        sameSite: "none", // Must be 'none' for cross-site
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    return res.status(200).json({
        success: true,
        message: "Log out successfull",
        error: {},
        data: {}
    });
}
async function login(req, res) {
    try {
        const loginPayload = req.body;
        const response = await loginUser(loginPayload);
        res.cookie("authToken", response.token, {
            httpOnly: true,
            secure: true, // Always true for HTTPS
            sameSite: "none", // Must be 'none' for cross-site
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            data: {
                userRole: response.userRole,
                userData: response.userData
            },
            error: {}
        })
    } catch(error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            message: error.message || 'Internal server error',
            error: error
        })
    }

}

module.exports = {
    login,logout
}