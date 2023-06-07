import React from "react";
import {
  Banner,
  HomeCourse,
  HowMyCourseWork,
  Review,
} from "../../../components/Web";

export function Home() {
  return (
    <div>
      <Banner />
      <HomeCourse />
      <HowMyCourseWork />
      <Review />
    </div>
  );
}
