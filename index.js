class ProductManager{

    products;

    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(title && description && price && thumbnail && code && stock && this.codeValidation(code)){
            const product = {
                id : this.getNewId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(product);
            console.log(`Product with id ${product.id} added`);
        }else{
            console.log("Require fields validation");
        }
    }

    getNewId(){
        return this.products.length + 1;
    }

    getProducts(){
        return this.products;
    }
    
    codeValidation(code){
        const result = this.products.find(product => product.code == code);
        if(result) {
            return false
        } else {
            return true
        }
    }

    getProductById(id){
        const isFound = this.products.find(product => product.id == id);
        if (isFound){
            this.products[id-1]
        } else {
            console.log("Not found")
        }
    }
}

const newProductManager = new ProductManager();

newProductManager.addProduct("Producto prueba","Este es un producto de prueba",200,"Sin imagen","ABC123",25);

const accessProductManager = newProductManager.getProductById(1);
