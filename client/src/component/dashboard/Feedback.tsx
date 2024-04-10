import ProductMessages from "./ContactProduct";


export default function Contact() {
  return (
    <div
      className="mx-auto 
          
          max-w-7xl px-2 sm:px-6 lg:px-8  rounded-lg "
    >
      <div>
        <ProductMessages numMessages={19} />
      </div>
    </div>
  );
}
