import database from '../../../database/database.json';

export default async function me(req, res) {
    const token = req.headers.get('Authentication')?.replace('Bearer ', '');
    const user = database.accounts.find(t => t.id === token);

    if (!user) {
        res.status(401).json({message: 'unauthenticated'})
    }
    res.status(200).json({data: user});
}