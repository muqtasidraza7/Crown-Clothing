import MainCard from "./components/MainCard";
const Page = () => {
  return (
    <>
      <div className="mt-12 px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 justify-center">
          <div className="flex justify-center ">
            <MainCard
              image="https://i.pinimg.com/736x/82/4e/42/824e42208d88510de74a65787a59627a.jpg"
              title="Men"
              link="men"
            />
          </div>
          <div className="flex justify-center">
            <MainCard
              image="https://i.pinimg.com/736x/6b/f8/fc/6bf8fcdd5d10ed5a0425f4ed61afed8c.jpg"
              title="Women"
              link="women"
            />
          </div>
          <div className="flex justify-center">
            <MainCard
              image="https://i.pinimg.com/1200x/26/5a/7a/265a7add90f5682fc56ad7ccb656fd01.jpg"
              title="Jackets"
              link="jackets"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center md:max-w-7xl md:mx-auto">
          <div className="flex justify-center">
            <MainCard
              image="https://i.pinimg.com/736x/e6/67/e1/e667e183edac043241206f9e27b11920.jpg"
              title="Sneakers"
              link="sneakers"
            />
          </div>
          <div className="flex justify-center">
            <MainCard
              image="https://i.pinimg.com/736x/c1/a8/97/c1a8978e70f8ea36015d6d88b25089f1.jpg"
              title="Hats"
              link="hats"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
