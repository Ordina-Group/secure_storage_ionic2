export class DbSchema {
    public static CREATE_TABLE_DB_VERSION: string = `CREATE TABLE \`db_version\` (
        \`dbVersionId\`	INTEGER NOT NULL,
        \`version\`	TEXT NOT NULL,
        \`type\`	TEXT NOT NULL,
        \`modifyDate\`	INTEGER NOT NULL,
        PRIMARY KEY(dbVersionId)
    );`;


    public static CREATE_TABLE_PATIENT: string = `
        CREATE TABLE \`patient\` (
            \`patientId\` INTEGER NOT NULL,
            \`firstName\` TEXT NOT NULL,
            \`lastName\` TEXT NOT NULL,
            PRIMARY KEY(patientId)
        );
    `;

    public static CREATE_TABLE_MEDICAL_CONSULTATION: string = `
        CREATE TABLE \`medical_consultation\`(
            \`medicalConsultationId\` INTEGER NOT NULL,
            \`description\` TEXT NOT NULL,
            \`date\` INTEGER NOT NULL,
            \`patientFk\` INTEGER NOT NULL,
            PRIMARY KEY(medicalConsultationId),
            FOREIGN KEY(\`patientFk\`) REFERENCES patients(patientId)
        );
    `;
}