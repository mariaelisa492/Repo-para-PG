export const validationFunction = (input) => {
    let errors = {}

    if(input.price <= 0) errors.price = 'Price greater than 0'

    if(input.stock < 0) errors.stock = 'Stock greater than or equal to 0'

    if(!input.name) errors.name = 'Name is required'

    if(!input.description) errors.description = 'Description is required'

    if(!input.brand) errors.brand = 'Brand is required'

    if(!input.model) errors.model = 'Model is required'

    if(!input.category) errors.category = 'Category is required'

    return errors;
}