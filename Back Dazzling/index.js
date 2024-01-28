import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose, { Schema } from 'mongoose'
const app = express()
app.use(express.json())
app.use(cors())

const slideSchema = new Schema({
    name: String,
    desc: String,
    price: Number,
    image: String,
    date: String,
    category: String,
});

const SlideModel = mongoose.model('SlideModel', slideSchema);

app.get('/', async (req, res) => {
    try {
        const slides = await SlideModel.find({})
        res.json(slides)
    } catch (error) {
        res.send(error.message)
    }

})
app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const slides = await SlideModel.findById(id)
        res.json(slides)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const { name, desc, price,image, date, category } = req.body
        const newSlides = new SlideModel({name, desc, price,image, date, category })
        await newSlides.save()
        res.json(newSlides)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, desc, price,image, date, category } = req.body
        const slides = await SlideModel.findByIdAndUpdate(id,{name, desc, price,image, date, category })
        res.json(slides)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const slides = await SlideModel.findByIdAndDelete(id)
        res.json(slides)
    } catch (error) {
        res.send(error.message)
    }
})

mongoose.connect(process.env.DB_SECRET_KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('not Connected!'));

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})