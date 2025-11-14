const Setting = () => {
  return (
    <div className="w-full p-6 space-y-8">

      {/* Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 -mt-1">Manage your profile & system preferences.</p>
      </div>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-5">Profile Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="John Doe" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email Address</label>
            <input className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="admin@gmail.com" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone Number</label>
            <input className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="+880 1700 000000" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Role</label>
            <input disabled className="w-full mt-1 p-3 border bg-gray-100 rounded-lg" placeholder="Administrator" />
          </div>
        </div>

        <button className="mt-5 bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          Update Profile
        </button>
      </div>

      {/* Password Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-5">Change Password</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">Current Password</label>
            <input type="password" className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" />
          </div>

          <div>
            <label className="text-sm text-gray-600">New Password</label>
            <input type="password" className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Confirm New Password</label>
            <input type="password" className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" />
          </div>
        </div>

        <button className="mt-5 bg-green-600 text-white px-5 py-2 rounded-lg shadow hover:bg-green-700 transition">
          Update Password
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-5">Notifications</h2>

        <div className="flex items-center justify-between py-3 border-b">
          <p>Email Notifications</p>
          <input type="checkbox" className="w-5 h-5" defaultChecked />
        </div>

        <div className="flex items-center justify-between py-3 border-b">
          <p>Push Notifications</p>
          <input type="checkbox" className="w-5 h-5" />
        </div>

        <div className="flex items-center justify-between py-3">
          <p>SMS Alerts</p>
          <input type="checkbox" className="w-5 h-5" defaultChecked />
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-5">Appearance</h2>

        <div className="flex items-center justify-between py-3 border-b">
          <p>Dark Mode</p>
          <input type="checkbox" className="w-5 h-5" />
        </div>

        <div className="flex items-center justify-between py-3">
          <p>3D UI Effects</p>
          <input type="checkbox" className="w-5 h-5" defaultChecked />
        </div>
      </div>

      {/* School Info */}
      <div className="bg-white p-6 rounded-xl shadow-md border hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-semibold mb-5">School / App Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="text-sm text-gray-600">School Name</label>
            <input className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="ABC School" />
          </div>

          <div>
            <label className="text-sm text-gray-600">Established</label>
            <input className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="1999" />
          </div>

          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Address</label>
            <input className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="Dhaka, Bangladesh" />
          </div>

        </div>

        <button className="mt-5 bg-orange-600 text-white px-5 py-2 rounded-lg shadow hover:bg-orange-700 transition">
          Save Information
        </button>
      </div>

    </div>
  );
};

export default Setting;
