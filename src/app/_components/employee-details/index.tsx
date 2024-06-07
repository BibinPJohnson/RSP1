import React from 'react';
import { FaUser, FaIdBadge, FaEnvelope, FaBriefcase, FaUsers, FaCalendarAlt, FaPhone } from 'react-icons/fa';

export default function Employee() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="lg:pl-20 md:pl-16 px-6 py-12">
          <div className="text-center mb-10 lg:mb-14">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">Employee Details</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">Name</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">John Doe</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaIdBadge className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">User ID</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">JD123</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">Email</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">johndoe@example.com</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaBriefcase className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">Post</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">Software Engineer</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaUsers className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">Role</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">Developer</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">Supervisor Name</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">Jane Smith</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">DOB</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">January 1, 1990</p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <FaPhone className="text-gray-600" />
                <label className="text-xs md:text-sm font-semibold text-gray-600">Mobile Number</label>
              </div>
              <p className="text-base md:text-lg text-gray-900">123-456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
