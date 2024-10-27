import React from "react";

function BooklistTable() {
  return (
    <div>
      {/* Book List Table */}
      <section className="flex mt-8 px-6">
        <div className="flex bg-white rounded-md shadow">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Title
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Rating
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="p-4 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Example Row */}
              {[...Array(5)].map((_, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src="small-book-cover.jpg"
                        alt="Book Cover"
                        className="w-10 h-10 rounded"
                      />
                      <span>Book Title</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm text-gray-600">4.5/5</td>
                  <td className="p-4 text-sm text-gray-600">Design & UX</td>
                  <td className="p-4 text-sm">
                    <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full">
                      Take book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default BooklistTable;
