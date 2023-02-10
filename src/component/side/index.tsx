import Info from "./info";
import Legend from "./legend";
import Pallet from "./pallet";

export default function Side(props: any) {
  const { response, handlePageLink } = props;
  return (
    <>
      <Info />
      <Pallet response={response} handlePageLink={handlePageLink} />
      <Legend response={response} />
    </>
  );
}
