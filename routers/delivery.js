const { Router } = require('express')
const Reviews = require ('../models/reviews')
const Ingredients = require ('../models/ingred')
const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/reviews',async (req, res) => {
    const rev = await Reviews.find ({})

    res.render('reviews',{
        rev
    })
})

router.get('/pizza_1', async (req, res) => {
    const ingres = await Ingredients.find ({})
    for (var i = 0; i < ingres.length; i++) {
        if (ingres[i].title == "Помидоры") {
            ingres[i].flag = true
        }
        if (ingres[i].title == "Бекон")
            ingres[i].flag = true
        if (ingres[i].title == "Халопеньо")
            ingres[i].flag = true
    }
    res.render('order', {
        photo: "/views/images/16.jpg",
        title: "Испанские колбаски чоризо",
        description: "Томаты, острая чоризо, моцарелла, соус чипотле",
        base_cost :350,
        ingres
    })
})

router.get('/pizza_2',async (req, res) => {
    const ingres = await Ingredients.find ({})
    for (var i = 0; i < ingres.length; i++) {
        if (ingres[i].title == "olives") {
            ingres[i].flag = true
        }
        if (ingres[i].title == "cucumbers")
            ingres[i].flag = true
    }
    res.render('order', {
        photo: "/views/images/2.jpg",
        title: "Сицилийская",
        description: "Курица, Лук, Маслины, Зеленый перец, Свежие томаты, Сыр Моцарелла",
        base_cost :400,
        dop_cost:0,
        ingres
    })
})

router.get('/dogs', (req, res) => {
    res.render('dogs')
})

router.get('/bucket', (req, res) => {

    res.render('bucket')
})

router.post ('/dogs',async (req,res)=> {
 const rev = new  Reviews ({
     nic: req.body.nickname,
     rev: req.body.review
 })
 await rev.save()
 res.redirect ('/reviews')
})

// router.post ('/order',async (req,res)=> {
//     console.log('dfd')
//     const ing = await Ingredients.findById(req.body.id)
//     ing.entry=true
//     res.base_cost+=ign.cost
//    // res.render('order')
   
//    })

module.exports = router