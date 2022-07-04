import database from '../../../database/database.json';

export default function handler(req, res) {
    const category = database.categories.find(item => item.slug === req.query.slug);
    if(!category) {
        res.status(404).json({ message: 'not_found' });
    }

    res.status(200).json({ data: category });
}