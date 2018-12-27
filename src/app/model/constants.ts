export class Constants {
     serviceEndPoint: String;
    constructor(){ 
    	//serciveEndPoint = "https://medikate.org/glclapi";
    	//serciveEndPoint = "https://medikate.org/glclapitest";
        this.serviceEndPoint = "https://medikate.org/glclapitest";
    	//this.serciveEndPoint = "http://localhost:8085/glclapitest";
    	console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%SERVICE ENDPOINT%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"+ this.serviceEndPoint);
    }
}
