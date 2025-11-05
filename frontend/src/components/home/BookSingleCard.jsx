import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiCalendar } from "react-icons/bi";

const BookSingleCard = ({ book }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <PiBookOpenTextLight className="text-3xl opacity-90" />
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              to={`/books/details/${book._id}`}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              title="View Details"
            >
              <BsInfoCircle className="text-lg" />
            </Link>
            <Link
              to={`/books/edit/${book._id}`}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              title="Edit Book"
            >
              <AiOutlineEdit className="text-lg" />
            </Link>
            <Link
              to={`/books/delete/${book._id}`}
              className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              title="Delete Book"
            >
              <MdOutlineDelete className="text-lg" />
            </Link>
          </div>
        </div>
        <h3 className="text-xl font-bold line-clamp-2 leading-tight">
          {book.title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <BiUserCircle className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Author</p>
              <p className="font-medium text-gray-900">{book.author}</p>
            </div>
          </div>

          {/* Publish Year */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <BiCalendar className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Published</p>
              <p className="font-medium text-gray-900">{book.publishYear}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Mobile */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 lg:hidden">
          <Link
            to={`/books/details/${book._id}`}
            className="flex-1 text-center py-2 px-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors mx-1"
          >
            <BsInfoCircle className="inline text-lg mr-1" />
            <span className="text-sm font-medium">View</span>
          </Link>
          <Link
            to={`/books/edit/${book._id}`}
            className="flex-1 text-center py-2 px-3 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors mx-1"
          >
            <AiOutlineEdit className="inline text-lg mr-1" />
            <span className="text-sm font-medium">Edit</span>
          </Link>
          <Link
            to={`/books/delete/${book._id}`}
            className="flex-1 text-center py-2 px-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors mx-1"
          >
            <MdOutlineDelete className="inline text-lg mr-1" />
            <span className="text-sm font-medium">Delete</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookSingleCard;