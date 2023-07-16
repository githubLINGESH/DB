const express  = require('express')
const Emp      = require('../model/Emp')

const index = (req ,res, next) =>{
    Emp.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
        message : 'an Error'
        })
    })
}

const show = (req, res , next)=>{
    let employeeID = req.body.employeeID
    Emp.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(error=>{
        res.json({
            message : 'an occur'
        })
    })
}

const store = (req, res, next)=>{
    let employee = new Emp({
        name        : req.body.name,
        designation : req.body.designation,
        email       : req.body.email,
        age         : req.body.age

    })
    employee.save()
    .then(response=>{
        res.json({
            message : 'an error'
        })
    })
}

const update =(req, res, next) => {
    let employeeID = req.body.employeeID

    let updatedData ={
        name : req.body.name,
        designation :req.body.designation,
        email :req.body.email,
        age : req.body.age
    }

    Emp.findByIdAndUpdate(employeeID,{$set : updatedData})
    .then(response=>{
        res.json({
            message :'Employee updated successfully'
        })
    })
    .catch(error =>{
        res.json({
            message :'an occur'
        })
    })
}

const destroy =(req,res,next)=>{

    let employeeID = req.body.employeeID
    Emp.findByIdAndRemove(employeeID)
    .then(() =>{
        res.json({
            message :'Employee deleted Success'
        })
    })
    .catch(error=>{
        req.json({
            message :'an error'
        })
    })
}

module.exports ={
    index,show,store,update,destroy
}