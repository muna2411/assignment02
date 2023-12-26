
const Listing = () => {
    return (
        <div>
             <div
      className="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2"
    >
      <div>
        <h2 className="border-b pb-2 font-medium text-green-600">Income</h2>

        {/* <!-- <p class="py-2.5 text-gray-600">There are no expenses.</p> --> */}

        <ul id="income-list" className="divide-y">
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Website project</span>

              <div>
                <span className="text-green-600">+11,999.99</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Salary</span>
              <div>
                <span className="text-green-600">+35,000.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Mobile app project</span>
              <div>
                <span className="text-green-600">+10,000.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="border-b pb-2 font-medium text-red-600">Expense</h2>

        {/* <!-- <p class="py-2.5 text-gray-600">There are no expenses.</p> --> */}

        <ul id="expense-list" className="divide-y">
          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Groceries 1</span>
              <div>
                <span className="text-red-600">-2,500.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Electricity Bill</span>
              <div>
                <span className="text-red-600">-2,500.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>House rent</span>
              <div>
                <span className="text-red-600">-2,500.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>Phone bill</span>
              <div>
                <span className="text-red-600">-2,500.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>

          <li className="py-2.5">
            <div className="group flex justify-between gap-2 text-sm">
              <span>1 Week Travel</span>
              <div>
                <span className="text-red-600">-2,500.00</span>
                <span
                  className="ml-2 hidden cursor-pointer font-medium text-red-500 group-hover:inline-block"
                >
                  Delete
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
        </div>
    );
};

export default Listing;