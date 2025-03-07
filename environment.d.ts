declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GOATCOUNTER_WEB_ID: string;
      }
    }
  }