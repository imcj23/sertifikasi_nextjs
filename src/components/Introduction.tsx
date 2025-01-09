import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="w-screen h-[500px] bg-slate-800 p-8">
        <div className="flex justify-between items-center">
          <div className="">
            <h2 className="text-white text-5xl font-bold">Hello Guys...</h2>
            <h2 className="text-cyan-300 text-7xl font-bold">
              Wicaksana Adi Saputro
            </h2>
            <br />
            <p className="text-white max-w-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              perferendis temporibus impedit, esse tempore incidunt suscipit
              voluptatum sapiente, in laborum culpa doloremque, vel fugiat
              possimus officia est similique id enim!
            </p>
          </div>
          <div className="relative w-96 h-96">
            <Image 
                src={"/img/wics.jpg"}
                alt="Wicaksana Adi Saputro"
                fill={true}
                priority={true}
                className="rounded-5xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
