import pgp from "pg-promise";
import pg from "pg-promise/typescript/pg-subset";

let _connection: pgp.IDatabase<{}, pg.IClient>
const _connectionURI = "postgres://lucas:lucas@localhost:5432/cccat16";

export class PostgresConnection {
  static connection() {
    if (!_connection) {
      _connection = pgp()(_connectionURI);
    }
   return  _connection
  }
}
