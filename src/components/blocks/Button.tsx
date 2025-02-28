interface ButtonProps {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  bgColor = "black",
  textColor = "white",
}) => {
  return (
    <a
      href={href}
      className={`mb:w-[240px] max-w-[200px] py-4 px-4 ${bgColor} hover:opacity-90 ${textColor} z-10 font-bold text-center block sm:ml-0 mx-auto`}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <p className="inline sm:text-24 uppercase">{text}</p>
    </a>
  );
};

export default Button;
