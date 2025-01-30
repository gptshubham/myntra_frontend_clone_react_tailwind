import React from 'react';

function Card() {
  return (
    <div className="border-[2px] border-solid border-gray-200 rounded-[10px] p-[5px]">
      <img
        src="https://images.unsplash.com/photo-1627933540891-1fb6a397c89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzJTIwdHNoaXJ0fGVufDB8fDB8fHww"
        height="200px"
        width="150px"
        className="rounded-[10px]"
      />
      <div className="text-center">
        <h4 className="text-[14px] font-medium">T-Shirts</h4>
        <h4 className="text-[24px] font-bold">40-80% OFF</h4>
        <h4 className="text-[14px] font-medium">Shop Now</h4>
      </div>
    </div>
  );
}

export default Card;
