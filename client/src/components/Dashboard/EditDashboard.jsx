import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const EditDashboard = ({ name }) => {
    const products = useSelector(state => state.products)

    return (
        <div>
            <form>
                <div>
                    <div><h3>Editar Registro</h3></div>
                </div>

                <div>
                    <div>
                        <label>
                            Name:
                        </label>
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            placeholder="name"
                        />
                    </div>
                </div>
                <div>
                    <label>
                        Stock:
                    </label>
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="stock"
                    />
                </div>
                <div>
                    <label>
                        Stock:
                    </label>
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="stock"
                    />
                </div>
                <div>
                    <label>
                        Price:
                    </label>
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="price"
                    />
                </div>
                <div>
                    <Link to="/admin">Back</Link>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditDashboard
