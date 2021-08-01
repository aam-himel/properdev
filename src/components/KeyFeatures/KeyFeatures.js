import React from "react";
import {
  ChartPieIcon,
  ClipboardListIcon,
  FireIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const KeyFeatures = () => {
  return (
    <section className="w-full py-20 px-10 bg-blue-100 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-content-end">
        {/* left Section */}
        <div className="">
          <h1 className="text-5xl font-extrabold pr-10 mb-10">
            A better way to track your progress.
          </h1>
        </div>

        {/* Right Feature section */}
        <div className="flex flex-col justify-start space-y-10 text-lg font-semibold text-gray-700">
          {/* feature items 1*/}
          <div className="flex">
            <div className="h-12 w-12 bg-indigo-500 rounded">
              <ChartPieIcon className="p-2 text-white" />
            </div>
            <div className=" pl-4">
              <h3 className="font-bold pb-3">Track your progress daily</h3>
              <p className="w-96">
                We have a visual represntation of your progress. We will try to
                make productive everyday!
              </p>
            </div>
          </div>
          {/* feature items 2*/}
          <div className="flex">
            <div className="h-12 w-12 bg-indigo-500 rounded">
              <ClipboardListIcon className="p-2 text-white" />
            </div>
            <div className=" pl-4">
              <h3 className="font-bold pb-3">Track your progress daily</h3>
              <p className="w-96">
                We have a visual represntation of your progress. We will try to
                make productive everyday!
              </p>
            </div>
          </div>
          {/* feature items 3*/}
          <div className="flex">
            <div className="h-12 w-12 bg-indigo-500 rounded">
              <FireIcon className="p-2 text-white" />
            </div>
            <div className=" pl-4">
              <h3 className="font-bold pb-3">Track your progress daily</h3>
              <p className=" w-96 ">
                We have a visual represntation of your progress. We will try to
                make productive everyday!
              </p>
            </div>
          </div>
          {/* feature items 4*/}
          <div className="flex">
            <div className="h-12 w-12 bg-indigo-500 rounded">
              <LightningBoltIcon className="p-2 text-white" />
            </div>
            <div className=" pl-4">
              <h3 className="font-bold pb-3">Track your progress daily</h3>
              <p className=" w-96 ">
                We have a visual represntation of your progress. We will try to
                make productive everyday!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
