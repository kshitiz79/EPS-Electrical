import React from 'react';

const SpecificationsTable = ({ specifications }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2 text-left">Property</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Value</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Alternative Value (if any)</th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">{spec.property}</td>
              <td className="border border-gray-400 px-4 py-2">{spec.value}</td>
              {/* Render the alternative value if it exists, otherwise show N/A */}
              <td className="border border-gray-400 px-4 py-2">{spec.value_alt || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpecificationsTable;
