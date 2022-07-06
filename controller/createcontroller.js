
const createb = require('./../models/createproject')
const fs = require('fs')

//engine for storing files and image ..........

//engine for storing files and image ........

exports.createbrand = async (req, res) => {
    try {
        console.log(req.file)
        const Brand = createb.create({
            ...req.body,
            image: {
                data: fs.readFileSync(req.file.path),
                contentType: 'image/png'
            }
        })
        res.status(200).json({
            status: "success",
            data: {
                Brand
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}

exports.getbrand = async (req, res) => {
    try {
        const brand = await createb.find()
        res.status(200).json({
            status: "success",
            data: {
                brand
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}

