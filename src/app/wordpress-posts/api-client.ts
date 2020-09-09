import axios from "axios";
import { AxiosInstance } from "axios";
import { ErrorHandler } from "@angular/core";
import { Injectable } from "@angular/core";
 
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
 
export interface Params {
	[ key: string ]: any;
}
 
export interface GetOptions {
	url: string;
	params?: Params;
}
 
export interface ErrorResponse {
	id: string;
	code: string;
	message: string;
}
 
@Injectable({
	providedIn: "root"
})
export class ApiClient {
 
	private axiosClient: AxiosInstance;
	private errorHandler: ErrorHandler;
 
	constructor( errorHandler: ErrorHandler ) {
 
		this.errorHandler = errorHandler;
 
		this.axiosClient = axios.create({
			timeout: 3000,
			headers: {
				"X-Initialized-At": Date.now().toString()
			}
		});
 
	}

 
	public async get<T>( options: GetOptions ) : Promise<T> {
 
		try {
 
			const axiosResponse = await this.axiosClient.request<T>({
				method: "get",
				url: options.url,
				params: options.params,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Content-Type': 'application/json'
				}
			});
 
			return( axiosResponse.data);
 
		} catch ( error ) {
			return( Promise.reject( this.normalizeError( error ) ) );
		}
 
	}
 
	private normalizeError( error: any ) : ErrorResponse {
 
		this.errorHandler.handleError( error );

		return({
			id: "-1",
			code: "UnknownError",
			message: "An unexpected error occurred."
		});
 
	}
 
}