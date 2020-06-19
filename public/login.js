
    const db = firebase.database();
    const loginer = () => {
          let a;
          db.ref(`users/${ner.value}`).once('value')
          .then(snapshot => {
                if(snapshot.val().pass == pass.value){
                }
                if(snapshot.val().pass != pass.value){
                      const d = document.createElement('h3');
                      d.innerHTML = 'username or password incorrect';
                      document.getElementsByTagName('div')[1].appendChild(d);
                }
          })
    }
    const register = () => {
          db.ref(`users`).once('value')
          .then(snapshot =>{
                if(ner.value==null){
                    db.ref(`users/${ner.value}`).set({
                        pass: pass.value
                  })
                }
                else{
                    const d = document.createElement('h3');
                    d.innerHTML = 'already registreted';
                    document.getElementsByTagName('div')[1].appendChild(d);
                }
          })
    }
    const googler = () => {
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
    }
    
    const facer = () => {
          var provider = new firebase.auth.FacebookAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
    }