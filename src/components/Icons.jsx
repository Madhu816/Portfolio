import React from 'react'

function Icons() {
  return (
    <>
    <div name="skills">
    <div className="text-center">
      <h1 className="inline-block text-4xl font-bold text-green-700 mt-10">
        Skills
      </h1>
      <div className="text-center">

      <p className="inline-block max-w-4xl text-xl mt-5 px-8 py-4  text-blue-950 border border-amber-600 rounded-xl">A collection of my technical skills, tools, and technologies gained through academic projects, problem-solving, and hands-on development experience.</p>
      </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] mx-auto mt-10">

        {/* Frontend */}
        <div className="grid grid-cols-3 gap-8 w-full h-[280px] border border-gray-300 p-6 rounded-xl shadow-md">
          <div className="col-span-3 text-center">
            <h2 className="inline-block text-xl font-bold border border-yellow-400 shadow-md px-2 py-1 rounded-xl">
              FRONTEND DEVELOPMENT
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/html.png" alt="HTML" />
            <p className="font-semibold text-sm">HTML</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/css.png" alt="CSS" />
            <p className="font-semibold text-sm">CSS</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/js.png" alt="JavaScript" />
            <p className="font-semibold text-sm">JavaScript</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/react.png" alt="React" />
            <p className="font-semibold text-sm">React</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/tailwin.png" alt="Tailwind" />
            <p className="font-semibold text-sm">Tailwind</p>
          </div>
        </div>

        {/* Backend */}
        <div className="grid grid-cols-3 gap-8 w-full h-[280px] border border-gray-300 p-6 rounded-xl shadow-md">
          <div className="col-span-3 text-center">
            <h2 className="inline-block text-xl font-bold border border-yellow-400 shadow-md px-2 py-1 rounded-xl">
              BACKEND DEVELOPMENT
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/nodejs.png" alt="Node.js" />
            <p className="font-semibold text-sm">Node.js</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/express.png" alt="Express" />
            <p className="font-semibold text-sm">Express</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/rest.png" alt="REST API" />
            <p className="font-semibold text-sm">REST API</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/crud.png" alt="CRUD" />
            <p className="font-semibold text-sm">CRUD</p>
          </div>
        </div>

        {/* Database */}
        <div className="grid grid-cols-3 gap-8 w-full h-[280px] border border-gray-300 p-6 rounded-xl shadow-md">
          <div className="col-span-3 text-center">
            <h2 className="inline-block text-xl font-bold border border-yellow-400 shadow-md px-2 py-1 rounded-xl">
              DATABASE
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/mogodb.png" alt="MongoDB" />
            <p className="font-semibold text-sm">MongoDB</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/mysql.png" alt="MySQL" />
            <p className="font-semibold text-sm">MySQL</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/sql.png" alt="SQL" />
            <p className="font-semibold text-sm">SQL</p>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="grid grid-cols-3 gap-8 w-full h-[280px] border border-gray-300 p-6 rounded-xl shadow-md">
          <div className="col-span-3 text-center">
            <h2 className="inline-block text-xl font-bold border border-yellow-400 shadow-md px-2 py-1 rounded-xl">
              PROGRAMMING LANGUAGES
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/java.png" alt="Java" />
            <p className="font-semibold text-sm">Java</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/c.png" alt="C" />
            <p className="font-semibold text-sm">C</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/python.png" alt="Python" />
            <p className="font-semibold text-sm">Python</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/js.png" alt="JavaScript" />
            <p className="font-semibold text-sm">JavaScript</p>
          </div>
        </div>

       {/* Tools */}

       <div className="grid grid-cols-3 gap-8 w-full h-[280px] border border-gray-300 p-6 rounded-xl shadow-md">
          <div className="col-span-3 text-center">
            <h2 className="inline-block text-xl font-bold border border-yellow-400 shadow-md px-2 py-1 rounded-xl">
              TOOLS
            </h2>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/git.png" alt="Git" />
            <p className="font-semibold text-sm">Git</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/github.png" alt="GitHub" />
            <p className="font-semibold text-sm">GitHub</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/vscode.png" alt="VS Code" />
            <p className="font-semibold text-sm">VS Code</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/post.png" alt="Postman" />
            <p className="font-semibold text-sm">Postman</p>
          </div>

           <div className="flex flex-col items-center gap-2">
            <img className="w-12 h-12" src="/npm.png" alt="NPM" />
            <p className="font-semibold text-sm">NPM</p>
          </div>
        </div>
        
        {/* DSA  */}
        <div className="grid grid-cols-3 gap-4 w-full h-[280px] border border-gray-300 p-6 rounded-xl shadow-md">
          <div className="col-span-3 text-center">
            <h2 className="inline-block text-xl font-bold border border-yellow-400 shadow-md px-2 py-1 rounded-xl">
              DSA & PROBLEM SOLVING
            </h2>
          </div>
          <ul className ="col-span-3 grid grid-cols-3 gap-3 text-sm font-semibold list-disc pl-2">
            <li>Arrays</li>
            <li>Strings</li>
            <li>Matrices</li>
            <li>Math</li>
            <li>LinkedLists</li>
            <li>Stacks</li>
            <li>Queues</li>
            <li>HashMap</li>
            <li>Recursion</li>
            <li>Sorting</li>
            <li>Searching</li>
            <li>Greedy</li>
            <li>BinarySearch</li>
            <li>Trees</li>
            <li>Graphs</li>
          </ul>              
          
        </div>

      </div>
      </div>
      <br/>
      <br/>
      <hr/>
    </>
  )
}

export default Icons