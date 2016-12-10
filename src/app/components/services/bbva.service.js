function BBVAService ($http, $log, $q) {

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



    var response = [{'amount': -1.0, 'posted_date': '2016-12-09', 'description': 'Fee on account 0000001012', 'posted_balance': 1000335.0}, {'amount': 200.0, 'posted_date': '2016-12-09', 'description': 'TimeWarnerCable  Test Transaction 2', 'posted_balance': 1000336.0}, {'amount': 50.0, 'posted_date': '2016-12-09', 'description': 'Gambling.com Test Transaction 2', 'posted_balance': 1000136.0}, {'amount': 35.0, 'posted_date': '2016-12-09', 'description': 'TimeWarnerCable Test Transaction 2', 'posted_balance': 1000086.0}, {'amount': 51.0, 'posted_date': '2016-12-09', 'description': 'Bestbuy Test transaction', 'posted_balance': 1000051.0}, {'amount': 0.0, 'posted_date': '2016-12-09', 'description': 'Account Origination', 'posted_balance': 0.0}];

    this.getTransactions = function () {

        return response;


        // var deferred = $q.defer();
        // var url = transactionsURL;
        // $log.debug('API CALL ' + url);
        //
        // return $http.get(url, {
        //     headers: {
        //         'Authorization': 'tsec eJxtlddutGgWRV/F8i2yyQVItlvknAqKUDcjwkeRCigyPH37l3paczH3e+to60hrff21P9u3FYxT1Xff7+gn8v4GuqzPq+7x/X7zpQ/6/W2aky5P2r4D3+8HmN7/+vnyJ5C9qflvAyHSFJDYB0GS+AdBZfRHmuLgg8IxAmA0mRYpeH8L/j3wH+T954uvhhKMQjInP68oZuqDFKEjXo/IJSxpHtPEVat4X3ZWhKrrVoxsucEe0aPY/XZQZ9vJZxNxfip25AgxTBeEvKjWO2I0SGBKdlCRdXNaXI3IeM4/KIwJidZOSgLGhgk9KUJ76vckqHT6ccsRnGCQpG9eexh1aq2+qLR1jJ6qb3o+tLfXwWqbzFWmXoQl+/JRUjKQmIiv6tiO9Bir5KsUgLXlKc4Bos1UiJGr21NCHLUrbMzLLyEkKcDecoxSJCSbMt2m+Ik0ywTNLxwz2STEMxPaVoq49+J9fuajGU4+pLOkPobiirhsXpPwPEgFA1uZjbdDqQXbUc0RYXjEI6dfBfpqYLdsENoxBw5tkI0Rm9vKuUUJYg0Rkf1Vg0adegfSnpew9Oq05F3b2XMpFWTqujZRxlm6fl9o2WV1xd0L5Xea8TCLissYyuTieZwyz1WX2wrFrAXwgRh+/xZ68oXzexR23cPIFrDIZbm1rppNfnevgkbnymvYK+U16Ds17OGJkdZeOSrJH2p6rJMHqWgUBXg8R12wtRUl2rcq4kCb2/hkBhWGMMLNKf3pzg79aUF2TWgeiqpVgJDoOuD1rEx5OwIJaxjUcgUyIZLnsgw6eMbyzkt8osqoYbExe9KF4ldjzGQYjz0KMxTF2+MYnacHq9Mr40rrYLupphwButDCQp+sn3pwf57wq82VJMHpRmQvr1I+ihXag2OK7WFbrTCsckgI1QmkLcUnz7AkN8VXHLptFLp0sGfuQ8EKIfXiyn3jUEY6UzRzN4yC0iztpbGMNGyLq65IOkhHjiB+UApI2xhXwhI5LbtEWcv5lpxH3FoSfTKQ5o0Qm6My/Ce5UEM3akPxYk6PDx+7K1qzLMQeLvqtD3kjHHPAbcynv/V8cJaXJr4luGBuh3LpL1dfh1lTvjfTzYjQXnDZwVvV8iJ25WZ3Uvzk2YQa256vlRs/mbcD6NB0NcsavySjNPIUBmShUi62whNYvQ6haBu1NXOdAkMJTGG0p9CMlMtFl4g0PF30rrcBeXcA1VVRWLCI89zhbePKU4kwZYO2+poi9bybi13bIL3bDsqXfi4eut6zqOXQK80VsOqd86VFWIGxNzB6hVA4QpqLRAYbxMnG8TgANWKYC4sMWu4G4ysiFnlls0cAFZ1pEthW8Wc1msYjG9dGiNojx7xOyBy62Fg+APzdF9IocJfslGKE2lvp6U+kPe74ow3EXucVvzQ1OZUkg0bPuMPmeef2RDsWfRGqJOJ0Z64J6jKN5/TYSi/g4Z2OSjVfWQp36jDWXcRIzpIQLtfeAnO1wkfqRcheeU9cgCxMzYibBdYiR2SJa/TaG/KpWhQ9E6tKqxftyt83PaiJuF2lgO7TbRUAz8fyQYPezPGYGWPwi8mApypRR3Ja6OW8jK8hix0cQY+mhRmri4Rms8Wd0paqb+LUyFCNdmgpzAeJrBrYLUke399f8P9A+h9g6+Bg2yqZftopTdfPYfzMqmJMPvsh659DMk2fWZtk6H+r/8a/xC4bj2H+NQDbPvqxmsvnjyB6IAcwz/Gwo/Me6ST5H+l8wf8v/AX/Ec7P34isOkA=',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'X-Unique-Transaction-ID': 9999 - Math.round(Math.random()*10) + 1
        //     }}).success(function (data) {
        //         $log.debug('DeckBrew getCardsBySetandPage success!!');
        //         deferred.resolve();
        //     })
        //     .error(function (data, status, headers, config) {
        //         $log.debug('Deckbrew getCardsBySetandPage error!!');
        //         deferred.reject(data);
        //     });


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

        //
        // return $http.get('https://sandbox-apis.bbvacompass.com/api/v2/users/8f805780-40f9-47fa-a138-d816ee2bc010/accounts/01-1012/transactions', {
        //     headers: {
        //         'Authorization': 'tsec eJxtlUlvtGgShP+K5SuygWKXbLeAgoJi34rlMgJeKPa92H59+5N6WnOYe6RSEZl64uuvvW3e1myay777fkc/kfe3rEt7UHbP73fPFT/o97d5iTsQN32Xfb8f2fz+18+XO2fpmwy+3y85jqY4AT5olEY/cAwHHwwBwEeKkSlISIDECPb+9vh3wX+Q958vvhyKbLrGS/wzBiFTHYQAHeF6BBaui8uUxJZchvtrZwWotLd8YosNdvAevUTeQZ1NdzvrgHMToSMmiGG6h88LcrUjao08NNF4lERVnzpXITcM8E/qwvh4Y8QFDl+GGT0p/N4qUfwoFfrpAQTDGSTu63H3g06u5JFKGlPtqcpTwNB448HetxtXakruF+zoooSoIiEe2vLUTPQUysRYXDN9AwnGZXiTyhBzK71WREy5y42LA0gfEqXM2MCFkkQknVPFoPiZ0IoYBSTHzAYB8cyMNqUk7L0QLS2YNH92IYUllMkXVsRiQUXAyyDmDKynBtYMxf2xHeUS4KqDPwE95uhYw1ZRI7SpDRxaIxsj1N7KWXmRhXdEQPaxymp57k3o3pJ+4VRJwVuGuQMxud4oe62DlNMVJXrRN4tVJGvPpV9r6lPLSy5lKI0Ll2lOHUt+eSsUsnqGDfjwezffuZGc26OwZR1q+spet6LYGktOZ7eLyketcIXt91JhP/pO9nt4ZsS1l45SdIeKnqr4SUh3isp4DKBWtjUlJRheGXBZAwxs1h7lBWGunlm4c8QO/alDRoXfHRSVywdCoOuAVYs0g2bKxEvNoLp1JWI8bl+vQcna8LbzIh/LN1TV2ZA96VxyDyewRy9JPFv0anzTnylsX9VF0QbN0luMtV56vJGpKt5YLLjwEVbcc9EiLwZdtGgfXklPm1OWmpmthjThN4Y96MuV3W8eP0t5aPvldNK8atQ7KTEq52xEoJqyd28tPEomZge7ckMaYjU3TSWRW2tmqv6kmsBFW6R4RIgYpVUB044+ek4elZHJXq1sfPjK9THlr8LgSvQBclArAbASZJUFJ68ix44tW2xkKNCDXHB3W1ngCnNeaSPHAyo72nhpkWt5jEtyKUP4RUHAYEjsxJ/NQRwBt0XrXW7qunYIPtesWJZIPZ5o5KlqNcMi15PKHqfs0c2rtZrrQy0qXQYLX1FgQtFpjy+/D9OmxwEcvz+pZfEqM1PgQzWDIsqTKCq4htJGJmGTbergpRKC0YbhEif36am+RnP2YqZuRxHtFElOt2BFuN+AV2vJrTGCzWVBChUkJp3nOk125vOID4ThvdpTS8hiGh0fekqn6LNF4rtrNVWSsUhou5aSw2N9ss6pdsZ54xrucHl236ljZLPCJVG37yHCBGv8IE9/v5ixQV7HpEzgBDgyZvQuRXrXqFA9va8qA5JA39N6f4wpSWL1E1tzX/O9RaegpIXaLc+sF9XgrUq1mn8c9XHs1605f32tI7PIlmAfkTz+IoNC6laZ3SHXQ5KGjZp0Vv3ebR2+QIs65GVTHVrHtpnl7pLJRBgs8p00DE7t39fteB0yE93QiYRhDBN1BnihaNP4hKwZTnEL9dp229zSxK4Q+O4vzH30xdnXO6nrL6KblgPNXkTD5jQXtVkk8ZnAasUwrrCX6FSKUJ2H5kEYMK3v7y/4fyD9D7CV7GCbMp5/mjlJ1s9h+kzLfIo/+yHt2yGe58+0iVP0v6P/yr+ELp2OYfltALZ59lO5FO3PVXAykME8x8OmwjuEGYM/pfMF/z/xF/yncH7+BlM+PNk=',
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'X-Unique-Transaction-ID': 9999 - Math.round(Math.random()*10) + 1
        //     }
        // }).success(function(response){
        //     console.log(response)
        // });

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
