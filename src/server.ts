import * as express from 'express';
import * as dotenv from 'dotenv';
import httpApp from './app';

dotenv.config();

(async () => {
	try {
		let app = express();

		app = await httpApp(app);

		const port = process.env.PORT || 3001;

		app.listen(port, () => {
			console.log(`[server]: Server is running at http://localhost:${port}`);
		});
	} catch (error) {
		console.log(error);
	}
})();
