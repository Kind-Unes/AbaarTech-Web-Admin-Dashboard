// Icons (Assuming you have these SVGs or use a placeholder)
import RevenueIcon from "../assets/blue.svg"; // Replace with actual path
import SalesIcon from "../assets/green.svg"; // Replace with actual path
import ProjectsIcon from "../assets/red.svg"; // Replace with actual path
import OrdersIcon from "../assets/orange.svg"; // Replace with actual path

// New component for the top dashboard section
function TopStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* Total Revenue */}
      <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
        <img src={RevenueIcon} alt="Total Revenue" className="w-12 h-12 mb-4" />
        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium">Total Revenue</p>
          <p className="text-black text-3xl font-bold">999999$</p>
        </div>
      </div>

      {/* Total Sales */}
      <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
        <img src={SalesIcon} alt="Total Sales" className="w-12 h-12 mb-4" />
        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium">Total Sales</p>
          <p className="text-black text-3xl font-bold">40000</p>
        </div>
      </div>

      {/* Number of Projects */}
      <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
        <img
          src={ProjectsIcon}
          alt="Number of Projects"
          className="w-12 h-12 mb-4"
        />
        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium">
            Number of Projects
          </p>
          <p className="text-black text-3xl font-bold">247</p>
        </div>
      </div>

      {/* Number of Orders */}
      <div className="bg-white p-6 shadow rounded-lg flex flex-col items-center">
        <img
          src={OrdersIcon}
          alt="Number of Orders"
          className="w-12 h-12 mb-4"
        />
        <div className="text-center">
          <p className="text-gray-600 text-sm font-medium">Number of Orders</p>
          <p className="text-black text-3xl font-bold">45000</p>
        </div>
      </div>
    </div>
  );
}

export default TopStats;
