// * we are creating all the handlers for our routes in this componet
import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

export const getPosts = async(req, res) => {
    try{
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessage)
    } catch (error){
        res.status(404).json({message:error.message})
    }
}

export const getPost = async(req, res) => {
    const{id} = req.params
}