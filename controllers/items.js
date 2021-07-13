import {items, addItem as addItem_,
     deleteItem as deleteItem_,
    updateItem as updateItem_} from '../Items.js';
import { v4 as uuidv4} from 'uuid';

const getItems = async (req, reply) => {
    reply.send(items);
}

const getItem = async (req, reply) => {
    const { id } = req.params;
    reply.send(items?.find(el => el.id == id));
}

const addItem = async (req, reply) => {
    const {name} = req.body;
    const item = {
        id: uuidv4(),
        name
    }
    addItem_(item)
    reply.code(201).send(item);
}

const deleteItem = async (req, reply) => {
    const { id } = req.params;
    deleteItem_(id);
    reply.code(200).send({
        message: 'Deleted successfully'
    });
}

const updateItem = async (req, reply) => {
    const { id } = req.params;
    const { name } = req.body;
    const item_ = updateItem_(id, name);
    reply.code(200).send(item_);
}

export {getItem, getItems, addItem, deleteItem, updateItem}