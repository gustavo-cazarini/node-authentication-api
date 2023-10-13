const pool = require("../db/pool");

class Client {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    #getQuery(fields) {
        let query = "SELECT ";
        if (!fields?.length) query += `* `;
        else {
            fields.forEach(value => {
                query += `${value}, `;
            });
            query = query.slice(0, -2) + query.slice(-1);
        }
        query += `FROM client `;
        if (this.id) query += `WHERE id = ${this.id}`;

        return query;
    }

    #postQuery() {
        if (!this.name || !this.phone) {
            console.log(`name and/or phone is missing!`);
            return false;
        }
        const query = `INSERT INTO client(name, phone)
        values('${this.name}', '${this.phone}')`;

        return query;
    }

    #putQuery() {
        if (!this.id) {
            console.log("ID is missing");
            return false;
        }

        let query = "UPDATE client SET ";
        if (this.name)
            query += `name = '${this.name}', `;
        if (this.phone)
            query += `phone = '${this.phone}'  `;
        query = query.slice(0, -2) + query.slice(-1);
        query += `WHERE id = ${this.id}`;

        return query;
    }

    #deleteQuery() {
        if (!this.id) {
            console.log("ID is missing");
            return false;
        }

        const query = `DELETE FROM client WHERE id = ${this.id}`;
        return query;
    }

    async getClient(fields) {
        if (typeof (fields) !== "object" && typeof (fields) !== "undefined") {
            console.log(`fields argument must be of type object (array)\n
            actual type: ${typeof (fields)}`);
            return false;
        }

        const query = this.#getQuery(fields);
        const connection = await pool.connect();
        const dataToReturn = await connection.query(query);
        return dataToReturn;
    }

    async postClient() {
        if (!this.#postQuery())
            return false;

        const query = this.#postQuery();
        const connection = await pool.connect();
        const dataToReturn = await connection.query(query);
        return dataToReturn;
    }

    async putClient() {
        if (!this.#putQuery())
            return false;

        const query = this.#putQuery();
        const connection = await pool.connect();
        const dataToReturn = await connection.query(query);
        return dataToReturn;
    }

    async deleteClient() {
        if (!this.#deleteQuery())
            return false;

        const query = this.#deleteQuery();
        const connection = await pool.connect();
        const dataToReturn = await connection.query(query);
        return dataToReturn;
    }
}

module.exports = { Client };