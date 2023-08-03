import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    let { token } = req.headers;

    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
        if (err) {
            console.log("Error while decoding token:", err);
            res.json("Token is not valid");
        } else {
            // console.log("Decoded token:", decoded);
            req.userId = decoded.userid;
            // console.log("req.userId:", req.userId);
            next();
        }
    });
};
