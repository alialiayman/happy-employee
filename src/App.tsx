import React from 'react';
import HappyEmployee from './HappyEmployee';

function App() {
  return (
    <div >
      <HappyEmployee employee={{ "givenName": "Chris", "lastName": "Morrison", "birthDate": "1900-02-01", "deceased": false, "gender": "female", "empTime": "17:04", "country": 44 }} />
    </div>
  );
}

export default App;
