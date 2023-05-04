const bcrypt = require('bcrypt');

class UtilsService {

    hash(password) {
        return bcrypt.hashSync(password, 10);
    }

    dehash(password, hash) {
        return bcrypt.compareSync(password, hash);
    }

}

exports.UtilsService = new UtilsService;