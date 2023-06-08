import './MiniCard.css';

type Props = {
  icon: any;
  text1: string;
  text2: string | undefined;
};

const MiniCard = (props: Props) => {
  return (
    <div className="mini-card-container">
      <props.icon
        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
        aria-hidden="true"
      />
      <span>{props.text1}</span>
      {props.text2 ? <span>{props.text2}</span> : null}
    </div>
  );
};

export default MiniCard;
