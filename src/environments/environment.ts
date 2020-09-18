// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlBackendHospitalVirtual:"http://190.116.36.121:8088/",
  urlTalend:"http://190.116.36.121:8089/",
 //urlBackendSiscovid:"http://54.146.22.125/dir_siscovid/api/"
  urlBackendSiscovid:"http://190.116.36.121/covid/api/",
  urlBackendNode:"http://localhost:8001/covid/"
//  urlBackendNode:"http://190.116.36.121:8001/covid/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
