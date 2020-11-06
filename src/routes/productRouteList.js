import { Router } from 'express'
import productController from '../Controllers/productController'
import Pagination from '../Pagination'

const routes = new Router()

const productRouteList = [
  routes.get('/', productController.getAll),
  routes.get('/products/:id', productController.getById),
  routes.post('/post', productController.create),
  routes.put('/products/update/:id', productController.update),
  routes.delete('/products/del/:id', productController.removerProduto),
  routes.post('/pagination/:page', Pagination),
]

export default productRouteList
