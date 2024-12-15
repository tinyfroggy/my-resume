function Resume() {

  function handelClick() {
    return alert('coming soon')
  }

  return (
    <div className='bg-main flex flex-col justify-center items-center'> 

      {/* pdf and word files */}
      <div className='flex justify-center items-center gap-5  h-52 text-white '>
        <button className="border-4 p-2 text-sm lg:text-lg lg:w-96 h-14 hover:text-main hover:bg-white" onClick={handelClick}>Download Resume as PDF</button>
        <button className="border-4 p-2 text-sm lg:text-lg lg:w-96 h-14 hover:text-main hover:bg-white" onClick={handelClick}>Download Resume as Word</button>
      </div>
      {/* === pdf and word files === */}

      {/* resume */}
      <div className=" lg:h-240 text-white w-5/6 lg:pl-20 lg:pr-20">

        <h1 className="resumeH1Mobile lg:resumeH1">Professional Experience</h1>

        <h2 className="resumeH2Mobile lg:resumeH2">Beginner Front End Developer  2023-Current </h2>

        <h3 className="resumeH3Mobile lg:resumeH3">✷  Design and develop websites and web applications using HTML, CSS, JavaScript, and React</h3>

        <h3 className="resumeH3Mobile lg:resumeH3">✷  Collaborate with the design team to create visually appealing and user-friendly interfaces</h3>

        <h3 className="resumeH3Mobile lg:resumeH3">✷  Implement responsive design and ensure cross-browser compatibility</h3>

        <h2 className="resumeH2Mobile lg:resumeH2">learning Web Development ▪ 2023-2024</h2>

        <h1 className="resumeH1Mobile lg:resumeH1">Education</h1>

        <h2 className="resumeH2Mobile lg:resumeH2">High school graduate ▪ 2025</h2>

          {/* skills */}
        <div className="flex justify-between">

        {/* programming languages */}
          <div>

          <h1 className="resumeH1Mobile lg:resumeH1">Programming Languages</h1>

          <h2 className="resumeH2Mobile lg:resumeH2">✷  HTML5</h2>
          <h2 className="resumeH2Mobile lg:resumeH2">✷  CSS3</h2>
          <h2 className="resumeH2Mobile lg:resumeH2">✷  JavaScript</h2>
          <h2 className="resumeH2Mobile lg:resumeH2">✷  Python</h2>
          <h2 className="resumeH2Mobile lg:resumeH2">✷  C++</h2>

          </div>
          {/* === programming languages === */}


          {/* frameworks */}
          <div>

            <h1 className="resumeH1Mobile lg:resumeH1">FrameWorks</h1>

            <h2 className="resumeH2Mobile lg:resumeH2">✷  React</h2>
            <h2 className="resumeH2Mobile lg:resumeH2">✷  Tailwind Css</h2>
            <h2 className="resumeH2Mobile lg:resumeH2">✷  BootStrap</h2>
            <h2 className="resumeH2Mobile lg:resumeH2">✷  Figma</h2>

          </div>
          {/* === frameworks === */}

        </div>
        {/* === skills === */}  

      </div>
      {/* === resume === */}

    </div>
  )
}

export default Resume
