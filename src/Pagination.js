import productModel from './Models/productModel'

// const { argv } = process

async function Pagination(req, res) {
  const pageLimit = req.body.limit
  const { page } = req.body

  const data = await productModel
    .find()
    .select()
    .limit(pageLimit)
    .skip(pageLimit * page)
    .sort({
      name: 'asc',
    })

  return res.status(200).send({ data })
}

export default Pagination
