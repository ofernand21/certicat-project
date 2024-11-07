import { config } from "dotenv";
config()

export default class Env {
  [x: string]: string | undefined;
  constructor() {
    this.URL = process.env.URL;
    this.NODE_ENV = process.env.NODE_ENV;
    this.database = process.env.database;
    this.databaseName = process.env.databaseName;
    this.databaseHost = process.env.databaseHost;
    this.databasePort = process.env.databasePort;
    this.connectString = process.env.connectString;
    this.databaseUser =  process.env.databaseUser;
    this.databasePassword = process.env.databasePassword;
    this.oracleDatabaseUser = process.env.oracleDatabaseUser;
    this.oracleDatabasePassword = process.env.oracleDatabasePassword;
    this.username = process.env.username;
    this.password = process.env.password;
    this.apiToken = process.env.apiToken;
    this.emailHost = process.env.emailHost;
    this.emailPort = process.env.emailPort;
    this.emailHostUser = process.env.emailHostUser;
    this.emailPassword = process.env.emailPassword;
    this.orangeMerchant = process.env.orangeMerchant;
    this.orangeAPIUSERNAME = process.env.orangeAPIUSERNAME;
    this.orangeAPIPASSWORD = process.env.orangeAPIPASSWORD;
    this.moovUrl = process.env.moovUrl;
    this.orangeUrl = process.env.orangeUrl;
    this.orangeTestUrl = process.env.orangeTestUrl;
    this.orabankUrl = process.env.orabankUrl;
    this.waveUrl = process.env.waveUrl;
    this.sankUrl = process.env.sankUrlTest;
    this.sankUrl = process.env.sankUrl;
    this.corisUrl = process.env.corisUrl;
    this.ecobankUrl = process.env.ecobankUrl;
    this.danayaUrl = process.env.danayaUrl;
    this.moovBAsicUsername = process.env.moovBAsicUsername;
    this.moovBasicPassword = process.env.moovBasicPassword;
    this.waveApiKey = process.env.waveApiKey;
    this.orabankApiKey = process.env.orabankApiKey;
    this.sankApiKey = process.env.sankApiKey;
    this.sankClientId = process.env.sankClientId;
    this.sankApiKey = process.env.sankApiKeyTest;
    this.sankTestClientId = process.env.sankClientIdTest;
    this.corisClientId = process.env.corisClientId;
    this.corisClientSecret = process.env.corisClientSecret;
    this.corisCodePV = process.env.corisCodePV;
    this.danayaBAsicUsername = process.env.danayaBAsicUsername;
    this.danayaBasicPassword = process.env.danayaBasicPassword;
    this.ecobankApiKey = process.env.ecobankApiKey;
  }
}
