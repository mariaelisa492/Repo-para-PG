import React, { useState } from 'react';
import { saveImages } from './utils/saveImages';
// import { useDispatch } from 'react-redux';
// import action from 'nose';

// Array con las categorias para hacer el <select>
const productCategories = [];

export default function Create() {
  // const dispatch = useDispatch();

  //estados de intput y errores
  const [inputProducts, setInputProducts] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    stock: '',
    brand: '',
    model: '',
    category: ''
  })
  const [errorsProducts, setErrorsProducts] = useState({});

  //Funcion para obtener los valores
  const handleInputChange = (name, value) => {
    setInputProducts((prev) => ({ ...prev, [name]: value }));

    //setErrorsProducts(validate({ ...input, [name]: value }));
  }

  //Funcion para crear producto
  const handleSubmit = async (e) => {
    e.preventDefault();

    let auxInput = inputProducts;

    const urlImage = await saveImages(auxInput.image);

    auxInput.image = urlImage;

    //dispatch(fn(auxInput));
    setInputProducts({
      name: '',
      description: '',
      image: '',
      price: '',
      stock: '',
      brand: '',
      model: '',
      category: ''
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <div>
            <label>Name:</label>
            <input
              type='text' name='name' onChange={e => handleInputChange(e.target.name, e.target.value)} value={inputProducts.name} placeholder='Name of Prduct' />
          </div>

          {errorProducts.name && (
            <p>{errorProducts.name}</p>
          )}
        </div>

        <div>
          <div>
            <label>Description:</label>
            <textarea
              name='description' onChange={e => handleInputChange(e.target.name, e.target.value)} value={inputProducts.description} placeholder='Description of Pokemon' />
          </div>

          {errorProducts.description && (
            <p>{errorProducts.description}</p>
          )}
        </div>

        <div>
            <div>
              <label>Image:</label>
              <input
                type='file' name='image' onChange={e => handleInputChange(e.target.name, e.target.files[0])} value={inputProducts.image} placeholder='Image of Pokemon'/>
            </div>
            {errorProducts.image && (
              <p>{errorProducts.image}</p>
            )}
          </div>

        <div>
          <div>
            <label>Price:</label>
            <input
              type='number' name='price' onChange={e => handleInputChange(e.target.name, e.target.value)} value={inputProducts.price} placeholder='Price of Pokemon' />
          </div>

          {errorProducts.price && (
            <p>{errorProducts.price}</p>
          )}
        </div>

        <div>
          <div>
            <label>Stock:</label>
            <input
              type='number' name='stock' onChange={e => handleInputChange(e.target.name, e.target.value)} value={inputProducts.stock} placeholder='Stock of Pokemon' />
          </div>

          {errorProducts.stock && (
            <p>{errorProducts.stock}</p>
          )}
        </div>

        <div>
          <div>
            <label>Brand:</label>
            <input
              type='text' name='brand' onChange={e => handleInputChange(e.target.name, e.target.value)} value={inputProducts.brand} placeholder='Brand of Pokemon' />
          </div>

          {errorProducts.brand && (
            <p>{errorProducts.brand}</p>
          )}
        </div>

        <div>
          <div>
            <label>Model:</label>
            <input
              type='text' name='model' onChange={e => handleInputChange(e.target.name, e.target.value)} value={inputProducts.model} placeholder='Model of Pokemon' />
          </div>

          {errorProducts.model && (
            <p>{errorProducts.model}</p>
          )}
        </div>

        <div>
          <label>Model:</label>

          <select name='category' onChange={e => handleInputChange(e.target.name, e.target.value)}>
            {productCategories.map(category =>
              <option value={category} key={category}>{category}</option>
            )}
          </select>
        </div>

        {false && <button type='submit' className='btnCreate'> Create </button>}
      </form>
    </div>
  )
}