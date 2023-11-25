import bcrypt from 'bcryptjs';

const users = [
    {
        name:'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Sai',
        email: 'Sai@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
      },
      {
        name: 'Siva',
        email: 'siva@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
      },
];

export default users;
