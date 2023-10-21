

function App() {
  const handlePrint=()=>{
    window.print();
  }
  return (
    <>

    <main className="m-5 p-5 lg:mx-w-xl lg:mx-auto bg-white">
      {/* Header */}
      <header className="flex flex-col items-center justify-center mb-5">
        <div>
          <h2 className="font-bold uppercase tracking-wide text-4xl">Invoicer </h2>
        </div>
        <div>
          <ul className="flex items-center justify-between flex-wrap">
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
      <ul className="flex items-center justify-center">
        <li>Your name:</li>
        <li>Your email:</li>
        <li>Phone no.:</li>
        <li>Account holder's name:</li>
        <li>Account no.:</li>
        <li>Website:</li>
        </ul>
      {/*end of footer*/}

    </main>
    
    </>
  );
}

export default App;
