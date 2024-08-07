import React from "react";
import clsx from 'clsx'

const TextBox = React.forwardRef(
  ({ type, placeholder, label, className, register, step }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && <label className="text-slate-800">{label}</label>}
        <div>
          <input
            type={type}
            placeholder={placeholder}
            ref={ref}
            step = {step}
            {...register}
            className={clsx(
              "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
              className
            )}
          />
        </div>
      </div>
    );
  }
);

export default TextBox;
