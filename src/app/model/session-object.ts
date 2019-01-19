export class SessionObject {
    private  userId: String;
    private  identity: String;
    private  email: String;
    private  fullname: String;
    private  title: String;
    private  firstname: String;
    private  lastname: String;
    private  middlename: String;
    private  gender: String;
    private  language: String;
    private  processId: String = "GHPS00001";
	private  subServiceId: String;
	private  serviceId: String;
	private  episodeId: String;
	private  contactNo: String;
	private  mciNo: String;
	private  accountType: String;
	private  userType: String;
	private  loginType: String;
	private  customerId: String;
	private  ip: String;
	private  userPassword: String;
	private  docHellolyfId: String;
	
	private  USER_ACTIVE_FLAG: String;
	private  CONTROL_FLAG: String;
	private  SUB_PRODUCT_ID: String;
	private  USER_START_DATE: String;
	private  USER_END_DATE: String;
	private  USER_CURRENT_VALUE: String;
	private  USER_REMAINING_VAL: String;
	private  USER_MASSG_ALERT: String;
	private  ACC_PARAM_ID: String;
	private  USER_ACC_CON_ID: String;
	private  specialization: String;
	
    private  sessionId: String;


    public getUSER_ACC_CON_ID():String {
		return this.USER_ACC_CON_ID;
	}
	public  setUSER_ACC_CON_ID(uSER_ACC_CON_ID:String):void {
		this.USER_ACC_CON_ID = uSER_ACC_CON_ID;
	}
	public  getACC_PARAM_ID():String {
		return this.ACC_PARAM_ID;
	}
	public  setACC_PARAM_ID( aCC_PARAM_ID:String):void {
		this.ACC_PARAM_ID = aCC_PARAM_ID;
	}
	public  getSUB_PRODUCT_ID():String {
		return this.SUB_PRODUCT_ID;
	}
	public  setSUB_PRODUCT_ID(sUB_PRODUCT_ID:String):void {
		this.SUB_PRODUCT_ID = sUB_PRODUCT_ID;
	}
	public getUSER_START_DATE():String {
		return this.USER_START_DATE;
	}
	public  setUSER_START_DATE(uSER_START_DATE:String):void {
		this.USER_START_DATE = uSER_START_DATE;
	}
	public  getUSER_END_DATE():String {
		return this.USER_END_DATE;
	}
	public setUSER_END_DATE(uSER_END_DATE:String):void {
		this.USER_END_DATE = uSER_END_DATE;
	}
	public getUSER_CURRENT_VALUE():String {
		return this.USER_CURRENT_VALUE;
	}
	public setUSER_CURRENT_VALUE(uSER_CURRENT_VALUE:String):void {
		this.USER_CURRENT_VALUE = uSER_CURRENT_VALUE;
	}
	public  getUSER_REMAINING_VAL():String {
		return this.USER_REMAINING_VAL;
	}
	public setUSER_REMAINING_VAL(uSER_REMAINING_VAL:String):void {
		this.USER_REMAINING_VAL = uSER_REMAINING_VAL;
	}
	public getUSER_MASSG_ALERT():String {
		return this.USER_MASSG_ALERT;
	}
	public  setUSER_MASSG_ALERT(uSER_MASSG_ALERT:String):void {
		this.USER_MASSG_ALERT = uSER_MASSG_ALERT;
	}
	public getUSER_ACTIVE_FLAG():String {
		return this.USER_ACTIVE_FLAG;
	}
	public  setUSER_ACTIVE_FLAG(uSER_ACTIVE_FLAG:String):void {
		this.USER_ACTIVE_FLAG = uSER_ACTIVE_FLAG;
	}
	public getCONTROL_FLAG():String {
		return this.CONTROL_FLAG;
	}
	public setCONTROL_FLAG(cONTROL_FLAG:String):void {
		this.CONTROL_FLAG = cONTROL_FLAG;
	}
	public  getUserPassword():String {
		return this.userPassword;
	}
	public  setUserPassword(userPassword:String):void {
		this.userPassword = userPassword;
	}
	public  getTitle():String {
		return this.title;
	}
	public  setTitle(title:String):void {
		this.title = title;
	}
	public  getIp():String {
		return this.ip;
	}
	public setIp(ip:String) {
		this.ip = ip;
	}
	public getCustomerId():String {
		return this.customerId;
	}
	public setCustomerId(customerId:String):void {
		this.customerId = customerId;
	}
	public getMiddlename():String {
		return this.middlename;
	}
	public  setMiddlename(middlename:String):void {
		this.middlename = middlename;
	}
	public getAccountType():String {
		return this.accountType;
	}
	public  setAccountType(accountType:String):void {
		this.accountType = accountType;
	}
	public getUserType():String {
		return this.userType;
	}
	public  setUserType(userType:String):void {
		this.userType = userType;
	}
	public getLoginType():String {
		return this.loginType;
	}
	public setLoginType(loginType:String):void {
		this.loginType = loginType;
	}
	public getMciNo():String {
		return this.mciNo;
	}
	public setMciNo(mciNo:String):void {
		this.mciNo = mciNo;
	}
	public  getContactNo():String {
		return this.contactNo;
	}
	public setContactNo(contactNo:String):void {
		this.contactNo = contactNo;
	}
	public getProcessId():String {
		return this.processId;
	}
	public setProcessId( processId:String):void {
		this.processId = processId;
	}
	public getSubServiceId():String {
		return this.subServiceId;
	}
	public setSubServiceId(subServiceId:String):void {
		this.subServiceId = subServiceId;
	}
	public getServiceId():String {
		return this.serviceId;
	}
	public setServiceId(serviceId:String):void {
		this.serviceId = serviceId;
	}
	public getEpisodeId():String {
		return this.episodeId;
	}
	public setEpisodeId(episodeId:String):void {
		this.episodeId = episodeId;
	}
	public getIdentity():String {
		return this.identity;
	}
	public setIdentity(identity:String):void {
		this.identity = identity;
	}
	public getEmail():String {
		return this.email;
	}
	public setEmail(email:String):void {
		this.email = email;
	}
	public getFullname():String {
		return this.fullname;
	}
	public setFullname(fullname:String):void {
		this.fullname = fullname;
	}
	public getFirstname():String {
		return this.firstname;
	}
	public setFirstname(firstname:String):void {
		this.firstname = firstname;
	}
	public getLastname():String {
		return this.lastname;
	}
	public setLastname( lastname:String):void {
		this.lastname = lastname;
	}
	public getGender():String {
		return this.gender;
	}
	public  setGender(gender:String):void {
		this.gender = gender;
	}
	public getLanguage():String {
		return this.language;
	}
	public setLanguage(language:String):void {
		this.language = language;
	}
	public getUserId():String {
		return this.userId;
	}
	public setUserId(userId:String):void {
		this.userId = userId;
	}
	public getDocHellolyfId():String {
		return this.docHellolyfId;
	}
	public setDocHellolyfId(docHellolyfId:String):void {
		this.docHellolyfId = docHellolyfId;
	}
	public getSpecialization():String {
		return this.specialization;
	}
	public setSpecialization(specialization:String):void {
		this.specialization = specialization;
	}
	public getSessionId():String {
		return this.sessionId;
	}
	public setSessionId(sessionId:String):void{
		this.sessionId = sessionId;
	}
    
}
