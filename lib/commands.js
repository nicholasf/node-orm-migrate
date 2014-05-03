var MigrationTask   = require('migrate-orm2'),
    orm             = require('orm');

var run = function (operation, file, cb) {
    orm.settings.set("connection.debug", true);
    orm.connect(process.env.DB_URL, function (err, connection) {
        if (err) throw(err);

        var migrationTask = new MigrationTask(
            connection.driver,
            { dir: 'data/migrations'}
        );

        migrationTask[operation](file, cb);
    });
};

exports.generate = function(file, cb){
    run('generate', file, cb);
};

exports.up = function(file, cb){
    run('up', file, cb);
};

exports.down = function(file, cb){
    run('down', file, cb);
};