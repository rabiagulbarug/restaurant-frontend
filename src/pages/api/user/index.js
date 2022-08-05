import users from "/src/database/users.json";

export default async function handler(req, res) {
    const {role} = req.query;
    switch (role) {
        case 'admin':
            res.json({data: users.filter(user => user.role === 'admin')});
            break;
        case 'restaurant':
            res.json({data: users.filter(user => user.role === 'restaurant')});
            break;
        case 'waiter':
            res.json({data: users.filter(user => user.role === 'waiter')});
            break;
        case 'customer':
            res.json({data: users.filter(user => user.role === 'customer')});
            break;
        case 'all':
        default:
            res.json({data: users});
            break;
    }
    res.status(200).json({
        data: users,
    });
}