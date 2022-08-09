import users from "../../../database/users.json";

export default async function login(req, res) {
    const {username, password} = JSON.parse(req.body);
    if (req.method !== 'POST') {
        res.json({message: 'method not allowed', error: true});
    }
    const user = users.find(t => t.username === username && t.password === password);
    if (!user) {
        res.json({message: 'invalid credentials', error: true});
    }

    return res.json({data: user});
}