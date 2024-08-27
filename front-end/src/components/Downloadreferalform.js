import React, { useState, useEffect, useRef } from 'react';

const ReferralForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referredBy, setReferredBy] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const fileNameRef = useRef('referral-form.txt');

  useEffect(() => {
    const storedData = localStorage.getItem('referralFormData');
    if (storedData) {
      const { name, email, referredBy } = JSON.parse(storedData);
      setName(name);
      setEmail(email);
      setReferredBy(referredBy);
    }
  }, []);

  useEffect(() => {
    if (name || email || referredBy) {
      localStorage.setItem('referralFormData', JSON.stringify({ name, email, referredBy }));
    } else {
      localStorage.removeItem('referralFormData');
    }
  }, [name, email, referredBy]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !referredBy) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    setErrorMessage('');
    setIsDownloading(true);

    const formData = {
      name,
      email,
      referredBy,
    };

    const jsonData = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonData], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileNameRef.current;

    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(url);

    setName('');
    setEmail('');
    setReferredBy('');
    setIsDownloading(false);
  };

  const handleFileNameChange = (e) => {
    fileNameRef.current = e.target.value || 'referral-form.txt';
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Referred By:
        <input
          type="text"
          value={referredBy}
          onChange={(e) => setReferredBy(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        File Name:
        <input
          type="text"
          value={fileNameRef.current}
          onChange={handleFileNameChange}
          placeholder="referral-form.txt"
        />
      </label>
      <br />
      <button type="submit" disabled={isDownloading}>
        {isDownloading ? 'Downloading...' : 'Download Referral Form'}
      </button>
    </form>
  );
};

export default ReferralForm;
