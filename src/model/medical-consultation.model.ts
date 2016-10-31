export class MedicalConsultation {

    private _medicalConsultationId: number;
    private _description: string;
    private _consultationDate: Date;

    public get medicalConsultationId(): number {
        return this._medicalConsultationId;
    }
    public set medicalConsultationId(medicalConsultationId: number) {
        this._medicalConsultationId = medicalConsultationId;
    }

    public get decription(): string {
        return this._description;
    }
    public set decription(description: string) {
        this._description = description;
    }

    public get consultationDate(): Date {
        return this._consultationDate;
    }
    public set consultationDate(consultationDate: Date) {
        this._consultationDate = consultationDate;
    }

    constructor(description?: string, consultationDate?: Date) {
        this._description = description;
        this._consultationDate = consultationDate;
    }
}