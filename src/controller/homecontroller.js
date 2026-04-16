import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
        return res.render('homepage.ejs');
    } catch (e) {
        console.log(e);
    }


}
let aboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('CRUD.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data,
    });
}
let getEditCRUD = async (req, res) => {
    let userid = req.query.id;
    if (userid) {
        let userData = await CRUDService.getUserInfoById(userid);
        // check user data not found
        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found');
    }
    // Implementation for getting user data for editing
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers,
    });
};
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    // Implementation for deleting user data
    if (id) {
        await CRUDService.deleteUserById(id);
        return res.send('Delete user successfully!');
    }
    else {
        return res.send('User not found');
    }
}


module.exports = {
    getHomePage: getHomePage,
    getAboutPage: aboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,

}