export class DbQueries {
    /**
     * Database query allowing us to check the presence of the db_version table
     */
    public static DB_INITIALIZED_QUERY: string = 'SELECT name FROM sqlite_master WHERE type=\'table\' AND name=\'db_version\'';
}