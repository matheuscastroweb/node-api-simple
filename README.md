# Node-api-simple

##### Funcionalidades implementadas:

- Conexão com banco de dados
`mongoose.connect('URL', PARAMS);`

- Navegação entre rotas
`routes.get('/products', ProductController.index);`

- Liberação para ser acessado através de outras URLs
`app.use(cors());`

- Importações diretas com o **require-dir**
`requireDir('./src/models');`

- Crud de informações com GET, POST, PUT, DELETE

        async index(req, res){
            const { page = 1 } = req.query;
            const products = await Product.paginate({}, {page, limit: 10});
            return res.json(products);
        },
    
        async show(req,res){
            const product = await Product.findById(req.params.id);
            return res.json(product);
        },
    
        async store(req, res){
           const product = await Product.create(req.body);
           return res.json(product);
        },
    
        async update(req, res){
            //A.findByIdAndUpdate(id, update, options, callback) // executes
            const product = await Product.findByIdAndUpdate(req.params.id,req.body, {new: true});
            return res.json(product);
         },
    
         async destroy(req, res){
            await Product.findByIdAndRemove(req.params.id);
            return res.send();
         }

##### Bibliotecas utilizadas:

1. express
2. mongoose
3. mongoose-paginate
4. cors
5. require-dir

