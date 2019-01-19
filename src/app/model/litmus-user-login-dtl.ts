export class LitmusUserLoginDtl {
	private  USER_ID : string;
	private  USER_FNAME : string; 
	private  USER_TITLE : string; 
	private  USER_MNAME : string; 
	private  USER_LNAME : string; 
	private  USER_PASSWORD : string; 
	private  USER_MAIL_ID : string; 
	private  USER_CUSTOMER_ID : string; 
	private  USER_MOBILE_NO : string; 
	private  USER_LAND_NO : string; 
	private  USER_ADDRESS : string; 
	private  USER_QUALIFICATION : string; 
	private  USER_REGN_ID : string; 
	private  COUNTRY_ID: string; 
	private  STATE_ID: string; 
	private  DISTRICT_ID: string; 
	private  COUNTRY_NAME: string; 
	private  STATE_NAME: string; 
	private  DISTRICT_NAME: string; 
	private  BLOCK_ID: string; 
	private  PRODUCT_ID: string; 
	private  SUB_PRODUCT_ID: string; 
	private  USER_DATE : string; 
	private  USER_TIME : string; 
	private  USER_AVILABLE_FLAG : string;
	private  USER_TYPE: string;
    private  LOG_IN_TYPE: string;
    private  ACCOUNT_FLAG: string;
	private  USER_START_DATE: string;
	private  USER_END_DATE: string;
	private  ACC_PARAM_ID: string;
	private  USER_CURRENT_VALUE : string;
    private  USER_REMAINING_VAL: string;
    private  USER_MASSG_ALERT: string;
    private  USER_ACTIVE_FLAG: string;
    private  CONTROL_FLAG: string;
    private  USER_ACC_CON_ID: string;
	private  SPECIALIZATION_NAME: string;
	
	private  flag: string;
	
	public getFlag():string {
		return this.flag;
	}
	public  setFlag(flag:string):void {
		this.flag = flag;
	}
	public  getUSER_ACC_CON_ID():string {
		return this.USER_ACC_CON_ID;
	}
	public  setUSER_ACC_CON_ID(uSER_ACC_CON_ID:string):void {
		this.USER_ACC_CON_ID = uSER_ACC_CON_ID;
	}
	public getACC_PARAM_ID():string {
		return this.ACC_PARAM_ID;
	}
	public setACC_PARAM_ID(aCC_PARAM_ID:string):void {
		this.ACC_PARAM_ID = aCC_PARAM_ID;
	}
	public getUSER_START_DATE():string {
		return this.USER_START_DATE;
	}
	public setUSER_START_DATE(uSER_START_DATE:string):void {
		this.USER_START_DATE = uSER_START_DATE;
	}
	public getUSER_END_DATE():string {
		return this.USER_END_DATE;
	}
	public setUSER_END_DATE(uSER_END_DATE:string):void {
		this.USER_END_DATE = uSER_END_DATE;
	}
	public getUSER_CURRENT_VALUE():string {
		return this.USER_CURRENT_VALUE;
	}
	public  setUSER_CURRENT_VALUE(uSER_CURRENT_VALUE:string):void {
		this.USER_CURRENT_VALUE = uSER_CURRENT_VALUE;
	}
	public  getUSER_REMAINING_VAL():string {
		return this.USER_REMAINING_VAL;
	}
	public setUSER_REMAINING_VAL(uSER_REMAINING_VAL:string):void {
		this.USER_REMAINING_VAL = uSER_REMAINING_VAL;
	}
	public getUSER_MASSG_ALERT():string {
		return this.USER_MASSG_ALERT;
	}
	public setUSER_MASSG_ALERT(uSER_MASSG_ALERT:string):void {
		this.USER_MASSG_ALERT = uSER_MASSG_ALERT;
	}
	public getUSER_ACTIVE_FLAG():string {
		return this.USER_ACTIVE_FLAG;
	}
	public setUSER_ACTIVE_FLAG(uSER_ACTIVE_FLAG:string):void {
		this.USER_ACTIVE_FLAG = uSER_ACTIVE_FLAG;
	}
	public getCONTROL_FLAG():string {
		return this.CONTROL_FLAG;
	}
	public setCONTROL_FLAG(cONTROL_FLAG:string):void {
		this.CONTROL_FLAG = cONTROL_FLAG;
	}
	public getUSER_TITLE():string {
		return this.USER_TITLE;
	}
	public setUSER_TITLE(uSER_TITLE: string): void {
		this.USER_TITLE = uSER_TITLE;
	}
	public getUSER_TYPE():string {
		return this.USER_TYPE;
	}
	public setUSER_TYPE(uSER_TYPE:string):void {
		this.USER_TYPE = uSER_TYPE;
	}
	public getLOG_IN_TYPE():string {
		return this.LOG_IN_TYPE;
	}
	public setLOG_IN_TYPE(lOG_IN_TYPE: string):void {
		this.LOG_IN_TYPE = lOG_IN_TYPE;
	}
	public getACCOUNT_FLAG():string {
		return this.ACCOUNT_FLAG;
	}
	public setACCOUNT_FLAG(aCCOUNT_FLAG: string):void {
		this.ACCOUNT_FLAG = aCCOUNT_FLAG;
	}
	public getCOUNTRY_NAME(): string {
		return this.COUNTRY_NAME;
	}
	public  setCOUNTRY_NAME(cOUNTRY_NAME: string):void {
		this.COUNTRY_NAME = cOUNTRY_NAME;
	}
	public getSTATE_NAME():string {
		return this.STATE_NAME;
	}
	public setSTATE_NAME(sTATE_NAME: string): void {
		this.STATE_NAME = sTATE_NAME;
	}
	public getDISTRICT_NAME():string {
		return this.DISTRICT_NAME;
	}
	public  setDISTRICT_NAME(dISTRICT_NAME: string):void {
		this.DISTRICT_NAME = dISTRICT_NAME;
	}
	public getUSER_ID():string {
		return this.USER_ID;
	}
	public setUSER_ID(uSER_ID: string):void {
		this.USER_ID = uSER_ID;
	}
	public getUSER_FNAME():string {
		return this.USER_FNAME;
	}
	public setUSER_FNAME(uSER_FNAME: string):void {
		this.USER_FNAME = uSER_FNAME;
	}
	public getUSER_MNAME():string {
		return this.USER_MNAME;
	}
	public setUSER_MNAME(uSER_MNAME:string):void {
		this.USER_MNAME = uSER_MNAME;
	}
	public getUSER_LNAME(): string {
		return this.USER_LNAME;
	}
	public setUSER_LNAME(uSER_LNAME: string): void {
		this.USER_LNAME = uSER_LNAME;
	}
	public getUSER_PASSWORD():string {
		return this.USER_PASSWORD;
	}
	public setUSER_PASSWORD(uSER_PASSWORD:string):void {
		this.USER_PASSWORD = uSER_PASSWORD;
	}
	public getUSER_MAIL_ID():string {
		return this.USER_MAIL_ID;
	}
	public setUSER_MAIL_ID(uSER_MAIL_ID: string):void {
		this.USER_MAIL_ID = uSER_MAIL_ID;
	}
	public getUSER_CUSTOMER_ID(): string {
		return this.USER_CUSTOMER_ID;
	}
	public setUSER_CUSTOMER_ID(uSER_CUSTOMER_ID: string): void {
		this.USER_CUSTOMER_ID = uSER_CUSTOMER_ID;
	}
	public getUSER_MOBILE_NO(): string {
		return this.USER_MOBILE_NO;
	}
	public setUSER_MOBILE_NO(uSER_MOBILE_NO: string):void {
		this.USER_MOBILE_NO = uSER_MOBILE_NO;
	}
	public getUSER_LAND_NO(): string {
		return this.USER_LAND_NO;
	}
	public setUSER_LAND_NO(uSER_LAND_NO: string): void {
		this.USER_LAND_NO = uSER_LAND_NO;
	}
	public  getUSER_ADDRESS():string {
		return this.USER_ADDRESS;
	}
	public setUSER_ADDRESS(uSER_ADDRESS: string):void {
		this.USER_ADDRESS = uSER_ADDRESS;
	}
	public getUSER_QUALIFICATION():string {
		return this.USER_QUALIFICATION;
	}
	public  setUSER_QUALIFICATION(uSER_QUALIFICATION: string): void {
		this.USER_QUALIFICATION = uSER_QUALIFICATION;
	}
	public getUSER_REGN_ID(): string {
		return this.USER_REGN_ID;
	}
	public  setUSER_REGN_ID(uSER_REGN_ID: string): void {
		this.USER_REGN_ID = uSER_REGN_ID;
	}
	public getCOUNTRY_ID(): string {
		return this.COUNTRY_ID;
	}
	public setCOUNTRY_ID(cOUNTRY_ID: string): void {
		this.COUNTRY_ID = cOUNTRY_ID;
	}
	public getSTATE_ID(): string {
		return this.STATE_ID;
	}
	public setSTATE_ID(sTATE_ID: string): void {
		this.STATE_ID = sTATE_ID;
	}
	public getDISTRICT_ID(): string {
		return this.DISTRICT_ID;
	}
	public setDISTRICT_ID(dISTRICT_ID: string): void {
		this.DISTRICT_ID = dISTRICT_ID;
	}
	public getBLOCK_ID(): string {
		return this.BLOCK_ID;
	}
	public setBLOCK_ID(bLOCK_ID: string): void {
		this.BLOCK_ID = bLOCK_ID;
	}
	public getPRODUCT_ID(): string {
		return this.PRODUCT_ID;
	}
	public setPRODUCT_ID(pRODUCT_ID: string): void {
		this.PRODUCT_ID = pRODUCT_ID;
	}
	public getSUB_PRODUCT_ID(): string {
		return this.SUB_PRODUCT_ID;
	}
	public setSUB_PRODUCT_ID(sUB_PRODUCT_ID: string): void {
		this.SUB_PRODUCT_ID = sUB_PRODUCT_ID;
	}
	public getUSER_DATE(): string {
		return this.USER_DATE;
	}
	public setUSER_DATE(uSER_DATE: string): void {
		this.USER_DATE = uSER_DATE;
	}
	public getUSER_TIME(): string {
		return this.USER_TIME;
	}
	public setUSER_TIME(uSER_TIME: string): void {
		this.USER_TIME = uSER_TIME;
	}
	public getUSER_AVILABLE_FLAG(): string {
		return this.USER_AVILABLE_FLAG;
	}
	public setUSER_AVILABLE_FLAG(uSER_AVILABLE_FLAG: string) {
		this.USER_AVILABLE_FLAG = uSER_AVILABLE_FLAG;
	}
	
	public getSPECIALIZATION_NAME(): string {
		return this.SPECIALIZATION_NAME;
	}
	public setSPECIALIZATION_NAME(sPECIALIZATION_NAME: string): void {
		this.SPECIALIZATION_NAME = sPECIALIZATION_NAME;
	}

}
