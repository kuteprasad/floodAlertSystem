const Sidebar = () => {
    return (
      <aside className="bg-gray-800 text-white w-64 p-4">
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul>
          <li className="py-2"><a href="#">Flood Prediction</a></li>
          <li className="py-2"><a href="#">Historical Data</a></li>
          <li className="py-2"><a href="#">Settings</a></li>
        </ul>
      </aside>
    );
  };
  
  export default Sidebar;
  