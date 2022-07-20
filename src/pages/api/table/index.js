import database from '../../../database/database.json';

export default function handler(req, res) {
    let result = database.tables;

    if(req.query?.location) {
        result = result.filter(t => t.location === req.query.location);
    }

    res.status(200).json({
        data: result,
    });
}