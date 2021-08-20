const UsersModel = require('../models/user');
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()
const JWT_SECRET = require('../helpers/authHelpers');

class UsersController {

	/** @UserLogin User **/
	UserLogin = asyncHandler(async (req, res) => {
		const { email, password } = req.body;
		if (!email) {
			return res.status(200).json({
				error: { message: 'Email xanasını düzgün doldurun' }
			});
		}
		if (!password) {
			return res.status(200).json({
				error: { message: 'Şifrə xanasını düzgün doldurun' }
			});
		}
		let user = await UsersModel.findOne({
			email
		});
		if (!user)
			return res.status(200).json({
				error: { message: 'İstifadəçi mövcud deyil' }
			});

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(200).json({
				error: { message: 'Səhv Parol!' }
			});

		const payload = {
			user: {
				id: user.id
			}
		};
		jwt.sign(
			payload,
			JWT_SECRET,
			{
				expiresIn: 3600
			},
			(err, token) => {

				if (err) throw err;
				res.cookie('token', token,);
				res.status(200).json({ 'message': 'Uğurla Giriş Etdiniz!', 'token': token, user: user, success: true });
			}
		);
	});
	/** @Create User **/
	Create = asyncHandler(async (req, res) => {
		const { name, username, email, password } = req.body;
		if (password.length < 9) {
			return res.status(200).json({
				error: { message: 'Şifrə minimum 9 xxarekter olmalidir' }
			})
		}
		if (!name || !username || !email || !password) {
			return res.status(200).json({
				error: { message: 'Xanaları düzgün doldurun' }
			})
		}
		const testRegistered = await UsersModel.findOne({ username: username, email: email });
		if (testRegistered) {
			return res.status(403).json({
				error: { message: 'İstifadəçi mövcuddur' }
			})
		}

		const user = await UsersModel.create({
			name,
			username,
			email,
			password
		});
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		await user.save();

		const payload = {
			user: {
				id: user.id,
			},
		};

		jwt.sign(
			payload,
			JWT_SECRET,
			{
				expiresIn: 10000,
			},
			(err, token) => {
				if (err) throw err;
				res.cookie('token', token,);
				res.status(200).json({ success: true, token: token, user: user, message: 'Uğurla qeydiyyatdan keçdiniz' });
			}
		);

	});
	/** @GetOne User **/
	GetOne = asyncHandler(async (req, res) => {
		const { username } = req.params
		const one = await UsersModel.findOne({ username: username });
		if (!one) {
			return res.status(404).json({
				error: { message: 'İstifadəçi tapilmadı' }
			})
		}
		res.status(200).json(one)

	});
	/** @GetAll User **/
	GetAll = asyncHandler(async (req, res) => {
		const All = await UsersModel.find();
		if (!All.length) {
			return res.status(404).json({
				error: { message: 'Xəta' }
			})
		}
		res.status(200).json(All)

	});
	/** @GetMe User **/
	GetMe = asyncHandler(async (req, res, next) => {
		const user = await UsersModel.findOne({ _id: req.user.id });
		res.json({user:user,token:req.token});
	})

}

const userController = new UsersController();


module.exports = userController;
