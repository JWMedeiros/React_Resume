import React from 'react';

export default function Resume() {
  const resumeURL = 'https://drive.google.com/file/d/10_TLufrOBl1XHMJ3bFgc3IPHun6EFREk/view?usp=sharing'; // URL of Resume

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeURL;
    link.target = '_blank';
    link.rel="noreferrer";
    link.download = 'John Medeiros Resume July 7 2023.pdf';
    link.click();
  };

  return (
    <div className='container top-buffer bot-buffer'>
      {/* Download button */}
      <div className="text-center">
        <button className="btn btn-primary mt-3" onClick={handleDownload}>
          Download PDF
        </button>
      </div>
      {/* Embedded resume */}
      <div className="resume-embed">
        <iframe title = "My_resume" src="https://drive.google.com/file/d/10_TLufrOBl1XHMJ3bFgc3IPHun6EFREk/preview" width="800" height="1000" allow="autoplay"></iframe>
      </div>
    </div>
  );
}
