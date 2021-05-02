"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockConfig = {
    "name": "jai-ganesh",
    "nodeConfiguration": {
        "name": "app",
        "type": "module",
        "route": "",
        "modulePath": "",
        "parentModule": "",
        "children": [
            {
                "name": "login",
                "type": "moduleWithRoute",
                "modulePath": "",
                "route": "login",
                "parentModule": "app"
            },
            {
                "name": "dashboard",
                "type": "moduleWithRoute",
                "modulePath": "",
                "route": "dashboard",
                "parentModule": "app"
            }
        ]
    }
};
// export const MockConfig = {
//     "name": "jai-ganesh",
//     "nodeConfiguration":
//     {
//         "name": "app",
//         "root": true,
//         "children": [
//             {
//                 "name": "login",
//                 "type": "moduleWithRoute",
//                 "modulePath": "",
//                 "route": "login",
//                 "parentModule": "app"
//             },
//             {
//                 "name": "dashboard",
//                 "type": "moduleWithRoute",
//                 "modulePath": "",
//                 "route": "dashboard",
//                 "parentModule": "app",
//                 "children": [
//                     {
//                         "name": "account",
//                         "type": "moduleWithRoute",
//                         "modulePath": "dashboard",
//                         "route": "account",
//                         "parentModule": "dashboard"
//                     }
//                 ]
//             }
//         ]
//     }
// }
