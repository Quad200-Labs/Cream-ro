"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";
import { TeamMemberType } from "@/app/utils/interfaces";
import { cn } from "@/app/lib/utils";


interface TeamMemberProps {
  member: TeamMemberType;
}

export function TeamMember({ member }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getSocialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <Github size={18} />;
      case "linkedin":
        return <Linkedin size={18} />;
      case "twitter":
        return <Twitter size={18} />;
      case "email":
        return <Mail size={18} />;
      default:
        return <ExternalLink size={18} />;
    }
  };

  return (
    <div
      className="group flex flex-col items-center text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4 overflow-hidden">
        <div
          className={cn(
            "w-40 h-40 rounded-t-full rounded-bl-full overflow-hidden relative border-4 transition-all duration-500 bg-gray-200",
            "border-transparent group-hover:border-primary/10"
          )}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
        </div>

        {member.socialLinks && member.socialLinks.length > 0 && (
          <div
            className={cn(
              "absolute -bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-500 flex gap-2",
              isHovered ? "opacity-100 bottom-0" : "opacity-0"
            )}
          >
            <div className="flex items-center justify-center gap-2 py-1 px-3 bg-background/80 backdrop-blur-sm rounded-full">
              {member.socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors p-1.5 rounded-full hover:bg-foreground/10"
                  aria-label={`${member.name}'s ${social.type}`}
                >
                  {getSocialIcon(social.type)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <h3 className="font-bold text-xl mb-1 transition-colors group-hover:text-primary">
        {member.name}
      </h3>
      <p className="text-muted-foreground">{member.role}</p>

      {member.bio && (
        <p
          className={cn(
            "text-sm text-muted-foreground/80 mt-2 max-w-[250px] transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0 max-h-0"
          )}
        >
          {member.bio}
        </p>
      )}
    </div>
  );
}
