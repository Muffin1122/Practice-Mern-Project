


const { Users_Date } = require("../data/students");

const fetch_User = (req, res) => {
    try {
        const iuser = req.params.id;

        const f_User = Users_Date.find(x => x.id === parseInt(iuser));

        if (!f_User) {
            res.status(200).json({
                ok: true,
                message: `User ${f_User.name} has been found`,
            });
        } 
        
        // else {
        //     res.status(404).json({
        //         ok: false,
        //         message: `User with ID ${iuser} is not a member of our company`,
        //     });
        // }
    } catch (err) {
        console.log("Connection Failed: " + err.message);
    }
};
module.exports = {fetch_User};


