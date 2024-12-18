// src/middleware/apiResponse.ts
import { NextFunction, Request, RequestHandler, Response } from 'express';

type RequestHandlerType = (req: Request, res: Response, next: NextFunction) => Promise<unknown>;

const requestHandler = (handler: RequestHandlerType) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const data = await handler(req, res, next);

			res.status(200).json({
				data,
				statusCode: 200,
			});
		} catch (error) {
			const statusCode = error.statusCode || 500;
			const message = error.message || 'Internal Server Error';

			res.status(statusCode).send({
				message,
				statusCode,
			});
		}
	};
};

export default requestHandler;
