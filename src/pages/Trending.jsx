



// import React from "react";
// import Layout from "../components/Layout";

// export default function Trending() {
//   return (
//     <Layout>
//       <div className="w-[100%] h-[84vh] text-white text-3xl my-6 flex flex-col items-center justify-center">
//         <iframe src="/assets/cover.jpeg" className="w-full h-full" title="Resume"></iframe>
//         <a href="assets/resume.pdf" download className="mt-4 text-blue-500 block text-center">Download PDF</a>
//       </div>
//     </Layout>
//   );
// }


// import React from "react";
// import Layout from "../components/Layout";

// export default function Trending() {
//   return (
//     <Layout>
//       <div className="w-[100%] h-[84vh] text-white my-6 flex flex-col items-center justify-center">
//         <iframe src="./assets/cover.jpeg" className="w-full h-full" title="Resume"></iframe>
//         <a href="./assets/cover.jpeg" download className="mt-4 text-blue-500 block text-center">Download PDF</a>
//       </div>
//     </Layout>
//   );
// }


import React from 'react';

function App() {
  const handleDownload = () => {
    // Perform any necessary operations before download
    console.log('Downloading...'); // Optional: Log a message

    // Simulate downloading a file
    const url = 'https://drive.google.com/file/d/1C8pertni7jKo994aZcltIeOGgljcYW_G/view'; // Replace with your file URL
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

