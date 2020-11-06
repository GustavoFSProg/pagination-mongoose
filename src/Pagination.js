import productModel from './Models/productModel'

// const { argv } = process

async function Pagination(req, res) {
  const { page } = req.params

  const limit = 3
  // const page = 2

  const data = await productModel
    .find()
    .select()
    .limit(limit)
    .skip(limit * page)
    .sort({
      name: 'asc',
    })

  return res.status(200).send(data)
}

export default Pagination
