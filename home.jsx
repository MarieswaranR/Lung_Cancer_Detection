// App.js

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [result, setResult] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/login', { email, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await axios.post('http://localhost:8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>User Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>

      <h1>Image Upload</h1>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={handleImageUpload}>Upload Image</button>

      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
