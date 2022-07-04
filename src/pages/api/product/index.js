import database from '../../../database/database.json';

export default function handler(req, res) {
    res.status(200).json({
        data: database.tea,
    });
}