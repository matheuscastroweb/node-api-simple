const mongoose = require('mongoose');

//Biblioteca para paginação
const mongoosePaginate = require('mongoose-paginate');

//Propriedades a ser criada pelo Produto
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);


//Registrar um model 
mongoose.model('Product', ProductSchema);