import Icon from "./Icon";

function Content() {
  return (
    <div className=" content-wrapper pl-1 flex flex-col gap-6">
      <h1 className="font-custom-roboto font-custom-bold text-4xl @6xl:text-custom-xl text-custom-dark-slate-grey">
        Stay updated!
      </h1>
      <div className="text-base @4xl:text-sm ">
        <p className=" mb-8  @4xl:mb-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul className=" flex flex-col gap-4  @4xl:gap-2 @4xl:text-sm">
          <div className="flex gap-2">
            <Icon />
            <li>Product discovery and building what matters</li>
          </div>
          <div className="flex gap-2">
            <Icon />
            <li>Measuring to ensure updates are a success</li>
          </div>
          <div className="flex gap-2">
            <Icon />
            <li>And much more!</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Content;
