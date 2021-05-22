import {RequestHandler} from 'express'
import User, {IUser} from './Users'
import jwt from "jsonwebtoken"; 

export const login : RequestHandler = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).json('Email or password is wrong');

    const correctPassword : boolean = await user.validatePassword(req.body.password,user.password);
    if(!correctPassword) return res.status(400).json('Invaled password');

    //token
    const token : string = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET || 'TOKEN_TEST',{
        expiresIn: 60*60*24
    });
    res.header('auth-token',token).json(user);
}

export const signup : RequestHandler = async (req, res) => {
    
    const user : IUser= new User({
        username : req.body.username,
        email:  req.body.email,
        password : req.body.password
    })
    user.password = await user.encrypPassword(user.password);
    const savedUser = await user.save();
    console.log(savedUser);
    //token
    const token : string = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'TOKEN_TEST');
    res.header('auth-token',token).json(savedUser);
    
}

export const profile : RequestHandler = async (req, res) => {
    
    res.json('Profile')
}

