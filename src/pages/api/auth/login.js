import database from '../../../database/database.json';

export default async function login(req, res) {
    if(req.method === 'POST') {
        const {body} = req;
        const {username, password} = body;
        const user = database.accounts.find(t => t.username === username && t.password === password);
        if(!user) {
            res.status(400).json({message: 'invalid_credentials'});
        }
        res.status(200).json({data: {user, token: user.id}});
    }
    res.status(405).json({message: 'login only accepts POST'});
}