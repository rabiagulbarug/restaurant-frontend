import users from "../../../database/users.json";

export default async function login(req, res) {
    if(req.method === 'POST') {
        const {body} = req;
        const {username, password} = body;
        const user = users.find(t => t.username === username && t.password === password);
        if(!user) {
            res.json({message: 'invalid credentials', error: true});
        }
        res.status(200).json({data: {user, token: user.id}});
    }
    res.status(405).json({message: 'login only accepts POST'});
}