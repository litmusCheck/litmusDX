export class DoctorActivityDetailsDto {
        private  actDtlId: string;
        private  medikateDoctorId: string;
        private  activityId: string;
        private  activityTime: any;
        private  userCustomerId: string;
        private  sessionId: string;
        private  loginStatus: string;
        private  machineIpAddress: string;
        private  loginMode: string;
        private  activityTimeStr: string;
        private  latitude: string;
        private  longitude: string;
        private  address: string;
        private  countryName: string;
        private  updatedBy: string;
        
        public getActDtlId():string {
            return this.actDtlId;
        }
        public getMedikateDoctorId():string {
            return this.medikateDoctorId;
        }
        public getActivityId():string {
            return this.activityId;
        }
        public  getActivityTime():any {
            return this.activityTime;
        }
        public getUserCustomerId():string {
            return this.userCustomerId;
        }
        public getSessionId(): string {
            return this.sessionId;
        }
        public getLoginStatus(): string {
            return this.loginStatus;
        }
        public getMachineIpAddress(): string {
            return this.machineIpAddress;
        }
        public getLoginMode(): string {
            return this.loginMode;
        }
        public getActivityTimeStr(): string {
            return this.activityTimeStr;
        }
        public getLatitude(): string {
            return this.latitude;
        }
        public getLongitude(): string {
            return this.longitude;
        }
        public getAddress(): string {
            return this.address;
        }
        public getCountryName(): string {
            return this.countryName;
        }
        public setActDtlId(actDtlId: string): void {
            this.actDtlId = actDtlId;
        }
        public setMedikateDoctorId(medikateDoctorId: string): void {
            this.medikateDoctorId = medikateDoctorId;
        }
        public setActivityId(activityId: string): void {
            this.activityId = activityId;
        }
        public setActivityTime(activityTime: any): void {
            this.activityTime = activityTime;
        }
        public setUserCustomerId(userCustomerId: string): void {
            this.userCustomerId = userCustomerId;
        }
        public setSessionId(sessionId: string): void {
            this.sessionId = sessionId;
        }
        public setLoginStatus(loginStatus: string): void {
            this.loginStatus = loginStatus;
        }
        public setMachineIpAddress(machineIpAddress: string): void {
            this.machineIpAddress = machineIpAddress;
        }
        public setLoginMode(loginMode: string): void {
            this.loginMode = loginMode;
        }
        public setActivityTimeStr(activityTimeStr: string): void {
            this.activityTimeStr = activityTimeStr;
        }
        public setLatitude(latitude: string): void {
            this.latitude = latitude;
        }
        public setLongitude(longitude: string): void {
            this.longitude = longitude;
        }
        public setAddress(address: string): void {
            this.address = address;
        }
        public setCountryName(countryName: string): void {
            this.countryName = countryName;
        }
        public  getUpdatedBy(): string {
            return this.updatedBy;
        }
        public setUpdatedBy(updatedBy: string): void {
            this.updatedBy = updatedBy;
        }
}
