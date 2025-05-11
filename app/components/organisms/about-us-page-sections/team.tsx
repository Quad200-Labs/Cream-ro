"use client";

import { teamMembers } from "@/app/constants";
import { cn } from "@/app/utils/interfaces";
import { useEffect, useState } from "react";
import { TeamMember } from "../../molecules/team-members";


export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#fffaf0] w-full overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div
          className={cn(
            "space-y-4 text-center transition-all duration-700 transform",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h2 className="text-4xl text-black md:text-5xl font-bold tracking-tight qurova-font">
            Meet our members
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            From classic favorites to exciting new blends, explore our range of
            delicious flavors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-16 text-black">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={cn(
                "transition-all duration-700 transform",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              )}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <TeamMember member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
