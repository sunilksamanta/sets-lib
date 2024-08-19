export const connect = () => {
    console.log('Connecting to database...');
};

export const query = (sql: string) => {
    console.log(`Executing query: ${sql}`);
};
