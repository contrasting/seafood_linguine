"use client";

import { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextLink from "@/app/components/next-link";

const PAGE_SIZE = 10;

export type EntryPreview = {
  name: string;
  slug: string;
  date: string;
  rating: number;
  photo: string;
};

export default function EntryIndex({ entries }: { entries: EntryPreview[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleEntries = entries.slice(0, visibleCount);
  const hasMore = visibleCount < entries.length;

  return (
    <Stack spacing={0}>
      {visibleEntries.map((entry, index) => (
        <Box key={entry.slug}>
          <CardActionArea
            component={NextLink}
            href={`/p/${entry.slug}`}
            sx={{
              py: { xs: 3, md: 4 },
              borderRadius: 0,
              "& .entry-image": {
                transform: "scale(1)",
                transition: "transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              },
              "&:hover .entry-image": {
                transform: "scale(1.035)",
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "96px 1fr", sm: "180px 1fr auto" },
                alignItems: "center",
                gap: { xs: 2, sm: 3.5, md: 5 },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  bgcolor: "divider",
                }}
              >
                <Image
                  className="entry-image"
                  src={entry.photo}
                  alt={`Seafood linguine at ${entry.name}`}
                  fill
                  sizes="(max-width: 600px) 96px, 180px"
                  style={{ objectFit: "cover" }}
                  priority={index < 2}
                />
              </Box>

              <Stack spacing={0.75} sx={{ minWidth: 0 }}>
                <Typography variant="overline" color="text.secondary">
                  {entry.date}
                </Typography>
                <Typography
                  component="h2"
                  variant="h3"
                  sx={{ fontSize: { xs: "1.45rem", sm: "2rem", md: "2.35rem" } }}
                >
                  {entry.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ display: { xs: "block", sm: "none" } }}
                >
                  {entry.rating.toFixed(1)} / 10
                </Typography>
              </Stack>

              <Box sx={{ display: { xs: "none", sm: "block" }, textAlign: "right" }}>
                <Typography
                  component="span"
                  sx={{
                    fontSize: { sm: "2.4rem", md: "3rem" },
                    lineHeight: 1,
                  }}
                >
                  {entry.rating.toFixed(1)}
                </Typography>
                <Typography component="span" variant="caption" color="text.secondary">
                  /10
                </Typography>
              </Box>
            </Box>
          </CardActionArea>
          <Divider />
        </Box>
      ))}

      {hasMore && (
        <Box sx={{ display: "flex", justifyContent: "center", pt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Load 10 more
          </Button>
        </Box>
      )}
    </Stack>
  );
}
