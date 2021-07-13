import { getItem, getItems, addItem, deleteItem, updateItem } from '../controllers/items.js'

const itemRoutes = (fastify, options, done) => {

    const Item = {
        type:'object',
        properties:{
            id:{type:'string'},
            name:{type:'string'}
        }
    }

    //options for get all items
    const getItemsOpts = {
        schema: {
            response:{
                200: {
                    type:'array',
                    items:Item
                }
            }
        },
        handler: getItems
    }

    //options for get single item
    const getItemOpts = {
        schema:{
            response:{
                200:Item
            }
        },
        handler: getItem
    }

    //options for post single item
    const postItemOpts = {
        schema:{
            body:{
                type: 'object',
                required: ['name'],
                properties:{
                    name:{type:'string'}
                }
            },
            response:{
                201:Item
            }
        },
        handler: addItem
    }
    
    //options for get single item
    const deleteItemOpts = {
        schema:{
            response:{
                200: {
                    type:'object', 
                    properties: {
                        message:{type: 'string'}
                    }
                }
            }
        },
        handler: deleteItem
    }

    //options for get single item
    const updateItemOpts = {
        schema:{
            body:{
                type: 'object',
                required: ['name'],
                properties:{
                    name:{type:'string'}
                }
            },
            response:{
                200: {
                    type:'object', 
                    properties: {
                        name:{type:'string'},
                        id:{type:'string'}
                    }
                }
            }
        },
        handler: updateItem
    }

    
    // Get all Items
    fastify.get('/items', getItemsOpts)
    
    // Get single Item
    fastify.get('/items/:id', getItemOpts)

    //Add Item
    fastify.post('/items', postItemOpts)
    
    //Delete Item
    fastify.delete('/items/:id', deleteItemOpts)
    
    //Update Item
    fastify.put('/items/:id', updateItemOpts)

    done();
}

export default itemRoutes;