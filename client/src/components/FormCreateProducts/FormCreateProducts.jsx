import React, { useState, useRef } from 'react';
import { FaTimes } from 'react-icons/fa'
import { saveImages } from './utils/saveImages';
import { validationFunction } from './utils/validationFunction';
import { useDispatch } from 'react-redux';
import { setNewProduct } from './utils/setNewProduct';
import { categories } from '../Categories/categoriesExport'
import './FormCreateProducts.css'

let AllCategories = []

for (let key in categories) {
  AllCategories = [...AllCategories, ...categories[key]]
}

export default function Create({ handleClosePopup, showPopup }) {
  const dispatch = useDispatch();
  const refFileInput = useRef();

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

    dispatch(setNewProduct(auxInput));
    setInputProducts({
      name: '',
      description: '',
      image: '',
      price: '',
      stock: '',
      brand: '',
      model: '',
      category: ''
    });
    handleClosePopup();
    showPopup(true);
    setTimeout(() => showPopup(false), 1000);
  }

  const resetFileInput = () => {
    refFileInput.current.value = "";
  };

  return (
    <div className='backgroundCreateProducts containerformProducts'>
      <form
        onSubmit={e => {
          handleSubmit(e)
          resetFileInput()
        }}
        className='formCreateProducts containerformProducts'
      >
        <button onClick={handleClosePopup} className='btnCloseFormProducts containerformProducts'><FaTimes /></button>

        <div>
          <div>
            <div className='containerformProducts'>
              <label className='labelCreateProducts'>Name:</label>
              <input
                type='text'
                name='name'
                onChange={e => handleInputChange(e.target.name, e.target.value)}
                value={inputProducts.name}
                placeholder='Name of Product'
                className='inputCreateProducts'
                required
              />
            </div>
          </div>

          {errorsProducts.name && (
            <p className='errorText'>{errorsProducts.name}</p>
          )}
        </div>

        <div>
          <div>
            <div className='containerformProducts'>
              <label className='labelCreateProducts'>Description:</label>
              <textarea
                name='description'
                onChange={e => handleInputChange(e.target.name, e.target.value)}
                value={inputProducts.description}
                placeholder='Description of Product'
                className='inputCreateProducts'
                required
              />
            </div>
          </div>


          {errorsProducts.description && (
            <p className='errorText'>{errorsProducts.description}</p>
          )}
        </div>

        <div>
          <div>
            <div className='containerformProducts'>
              <label className='labelCreateProducts'>Image:</label>
              <input
                type='file'
                name='image'
                onChange={e => handleInputChange(e.target.name, e.target.files[0])}
                placeholder='Image of Product'
                className='inputCreateProducts'
                ref={refFileInput}
                required
              />
            </div>
          </div>

          {errorsProducts.image && (
            <p className='errorText'>{errorsProducts.image}</p>
          )}
        </div>

        <div>
          <div>
            <div className='containerformProducts'>
              <label className='labelCreateProducts'>Price:</label>
              <input
                type='number'
                name='price'
                onChange={e => handleInputChange(e.target.name, e.target.value)}
                value={inputProducts.price}
                placeholder='Price of Product'
                className='inputCreateProducts'
                required
              />
            </div>
          </div>

          {errorsProducts.price && (
            <p className='errorText'>{errorsProducts.price}</p>
          )}
        </div>

        <div>
          <div>
            <div className='containerformProducts'>
              <label className='labelCreateProducts'>Stock:</label>
              <input
                type='number'
                name='stock'
                onChange={e => handleInputChange(e.target.name, e.target.value)}
                value={inputProducts.stock}
                placeholder='Stock of Product'
                className='inputCreateProducts'
                required
              />
            </div>
          </div>

          {errorsProducts.stock && (
            <p className='errorText'>{errorsProducts.stock}</p>
          )}
        </div>

        <div>
          <div>
            <div className='containerformProducts'>
              <label className='labelCreateProducts'>Brand:</label>
              <input
                type='text'
                name='brand'
                onChange={e => handleInputChange(e.target.name, e.target.value)}
                value={inputProducts.brand}
                placeholder='Brand of Product'
                className='inputCreateProducts'
                required
              />
            </div>
          </div>

          {errorsProducts.brand && (
            <p className='errorText'>{errorsProducts.brand}</p>
          )}
        </div>

        <div>
          <div>
            <div className='containerformProducts'>
              <label className='labelCreateProducts'>Model:</label>
              <input
                type='text'
                name='model'
                onChange={e => handleInputChange(e.target.name, e.target.value)}
                value={inputProducts.model}
                placeholder='Model of Product'
                className='inputCreateProducts'
                required
              />
            </div>
          </div>

          {errorsProducts.model && (
            <p className='errorText'>{errorsProducts.model}</p>
          )}
        </div>

        <div>
          <div className='containerformProducts'>
            <label className='labelCreateProducts'>Category:</label>

            <select
              name='category'
              onChange={e => handleInputChange(e.target.name, e.target.value)}
              className='inputCreateProducts'
              value={inputProducts.category}
              required
            >
              <option value=''>Select Category</option>
              {AllCategories.map(category =>
                <option value={category} key={category}>{category}</option>
              )}
            </select>
          </div>

          {errorsProducts.category && (
            <p className='errorText'>{errorsProducts.category}</p>
          )}
        </div>

        <div>
          <input
            type='submit'
            value='Create'
            className={Object.keys(errorsProducts).length === 0 ? 'btnCreate' : 'greyBtnCreate'}
            diabled={Object.keys(errorsProducts).length === 0}
          />
        </div>
      </form>
    </div>
  )
}