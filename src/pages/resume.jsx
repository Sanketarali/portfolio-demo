import React from 'react';

function App() {
  const handleDownload = () => {
    // Perform any necessary operations before download
    console.log('Downloading...'); // Optional: Log a message

    // Simulate downloading a file
    const url = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'; // Replace with your file URL
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sanketarali_resume.pdf'; // Specify the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default App;
