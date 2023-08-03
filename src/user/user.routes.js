
import express from 'express';
const router = express.Router();
import { auth } from '../auth.js';
import { deleteUser, getallUsers, logout, signIn, signUp, softDelete, updatePassword, updateUser } from './user.controller.js';

router.get('/allusers', getallUsers )
router.post('/signUp',signUp);


router.put('/logout', auth, logout );





router.put('/update', auth,updateUser );

router.delete('/deleteUser', auth,deleteUser )



router.put('/updatePassword', auth, updatePassword);




router.delete('/softDelete', auth,  softDelete );





router.post('/signIn',signIn);







export default router