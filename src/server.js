// ============================================================
// Import packages
import bunyan from 'bunyan';
import bformat from 'bunyan-format';
import express from 'express';
import expressBunyan from 'express-bunyan-logger';

// ============================================================
// Functions
function initialize({ port }) {
    const app = express();
    const formatOut = bformat({ outputMode: 'short' });

    const logger = bunyan.createLogger({ name: 'app', stream: formatOut, level: 'info' });

    app.use(expressBunyan(logger));
    app.use(expressBunyan.errorLogger(logger));

    app.get('/', (req, res) => res.send('Hello World!'));

    app.listen(port, () => console.log(`Redacto server started on port ${port}`));
}

export {
    initialize,
};
