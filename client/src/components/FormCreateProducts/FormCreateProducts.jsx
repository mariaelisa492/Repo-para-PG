import React, { useState } from 'react';
import { saveImages } from './utils/saveImages';
import { validationFunction } from './utils/validationFunction';
import { useDispatch } from 'react-redux';
import './FormCreateProducts.css'

// Array con las categorias para hacer el <select>
const productCategories = [
  'Acoustic Violin',
  'Digital Drums',
  'Digital Keyboards',
  'Electro-Acoustic Guitars',
  'Electric Bass',
  'Electric Guitars',
  'Electric Violin'
];

export default function Create() {
  const dispatch = useDispatch();

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

    setErrorsProducts(validationFunction({ ...inputProducts, [name]: value }));
  }

  //Funcion para crear producto
  const handleSubmit = async (e) => {
    e.preventDefault();

    let auxInput = inputProducts;

    const urlImage = await saveImages(auxInput.image);

    auxInput.image = urlImage;

  
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
    <div className='backgroundCreateProducts'>
      <form
        onSubmit={handleSubmit}
        className='formCreateProducts'
      >
        <div>
          <div>
            <label className='labelCreateProducts'>Name:</label>
            <input
              type='text'
              name='name'
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              value={inputProducts.name}
              placeholder='Name of Product'
              className='inputCreateProducts'
            />
          </div>

          {errorsProducts.name && (
            <p>{errorsProducts.name}</p>
          )}
        </div>

        <div>
          <div>
            <label className='labelCreateProducts'>Description:</label>
            <textarea
              name='description'
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              value={inputProducts.description}
              placeholder='Description of Product'
              className='inputCreateProducts'
            />
          </div>

          {errorsProducts.description && (
            <p>{errorsProducts.description}</p>
          )}
        </div>

        <div>
          <div>
            <label className='labelCreateProducts'>Image:</label>
            <input
              type='file'
              name='image'
              onChange={e => handleInputChange(e.target.name, e.target.files[0])}
              placeholder='Image of Product'
              className='inputCreateProducts'
            />
          </div>
          {errorsProducts.image && (
            <p>{errorsProducts.image}</p>
          )}
        </div>

        <div>
          <div>
            <label className='labelCreateProducts'>Price:</label>
            <input
              type='number'
              name='price'
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              value={inputProducts.price}
              placeholder='Price of Product'
              className='inputCreateProducts'
            />
          </div>

          {errorsProducts.price && (
            <p>{errorsProducts.price}</p>
          )}
        </div>

        <div>
          <div>
            <label className='labelCreateProducts'>Stock:</label>
            <input
              type='number'
              name='stock'
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              value={inputProducts.stock}
              placeholder='Stock of Product'
              className='inputCreateProducts'
            />
          </div>

          {errorsProducts.stock && (
            <p>{errorsProducts.stock}</p>
          )}
        </div>

        <div>
          <div>
            <label className='labelCreateProducts'>Brand:</label>
            <input
              type='text'
              name='brand'
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              value={inputProducts.brand}
              placeholder='Brand of Product'
              className='inputCreateProducts'
            />
          </div>

          {errorsProducts.brand && (
            <p>{errorsProducts.brand}</p>
          )}
        </div>

        <div>
          <div>
            <label className='labelCreateProducts'>Model:</label>
            <input
              type='text'
              name='model'
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              value={inputProducts.model}
              placeholder='Model of Product'
              className='inputCreateProducts'
            />
          </div>

          {errorsProducts.model && (
            <p>{errorsProducts.model}</p>
          )}
        </div>

        <div>
          <label className='labelCreateProducts'>Category:</label>

          <select
            name='category'
            onChange={e => handleInputChange(e.target.name, e.target.value)}
            className='inputCreateProducts'
          >
            <option value=''>Select Category</option>
            {productCategories.map(category =>
              <option value={category} key={category}>{category}</option>
            )}
          </select>
          {errorsProducts.category && (
            <p>{errorsProducts.category}</p>
          )}
        </div>

        <input type='submit' value='Create' className='btnCreate' />
      </form>
    </div>
  )
}