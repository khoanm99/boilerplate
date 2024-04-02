"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";

const XSSTemplate = () => {
  const [value, setValue] = useState<string>();
  const { register, handleSubmit } = useForm();
  const params = useSearchParams();
  const onSubmit = (data: any) => {
    setValue(`${data.input}`);
  };

  // console.log(params.get('get'))

  return (
    <div className="w-full min-h-screen bg-slate-200 flex flex-col items-center text-black">
      <div className="max-w-[800px] mx-auto flex-auto w-full flex flex-col gap-5 justify-center">
        <p>{"<script>console.log('log')</script>"}</p>
        <p>{"<style>p {background-color: #F7F3F3 !important}</script>"}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="flex gap-5">
              <input
                id="input"
                {...register("input", {
                  required: true,
                })}
                className="border border-black min-w-[300px]"
              />

              <button className="border border-black px-5 py-1.5 flex justify-center items-center">
                Submit
              </button>
            </div>
          </div>
        </form>

        <Suspense>
          <div className="">
            {params.get("get") && params.get("get")?.includes("<script>") && (
              <>
                <p className="text-xl">XXS Attack</p>
                <p className="text-xl">
                  {" "}
                  You was inject a script to url check the console
                </p>
              </>
            )}
            {params.get("get") && (
              <div
                id="userInput"
                dangerouslySetInnerHTML={{ __html: params.get("get") || "" }}
              />
            )}
            {value && (
              <div>
                Your message is:{" "}
                <span dangerouslySetInnerHTML={{ __html: value }} />
              </div>
            )}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default XSSTemplate;
