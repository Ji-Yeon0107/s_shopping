import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId='324115389052-enbpgffd59criuhmc5tes9ire852h38d.apps.googleusercontent.com';


function Signout() {
  const onSuccess = () => {
    alert('로그아웃 되었습니다.');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Signout;