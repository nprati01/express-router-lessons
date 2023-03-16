const express = require('express')
const router = express.Router()
const todosCtrl = require('../controllers/todos')

router.get('/', todosCtrl.index)

router.get('/new', todosCtrl.new)

// create a get route with the path `/:id/edit` that runs the edit controller function
router.get('/:id/edit', todosCtrl.edit)

router.get('/:id', todosCtrl.show)

router.post('/', todosCtrl.create)

router.delete('/:id', todosCtrl.deleteOne)

// create a put route with the path `/:id` that runs the update controller function
router.put('/:id', todosCtrl.update)

module.exports = router


/** Hungry for more /today route
 *
 * router.get('/today', function(req,res){
 *
 * 		const now = new Date()
 *
 * 		const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
 *
 * 		const day = now.toLocaleString('en-US', {
 * 			timeZone: currentTimezone,
 * 			weekday: 'long'
 * 		})
 *
 * 	res.status(200).send(`Today is : ${day}`)
 * })
 *
 */
