import Info from "./info";
import Legend from "./legend";
import Pallet from "./pallet";

interface sideProp {
  response: any[];
  handlePageLink: (e: any) => void;
}

export default function Side(props: sideProp) {
  const { response, handlePageLink } = props;
  return (
    <>
      <Info />
      <Pallet response={response} handlePageLink={handlePageLink} />
      <Legend response={response} />
    </>
  );
}
