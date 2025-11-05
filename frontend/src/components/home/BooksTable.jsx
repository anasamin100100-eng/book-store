import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
      <table className="w-full min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <tr>
            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              No
            </th>
            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Title
            </th>
            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider lg:table-cell hidden">
              Author
            </th>
            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider lg:table-cell hidden">
              Publish Year
            </th>
            <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Operations
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {books.map((book, index) => (
            <tr 
              key={book._id} 
              className="hover:bg-blue-50 transition-all duration-200 group"
            >
              <td className="px-8 py-4 whitespace-nowrap">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {index + 1}
                </span>
              </td>
              <td className="px-8 py-4 whitespace-nowrap">
                <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {book.title}
                </div>
              </td>
              <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-600 lg:table-cell hidden">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {book.author}
                </div>
              </td>
              <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-600 lg:table-cell hidden">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {book.publishYear}
                </span>
              </td>
              <td className="px-8 py-4 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <Link
                    to={`/books/details/${book._id}`}
                    className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 hover:text-green-700 transition-all duration-200 transform hover:scale-110"
                    title="View Details"
                  >
                    <BsInfoCircle className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 hover:text-yellow-700 transition-all duration-200 transform hover:scale-110"
                    title="Edit Book"
                  >
                    <AiOutlineEdit className="text-xl" />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 hover:text-red-700 transition-all duration-200 transform hover:scale-110"
                    title="Delete Book"
                  >
                    <MdOutlineDelete className="text-xl" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {books.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-300 mb-4">
            <svg className="mx-auto h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-500 mb-2">No books in your library</h3>
          <p className="text-gray-400">Get started by adding your first book to the collection</p>
        </div>
      )}
    </div>
  );
};

export default BooksTable;