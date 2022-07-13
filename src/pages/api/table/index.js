import database from '../../../database/database.json';

export default function hundler(req, res){
    res.status(200).json({
        data: database.tables,
    });
}