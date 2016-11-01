export class DbQueries {
    /**
     * Database query allowing us to check the presence of the db_version table
     */
    public static DB_INITIALIZED_QUERY: string = 'SELECT name FROM sqlite_master WHERE type=\'table\' AND name=\'db_version\'';

    public static INSERT_PATIENT_QUERY: string = `
        INSERT INTO patient(
            firstName,
            lastName
        ) VALUES 
        ('Tony', 'Stark'),
        ('Steve', 'Rogers'),
        ('Someone', 'Else');
    `;

    public static INSERT_MEDICAL_CONSULTATION_QUERY: string = `
        INSERT INTO medical_consultation(
            description,
            date,
            patientFk
        ) VALUES
        ('Bronchitis', '1477910685000', '1'),
        ('Flu', '1464910685000', '1'),
        ('Other nasty disease', '1435910685000', '1'),
        ('Bronchitis', '1471910685000', '2'),
        ('Flu', '1466910685000', '2'),
        ('Other nasty disease', '1461910685000', '2'),
        ('Bronchitis', '1473910685000', '3'),
        ('Flu', '1463910685000', '3'),
        ('Other nasty disease', '1458910685000', '3');
    `;

    public static FIND_ALL_PATIENT_QUERY: string = `
        SELECT * FROM patient
    `;

    public static FIND_MEDICAL_CONSULTATIONS_BY_PATIENT_ID_QUERY: string = `
        SELECT * FROM medical_consultation
        WHERE medical_consultation.patientFk=?
    `;
}