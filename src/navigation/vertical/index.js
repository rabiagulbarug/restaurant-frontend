const navigation = (isAdmin) => {
    const adminRoutes = [
        {
            title: 'Admin',
            path: '/admin',
        },
        {
            title: 'Personeller',
            path: '/employee',
        }
    ];

    const commonRoutes = [
        {
            title: 'Dashboard',
            path: '/'
        },
        {
            title: 'Menu',
            path: '/menu'
        },
    ];

    return isAdmin ? [...commonRoutes, ...adminRoutes] : commonRoutes;
}

export default navigation;