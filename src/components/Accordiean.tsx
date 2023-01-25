import React from "react";
import "./Accodian.css";
type data = {
  que: any;
  answer: any;
};
function Accordiean({ que, answer }: data) {
  return (
    <div>
      <div className="">
        <div className="c-full">
          <div className="m-8 rounded overflow-hidden">
            <div className="group outline-none accordion-section" tabIndex={1}>
              <div className="group bg-gray-300 flex justify-between px-4 py-3 items-center text-500 transition ease duration-200 cursor-pointer pr-10 relative">
                <div className="group-focus:text-vlue transition ease duration-200">
                  {que}
                </div>
                <div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                  <i className="fas fa-chevron-down">→</i>
                </div>
              </div>
              <div className="group-focus:max-h-screen max-h-0 bg-gray-200 px-4 overflow-hidden ease duration-500">
                <p className="p-2 text-blue-400 text-justify">{answer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordiean;
