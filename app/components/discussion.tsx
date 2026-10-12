"use client";

import { DiscussionEmbed } from "disqus-react";

const DISQUS_SHORTNAME = "seafoodlinguine";
const SITE_URL = "https://www.seafoodlinguine.com";

type DiscussionProps = {
  slug: string;
  title: string;
};

export default function Discussion({ slug, title }: DiscussionProps) {
  return (
    <DiscussionEmbed
      shortname={DISQUS_SHORTNAME}
      config={{
        url: `${SITE_URL}/p/${slug}`,
        identifier: `entry-${slug}`,
        title,
        language: "en",
      }}
    />
  );
}
