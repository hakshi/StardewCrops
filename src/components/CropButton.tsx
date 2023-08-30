// Takes in children, which is mapped in the Calculator component
// to be the names of every crop in Stardew.
interface Props {
  children: string;
  url: string;
}

const CropButton = ({ children, url }: Props) => {
  let redirect = () => window.open(url);
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => redirect()}
    >
      {children}
    </button>
  );
};

export default CropButton;
