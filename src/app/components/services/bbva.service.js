function BBVAService ($http) {

    var g = 'test';


    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Origin' : '*'


    // var headers = {
    //         'Authorization': 'tsec eJxtlUlvtGgShP+K5SuygWKXbLeAgoJi34rlMgJeKPa92H59+5N6WnOYe6RSEZl64uuvvW3e1myay777fkc/kfe3rEt7UHbP73fPFT/o97d5iTsQN32Xfb8f2fz+18+XO2fpmwy+3y85jqY4AT5olEY/cAwHHwwBwEeKkSlISIDECPb+9vh3wX+Q958vvhyKbLrGS/wzBiFTHYQAHeF6BBaui8uUxJZchvtrZwWotLd8YosNdvAevUTeQZ1NdzvrgHMToSMmiGG6h88LcrUjao08NNF4lERVnzpXITcM8E/qwvh4Y8QFDl+GGT0p/N4qUfwoFfrpAQTDGSTu63H3g06u5JFKGlPtqcpTwNB448HetxtXakruF+zoooSoIiEe2vLUTPQUysRYXDN9AwnGZXiTyhBzK71WREy5y42LA0gfEqXM2MCFkkQknVPFoPiZ0IoYBSTHzAYB8cyMNqUk7L0QLS2YNH92IYUllMkXVsRiQUXAyyDmDKynBtYMxf2xHeUS4KqDPwE95uhYw1ZRI7SpDRxaIxsj1N7KWXmRhXdEQPaxymp57k3o3pJ+4VRJwVuGuQMxud4oe62DlNMVJXrRN4tVJGvPpV9r6lPLSy5lKI0Ll2lOHUt+eSsUsnqGDfjwezffuZGc26OwZR1q+spet6LYGktOZ7eLyketcIXt91JhP/pO9nt4ZsS1l45SdIeKnqr4SUh3isp4DKBWtjUlJRheGXBZAwxs1h7lBWGunlm4c8QO/alDRoXfHRSVywdCoOuAVYs0g2bKxEvNoLp1JWI8bl+vQcna8LbzIh/LN1TV2ZA96VxyDyewRy9JPFv0anzTnylsX9VF0QbN0luMtV56vJGpKt5YLLjwEVbcc9EiLwZdtGgfXklPm1OWmpmthjThN4Y96MuV3W8eP0t5aPvldNK8atQ7KTEq52xEoJqyd28tPEomZge7ckMaYjU3TSWRW2tmqv6kmsBFW6R4RIgYpVUB044+ek4elZHJXq1sfPjK9THlr8LgSvQBclArAbASZJUFJ68ix44tW2xkKNCDXHB3W1ngCnNeaSPHAyo72nhpkWt5jEtyKUP4RUHAYEjsxJ/NQRwBt0XrXW7qunYIPtesWJZIPZ5o5KlqNcMi15PKHqfs0c2rtZrrQy0qXQYLX1FgQtFpjy+/D9OmxwEcvz+pZfEqM1PgQzWDIsqTKCq4htJGJmGTbergpRKC0YbhEif36am+RnP2YqZuRxHtFElOt2BFuN+AV2vJrTGCzWVBChUkJp3nOk125vOID4ThvdpTS8hiGh0fekqn6LNF4rtrNVWSsUhou5aSw2N9ss6pdsZ54xrucHl236ljZLPCJVG37yHCBGv8IE9/v5ixQV7HpEzgBDgyZvQuRXrXqFA9va8qA5JA39N6f4wpSWL1E1tzX/O9RaegpIXaLc+sF9XgrUq1mn8c9XHs1605f32tI7PIlmAfkTz+IoNC6laZ3SHXQ5KGjZp0Vv3ebR2+QIs65GVTHVrHtpnl7pLJRBgs8p00DE7t39fteB0yE93QiYRhDBN1BnihaNP4hKwZTnEL9dp229zSxK4Q+O4vzH30xdnXO6nrL6KblgPNXkTD5jQXtVkk8ZnAasUwrrCX6FSKUJ2H5kEYMK3v7y/4fyD9D7CV7GCbMp5/mjlJ1s9h+kzLfIo/+yHt2yGe58+0iVP0v6P/yr+ELp2OYfltALZ59lO5FO3PVXAykME8x8OmwjuEGYM/pfMF/z/xF/yncH7+BlM+PNk=',
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'X-Unique-Transaction-ID': 9999 - Math.round(Math.random()*10) + 1,
    //         // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //         // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    //         // 'Access-Control-Allow-Origin' : '*'
    //     };

    var transactionsURL = 'https://sandbox-apis.bbvacompass.com/api/v2/users/8f805780-40f9-47fa-a138-d816ee2bc010/accounts/01-1012/transactions';

    this.getTransactions = function () {
        // var headers = {
        //     'Authorization': 'tsec eJxtlUlvtGgShP+K5SuygWKXbLeAgoJi34rlMgJeKPa92H59+5N6WnOYe6RSEZl64uuvvW3e1myay777fkc/kfe3rEt7UHbP73fPFT/o97d5iTsQN32Xfb8f2fz+18+XO2fpmwy+3y85jqY4AT5olEY/cAwHHwwBwEeKkSlISIDECPb+9vh3wX+Q958vvhyKbLrGS/wzBiFTHYQAHeF6BBaui8uUxJZchvtrZwWotLd8YosNdvAevUTeQZ1NdzvrgHMToSMmiGG6h88LcrUjao08NNF4lERVnzpXITcM8E/qwvh4Y8QFDl+GGT0p/N4qUfwoFfrpAQTDGSTu63H3g06u5JFKGlPtqcpTwNB448HetxtXakruF+zoooSoIiEe2vLUTPQUysRYXDN9AwnGZXiTyhBzK71WREy5y42LA0gfEqXM2MCFkkQknVPFoPiZ0IoYBSTHzAYB8cyMNqUk7L0QLS2YNH92IYUllMkXVsRiQUXAyyDmDKynBtYMxf2xHeUS4KqDPwE95uhYw1ZRI7SpDRxaIxsj1N7KWXmRhXdEQPaxymp57k3o3pJ+4VRJwVuGuQMxud4oe62DlNMVJXrRN4tVJGvPpV9r6lPLSy5lKI0Ll2lOHUt+eSsUsnqGDfjwezffuZGc26OwZR1q+spet6LYGktOZ7eLyketcIXt91JhP/pO9nt4ZsS1l45SdIeKnqr4SUh3isp4DKBWtjUlJRheGXBZAwxs1h7lBWGunlm4c8QO/alDRoXfHRSVywdCoOuAVYs0g2bKxEvNoLp1JWI8bl+vQcna8LbzIh/LN1TV2ZA96VxyDyewRy9JPFv0anzTnylsX9VF0QbN0luMtV56vJGpKt5YLLjwEVbcc9EiLwZdtGgfXklPm1OWmpmthjThN4Y96MuV3W8eP0t5aPvldNK8atQ7KTEq52xEoJqyd28tPEomZge7ckMaYjU3TSWRW2tmqv6kmsBFW6R4RIgYpVUB044+ek4elZHJXq1sfPjK9THlr8LgSvQBclArAbASZJUFJ68ix44tW2xkKNCDXHB3W1ngCnNeaSPHAyo72nhpkWt5jEtyKUP4RUHAYEjsxJ/NQRwBt0XrXW7qunYIPtesWJZIPZ5o5KlqNcMi15PKHqfs0c2rtZrrQy0qXQYLX1FgQtFpjy+/D9OmxwEcvz+pZfEqM1PgQzWDIsqTKCq4htJGJmGTbergpRKC0YbhEif36am+RnP2YqZuRxHtFElOt2BFuN+AV2vJrTGCzWVBChUkJp3nOk125vOID4ThvdpTS8hiGh0fekqn6LNF4rtrNVWSsUhou5aSw2N9ss6pdsZ54xrucHl236ljZLPCJVG37yHCBGv8IE9/v5ixQV7HpEzgBDgyZvQuRXrXqFA9va8qA5JA39N6f4wpSWL1E1tzX/O9RaegpIXaLc+sF9XgrUq1mn8c9XHs1605f32tI7PIlmAfkTz+IoNC6laZ3SHXQ5KGjZp0Vv3ebR2+QIs65GVTHVrHtpnl7pLJRBgs8p00DE7t39fteB0yE93QiYRhDBN1BnihaNP4hKwZTnEL9dp229zSxK4Q+O4vzH30xdnXO6nrL6KblgPNXkTD5jQXtVkk8ZnAasUwrrCX6FSKUJ2H5kEYMK3v7y/4fyD9D7CV7GCbMp5/mjlJ1s9h+kzLfIo/+yHt2yGe58+0iVP0v6P/yr+ELp2OYfltALZ59lO5FO3PVXAykME8x8OmwjuEGYM/pfMF/z/xF/yncH7+BlM+PNk=',
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //     'X-Unique-Transaction-ID': 9999 - Math.round(Math.random()*10) + 1,
        //     // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        //     // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        //     // 'Access-Control-Allow-Origin' : '*'
        // };


        //
        // return $http({
        //     method: 'GET',
        //     url: 'https://sandbox-apis.bbvacompass.com/api/v2/users/8f805780-40f9-47fa-a138-d816ee2bc010/accounts/01-1012/transactions',
        //     headers: {
        //         'Authorization': 'tsec eJxtlUlvtGgShP+K5SuygWKXbLeAgoJi34rlMgJeKPa92H59+5N6WnOYe6RSEZl64uuvvW3e1myay777fkc/kfe3rEt7UHbP73fPFT/o97d5iTsQN32Xfb8f2fz+18+XO2fpmwy+3y85jqY4AT5olEY/cAwHHwwBwEeKkSlISIDECPb+9vh3wX+Q958vvhyKbLrGS/wzBiFTHYQAHeF6BBaui8uUxJZchvtrZwWotLd8YosNdvAevUTeQZ1NdzvrgHMToSMmiGG6h88LcrUjao08NNF4lERVnzpXITcM8E/qwvh4Y8QFDl+GGT0p/N4qUfwoFfrpAQTDGSTu63H3g06u5JFKGlPtqcpTwNB448HetxtXakruF+zoooSoIiEe2vLUTPQUysRYXDN9AwnGZXiTyhBzK71WREy5y42LA0gfEqXM2MCFkkQknVPFoPiZ0IoYBSTHzAYB8cyMNqUk7L0QLS2YNH92IYUllMkXVsRiQUXAyyDmDKynBtYMxf2xHeUS4KqDPwE95uhYw1ZRI7SpDRxaIxsj1N7KWXmRhXdEQPaxymp57k3o3pJ+4VRJwVuGuQMxud4oe62DlNMVJXrRN4tVJGvPpV9r6lPLSy5lKI0Ll2lOHUt+eSsUsnqGDfjwezffuZGc26OwZR1q+spet6LYGktOZ7eLyketcIXt91JhP/pO9nt4ZsS1l45SdIeKnqr4SUh3isp4DKBWtjUlJRheGXBZAwxs1h7lBWGunlm4c8QO/alDRoXfHRSVywdCoOuAVYs0g2bKxEvNoLp1JWI8bl+vQcna8LbzIh/LN1TV2ZA96VxyDyewRy9JPFv0anzTnylsX9VF0QbN0luMtV56vJGpKt5YLLjwEVbcc9EiLwZdtGgfXklPm1OWmpmthjThN4Y96MuV3W8eP0t5aPvldNK8atQ7KTEq52xEoJqyd28tPEomZge7ckMaYjU3TSWRW2tmqv6kmsBFW6R4RIgYpVUB044+ek4elZHJXq1sfPjK9THlr8LgSvQBclArAbASZJUFJ68ix44tW2xkKNCDXHB3W1ngCnNeaSPHAyo72nhpkWt5jEtyKUP4RUHAYEjsxJ/NQRwBt0XrXW7qunYIPtesWJZIPZ5o5KlqNcMi15PKHqfs0c2rtZrrQy0qXQYLX1FgQtFpjy+/D9OmxwEcvz+pZfEqM1PgQzWDIsqTKCq4htJGJmGTbergpRKC0YbhEif36am+RnP2YqZuRxHtFElOt2BFuN+AV2vJrTGCzWVBChUkJp3nOk125vOID4ThvdpTS8hiGh0fekqn6LNF4rtrNVWSsUhou5aSw2N9ss6pdsZ54xrucHl236ljZLPCJVG37yHCBGv8IE9/v5ixQV7HpEzgBDgyZvQuRXrXqFA9va8qA5JA39N6f4wpSWL1E1tzX/O9RaegpIXaLc+sF9XgrUq1mn8c9XHs1605f32tI7PIlmAfkTz+IoNC6laZ3SHXQ5KGjZp0Vv3ebR2+QIs65GVTHVrHtpnl7pLJRBgs8p00DE7t39fteB0yE93QiYRhDBN1BnihaNP4hKwZTnEL9dp229zSxK4Q+O4vzH30xdnXO6nrL6KblgPNXkTD5jQXtVkk8ZnAasUwrrCX6FSKUJ2H5kEYMK3v7y/4fyD9D7CV7GCbMp5/mjlJ1s9h+kzLfIo/+yHt2yGe58+0iVP0v6P/yr+ELp2OYfltALZ59lO5FO3PVXAykME8x8OmwjuEGYM/pfMF/z/xF/yncH7+BlM+PNk=',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'X-Unique-Transaction-ID': 9999 - Math.round(Math.random()*10) + 1
        //     }
        // }).then(function successCallback (response) {
        //     console.log('GET TRANSACTIONS')
        //     console.log(response);
        //
        //     return response;
        // }, function errorCallback (response) {
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        //     return response;
        // });


        return $http.get('https://sandbox-apis.bbvacompass.com/api/v2/users/8f805780-40f9-47fa-a138-d816ee2bc010/accounts/01-1012/transactions', {
            headers: {
                'Authorization': 'tsec eJxtlUlvtGgShP+K5SuygWKXbLeAgoJi34rlMgJeKPa92H59+5N6WnOYe6RSEZl64uuvvW3e1myay777fkc/kfe3rEt7UHbP73fPFT/o97d5iTsQN32Xfb8f2fz+18+XO2fpmwy+3y85jqY4AT5olEY/cAwHHwwBwEeKkSlISIDECPb+9vh3wX+Q958vvhyKbLrGS/wzBiFTHYQAHeF6BBaui8uUxJZchvtrZwWotLd8YosNdvAevUTeQZ1NdzvrgHMToSMmiGG6h88LcrUjao08NNF4lERVnzpXITcM8E/qwvh4Y8QFDl+GGT0p/N4qUfwoFfrpAQTDGSTu63H3g06u5JFKGlPtqcpTwNB448HetxtXakruF+zoooSoIiEe2vLUTPQUysRYXDN9AwnGZXiTyhBzK71WREy5y42LA0gfEqXM2MCFkkQknVPFoPiZ0IoYBSTHzAYB8cyMNqUk7L0QLS2YNH92IYUllMkXVsRiQUXAyyDmDKynBtYMxf2xHeUS4KqDPwE95uhYw1ZRI7SpDRxaIxsj1N7KWXmRhXdEQPaxymp57k3o3pJ+4VRJwVuGuQMxud4oe62DlNMVJXrRN4tVJGvPpV9r6lPLSy5lKI0Ll2lOHUt+eSsUsnqGDfjwezffuZGc26OwZR1q+spet6LYGktOZ7eLyketcIXt91JhP/pO9nt4ZsS1l45SdIeKnqr4SUh3isp4DKBWtjUlJRheGXBZAwxs1h7lBWGunlm4c8QO/alDRoXfHRSVywdCoOuAVYs0g2bKxEvNoLp1JWI8bl+vQcna8LbzIh/LN1TV2ZA96VxyDyewRy9JPFv0anzTnylsX9VF0QbN0luMtV56vJGpKt5YLLjwEVbcc9EiLwZdtGgfXklPm1OWmpmthjThN4Y96MuV3W8eP0t5aPvldNK8atQ7KTEq52xEoJqyd28tPEomZge7ckMaYjU3TSWRW2tmqv6kmsBFW6R4RIgYpVUB044+ek4elZHJXq1sfPjK9THlr8LgSvQBclArAbASZJUFJ68ix44tW2xkKNCDXHB3W1ngCnNeaSPHAyo72nhpkWt5jEtyKUP4RUHAYEjsxJ/NQRwBt0XrXW7qunYIPtesWJZIPZ5o5KlqNcMi15PKHqfs0c2rtZrrQy0qXQYLX1FgQtFpjy+/D9OmxwEcvz+pZfEqM1PgQzWDIsqTKCq4htJGJmGTbergpRKC0YbhEif36am+RnP2YqZuRxHtFElOt2BFuN+AV2vJrTGCzWVBChUkJp3nOk125vOID4ThvdpTS8hiGh0fekqn6LNF4rtrNVWSsUhou5aSw2N9ss6pdsZ54xrucHl236ljZLPCJVG37yHCBGv8IE9/v5ixQV7HpEzgBDgyZvQuRXrXqFA9va8qA5JA39N6f4wpSWL1E1tzX/O9RaegpIXaLc+sF9XgrUq1mn8c9XHs1605f32tI7PIlmAfkTz+IoNC6laZ3SHXQ5KGjZp0Vv3ebR2+QIs65GVTHVrHtpnl7pLJRBgs8p00DE7t39fteB0yE93QiYRhDBN1BnihaNP4hKwZTnEL9dp229zSxK4Q+O4vzH30xdnXO6nrL6KblgPNXkTD5jQXtVkk8ZnAasUwrrCX6FSKUJ2H5kEYMK3v7y/4fyD9D7CV7GCbMp5/mjlJ1s9h+kzLfIo/+yHt2yGe58+0iVP0v6P/yr+ELp2OYfltALZ59lO5FO3PVXAykME8x8OmwjuEGYM/pfMF/z/xF/yncH7+BlM+PNk=',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Unique-Transaction-ID': 9999 - Math.round(Math.random()*10) + 1
            }
        }).success(function(response){
            console.log(response)
        });

        // return $http.get(transactionsURL, config).then(function success (response) {
        //     return response;
        // });
    };

    // var ref = $firebaseRef.contacts;
    // var uid = AuthService.getUser().uid;
    // return {
    //   createNewContact: function (contact) {
    //     return $firebaseArray(ref.child(uid)).$add(contact);
    //   },
    //   getContactById: function (id) {
    //     return $firebaseObject(ref.child(uid).child(id));
    //   },
    //   getContactList: function () {
    //     return $firebaseArray(ref.child(uid));
    //   },
    //   updateContact: function (contact) {
    //     return contact.$save();
    //   },
    //   deleteContact: function (contact) {
    //     return contact.$remove();
    //   }
    // };
}
angular
    .module('components.services')
    .service('BBVAService', BBVAService);
