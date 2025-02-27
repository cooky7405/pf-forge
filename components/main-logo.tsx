import HomeIcon from "../public/images/logo.svg";

export default function mainLogo() {
  return (
    <div
      className=" scale-50 origin-left px-2"
      style={
        {
          "--primary-color": "#FFFFFF",
          "--secondary-color": "#E6E6E5",
        } as React.CSSProperties
      }
    >
      <HomeIcon className="fill-current" />
    </div>
  );
}
