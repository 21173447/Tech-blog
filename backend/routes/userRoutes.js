import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  updateUserRole

} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route("/role").put(updateUserRole);

export default router;
 