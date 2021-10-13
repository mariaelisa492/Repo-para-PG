export const validationFunction = (input) => {
    let errors = {}

    if(input.price <= 0) errors.price = ''

    if(input.stock < 0) errors.stock = ''

    if(!input.name) errors.name = 'Name is required'

    if(!input.description) errors.description = 'Description is required'

    if(!input.brand) errors.brand = 'Brand is required'

    if(!input.model) errors.model = 'Model is required'

    if(!input.category) errors.category = 'Category is required'

    return errors;
}