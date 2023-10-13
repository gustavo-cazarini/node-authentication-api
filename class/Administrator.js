const pool = require("../db/pool");

class Administrator {
    constructor(id, name, login, password, role, phone) {
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
        this.role = role;
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
        query += `FROM administrator `;

        if (this.id)
            query += `WHERE id = ${this.id}`;
        else if (this.login && this.password)
            query += `WHERE login = '${this.login}' AND password = '${this.password}'`;

        return query;
    }

    async getAdmin(fields) {
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

    static loginMethod(login, password) {
        if (!login || !password) {
            return false;
        }

        return new Administrator(null, null, login, password);
    }
};

module.exports = { Administrator };