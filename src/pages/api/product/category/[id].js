import database from '../../../../database/database.json';

export default function handler(req, res) {
    const product = database.products.filter(item => item.categoryId.toString() === req.query.id.toString());

    res.status(200).json({data: product});
}