import express from 'express';
import winston from 'winston';

const app = express();
app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;

const myFormat = printf(
    ({level, message, label, timestamp}) => {
        return `${timestamp} [${label}] ${level} : ${message}`;
    }
);

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(), 
        new (winston.transports.File)({ filename: "myLog.log"})
    ],
    format: combine(
        label({label: 'my-app'}),
        timestamp(),
        myFormat
    )
})

logger.error('-- > Error Log < --');
logger.warn('-- > Warn Log < --');
logger.info('-- > Info Log < --');
logger.verbose('-- > Verbose Log < --');
logger.debug('-- > Debug Log < --');
logger.silly('-- > Silly Log < --');
logger.log("info", "Hello with parameters");

app.get('/', (req, res) => {
    console.log(req.method);
    res.send(req.method);
})

app.listen(3000, () => {
    console.log('API Started...');
})