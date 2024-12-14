import React from "react";

function Comic() {
    return (
        <div>
        {/* Recommended Books Carousel */}
        <section className="mt-10 px-6">
          <h2 className="text-xl font-semibold text-gray-800">Recent changed</h2>
          <div className="flex space-x-4 mt-4 overflow-x-auto">
            {/* Example Book Card */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 bg-white rounded-md shadow p-3"
              >
                <img
                  src="book-cover.jpg"
                  alt="Book Cover"
                  className="w-full h-48 rounded-md object-cover"
                />
                <div className="mt-2 text-center">
                  <h3 className="text-sm font-medium text-gray-800">
                    Book Title
                  </h3>
                  <p className="text-xs text-gray-500">Author Name</p>
                  <p className="text-sm text-gray-600">4.5/5</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
}

export default Comic;