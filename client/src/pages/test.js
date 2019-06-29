axios.post('/login', {
    email: this.state.email,
    password: this.state.password
})
    .then(response => {
        console.log(response)
        if (!response.data.err) {
            var credentials = [];
            Axios.get('/api/allusers')
                .then(function (response) {
                    console.log("inside axios");
                    console.log(response);
                    for (var c = 0; c < response.data.length; c++) {
                        //var cred = [];
                        credentials.push(response.data[c].email);
                        credentials.push(response.data[c].password);
                        //credentials.push(cred);
                        /*
                        if (response.data[c].email == this.state.email && response.data[c].password == user.password) {
                            console.log("user is in user table!");
                            console.log("e-mail: " + response.data[c].email);
                            console.log("password: " + response.data[c].password);
                            user.match = true;
                            console.log("user match is " + user.match);
                        }*/
                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
            this.setCredentials(credentials);
            console.log("Credentials: ");
            console.log(this.state.credentials);

            alert("You have been logged in");

        } else {
            console.log('username already taken')
            alert("Email or password does not match");
        }
    }).catch(error => {
        console.log('signup error: ')
        console.log(error)

    })