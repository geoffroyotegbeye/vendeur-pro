import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  // const [userInterviews, allInterview] = await Promise.all([
    // getInterviewsByUserId(user?.id!),
    // getLatestInterviews({ userId: user?.id! }),
  // ]);

  // const hasPastInterviews = userInterviews?.length! > 0;
  // const hasUpcomingInterviews = allInterview?.length! > 0;
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2> Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg leading-7">Practice on real interview questions and get Feedback</p>
          <Button asChild className="btn-primary max-sm:w-full" >
            <Link href="/interview">Commencer</Link>
          </Button>
        </div>
        <img src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {
            dummyInterviews.map((interview) => (
              <InterviewCard { ...interview}/>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <p>There are no interviws available at the moment. Schedule an interview to get started!</p>

      </section>
    </>
  )

}

export default HomePage
