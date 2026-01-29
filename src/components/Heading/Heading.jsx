import React from "react";

const Heading = (props) => {
  return (
      <div className="w-fit mx-auto text-center">
        <h2 className="text-zinc-800 md:text-5xl text-3xl font-bold">
          <span className="text-green-500">{props.highlight}</span>{props.heading} 
        </h2>

        {/* Green Line */}
        <div className="w-24 h-1 bg-green-500 mt-6 mx-auto"></div>
      </div>
  );
};

export default Heading;
