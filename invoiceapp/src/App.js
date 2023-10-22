

function App() {
  const handlePrint=()=>{
    window.print();
  }
  return (
    <>

    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white">
      {/* Header */}
      <header className="flex flex-col items-center justify-center mb-5 xl:justify-between xl:flex-row">
        <div>
          <h2 className="font-bold uppercase tracking-wide text-4xl">Invoicer </h2>
        </div>
        <div>
          <ul className="flex items-end justify-end flex-wrap">
            <li><button className="btn btn-print"onClick={handlePrint}>Print</button></li>
            <li><button className="btn btn-send">Send</button></li>
            <li><button className="btn btn-download">Download</button></li>
          </ul>
        </div>
      </header>
      {/*End of header */}
      {/*details */}
      <section className="flex flex-col items-end justify-end flex-wrap">
        <h2 className="text-xl uppercase">Harsh raut</h2>
        <h2>Address</h2> 
             </section>
      {/*end of detials */}
      {/*clients details */}
      <section>
        <h2 className="text-xl uppercase"> clients name:</h2>
        <p>clients address:</p>
      </section>
      {/*end of client details*/}
      {/*date*/}
      <article  className="flex items-end justify-end flex-wrap">
        <ul>
        <li><span className="font-bold">Invoice number:</span></li>
        <li><span className="font-bold">Date:</span></li>
        <li><span className="font-bold">Due Date: </span></li>
        </ul>
      </article>
      {/*end of date*/}
      {/* table */}
      <p>table here</p>
      {/*end of table */}
      {/*notes */}
      <section>
        {/*text area */}
        <p>notes to client...</p>
      </section>
      {/*end of notes*/}
      {/*footer*/}
      <footer>
      <ul className="flex flex-wrap items-center justify-center">
        <li><span className="font-bold ">Your name:</span>Harsh Raut</li>
        <li><span className="font-bold ">Your email:</span>rautharsh.00@gmail.com</li>
        <li><span className="font-bold ">Phone no.</span>:9359719200</li>
        <li><span className="font-bold ">Account holder's</span> :Harsh Raut </li>
        <li><span className="font-bold ">Account no.</span>: 3245 4536 6745</li>
        <li><span className="font-bold ">Website: </span>abc.com</li>
        </ul>
        </footer>
      {/*end of footer*/}

    </main>
    
    </>
  );
}

export default App;
