import React from "react";

const Title = ({ title, content, center }) => {
   return (
      <div
         className={`flex flex-col ${center ? "items-center text-center" : ""}`}
      >
         <h2 className="font-sen text-xl font-bold text-txt-main">{title}</h2>
         <p className="mt-[16px] max-w-[507px] text-md text-txt-second">
            {content}
         </p>
      </div>
   );
};

export default Title;
