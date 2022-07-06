import database from '../../../database/database.json';

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json({
            data: database.employees,
        });
    } else if(req.method === 'POST') {
        // TODO: Return req body with new id as response
    }
}