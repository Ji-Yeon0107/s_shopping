import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId='324115389052-enbpgffd59criuhmc5tes9ire852h38d.apps.googleusercontent.com';


function Signin(props) {
    const onSuccess = (res) => {

      console.log('Login Success: currentUser:', res.profileObj);
      alert(
        `환영합니다 ${res.profileObj.name} 님😍`
      );
      props.상태변경(true)
    //   refreshTokenSetup(res);
    };
  
    const onFailure = (res) => {
    };
  
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          style={{ marginTop: '100px' }}
          isSignedIn={true}
        />
      </div>
    );
  }

export default Signin;