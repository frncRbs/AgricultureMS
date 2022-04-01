const { User } = require('model.user');

const users = require('/data/users');

const importData = async() => {
    try {
        // delete everything
        await User.deleteAll();

        // create new user
        await User.create(users);

        console.log('DATA IMPORTED SUCCESSFULLY');
        process.exit();
    } catch (error) {
        process.exit(1);
    }
};

const destroyData = async() => {
    try {
        // delete everything
        await User.deleteAll();

        console.log('DATA DELETED SUCCESSFULLY');
        process.exit();
    } catch (error) {
        process.exit(1);
    }
};

// get command for operation
if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}