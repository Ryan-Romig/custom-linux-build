const { spawn } = require('child_process');
const path = require('path');
const { getSecret, secretNames } = require('./secrets')

/* 
Basic mongo dump and restore commands, they contain more options you can have a look at man page for both of them.
1. mongodump --db=rbac_tutorial --archive=./rbac.gzip --gzip
2. mongorestore --db=rbac_tutorial --archive=./rbac.gzip --gzip

Using mongodump - without any args:
  will dump each and every db into a folder called "dump" in the directory from where it was executed.
Using mongorestore - without any args:
  will try to restore every database from "dump" folder in current directory, if "dump" folder does not exist then it will simply fail.
*/

const DB_NAME = getSecret(secretNames.dbName);
const ARCHIVE_PATH = path.join('/home/shared/mongodb',`${DB_NAME}.gzip`);

// 1. Cron expression for every 5 seconds - */5 * * * * *
// 2. Cron expression for every night at 00:00 hours (0 0 * * * )
// Note: 2nd expression only contains 5 fields, since seconds is not necessary

// Scheduling the backup every 5 seconds (using node-cron)


 function backupMongoDB() {
    console.log(secretNames.dbUri)
  const child = spawn('mongodump', [
    `--uri=${getSecret(secretNames.dbUri)}`
  ]);

  child.stdout.on('data', (data) => {
    console.log('stdout:\n', data);
  });
  child.stderr.on('data', (data) => {
    console.log('stderr:\n', Buffer.from(data).toString());
  });
  child.on('error', (error) => {
    console.log('error:\n', error);
  });
  child.on('exit', (code, signal) => {
    if (code) console.log('Process exit with code:', code);
    else if (signal) console.log('Process killed with signal:', signal);
    else console.log('Backup is successfull ✅');
  });
}

module.exports = { backupMongoDB};