function ex3(email){                                      //email

    var mail = /^\w+@[a-z A-Z_]+?\.[a-z A-Z]{2,3}$/;

    var res = mail.test(email);

    return res;

    }

    console.log(ex3('hisamseil9090@gmail.com'));

    console.log(ex3('hakastgmail.com'));

    console.log(ex3('hakast@gmailcom'));