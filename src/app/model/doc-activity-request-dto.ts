export class DocActivityRequestDto {
	private doctorId: string;	
	private sessionId: string;
	private loginMode: string;
	private userCustomerId: string;
    private logoutBy: string;
    
    public  getDoctorId():string {
		return this.doctorId;
	}
	public setDoctorId(doctorId: string): void {
		this.doctorId = doctorId;
	}
	public getSessionId(): string{
		return this.sessionId;
	}
	public setSessionId(sessionId: string) : void {
		this.sessionId = sessionId;
	}
	public getLoginMode(): string {
		return this.loginMode;
	}
	public setLoginMode(loginMode: string):void {
		this.loginMode = loginMode;
	}
	public getUserCustomerId(): string {
		return this.userCustomerId;
	}
	public setUserCustomerId(userCustomerId: string):void {
		this.userCustomerId = userCustomerId;
	}
	public getLogoutBy(): string {
		return this.logoutBy;
	}
	public setLogoutBy(logoutBy: string):void {
		this.logoutBy = logoutBy;
	}
}
