let items = [
    {id: '1', name:'Item One'},
    {id: '2', name:'Item Two'},
    {id: '3', name:'Item Three'},
    {id: '4', name:'Item Four'},
    {id: '5', name:'Item Five'}
]

const addItem = (item) => {
    items = [...items, item];
}


const deleteItem = (id) => {
    items = items.filter(el => el.id != id);
}

const updateItem = (id, name) => {
    items = items?.map(el => (el.id === id ? {id, name} : el))
    return items.find(el => el.id === id);
}


export {addItem, deleteItem, updateItem, items};