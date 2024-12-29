import Link from "next/link";
//Pass link property for it to behave like a link, don't pass link if you want to handle events

export const Button = ({
  value,
  link = "",
  onClick,
  className = "bg-nosk-green text-white",
}) => {
  return (
    <div className="button-container relative flex items-center justify-center">
      <div className="wire-container absolute inset-0 flex items-center justify-between pointer-events-none">

        <img
          src="/assets/svg/Wire2.svg"
          alt="Wire Left"
          className="h-12 -translate-x-[70px]"
        />
        
        <img
          src="/assets/svg/Wire2.svg"
          alt="Wire Right"
          className="h-12 translate-x-[70px] scale-x-[-1]"
        />
      </div>


      {link !== "" ? (
        <Link href={link} target="_blank">
          <button className={`px-6 py-2 rounded ${className}`}>{value}</button>
        </Link>
      ) : (
        <div
          onClick={onClick}
          role="button"
          tabIndex={0}
          className={`px-6 py-2 rounded cursor-pointer ${className}`}
        >
          {value}
        </div>
      )}
    </div>
  );
};

export default Button;
