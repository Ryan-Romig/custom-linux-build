class Database {
    constructor(driver) {
      this.driver = driver;
    }
  
    connect() {
      return this.driver.connect();
    }
  
    disconnect() {
      return this.driver.disconnect();
    }
  
    get(, params) {
      return this.driver.query(sql, params);
    }
  }