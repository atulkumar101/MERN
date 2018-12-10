import {storageRef, databaseRef, firebaseApp} from '../firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //data: [],
      error: ''
    };
    this.signOut.bind(this);
  }

  componentWillMount() {
    console.log('WillMount');
  }
  componentDidMount() {
    console.log('DidMount');
    //.then(data => this.setState({ data }));
    fetch('http://localhost:1827/get?q1=sarvesh&q2=test', {
      method: 'get'
    })
    .then(response => response.json())
    .then(json => console.log('get',json));

    fetch('http://localhost:1827/testget/sarvesh', {
      method: 'get'
    })
    .then(response => response.json())
    .then(json => console.log('testget',json));

    fetch('http://localhost:1827/testpost',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:"testpost", age:30, city:"New York"})
    })
    .then(response => response.json())
    .then(json => console.log('testpost',json));

    fetch('http://localhost:1827/post', {
      method: 'post',
      body: 'post'
    })
    .then(response=> response.text())
    .then(text => console.log('post',text))
    .catch(error => console.error('error', error));
  }

  componentWillReceiveProps(newProps) {
    console.log('WillReceiveProps',newProps);
  }
  shouldComponentUpdate(newProps, newState) {
    console.log('shouldUpdate',newProps,' ',newState);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('WillUpdate',nextProps,' ',nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate',prevProps,' ',prevState);
  }

  componentWillUnmount() {
    console.log('WillUnmount');
  }

  upload(event) {
    const file=event.target.files[0];
    console.log('upload()',file.name,' ',file.type);

    /*
    const metadata = {
      contentType: file.type,
    };
    const uploadTask = storageRef.child(`images/${file.name}`).put(file, metadata)
    */

    storageRef.child('test')
      //`${file.name}`)
    .put(file)
    .then(snapshot=> snapshot.ref.getDownloadURL())
    .then(downloadURL=> {console.log('downloadURL',downloadURL)})
    .catch(error=> {
      this.setState({error: error})
    });
  }

  download() {
    console.log('download');
    storageRef.child('test').getDownloadURL()
    .then(downloadURL=> {
      //console.log('name',downloadTask.name);
      //console.log('fullPath',downloadTask.fullPath);
      //console.log('bucket',downloadTask.bucket);
      var img = document.getElementById('myimg');
      img.src = downloadURL;
    })
    .catch(error=> {
      this.setState({error: error})
    });
  }

  signOut() {
    const user = firebaseApp.auth().currentUser;
    if(user!=null)
    {
      return <Signout />;
    }
    else {
      <div>
        <Link to={'/signin'}>SignIn</Link><br/>
        <Link to={'/signup'}>SignUp</Link>
      </div>
    }
  }
  /*
get
  var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}



update
var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});




var user = firebase.auth().currentUser;

user.updateEmail("user@example.com").then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});

var user = firebase.auth().currentUser;
var newPassword = getASecureRandomPassword();

user.updatePassword(newPassword).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});





verification email
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});



pasword reset
var auth = firebase.auth();
var emailAddress = "user@example.com";

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
}).catch(function(error) {
  // An error happened.
});

delete
var user = firebase.auth().currentUser;

user.delete().then(function() {
  // User deleted.
}).catch(function(error) {
  // An error happened.
});


re
var user = firebase.auth().currentUser;
var credential;

// Prompt the user to re-provide their sign-in credentials

user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
  // User re-authenticated.
}).catch(function(error) {
  // An error happened.
});
  */
  forgotPassword() {
    var auth = firebaseApp.auth();
    var emailAddress = "sarvesh.singh@daffodilsw.com";

    auth.sendPasswordResetEmail(emailAddress).then(function() {
      // Email sent.
    }).catch(function(error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {console.log('App')}
        <form className="form-inline" encType='multipart/form-data'>
          <input type="file" className='form-control'
              onChange={event =>this.upload(event)
          }/>
        </form>
        {this.state.error.message}
        <button type="button" className="btn btn-primary"
            onClick={()=>this.download()}>Download</button>
        <button type="button" className="btn btn-primary"
            onClick={()=>this.forgotPassword()}>Forgot Password</button>
        {this.signOut()}
        <img src="" id="myimg" alt="gggg"/>
      </div>
    );
  }
}

export default App;
