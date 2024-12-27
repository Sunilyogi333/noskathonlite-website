import Link from "next/link";
//Pass link property for it to behave like a link, don't pass link if you want to handle events
export const Button = ({ value, link = "", onClick, className="bg-nosk-green text-white" }) => {
  return (
    <>
      {link !== "" ? (
        <Link href={link}>
          
            <button className={className}>
              {value}
            </button>
          
        </Link>
      ) : (
        <div onClick={onClick} role="button" tabIndex={0} className="bg-nosk-green text-white">
          {value}
        </div>
      )}
    </>
  );
};
