export class Patient {

    private _patientId: number;
    private _firstName: string;
    private _lastName: string;

    public get patientId(): number {
        return this._patientId;
    }
    public set patientId(patientId: number) {
        this._patientId = patientId;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

    constructor(firstName?: string, lastName?: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
}