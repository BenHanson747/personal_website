


function App() {
  return (
     <section className="battery">
            <div className="battery__card">
                <div className="battery__data">
                    <p className="battery__text">Battery</p>
                    <h1 className="battery__percentage">
                        20%
                    </h1>

                    <p className="battery__status">
                        Low battery <i className="ri-plug-line"></i>
                    </p>
                </div>

                <div className="battery__pill">
                    <div className="battery__level">
                        <div className="battery__liquid"></div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default App;
