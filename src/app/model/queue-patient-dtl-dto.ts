export class QueuePatientDtlDto {
    private  patientId: string;    		
	private  name: string;
	private  countryCode: string;
	private  mobileNo: string;
	private  source: string; 				//'center/retail'
	private  centerName: string;
	private  waitTimeInQueue: string;
	private  waitTimeInVideo: string;
	private  language: string;
	private  patientInitiatedTime: string;
	private  emergencyFlag: string;  		//consultationType
	private  transactionId: string;		//patientVisitId
	private  status: string;
	private  queuePosition: string;
	private  roomId: string;
	private  gender: string;
	private  age: string;
	private  complaints: string;
	private  docId: string;
	private  medicineFlag: string;
    private  centerId: string;
    public getPatientId(): string {
        return this.patientId;
    }

    public setPatientId(patientId: string): void {
        this.patientId = patientId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCountryCode(): string {
        return this.countryCode;
    }

    public setCountryCode(countryCode: string): void {
        this.countryCode = countryCode;
    }

    public getMobileNo(): string {
        return this.mobileNo;
    }

    public setMobileNo(mobileNo: string): void {
        this.mobileNo = mobileNo;
    }

    public getSource(): string {
        return this.source;
    }

    public setSource(source: string): void {
        this.source = source;
    }

    public getCenterName(): string {
        return this.centerName;
    }

    public setCenterName(centerName: string): void {
        this.centerName = centerName;
    }

    public getWaitTimeInQueue(): string {
        return this.waitTimeInQueue;
    }

    public setWaitTimeInQueue(waitTimeInQueue: string): void {
        this.waitTimeInQueue = waitTimeInQueue;
    }

    public getWaitTimeInVideo(): string {
        return this.waitTimeInVideo;
    }

    public setWaitTimeInVideo(waitTimeInVideo: string): void {
        this.waitTimeInVideo = waitTimeInVideo;
    }

    public getLanguage(): string {
        return this.language;
    }

    public setLanguage(language: string): void {
        this.language = language;
    }

    public getPatientInitiatedTime(): string {
        return this.patientInitiatedTime;
    }

    public setPatientInitiatedTime(patientInitiatedTime: string): void {
        this.patientInitiatedTime = patientInitiatedTime;
    }

    public getEmergencyFlag(): string {
        return this.emergencyFlag;
    }

    public setEmergencyFlag(emergencyFlag: string): void {
        this.emergencyFlag = emergencyFlag;
    }

    public getTransactionId(): string		 {
        return this.transactionId;
    }

    public setTransactionId(transactionId: string		): void {
        this.transactionId = transactionId;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getQueuePosition(): string {
        return this.queuePosition;
    }

    public setQueuePosition(queuePosition: string): void {
        this.queuePosition = queuePosition;
    }

    public getRoomId(): string {
        return this.roomId;
    }

    public setRoomId(roomId: string): void {
        this.roomId = roomId;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(gender: string): void {
        this.gender = gender;
    }

    public getAge(): string {
        return this.age;
    }

    public setAge(age: string): void {
        this.age = age;
    }

    public getComplaints(): string {
        return this.complaints;
    }

    public setComplaints(complaints: string): void {
        this.complaints = complaints;
    }

    public getDocId(): string {
        return this.docId;
    }

    public setDocId(docId: string): void {
        this.docId = docId;
    }

    public getMedicineFlag(): string {
        return this.medicineFlag;
    }

    public setMedicineFlag(medicineFlag: string): void {
        this.medicineFlag = medicineFlag;
    }

    public getCenterId(): string {
        return this.centerId;
    }

    public setCenterId(centerId: string): void {
        this.centerId = centerId;
    }
}
