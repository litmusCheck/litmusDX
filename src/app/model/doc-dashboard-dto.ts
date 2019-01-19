export class DocDashboardDto {
    private patientQueueCount: string;          // count of patient waiting for doc
    private ecgReportCount: string;             // number of ecg to be examine 
    private doneConsultation: string;           // no. of successful consultations by doc
    private docEarningAmount: string;           // doc total earning this month till now
    private patientQueryCount: string;          // queries by patients 
    private prescriptionForReviewCount: string; // requested prescriptions count for you to review
    private reviewedPrescriptionCount: string;  // your reviewed prescriptions count 
    private newPostCount: string;               // your posts count 

    public getPatientQueueCount(): string {
		return this.patientQueueCount;
	}
	public setPatientQueueCount(patientQueueCount: string): void {
		this.patientQueueCount = patientQueueCount;
	}
	public getEcgReportCount():string {
		return this.ecgReportCount;
	}
	public setEcgReportCount(ecgReportCount: string): void {
		this.ecgReportCount = ecgReportCount;
	}
	public getDoneConsultation():string {
		return this.doneConsultation;
	}
	public setDoneConsultation(doneConsultation: string): void {
		this.doneConsultation = doneConsultation;
	}
	public getDocEarningAmount(): string {
		return this.docEarningAmount;
	}
	public setDocEarningAmount(docEarningAmount: string): void {
		this.docEarningAmount = docEarningAmount;
	}
	public getPatientQueryCount(): string {
		return this.patientQueryCount;
	}
	public setPatientQueryCount(patientQueryCount: string): void {
		this.patientQueryCount = patientQueryCount;
	}
	public getPrescriptionForReviewCount(): string {
		return this.prescriptionForReviewCount;
	}
	public setPrescriptionForReviewCount(prescriptionForReviewCount: string): void {
		this.prescriptionForReviewCount = prescriptionForReviewCount;
	}
	public getReviewedPrescriptionCount(): string {
		return this.reviewedPrescriptionCount;
	}
	public setReviewedPrescriptionCount(reviewedPrescriptionCount:string): void {
		this.reviewedPrescriptionCount = reviewedPrescriptionCount;
	}
	public getNewPostCount(): string {
		return this.newPostCount;
	}
	public setNewPostCount(newPostCount: string): void {
		this.newPostCount = newPostCount;
	}
}
