import { VStack } from "@/components/VStack";
import { HStack } from "./HStack";
import Link from "next/link";
import { Badge } from "./ui/Badge";
import { Topic, topicDisplayName, topicLink } from "@/lib/topic";

interface ExperienceRowProps {
  jobTitle: string;
  employer: string;
  period: string;
  description: string;
  employerHref: string;
  postSlug: string;
  topics: Topic[];
}

export const ExperienceRow = (props: ExperienceRowProps) => {
  const {
    jobTitle,
    employer,
    period,
    description,
    employerHref,
    postSlug,
    topics,
  } = props;

  return (
    <VStack className="space-y-1">
      <div>
        <Link
          className="font-bold text-lg hover:text-foreground text-foreground/80"
          href={`/blog/${postSlug}`}
        >
          {jobTitle}
        </Link>
      </div>
      <div className="text-neutral-500">{description}</div>
      <HStack className="flex-wrap gap-1">
        {topics.map((topic) => (
          <Link key={topic} href={topicLink(topic)} target="_blank">
            <Badge
              className="text-foreground/80 hover:text-foreground cursor-pointer"
              variant="secondary"
            >
              {topicDisplayName(topic)}
            </Badge>
          </Link>
        ))}
      </HStack>
      <HStack className="space-x-2">
        <Link
          className="text-sm hover:text-foreground/80 text-foreground/60 font-medium hover:underline"
          href={employerHref}
          target="_blank"
        >
          @{employer}
        </Link>
        <div className="text-sm text-neutral-500">{period}</div>
      </HStack>
    </VStack>
  );
};
