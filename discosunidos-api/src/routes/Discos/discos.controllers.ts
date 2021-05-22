import {RequestHandler} from 'express'
import fs from 'fs-extra';
import path from 'path'
import Disco from './Disco'

export const createDisco : RequestHandler = async (req, res) => {
    const discoFound = await Disco.findOne({title: req.body.title});

    if(discoFound)
        return res.status(301).json({message: 'The title already exits'})

    const disco = new Disco(req.body);
    const savedDisco = await disco.save();
    console.log(savedDisco);
    res.json(savedDisco)
}

export const getDiscos : RequestHandler = async (req, res) => {
    try {
        const discos = await Disco.find();

         return res.json(discos)
    } catch (error) {
        res.json(error)
    }
}

export const getDisco : RequestHandler = async (req, res) => {
    const discoFound = await Disco.findById(req.params.id);
    if(!discoFound)  return res.status(204).json() // 
    return res.json(discoFound)
}

export const deleteDisco : RequestHandler = async (req, res) => {
    const discoFound = await Disco.findByIdAndDelete(req.params.id);
    if(!discoFound)  return res.status(204).json() // 
    return res.json(discoFound)
}

export const updateDisco : RequestHandler = async (req, res) => {
    const discoUpdate = await Disco.findByIdAndUpdate(req.params.id, req.body, {new : true});
    if(!discoUpdate)  return res.status(204).json()
    res.json(discoUpdate)
}